const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const pool = require('./db');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middlewares/auth');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ROUTE: Đăng ký
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;

  console.log('===> REGISTER attempt:', username);

  try {
    // Kiểm tra trùng tên tài khoản
    const existing = await pool.query('SELECT * FROM users WHERE users = $1', [username]);
    if (existing.rows.length > 0) {
      console.log('===> REGISTER failed: username exists');
      return res.status(409).json({ message: 'Tài khoản đã tồn tại' });
    }

    // Mã hóa mật khẩu
    const hashed = await bcrypt.hash(password, 10);

    // Tạo người dùng mới
    await pool.query(
      'INSERT INTO users (users, password, email) VALUES ($1, $2, $3)',
      [username, hashed, `${username}@example.com`]
    );

    console.log('===> REGISTER success');
    res.status(201).json({ message: 'Đăng ký thành công' });
  } catch (e) {
    console.error('===> REGISTER ERROR:', e);
    res.status(500).json({ message: 'Lỗi server' });
  }
});

// ROUTE: Đăng nhập
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('===> LOGIN attempt:', username);

  try {
    const result = await pool.query('SELECT * FROM users WHERE users = $1', [username]);

    if (result.rows.length === 0) {
      console.log('===> LOGIN failed: User not found');
      return res.status(401).json({ message: 'Sai tên tài khoản hoặc mật khẩu' });
    }

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      console.log('===> LOGIN failed: Wrong password');
      return res.status(401).json({ message: 'Sai tên tài khoản hoặc mật khẩu' });
    }

    const token = jwt.sign(
      { username: user.users, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    console.log('===> LOGIN success: Token generated');
    res.status(200).json({
      message: 'Đăng nhập thành công',
      token,
    });
  } catch (e) {
    console.error('===> LOGIN ERROR:', e);
    res.status(500).json({ message: 'Lỗi server' });
  }
});

// ROUTE: API bảo vệ
app.get('/api/protected', authenticateToken, (req, res) => {
  console.log('===> PROTECTED access by:', req.user.username);
  res.json({ message: `Xin chào ${req.user.username}! Đây là route bảo vệ.` });
});

// ROUTE: Lấy danh sách người dùng
app.get('/api/users', authenticateToken, async (req, res) => {
  console.log('===> GET users');
  try {
    const result = await pool.query(`
      SELECT id, users AS username, email, created_at
      FROM users
      ORDER BY id
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('===> GET USERS ERROR:', err);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách người dùng' });
  }
});

// ROUTE: Xoá người dùng
app.delete('/api/users/:id', authenticateToken, async (req, res) => {
  const userId = req.params.id;
  console.log(`===> DELETE user id=${userId}`);

  try {
    await pool.query('DELETE FROM users WHERE id = $1', [userId]);
    res.status(200).json({ message: 'Xoá người dùng thành công' });
  } catch (err) {
    console.error('===> DELETE USER ERROR:', err);
    res.status(500).json({ message: 'Lỗi khi xoá người dùng' });
  }
});

// ROUTE: Nhận thông tin liên hệ
app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, message } = req.body;

  console.log('===> CONTACT form submit:', fullName, email);

  if (!fullName || !email || !phone || !message) {
    console.log('===> CONTACT failed: Missing fields');
    return res.status(400).json({ message: 'Thiếu thông tin liên hệ' });
  }

  try {
    await pool.query(
      `INSERT INTO contacts (full_name, email, phone, message) VALUES ($1, $2, $3, $4)`,
      [fullName, email, phone, message]
    );
    console.log('===> CONTACT success');
    res.status(201).json({ message: 'Đã lưu liên hệ thành công' });
  } catch (err) {
    console.error('===> CONTACT ERROR:', err);
    res.status(500).json({ message: 'Lỗi khi lưu thông tin liên hệ' });
  }
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại cổng ${PORT}`);
});

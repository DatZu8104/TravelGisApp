app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  console.log("========== LOGIN ATTEMPT ==========");
  console.log("Username:", username);
  console.log("Password:", password ? "******" : "(no password)");

  try {
    const result = await pool.query('SELECT * FROM users WHERE users = $1', [username]);
    console.log("DB result:", result.rows);

    if (result.rows.length === 0) {
      console.log("Login failed: User not found");
      return res.status(401).json({ message: 'Sai tên tài khoản hoặc mật khẩu' });
    }

    const user = result.rows[0];
    console.log("User.password (from DB):", user.password);

    const valid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", valid);

    if (!valid) {
      console.log("Login failed: Wrong password");
      return res.status(401).json({ message: 'Sai tên tài khoản hoặc mật khẩu' });
    }

    console.log("Generating JWT...");
    console.log("JWT_SECRET:", process.env.JWT_SECRET ? "FOUND" : "NOT FOUND");

    const token = jwt.sign(
      { username: user.users, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    console.log("Login success → Token generated");

    res.status(200).json({
      message: 'Đăng nhập thành công',
      token,
    });
  } catch (e) {
    console.error("========== LOGIN ERROR ==========");
    console.error(e);
    res.status(500).json({ message: 'Lỗi server' });
  }
});

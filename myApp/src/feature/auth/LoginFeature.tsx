// src/feature/auth/LoginFeature.tsx
type LoginProps = {
  username: string;
  password: string;
  history: any;
};

export const handleLogin = async ({ username, password, history }: LoginProps) => {
  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert('Đăng nhập thành công');
      history.push('/homemain');
    } else {
      alert(data.message || 'Sai tài khoản hoặc mật khẩu');
    }
  } catch (error) {
    alert('Lỗi kết nối server');
  }
};
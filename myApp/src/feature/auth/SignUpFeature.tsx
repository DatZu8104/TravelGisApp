// src/feature/auth/SignUpFeature.tsx
type SignUpProps = {
    username: string;
    password: string;
    history: any;
  };
  
  export const handleRegister = async ({ username, password, history }: SignUpProps) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert('Đăng ký thành công!');
        history.push('/login');
      } else {
        alert(data.message || 'Lỗi đăng ký');
      }
    } catch (error) {
      alert('Lỗi kết nối server');
    }
  };
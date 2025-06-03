const TOKEN_KEY = 'token';

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const logout = () => {
  localStorage.removeItem('token');
  // Nếu bạn dùng refresh token thì xoá cả nó
};


// ✅ Kiểm tra token JWT có hết hạn chưa
export const isTokenExpired = (token: string): boolean => {
  try {
    const payloadBase64 = token.split('.')[1];
    const payload = JSON.parse(atob(payloadBase64)); // giải mã base64
    const now = Math.floor(Date.now() / 1000); // thời gian hiện tại tính bằng giây
    return payload.exp < now;
  } catch (error) {
    console.error('Token không hợp lệ:', error);
    return true; // Nếu token lỗi thì coi như đã hết hạn
  }
};

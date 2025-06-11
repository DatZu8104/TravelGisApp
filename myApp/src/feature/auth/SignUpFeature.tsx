export const BASE_URL = "https://travelgisapp-production.up.railway.app";

export const handleRegister = async ({ username, password, history }: any) => {
  try {
    const res = await fetch(`${BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Đăng ký thất bại");
      return;
    }

    alert("Đăng ký thành công!");
    history.push("/login");
  } catch (err) {
    console.error(err);
    alert("Lỗi kết nối server");
  }
};

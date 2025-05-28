import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/globals/header";
import { saveToken } from "../../utils/auth";
import "../../css/Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Đăng nhập thất bại");
        return;
      }

      saveToken(data.token);
      history.push("/homemain");
    } catch (err) {
      console.error(err);
      setError("Lỗi kết nối máy chủ");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-wrapper">
        <div className="login-box">
          <h2>LOGIN</h2>

          <form onSubmit={handleLogin}>
            <label htmlFor="username">Email/Phone Number</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ex: 03923434567 or NguyenVanA@gmail.com"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            />

            {error && <p className="error-msg">{error}</p>}

            <button type="submit" className="sign-in-btn">
              SIGN IN
            </button>
          </form>

          <div className="divider">OR</div>

          <div className="social-buttons">
            <button className="google-btn">
              <img className="img" src="src/img/ic_google.png" alt="Google" />
              Google
            </button>

            <button className="facebook-btn">
              <img className="img" src="src/img/ic_face.png" alt="Facebook" />
              Facebook
            </button>
          </div>

          <div className="login-footer">
            <p>
              <span
                className="signup-link"
                onClick={() => history.push("/ForgotPassword")}
                style={{
                  cursor: "pointer",
                  color: "#fbc400",
                  textDecoration: "underline",
                }}
              >
                Forgot Password
              </span>
            </p>
            <p>
              <span
                className="signup-link"
                style={{
                  cursor: "pointer",
                  color: "#0f3560",
                  marginRight: "10px",
                }}
              >
                Don’t have an account?
              </span>
              <span
                className="signup-link"
                onClick={() => history.push("/signup")}
                style={{
                  cursor: "pointer",
                  color: "#fbc400",
                }}
              >
                SIGN UP
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

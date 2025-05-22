import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { handleLogin } from "../../feature/auth/LoginFeature";
import React, { useState } from "react";
import Header from "../../components/globals/header";
import "../../css/Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    handleLogin({ username, password, history });
  };

  const handleBackHome = () => {
    history.push("/homepage");
  };

  return (
    <div>
      <Header />

      <div className="login-wrapper">
        <div className="login-box">
          <h2>LOGIN</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Email/SĐT</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ex: 03923434567 or NguyenVanA@gmail.com"
            />

            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            {error && <p className="error-msg">{error}</p>}

            <button type="submit" className="sign-in-btn">
              SIGN IN
            </button>
          </form>

          <div className="divider">OR</div>

          <button className="google-btn">
            <img className="img" src="src/img/ic_google.png" alt="Google" />
            Sign in with Google
          </button>

          <button className="facebook-btn">
            <img className="img" src="src/img/ic_face.png" alt="Facebook" />
            Facebook
          </button>

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
              Don't have an account?{" "}
              <span
                className="signup-link"
                onClick={() => history.push("/signup")}
                style={{
                  cursor: "pointer",
                  color: "#fbc400",
                  textDecoration: "underline",
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

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
import { handleRegister } from "../../feature/auth/SignUpFeature";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/globals/header";
import "../../css/Signup.css";

const SignUp: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Vui lòng nhập tài khoản và mật khẩu!");
      return;
    }

    handleRegister({ username, password, history });
  };

  const handleBackHome = () => {
    history.push("/homepage");
  };

  return (
    <div>
      <Header />
      <div className="signup-wrapper">
        <div className="signup-box">
          <h2>SIGN UP </h2>

          <form onSubmit={onRegister}>
            <label htmlFor="username">User</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="email">Email/Phone Number</label>
            <input
              type="text"
              id="email"
              placeholder="Ex: 03923434567 or NguyenVanA@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="divider"></div>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit" className="sign-up-btn">
              SIGN UP
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;

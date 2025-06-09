import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonToast,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { handleRegister } from "../../feature/auth/SignUpFeature";
import "./Signup.css";

const SignUp: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.");
      return;
    }

    handleRegister({ username, password, history });
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="signup-wrapper">
          <div className="signup-box">
            <h2>SIGN UP</h2>

            <form onSubmit={onRegister}>
              <IonItem>
                <IonLabel position="stacked">Tên người dùng</IonLabel>
                <IonInput
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                  placeholder="Nhập tên người dùng"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  placeholder="example@gmail.com"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Mật khẩu</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  placeholder="Nhập mật khẩu"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Xác nhận mật khẩu</IonLabel>
                <IonInput
                  type="password"
                  value={confirmPassword}
                  onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                  placeholder="Nhập lại mật khẩu"
                />
              </IonItem>

              <IonButton expand="block" type="submit" className="signup-btn">
                Đăng ký
              </IonButton>

              <div className="signup-divider">HOẶC</div>

              <IonButton expand="block" className="social-button google-btn">
                <img src="src/img/ic_google.png" alt="Google" className="img" />
                Google
              </IonButton>

              <IonButton expand="block" className="social-button facebook-btn">
                <img src="src/img/ic_face.png" alt="Facebook" className="img" />
                Facebook
              </IonButton>

              <div className="signup-footer">
                <p>
                  Đã có tài khoản?{" "}
                  <span
                    className="login-link"
                    onClick={() => history.push("/login")}
                  >
                    Đăng nhập
                  </span>
                </p>
                <p>
                <span
                  className="signup-link"
                  onClick={() => history.push("/home")}
                >
                  Quay về trang chủ
                </span>
              </p>
              </div>
            </form>
          </div>
        </div>
        <IonToast
          isOpen={!!error}
          message={error || ""}
          duration={2000}
          onDidDismiss={() => setError(null)}
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

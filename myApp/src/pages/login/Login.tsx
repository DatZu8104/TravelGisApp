import {
  IonPage,
  IonHeader,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonToast,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import { saveToken } from "../../utils/auth";
import "./Login.css";

export const BASE_URL = "https://travelgisapp-production.up.railway.app";

const Login: React.FC = () => {
  const history = useHistory();

  const usernameRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const username = usernameRef.current?.value?.toString().trim() || "";
    const password = passwordRef.current?.value?.toString().trim() || "";

    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      console.log("Status:", res.status);
      console.log("Data:", data);

      if (!res.ok) {
        setError(data.message || "Đăng nhập thất bại");
        return;
      }

      saveToken(data.token);
      alert("Đăng nhập thành công");
      history.push("/homemain");
    } catch (err) {
      console.error("Login error:", err);
      setError("Lỗi kết nối máy chủ");
    }
  };

  return (
    <IonPage>
      <IonHeader></IonHeader>

      <IonContent className="ion-padding">
        <div className="login-wrapper">
          <div className="login-box">
            <h2>LOGIN</h2>

            {/* ✅ Form để hỗ trợ Enter */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <IonItem>
                <IonLabel position="stacked">Tên người dùng</IonLabel>
                <IonInput
                  ref={usernameRef}
                  placeholder="Nhập tên người dùng"
                />
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Mật khẩu</IonLabel>
                <IonInput
                  ref={passwordRef}
                  type="password"
                  placeholder="Nhập mật khẩu"
                />
              </IonItem>

              <IonButton
                expand="block"
                type="submit"
                className="sign-in-btn"
              >
                Đăng nhập
              </IonButton>
            </form>

            <div className="divider">HOẶC</div>

            <IonButton expand="block" className="google-btn">
              Google
            </IonButton>

            <IonButton expand="block" className="facebook-btn">
              Facebook
            </IonButton>

            <div className="login-footer">
              <p>
                <span
                  className="signup-link"
                  onClick={() => history.push("/login")}
                >
                  Quên mật khẩu?
                </span>
              </p>
              <p>
                Chưa có tài khoản?{" "}
                <span
                  className="signup-link"
                  onClick={() => history.push("/signup")}
                >
                  Đăng ký
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

export default Login;

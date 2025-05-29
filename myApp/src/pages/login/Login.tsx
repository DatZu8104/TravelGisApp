import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonToast,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { saveToken } from "../../utils/auth";
import "./Login.css";

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Đăng nhập</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="login-wrapper">
          <div className="login-box">
            <h2>LOGIN</h2>

            <IonItem>
              <IonLabel position="stacked">Email/SĐT</IonLabel>
              <IonInput
                value={username}
                onIonChange={(e) => setUsername(e.detail.value!)}
                placeholder="Ex: 03923434567 or NguyenVanA@gmail.com"
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

            <IonButton expand="block" onClick={handleLogin}>
              Đăng nhập
            </IonButton>

            <div className="divider">HOẶC</div>

            <IonButton expand="block" color="light">
              <img
                className="img"
                src="src/img/ic_google.png"
                alt="Google"
                style={{ height: "20px", marginRight: "10px" }}
              />
              Google
            </IonButton>

            <IonButton expand="block" color="primary">
              <img
                className="img"
                src="src/img/ic_face.png"
                alt="Facebook"
                style={{ height: "20px", marginRight: "10px" }}
              />
              Facebook
            </IonButton>

            <div className="login-footer" style={{ marginTop: "16px" }}>
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
                  Quên mật khẩu?
                </span>
              </p>
              <p>
                Chưa có tài khoản?{" "}
                <span
                  className="signup-link"
                  onClick={() => history.push("/signup")}
                  style={{
                    cursor: "pointer",
                    color: "#fbc400",
                    textDecoration: "underline",
                  }}
                >
                  Đăng ký
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
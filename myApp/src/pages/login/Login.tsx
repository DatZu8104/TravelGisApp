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
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleLogin } from "../../feature/auth/LoginFeature";

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    handleLogin({ username, password, history });
  };

  const handleBackHome = () => {
    history.push("/homepage");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-text-center">
        <h1>TRANG ĐĂNG NHẬP</h1>

        <IonItem className="user-name">
          <IonLabel className="user-name-label" position="floating">
            Tài khoản
          </IonLabel>
          <IonInput
            className="user-name-input"
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            placeholder="Nhập tài khoản"
          />
        </IonItem>

        <IonItem>
          <IonLabel className="user-password-label" position="floating">
            Mật khẩu
          </IonLabel>
          <IonInput
            className="user-password-input"
            type="password"
            value={password}
            onIonChange={(e) => setPassword(e.detail.value!)}
            placeholder="Nhập mật khẩu"
          />
        </IonItem>

        <IonButton
          expand="block"
          className="ion-margin-top"
          onClick={handleSubmit}
        >
          Đăng nhập
        </IonButton>

        <IonButton
          expand="block"
          fill="outline"
          className="ion-margin-top"
          onClick={handleBackHome}
        >
          Quay về Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;

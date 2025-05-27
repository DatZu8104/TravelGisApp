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
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveToken } from "../../utils/auth"; 

const Login: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Đăng nhập thất bại');
        return;
      }

      saveToken(data.token); // ✅ Lưu token sau khi đăng nhập
      history.push('/homemain'); // ✅ Điều hướng tới trang được bảo vệ
    } catch (err) {
      console.error(err);
      setError('Lỗi kết nối máy chủ');
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
        <IonItem>
          <IonLabel position="stacked">Tên đăng nhập</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            placeholder="Nhập tên đăng nhập"
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

        <IonToast
          isOpen={!!error}
          message={error || ''}
          duration={2000}
          onDidDismiss={() => setError(null)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;

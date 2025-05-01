import '../../css/Login.scss';

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const SignUp: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Đăng ký thành công!');
        history.push('/login');
      } else {
        alert(data.message || 'Lỗi đăng ký');
      }
    } catch (error) {
      alert('Lỗi kết nối server');
    }

  };
  
  const handleBackHome = () => {
    history.push('/homepage');
  };
  const handleLogin = () => {
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Đăng ký</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Tài khoản</IonLabel>
          <IonInput value={username} onIonChange={(e) => setUsername(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Mật khẩu</IonLabel>
          <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        </IonItem>
        <IonButton expand="block" onClick={handleRegister}>Đăng ký</IonButton>
        <IonButton expand="block" fill="outline" className="ion-margin-top" onClick={handleBackHome}>
          Quay về Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

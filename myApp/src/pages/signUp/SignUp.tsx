import {
  IonPage, IonContent, IonHeader, IonToolbar, IonTitle,
  IonButton, IonInput, IonItem, IonLabel
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { handleRegister } from '../../feature/auth/SignUpFeature'; 

const SignUp: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    handleRegister({ username, password, history });
  };

  const handleBackHome = () => {
    history.push('/homepage');
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
        <IonButton expand="block" onClick={onRegister}>Đăng ký</IonButton>
        <IonButton expand="block" fill="outline" className="ion-margin-top" onClick={handleBackHome}>
          Quay về Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

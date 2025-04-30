import '../../css/Login.scss';

import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();

  // Tạo state để lưu giá trị nhập
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // kiểm tra tài khoản 
    console.log('Username:', username);
    console.log('Password:', password);

    if (username === 'admin' && password === '1234') {
      history.push('/homemain');
      alert("Đăng nhập thành công")
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  };

  const handleBackHome = () => {
    history.push('/home');
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

        {/* Ô nhập tài khoản */}
        <IonItem className="user-name">
          <IonLabel className="user-name-label" position="floating">Tài khoản</IonLabel>
          <IonInput className="user-name-input"
            value={username}
            onIonChange={e => setUsername(e.detail.value!)}
            placeholder="Nhập tài khoản"
          />
        </IonItem>

        {/* Ô nhập mật khẩu */}
        <IonItem>
          <IonLabel className="user-password-label" position="floating">Mật khẩu</IonLabel>
          <IonInput className="user-password-input"
            type="password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            placeholder="Nhập mật khẩu"
          />
        </IonItem>

        {/* Nút Đăng nhập */}
        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Đăng nhập
        </IonButton>

        {/* Nút quay về home */}
        <IonButton expand="block" fill="outline" className="ion-margin-top" onClick={handleBackHome}>
          Quay về Home
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Login;
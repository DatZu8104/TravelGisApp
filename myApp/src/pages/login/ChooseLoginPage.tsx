import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, } from '@ionic/react';
import { saveToken } from "../../utils/auth";

const ChooseLoginPage: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">
        <h1>Hình thức đăng nhập</h1>
        <IonButton
          expand="block"
          color="medium"
          onClick={() => history.push('/login')}
        >
          Đăng nhập bằng số điện thoại/tài khoản
        </IonButton>

        <IonButton
          expand="block"
          color="medium"
          onClick={() => history.push('/login')}
        >
          Đăng nhập bằng Facebook
        </IonButton>

        <IonButton
          expand="block"
          color="medium"
          onClick={() => history.push('/homepage')}
        >
          Quay về Home
        </IonButton>

        <IonButton
          expand="block"
          color="medium"
          onClick={() => history.push('/signup')}
        >
          Đăng ký tài khoản mới
        </IonButton>
      </IonContent>
      
    </IonPage>

  );
};


export default ChooseLoginPage;
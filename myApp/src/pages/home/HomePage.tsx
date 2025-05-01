import { IonPage, IonContent, IonButton, IonButtons } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const HomePage: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonButtons slot="end">
          <IonButton
            onClick={() => {
              console.log('Bấm nút Đăng nhập'); 
              history.push('/chooseloginpage');
            }}
          >
            Đăng nhập
          </IonButton>
        </IonButtons>
      <IonContent className="ion-padding">
        Chào mừng bạn đến Home "Chưa đăng nhập"
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

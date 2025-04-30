import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons
} from '@ionic/react';
import { useHistory } from 'react-router';

const HomeHeader: React.FC = () => {
  const history = useHistory();
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home đã đăng nhập</IonTitle>
        <IonButton
          
          
          onClick={() => history.push('/home')}
        >
          Đăng xuất
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default HomeHeader;

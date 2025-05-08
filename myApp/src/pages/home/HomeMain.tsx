import { IonPage, IonContent } from '@ionic/react';
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';



const HomeMain: React.FC = () => {
  return (
    <IonPage>
      <HomeHeader />
      <IonContent className="ion-padding">
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default HomeMain;

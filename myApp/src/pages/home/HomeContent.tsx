import { IonButton, IonContent } from "@ionic/react";

const HomeContent: React.FC = () => {
  return (
    <IonContent className="ion-padding ion-text-center">
      <h1>Welcome!</h1>
      <IonButton>
        Thông tin tài khoản
      </IonButton>
      <IonButton>
        Lịch trình
      </IonButton>
      <IonButton>
        Xem bản đồ
      </IonButton>
    </IonContent>
  );
};

export default HomeContent;
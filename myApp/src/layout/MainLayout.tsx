import { IonPage, IonContent } from "@ionic/react";
import Header from "../components/Header/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <IonPage>
      <Header />
      <IonContent>{children}</IonContent>
    </IonPage>
  );
};

export default MainLayout;

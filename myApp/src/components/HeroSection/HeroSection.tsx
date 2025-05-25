import { IonText, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import './HeroSection.css';

// Đường dẫn hình ảnh từ assets
import backgroundImage from './assets/nền biển.png';
import circle1 from './assets/tròn 1.png';
import circle2 from './assets/tròn 2.png';
import circle3 from './assets/tròn 3.png';

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <IonText className="hero-title">WE NEED</IonText>
        <IonText className="hero-subtitle">Marine Vitamin</IonText>

        <IonGrid className="hero-circles">
          <IonRow className="ion-justify-content-center">
            <IonCol size="4" className="circle-img">
              <IonImg src={circle1} alt="Ảnh tròn 1" />
            </IonCol>
            <IonCol size="4" className="circle-img">
              <IonImg src={circle2} alt="Ảnh tròn 2" />
            </IonCol>
            <IonCol size="4" className="circle-img">
              <IonImg src={circle3} alt="Ảnh tròn 3" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default HeroSection;

import { IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
import './HeroSection.css';

// Đường dẫn hình ảnh từ assets
import backgroundImage from './assets/nen-bien.png';
import circle1 from './assets/tron-1.png';
import circle2 from './assets/tron-2.png';
import circle3 from './assets/tron-3.png';
import weNeedImage from './assets/we-need.png';
import marineVitaminImage from './assets/marine-vitamin.png';

// Góc sóng
import vangTrai from './assets/vang-trai.png';
import xanhTrai from './assets/xanh-trai.png';
import vangPhai from './assets/vang-phai.png';
import xanhPhai from './assets/xanh-phai.png';

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        {/* Tiêu đề */}
        <IonImg src={weNeedImage} alt="WE NEED" className="hero-title-img" />
        <IonImg
          src={marineVitaminImage}
          alt="Marine Vitamin"
          className="hero-subtitle-img"
        />

        {/* Góc sóng */}
        <div className="corner-waves">
          <img src={vangTrai} alt="Vàng trái" className="wave vang-trai" />
          <img src={xanhTrai} alt="Xanh trái" className="wave xanh-trai" />
          <img src={vangPhai} alt="Vàng phải" className="wave vang-phai" />
          <img src={xanhPhai} alt="Xanh phải" className="wave xanh-phai" />
        </div>

        {/* Hình tròn nổi có bóng */}
        <IonGrid className="hero-circles">
          <IonRow className="ion-justify-content-center ion-align-items-center">
            <IonCol size="12" size-md="4">
              <div className="circle-wrapper circle-1">
                <div className="circle-shadow"></div>
                <IonImg src={circle1} alt="Ảnh tròn 1" />
              </div>
            </IonCol>
            <IonCol size="12" size-md="4">
              <div className="circle-wrapper circle-2">
                <div className="circle-shadow"></div>
                <IonImg src={circle2} alt="Ảnh tròn 2" />
              </div>
            </IonCol>
            <IonCol size="12" size-md="4">
              <div className="circle-wrapper circle-3">
                <div className="circle-shadow"></div>
                <IonImg src={circle3} alt="Ảnh tròn 3" />
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default HeroSection;

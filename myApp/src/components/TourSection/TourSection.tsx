import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './TourSection.css';

// Hình ảnh tour
import tourImage1 from './assets/hinh-1.png';
import tourImage2 from './assets/hinh-2.png';
import tourImage3 from './assets/hinh-3.png';
import tourImage4 from './assets/hinh-4.png';

// Hình chữ dưới mỗi ảnh
import labelImage1 from './assets/chu-hinh-1.png';
import labelImage2 from './assets/chu-hinh-2.png';
import labelImage3 from './assets/chu-hinh-3.png';
import labelImage4 from './assets/chu-hinh-4.png';

// Tiêu đề & slogan
import titleImage from './assets/tour-du-lich.png';
import sloganImage from './assets/gia-re-chat-luong.png';

const tourItems = [
  { image: tourImage1, labelImage: labelImage1 },
  { image: tourImage2, labelImage: labelImage2 },
  { image: tourImage3, labelImage: labelImage3 },
  { image: tourImage4, labelImage: labelImage4 },
];

const TourSection: React.FC = () => {
  return (
    <div className="tour-section-container">
      <div className="title-block">
        <img src={titleImage} alt="Tour du lịch" className="title-image" />
        <img src={sloganImage} alt="Giá rẻ chất lượng" className="slogan-image" />
      </div>

      <div className="tour-grid-wrapper">
        <IonGrid className="custom-grid">
          <IonRow className="ion-justify-content-center ion-align-items-start main-row">
            {tourItems.map((item, index) => (
              <IonCol
                key={index}
                size="12"
                size-sm="6"
                size-md="3"
                className={`tour-item tour-item-${index + 1}`} // ✅ Class riêng cho từng Col
              >
                <div className={`tour-card card-${index + 1}`}>
                  <div className={`img-wrapper img-${index + 1}`}>
                    <img src={item.image} alt={`Tour ${index + 1}`} />
                  </div>
                  <div className={`label-wrapper label-wrapper-${index + 1}`}>
                    <img src={item.labelImage} alt={`Label ${index + 1}`} />
                  </div>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </div>
    </div>
  );
};

export default TourSection;

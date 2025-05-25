import { IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
import './HotPlaces.css';

const places = [
  '/assets/hot1.jpg',
  '/assets/hot2.jpg',
  '/assets/hot3.jpg',
  '/assets/hot4.jpg',
  '/assets/hot5.jpg',
];

const HotPlaces = () => {
  return (
    <div className="hot-places-section">
      <IonText className="hot-places-title">
        Địa Điểm Hot Nhất Trong Mùa Hè Này!
      </IonText>

      <IonGrid className="hot-places-grid">
        <IonRow className="hot-places-row" justify-content="center">
          {places.map((src, index) => (
            <IonCol size="6" size-md="2" key={index} className="hot-place-col">
              <div className="hot-place-img-wrapper">
                <img src={src} alt={`Hot Place ${index + 1}`} />
              </div>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default HotPlaces;

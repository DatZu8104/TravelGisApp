import { IonContent } from '@ionic/react';
import './CheckinGallery.css';

import checkinVungTauImg from './assets/chu-checkin-vung-tau.png';
import mangCaBienImg from './assets/chu-mang-ca-bien-va-troi.png';

import ducMeBaiDauImg from './assets/chu-hinh-1.png';
import deoNuocNgotImg from './assets/chu-hinh-2.png';
import benThuyenMarinaImg from './assets/chu-hinh-3.png';
import suoiDaVungTauImg from './assets/chu-hinh-4.png';
import doiConHeoImg from './assets/chu-hinh-5.png';

import ducMeBaiDauPhoto from './assets/hinh-1.png';
import deoNuocNgotPhoto from './assets/hinh-2.png';
import benThuyenMarinaPhoto from './assets/hinh-3.png';
import suoiDaVungTauPhoto from './assets/hinh-4.png';
import doiConHeoPhoto from './assets/hinh-5.png';
import hoMatTroiPhoto from './assets/hinh-6.png';

const tourData = [
  { image: ducMeBaiDauPhoto, label: ducMeBaiDauImg, className: 'item-0' },
  { image: deoNuocNgotPhoto, label: deoNuocNgotImg, className: 'item-1' },
  { image: hoMatTroiPhoto, label: null, className: 'tall item-2' }, // Hình 6
  { image: benThuyenMarinaPhoto, label: benThuyenMarinaImg, className: 'item-3' },
  { image: suoiDaVungTauPhoto, label: suoiDaVungTauImg, className: 'item-4' },
  { image: doiConHeoPhoto, label: doiConHeoImg, className: 'wide item-5' },
];

const CheckinGallery: React.FC = () => {
  return (
    <IonContent className="checkin-gallery">
      <div className="checkin-header">
        <img
          src={checkinVungTauImg}
          alt="Check-in Vũng Tàu"
          className="checkin-title"
        />
        <img
          src={mangCaBienImg}
          alt="Mang cả biển và trời"
          className="checkin-subtitle"
        />
      </div>

      <div className="grid-layout">
        {tourData.map((tour, index) => (
          <div className={`tour-item ${tour.className}`} key={index}>
            <img src={tour.image} alt={`Tour ${index}`} className="tour-image" />
            {tour.label && (
              <img src={tour.label} alt={`Label ${index}`} className="tour-label" />
            )}
          </div>
        ))}
      </div>
    </IonContent>
  );
};

export default CheckinGallery;

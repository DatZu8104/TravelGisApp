import React from 'react';
import { IonImg } from '@ionic/react';
import './HotSpots.css';

import chuTitle from './assets/chu-dia-diem-hot-nhat.png';
import hinh1 from './assets/hinh-1.png';
import hinh2 from './assets/hinh-2.png';
import hinh3 from './assets/hinh-3.png';
import hinh4 from './assets/hinh-4.png';
import hinh5 from './assets/hinh-5.png';

const HotSpots: React.FC = () => {
  return (
    <div className="hotspots-container">
      <IonImg src={chuTitle} alt="Tiêu đề" className="hotspots-title" />
      <div className="hotspots-gallery">
        <IonImg src={hinh1} alt="Hình 1" className="hotspots-image hinh-1" />
        <IonImg src={hinh2} alt="Hình 2" className="hotspots-image hinh-2" />
        <IonImg src={hinh3} alt="Hình 3" className="hotspots-image hinh-3" />
        <IonImg src={hinh4} alt="Hình 4" className="hotspots-image hinh-4" />
        <IonImg src={hinh5} alt="Hình 5" className="hotspots-image hinh-5" />
      </div>
    </div>
  );
};

export default HotSpots;

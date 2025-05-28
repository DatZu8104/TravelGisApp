import React from 'react';
import { IonImg } from '@ionic/react';
import './TravelTips.css';

import titleImg from './assets/nhung-dieu-can-luu-y.png';
import row1 from './assets/dong-chu-1.png';
import row2 from './assets/dong-chu-2.png';
import row3 from './assets/dong-chu-3.png';
import row4 from './assets/dong-chu-4.png';
import row5 from './assets/dong-chu-5.png';

const TravelTips: React.FC = () => {
  return (
    <div className="travel-tips-container">
      <IonImg src={titleImg} className="travel-tips-title" alt="Tiêu đề" />
      <div className="travel-tips-box">
        <IonImg src={row1} className="travel-tips-row row1" alt="Câu hỏi 1" />
        <div className="divider-line" />
        <IonImg src={row2} className="travel-tips-row row2" alt="Câu hỏi 2" />
        <div className="divider-line" />
        <IonImg src={row3} className="travel-tips-row row3" alt="Câu hỏi 3" />
        <div className="divider-line" />
        <IonImg src={row4} className="travel-tips-row row4" alt="Câu hỏi 4" />
        <div className="divider-line" />
        <IonImg src={row5} className="travel-tips-row row5" alt="Câu hỏi 5" />
      </div>
    </div>
  );
};

export default TravelTips;

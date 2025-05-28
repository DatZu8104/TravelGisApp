import React from 'react';
import './VungTauSpecialties.css';

import titleImg from './assets/chu-vung-tau.png';
import subtitleImg from './assets/chu-thien-duong-dac-san.png';
import food1 from './assets/food-1.png';
import food2 from './assets/food-2.png';
import food3 from './assets/food-3.png';
import food4 from './assets/food-4.png';

const VungTauSpecialties: React.FC = () => {
  return (
    <div className="vungtau-specialties">
      <div className="title-section">
        <img src={titleImg} alt="Vũng Tàu" className="title-img" />
        <img src={subtitleImg} alt="Thiên đường đặc sản" className="subtitle-img" />
      </div>
      <div className="food-row">
        <div className="circle-image">
          <img src={food1} alt="Food 1" />
        </div>
        <div className="circle-image">
          <img src={food2} alt="Food 2" />
        </div>
        <div className="circle-image">
          <img src={food3} alt="Food 3" />
        </div>
        <div className="circle-image">
          <img src={food4} alt="Food 4" />
        </div>
      </div>
    </div>
  );
};

export default VungTauSpecialties;

import React from 'react';
import './HeroSection.css';

import bannerImage from './assets/anh-1.png';
import belowImage from './assets/anh-2.png';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <img src={bannerImage} alt="Marine Banner" className="main-banner" />

      <div className="below-image-wrapper">
        <img src={belowImage} alt="Below Banner" className="below-image" />
      </div>
    </div>
  );
};

export default HeroSection;

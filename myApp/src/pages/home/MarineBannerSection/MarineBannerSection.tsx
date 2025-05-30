import React from 'react';
import './MarineBannerSection.css';
import backgroundImage from './assets/page.png';

const MarineBannerSection: React.FC = () => {
  return (
    <div
      className="marine-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay-text">
      </div>
      <div className="nav-menu">
        <div className="menu-item">Home</div>
        <div className="divider" />
        <div className="menu-item">Khuyến mãi</div>
        <div className="divider" />
        <div className="menu-item">Điểm đến</div>
        <div className="divider" />
        <div className="menu-item">Khách sạn</div>
        <div className="divider" />
        <div className="menu-item">Ẩm thực</div>
      </div>
    </div>
  );
};

export default MarineBannerSection;

import React from 'react';
import "./PromotionsSection.css";

import diaDiemHot from './assets/dia-diem-hot.png';
import khuyenMai from './assets/khuyen-mai.png';
import tour from './assets/tour.png';
import diemDen from './assets/diem-den.png';
import amThuc from './assets/am-thuc.png';

import bando from './assets/ban-do.png';
import cacBaiViet from './assets/cac-bai-viet.png';
import cacKhachSan from './assets/cac-khach-san.png';
import diaDiemAnUong from './assets/dia-diem-an-uong.png';

const PromotionsSection: React.FC = () => {
  return (
    <div className="marine-banner-section">
      <div className="left-banner">
        <img src={diaDiemHot} alt="Địa điểm hot" />
        <img src={khuyenMai} alt="Khuyến mãi" />
        <img src={tour} alt="Tour" />
        <img src={diemDen} alt="Điểm đến" />
        <img src={amThuc} alt="Ẩm thực" />
      </div>
      <div className="divider" />
      <div className="right-banner">
        <a
          href="https://www.google.com/travel/search?q=t%C3%AAn%20m%E1%BB%99t%20s%E1%BB%91%20kh%C3%A1ch%20s%E1%BA%A1n%20gi%C3%A1%20r%E1%BA%BB%20%E1%BB%9F%20V%C5%A9ng%20T%C3%A0u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bando} alt="Bản đồ" className="hover-map" />
        </a>
        <img src={cacBaiViet} alt="Các bài viết" />
        <img src={cacKhachSan} alt="Các khách sạn" />
        <img src={diaDiemAnUong} alt="Địa điểm ăn uống" />
      </div>
    </div>
  );
};

export default PromotionsSection;

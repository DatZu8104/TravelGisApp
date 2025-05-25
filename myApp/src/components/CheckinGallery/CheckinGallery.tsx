import { IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import './CheckinGallery.css';

import ducMeBaiDau from './assets/Đức Mẹ Bãi Dâu - Vũng Tàu.png';
import deoNuocNgot from './assets/Đeo Nước Ngọt Vũng Tàu.png';
import benThuyenMarina from './assets/Bến thuyền MARINA.png';
import suoiDa from './assets/Suối Đá Vũng Tàu.png';
import doiConHeo from './assets/Đồi con Heo.png';
import hoMatTroi from './assets/HỒ MẶT TRỜI PHÚ MỸ.png';

const CheckinGallery = () => {
  return (
    <div className="checkin-section">
      <IonText className="checkin-title">Check-in Vũng Tàu</IonText>
      <IonText className="checkin-subtitle">Mang cả biển và trời vào câu chuyện</IonText>

      <IonGrid className="checkin-grid">
        <IonRow>
          <IonCol size="6" sizeMd="3">
            <div className="checkin-card" style={{ backgroundImage: `url(${ducMeBaiDau})` }}>
              <IonText className="checkin-label">ĐỨC MẸ BÃI DÂU - VŨNG TÀU</IonText>
            </div>
          </IonCol>
          <IonCol size="6" sizeMd="3">
            <div className="checkin-card" style={{ backgroundImage: `url(${deoNuocNgot})` }}>
              <IonText className="checkin-label">ĐÈO NƯỚC NGỌT VŨNG TÀU</IonText>
            </div>
          </IonCol>
          <IonCol size="6" sizeMd="3">
            <div className="checkin-card" style={{ backgroundImage: `url(${benThuyenMarina})` }}>
              <IonText className="checkin-label">BẾN THUYỀN MARINA</IonText>
            </div>
          </IonCol>
          <IonCol size="6" sizeMd="3">
            <div className="checkin-card" style={{ backgroundImage: `url(${suoiDa})` }}>
              <IonText className="checkin-label">SUỐI ĐÁ VŨNG TÀU</IonText>
            </div>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12" sizeMd="6">
            <div className="checkin-card wide" style={{ backgroundImage: `url(${doiConHeo})` }}>
              <IonText className="checkin-label center">ĐỒI CON HEO</IonText>
            </div>
          </IonCol>
          <IonCol size="12" sizeMd="6">
            <div className="checkin-card tall" style={{ backgroundImage: `url(${hoMatTroi})` }}>
              <IonText className="checkin-label bottom">HỒ MẬT TRỜI PHÚ MỸ</IonText>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default CheckinGallery;

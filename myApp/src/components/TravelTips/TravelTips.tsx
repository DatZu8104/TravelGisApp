import { IonText, IonCard, IonCardContent } from '@ionic/react';
import './TravelNotice.css';

const TravelNotice = () => {
  const questions = [
    'Vũng Tàu có gì chơi?',
    'Ăn gì ở Vũng Tàu?',
    'Nên đi du lịch Vũng Tàu vào thời điểm nào?',
    'Đi du lịch Vũng Tàu bằng phương tiện gì?',
    'Ở Vũng Tàu mặt trời mọc lúc mấy giờ?',
  ];

  return (
    <div className="travel-notice-section">
      <IonText className="travel-notice-title">
        Những Điều Cần Lưu Ý Khi Du Lịch Vũng Tàu
      </IonText>

      <IonCard className="notice-card">
        <IonCardContent>
          {questions.map((q, idx) => (
            <div key={idx} className="notice-item">
              {q}
            </div>
          ))}
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default TravelNotice;

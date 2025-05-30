import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './home.css';
const promotionList = [
  {
    id: 1,
    title: 'Đi chơi cuối tuần',
    subtitle: 'Giảm đến 500k',
    image: '/assets/khuyenmai1.png',
    time: '8/8/2024 - 31/12/2025',
    condition: 'Không có giao dịch tối thiểu',
  },
  {
    id: 2,
    title: 'Epic Sale - Chi tiêu khủng nhận quà to',
    subtitle: '5.555 giải thưởng',
    image: '/assets/khuyenmai2.png',
    time: 'All Time',
    condition: '',
  },
  {
    id: 3,
    title: 'Bạn mới tới đâu – Deal giảm tới đỏ',
    subtitle: 'Giảm đến 15% + MUA 2 TẶNG 1',
    image: '/assets/khuyenmai3.png',
    time: 'All Time',
    condition: '',
  },
  {
    id: 4,
    title: 'Zalopay - Vi vu tháng 5, chốt deal ngay',
    subtitle: 'Ưu đãi đến 350K',
    image: '/assets/khuyenmai4.png',
    time: '9/5 - 26/5/2025',
    condition: '',
  },
];


const tourList = [
  {
    id: 1,
    title: 'Tour Vũng Tàu 2N1Đ: Hồ Tràm - Nghỉ Dưỡng Cao Cấp',
    subtitle: '2.866.000 đ',
    image: '/assets/tour1.png',
    rating: 10,
    comment: 'Tuyệt vời',
    duration: '2 ngày 1 đêm',
    reviewCount: 1,
  },
  {
    id: 2,
    title: 'Tour Vũng Tàu Trong Ngày: Khám Phá Thành Phố Biển Xinh Đẹp',
    subtitle: '990.000 đ',
    image: '/assets/tour2.png',
    rating: 10,
    comment: 'Tuyệt vời',
    duration: 'Trong ngày',
    reviewCount: 1,
  },
  {
    id: 3,
    title: 'Tour du lịch Vũng Tàu: Bạch Dinh',
    subtitle: '1.190.000 đ',
    image: '/assets/tour3.png',
    rating: 10,
    comment: 'Tuyệt vời',
    duration: '2 ngày 1 đêm, khách tham quan Bạch Dinh',
    reviewCount: 1,
  },
  {
    id: 4,
    title: 'Tour du lịch Vũng Tàu: Bình Châu',
    subtitle: 'Liên hệ giá',
    image: '/assets/tour4.png',
    rating: 10,
    comment: 'Tuyệt vời',
    duration: 'Khởi hành thứ 7, chủ nhật',
    reviewCount: 1,
  },
];


const diaDiemList = [
  {
    id: 1,
    title: 'Bãi trước Vũng Tàu',
    subtitle: 'Là khu vực lí tưởng để ngắm hoàng hôn. Cũng là bãi biển rất nhiều khách du lịch đến tắm, đi dạo,....có công viên để mọi người tụ tập vui chơi, tập thể dục,...',
    image: '/assets/bai-truoc-609ca7036edb7.png',
  },
  {
    id: 2,
    title: 'Bãi sau Vũng Tàu',
    subtitle: 'Nằm ở phía Nam của Vũng Tàu, bãi Sau có bãi cát dài phẳng và bờ biển khá đẹp. Một số resort nổi tiếng ở đây như Long Cung (bãi Thủy Tiên), Lan Rừng với khung cảnh lãng mạn...Đây là nơi đang thực hiện công trình dự án đảm bảo sẽ mang lại cho Vũng Tàu diện mạo bất ngờ.',
    image: '/assets/1661744230-justfly-bai-sau-vung-tau3.png',
  },
  {
    id: 3,
    title: 'Bãi Dâu',
    subtitle: 'Hay là Bãi biển Phương Thảo có chiều dài khoảng 3 km và nằm cách trung tâm thành phố về phía Tây Bắc. Bãi biển này có vẻ đẹp hoang sơ, kín gió với nhiều ghềnh đá kỳ thú, yên tĩnh và thu hút rất nhiều người đến tham quan.',
    image: '/assets/baidau.png',
  },
  {
    id: 4,
    title: 'Bãi Dứa',
    subtitle: 'Còn được gọi là Bãi biển Hương Phong, hoặc Bãi biển Lãng Du. Bãi Dứa nằm giữa bãi trước và bãi sau, gần mũi Nghinh Phong, nơi biển len sâu vào bờ, tạo nên những ghềnh đá vươn dài ra biển.',
    image: '/assets/baidua.png',
  },
];

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTrack = (state: boolean) => setIsPaused(state);
  return (
    <IonPage>
      {/* Custom header bar */}
      <div className="header-bar">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <div className="logo-container">
              <img src="/logo.svg" alt="Logo" className="logo" />
              <div className="header-logo">OBs</div>
          </div>
          
          
          <nav className="header-nav">
            <a href="#">Trang chủ</a>
            <a href="#">Tour</a>
            <a href="#">Khách sạn</a>
            <a href="#">Địa điểm</a>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="auth-signin">Sign in</Link>
            <Link to="/signup" className="auth-signup">Sign Up</Link>
          </div>
          <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
              <a href="#">Trang chủ</a>
              <a href="#">Tour</a>
              <a href="#">Khách sạn</a>
              <a href="#">Địa điểm</a>
          </div>
      </div>

      <IonContent fullscreen className="light-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="">
            <IonImg src="/assets/headerhome.png" />
          </div>
        </section>

        {/* Navbar second level */}
        <div className="navbar">
          <IonButton fill="clear">Home</IonButton>
          <IonButton fill="clear">Khuyến mãi</IonButton>
          <IonButton fill="clear">Điểm đến</IonButton>
          <IonButton fill="clear">Khách sạn</IonButton>
          <IonButton fill="clear">Ẩm thực</IonButton>
        </div>


        {/* Section: Địa điểm hot */}
          <section className="hot-places">
            <h2>Địa điểm hot trong tháng</h2>
            <IonGrid>
              <IonRow>
                {diaDiemList.map((place) => (
                  <IonCol size="4" key={place.id}>
                    <IonCard className="light-card">
                      <IonImg src={place.image} />
                      <IonCardHeader>
                        <IonCardTitle>{place.title}</IonCardTitle>
                        <IonCardSubtitle>{place.subtitle}</IonCardSubtitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
        </section>


        {/* Section: Khuyến mãi */}
        <section className="promotion">
          <h2 className="promo-title">KHUYẾN MÃI</h2>
          <p className="promo-subtitle-text">Những khuyến mãi hấp dẫn đến từ OBs</p>
          <div className="promo-grid">
            {promotionList.map((promo) => (
              <div className="promo-card" key={promo.id}>
                <img src={promo.image} alt={promo.title} className="promo-img" />
                <div className="promo-card-body">
                  <h3 className="promo-card-title">{promo.title}</h3>
                  <p className="promo-card-subtitle">{promo.subtitle}</p>
                  <div className="promo-info">
                    <div>
                      <p className="label">Thời gian khuyến mãi</p>
                      <p className="value">{promo.time}</p>
                    </div>
                    {promo.condition && (
                      <div>
                        <p className="label">Giao dịch tối thiểu</p>
                        <p className="value">{promo.condition}</p>
                      </div>
                    )}
                  </div>
                  <button className="promo-button">Xem Khuyến Mãi</button>
                </div>
              </div>
            ))}
          </div>

        </section>



        {/* Section: Tour du lịch */}     
        <section className="tours">
          <h2>Tour du lịch</h2>
          
            <div className="tour-grid">
              {tourList.map((tour) => (
                <div className="tour-card" key={tour.id}>
                  <img src={tour.image} alt={tour.title} />
                  <div className="tour-card-body">
                    <div className="tour-title">{tour.title}</div>
                    <div className="tour-rating">
                      <span className="score">{tour.rating}/10</span>
                      <span className="highlight">{tour.comment}</span>
                      <span>| {tour.reviewCount} lượt đánh giá</span>
                    </div>
                    <div className="tour-duration">{tour.duration}</div>
                    <div className="tour-price">{tour.subtitle}</div>
                    <div className="tour-button">Xem tour</div>
                  </div>
                </div>
              ))}
            </div>
          
        </section>



        {/* Footer */}
        <footer className="footer">
  <div>
    <strong>ShareRight</strong>
    <p>© 2014–2023 BuyLeft.<br />All Rights Reserved.</p>
  </div>
  <div>
    <h4>Quick links</h4>
    <a href="#">About</a>
    <a href="#">Items</a>
    <a href="#">FAQs</a>
    <a href="#">Blog</a>
  </div>
  <div>
    <h4>Terms of use</h4>
    <a href="#">Terms & Conditions</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Cookies Policy</a>
  </div>
  <div>
    <h4>Contact us</h4>
    <p>📞 0123 456 789</p>
    <p>✉️ enquiry@share-right.com</p>
    <h4>Follow us</h4>
    <p>🔵 Facebook | 📷 Instagram | 💼 LinkedIn</p>
  </div>
</footer>

      </IonContent>
    </IonPage>
  );
};

export default Home;

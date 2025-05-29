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
  IonCardContent,
} from '@ionic/react';

import { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTrack = (state: boolean) => setIsPaused(state);
  return (
    <IonPage>
      {/* Custom header bar */}
      <div className="header-bar">
  <div className="header-logo">OBs</div>

  <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
    ☰
  </button>

  <nav className="header-nav">
    <a href="#">Trang chủ</a>
    <a href="#">Tour</a>
    <a href="#">Khách sạn</a>
    <a href="#">Địa điểm</a>
  </nav>

  <div className="header-actions">
  <Link to="/login" className="outline button-link">Sign in</Link>
  <Link to="/signup" className="button-link">Sign Up</Link>
  </div>

  {/* Di chuyển ra khỏi .header-actions và giữ bên trong .header-bar */}
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
          <div className="hero-text">
            <h1>WE NEED</h1>
            <p>Marine Vitamin</p>
          </div>
        </section>

        {/* Navbar second level */}
        <IonGrid className="navbar">
          <IonRow>
            <IonCol><IonButton fill="clear">Home</IonButton></IonCol>
            <IonCol><IonButton fill="clear">Khuyến mãi</IonButton></IonCol>
            <IonCol><IonButton fill="clear">Điểm đến</IonButton></IonCol>
            <IonCol><IonButton fill="clear">Khách sạn</IonButton></IonCol>
            <IonCol><IonButton fill="clear">Ẩm thực</IonButton></IonCol>
          </IonRow>
        </IonGrid>

        {/* Section: Địa điểm hot */}
        <section className="hot-places">
          <h2>Địa điểm hot trong tháng</h2>
          <IonGrid>
            <IonRow>
              {[1, 2, 3, 4].map((i) => (
                <IonCol size="4" key={i}>
                  <IonCard className="light-card">
                    <IonImg src="/assets/img/hotspot.jpg" />
                    <IonCardHeader>
                      <IonCardTitle>Địa điểm {i}</IonCardTitle>
                      <IonCardSubtitle>Ưu đãi hấp dẫn</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* Section: Khuyến mãi */}
        <section className="promotion">
          <h2>Khuyến mãi</h2>
          <IonGrid>
            <IonRow>
              {[1, 2, 3, 4].map((i) => (
                <IonCol size="6" key={i}>
                  <IonCard className="light-card">
                    <IonImg src="/assets/img/promo.jpg" />
                    <IonCardHeader>
                      <IonCardTitle>Ưu đãi đặc biệt {i}</IonCardTitle>
                      <IonCardSubtitle>Thời gian có hạn</IonCardSubtitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </section>

        {/* Section: Tour du lịch */}     
        <section className="tours">
            <h2>Tour du lịch</h2>
            <div className="tour-slider" onMouseEnter={() => pauseTrack(true)} onMouseLeave={() => pauseTrack(false)} onTouchStart={() => pauseTrack(true)} onTouchEnd={() => pauseTrack(false)}>
              <div className={`tour-track ${isPaused ? 'paused' : ''}`}>
                {[...Array(5)].map((_, i) => (
                  <div className="tour-card" key={i}>
                    <IonCard className="light-card">
                      <IonImg src="/assets/img/tour.jpg" />
                      <IonCardHeader>
                        <IonCardTitle>Tour Vũng Tàu {i + 1}</IonCardTitle>
                        <IonCardSubtitle>Giá chỉ từ 999.000đ</IonCardSubtitle>
                      </IonCardHeader>
                    </IonCard>
                  </div>
                ))}
              </div>
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

export default HomePage;

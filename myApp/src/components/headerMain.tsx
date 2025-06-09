import { IonButton, IonImg } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { removeToken } from '../utils/auth';
import './headermain.css';

const HeaderMain: React.FC = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    removeToken();
    history.push('/home');
  };

  return (
    <div className="header-bar">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className="logo-container">
        <img src="/logo.svg" alt="Logo" className="logo" />
        <div className="header-logo">OBs</div>
      </div>

      <nav className="header-nav">
        <Link to="/homemain">trang chủ</Link>
        <Link to="/intromain">giới thiệu</Link>
        <Link to="/hotel">khách sạn</Link>
        <Link to="/hotellist">địa điểm</Link>
        <Link to="/contactmain">liên hệ</Link>
      </nav>

      <div className="auth-buttons">
        <IonButton
          className="logout-button"
          fill="outline"
          color="danger"
          onClick={handleLogout}
        >
          Logout
        </IonButton>
        <IonButton fill="clear">
          <IonImg src="/assets/notification-icon.svg" style={{ width: '25px', height: '25px' }} />
        </IonButton>
        <IonButton fill="clear">
          <IonImg src="/assets/avatar-icon.svg" style={{ width: '25px', height: '25px' }} />
        </IonButton>
      </div>

      <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
        <Link to="/intromain">giới thiệu</Link>
        <Link to="/hotel">khách sạn</Link>
        <Link to="#">địa điểm</Link>
        <Link to="/contactmain">liên hệ</Link>
      </div>
    </div>
  );
};

export default HeaderMain;

import { IonButton} from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { removeToken } from '../utils/auth';
import './header.css';
import LoginNotice from '../pages/loginnotice/LoginNotice';

const Header: React.FC = () => {
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = () => {
    setShowLoginModal(false);
    history.push('/login');
  };

  return (
    <>
      <div className="header-bar">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className="logo-container">
          <img src="/logo.svg" alt="Logo" className="logo" />
          <div className="header-logo">OBs</div>
        </div>
        <Link to="/#" className="nav-link">trang chủ</Link>
        <Link to="/intro" className="nav-link">Giới thiệu</Link>
        <Link to="/contact" className="nav-link">liên hệ</Link>
        

        <div className="auth-buttons">
          <Link to="/login" className="auth-signin">Sign in</Link>
          <Link to="/signup" className="auth-signup">Sign Up</Link>
        </div>

        <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
          <Link to="/intro">giới thiệu</Link>
          <Link to="#">khách sạn</Link>
          <Link to="#">địa điểm</Link>
          <Link to="/contact">liên hệ</Link>
        </div>
      </div>

      <LoginNotice
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;

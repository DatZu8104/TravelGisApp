import React, { useEffect, useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonImg,
  IonButton
} from "@ionic/react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "./assets/logo-group.svg";
import notifyIcon from "./assets/notify.png";
import accountIcon from "./assets/account.png";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScroll = 0;

  useEffect(() => {
    const ionContent = document.querySelector("ion-content");

    const onScroll = (e: any) => {
      const scrollTop = e.detail.scrollTop;

      if (scrollTop > lastScroll && scrollTop > 80) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      lastScroll = scrollTop;
    };

    ionContent?.addEventListener("ionScroll", onScroll);
    return () => ionContent?.removeEventListener("ionScroll", onScroll);
  }, []);

  return (
    <IonHeader className={`custom-header ${isVisible ? "show" : "hide"}`}>
      <IonToolbar className="custom-toolbar" style={{ '--background': 'transparent' }}>
        {/* Logo bên trái */}
        <div className="header-left">
          <Link to="/">
            <IonImg src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Navigation giữa */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">Trang chủ</Link>
          <Link to="/tour" className="nav-link">Tour</Link>
          <Link to="/hotel" className="nav-link">Khách sạn</Link>
          <Link to="/location" className="nav-link">Địa điểm</Link>
        </nav>

        {/* Hành động bên phải */}
        <div className="header-actions">
          <Link to="/signin">
            <IonButton className="btn-signin" fill="solid">Sign In</IonButton>
          </Link>
          <Link to="/signup">
            <IonButton className="btn-signup" fill="outline">Sign Up</IonButton>
          </Link>
          <div className="divider" />
          <div className="icon-wrapper">
            <IonImg src={notifyIcon} className="header-icon" alt="Bell" />
          </div>
          <div className="icon-wrapper">
            <IonImg src={accountIcon} className="header-icon" alt="User" />
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;

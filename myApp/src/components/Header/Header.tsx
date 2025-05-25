// Header.tsx
import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonImg,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";
import "./Header.css";

import logo from './assets/logo-group.svg';
import line from './assets/line-30.svg';
import notify from './assets/notify.png';
import account from './assets/account.png';

export const Header = () => {
  const history = useHistory();
  const location = useLocation();

  const handleSegmentChange = (e: CustomEvent) => {
    const value = (e.detail as any).value;
    if (value !== location.pathname) {
      history.push(value);
    }
  };

  return (
    <IonHeader>
      {/* Toolbar 1: Logo & Sign In/Up */}
      <IonToolbar className="header-toolbar">
        <IonImg src={logo} alt="Logo" className="logo" />

        <div className="account-section">
          <div className="button-group">
            <IonButton className="header-login-btn" onClick={() => history.push("/login")}>
              Sign In
            </IonButton>
            <IonButton className="register-btn" onClick={() => history.push("/signup")}>
              Sign Up
            </IonButton>
          </div>
          <IonImg src={line} alt="Line" className="line" />
          <IonImg src={notify} alt="Notify" className="vector" />
          <IonImg src={account} alt="Account" className="img" />
        </div>
      </IonToolbar>

      {/* Toolbar 2: Navigation links */}
      {/* 
        Tạm thời comment các menu chưa có route để tránh trắng trang
        Khi thêm route, bỏ comment bên dưới
      */}
      {/* 
      <IonToolbar className="menu-toolbar">
        <IonSegment
          value={location.pathname}
          onIonChange={handleSegmentChange}
        >
          <IonSegmentButton value="/homepage">
            <IonLabel>Trang chủ</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="/Tour">
            <IonLabel>Tour</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="/Hotel">
            <IonLabel>Khách sạn</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="/Location">
            <IonLabel>Địa điểm</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      */}
    </IonHeader>
  );
};

export default Header;

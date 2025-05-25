import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonImg,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";

import group8946 from "./group-8946.png";
import group8981 from "./group-8981.png";
import line30 from "./line-30.svg";
import vector166 from "./vector-166.svg";

import "./style.css";

export const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar className="header-toolbar">
        {/* Logo bên trái */}
        <IonImg src={group8946} alt="Logo" className="logo" />

        {/* Các nút Sign In / Sign Up bên phải */}
        <IonButtons slot="end" className="auth-buttons">
          <IonButton>
            Sign In
          </IonButton>
          <IonButton fill="outline">
            Sign Up
          </IonButton>
        </IonButtons>
      </IonToolbar>

      {/* Thanh menu chính dưới toolbar */}
      <IonToolbar className="menu-toolbar">
        <IonSegment scrollable>
          <IonSegmentButton value="home">
            <IonLabel>Trang chủ</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="tour">
            <IonLabel>Tour</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="place">
            <IonLabel>Địa điểm</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="hotel">
            <IonLabel>Khách sạn</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Ảnh hoặc icon trang trí */}
        <IonImg src={group8981} alt="Decoration" className="decoration-img" />
      </IonToolbar>
    </IonHeader>
  );
};

import React, { useState } from "react";
import "./contactForm.css";
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
import HeaderMain from "../../components/headerMain";

const ContactForm = () => {
  const [isPaused, setIsPaused] = useState(false);

  const pauseTrack = (state: boolean) => setIsPaused(state);

  const [showLoginModal, setShowLoginModal] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("https://travelgisapp-production.up.railway.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Cảm ơn bạn đã liên hệ!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Có lỗi xảy ra khi gửi thông tin.");
    }
  } catch (err) {
    alert("Không thể kết nối tới máy chủ.");
  }
};


const [menuOpen, setMenuOpen] = useState(false);
  return (
    <IonPage>
      <IonContent>
        <HeaderMain />
              
              <div className="contact-container">
                <h2>Liên hệ với chúng tôi</h2>
                <p>Hãy để lại thông tin của bạn để chúng tôi có thể hỗ trợ bạn tốt nhất trong chuyến đi sắp tới!</p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <label>
                    Họ và tên:
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Số điện thoại:
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Lời nhắn:
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </label>

                  <button type="submit">Gửi</button>
                </form>
                </div>
      </IonContent>
    </IonPage>
  );
};

export default ContactForm;

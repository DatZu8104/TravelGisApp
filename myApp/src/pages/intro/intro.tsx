import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { useState } from 'react';
import './intro.css';
import Header from '../../components/header';
const members = [
  { name: 'VŨ HOÀNG ĐẠT (LEADER)', id: '22166008', img: '/assets/intro-dat.png' },
  { name: 'PHAN NGUYỄN NHƯ QUỲNH', id: '22166074', img: '/img/mem2.jpg' },
  { name: 'NGUYỄN THỊ BẢO NGỌC', id: '22166060', img: '/assets/intro-ngoc.png' },
  { name: 'VÕ THỊ NHƯ Ý', id: '22166106', img: '/img/mem4.jpg' },
  { name: 'NGUYỄN ÁI TRÂN', id: '22166087', img: '/assets/intro-tran.png' },
  { name: 'PHAN THỊ QUỲNH TRANG', id: '22166088', img: '/img/mem6.jpg' },
];


const Intro: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <IonPage>
      <Header />
      

      <IonContent fullscreen className="light-content">
        {/* Hero Section */}
        <IonGrid className="member-section">
  <IonRow className="member-title">
    <IonCol size="12" className="title-box">
      <p>Nhóm 1</p>
      <p>Lớp: DH22HM</p>
      <p>Chuyên ngành: Hệ thống thông tin</p>
      <h2><b>THÀNH VIÊN NHÓM</b></h2>
    </IonCol>
  </IonRow>

  <IonRow>
    {members.map((member, index) => (
      <IonCol size="6" key={index} className="member-col">
        <div className="member-card">
          <img src={member.img} alt={member.name} className="member-img" />
          <div className="member-info">
            <p className="member-name">{member.name}</p>
            <p className="member-id">{member.id}</p>
          </div>
        </div>
      </IonCol>
    ))}
  </IonRow>
</IonGrid>



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

export default Intro;

import {
  IonPage,
  IonContent,
  IonImg,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonLabel,
  IonItem,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import "./hotel.css";
import { Link } from 'react-router-dom';
import HeaderMain from '../../components/headerMain';


const hotels = [
  {
    id: 0,
    name: "Annata Beach Hotel",
    image: "/assets/hotellist/Joi Hospitality - Front Beach.jpg", 
    rating: 5,
    score: "9.9/10",
    review: "Tuyệt vời",
    address: "376 Trần Phú, Phường 5, Bà Rịa - Vũng Tàu",
    price: "2.100.980 VND",
  },
  {
    id: 1,
    name: "BELLA VT HOTEL",
    image: "/assets/hotellist/BELLA VT HOTEL.jpg",
    rating: 4,
    score: "9.2/10",
    review: "Rất tốt",
    address: "03 06 Hạ Long, Street, Bà Rịa - Vũng Tàu",
    price: "1.850.000 VND",
  },
  {
    id: 2,
    name: "Diamond Sea Hotel",
    image: "/assets/hotellist/Diamond Sea Hotel.jpg", 
    rating: 5,
    score: "9.5/10",
    review: "Tuyệt vời",
    address: "115 Thùy Vân, Phường 2, Bà Rịa - Vũng Tàu",
    price: "1.600.000 VND",
  },
  {
    id: 3,
    name: "Fati Boutique Hotel & Apartment",
    image: "/assets/hotellist/Fati Boutique Hotel & Apartment.jpg", 
    rating: 5,
    score: "9.5/10",
    review: "Tuyệt vời",
    address: "112/3 Trần Phú, Phường 5, Bà Rịa - Vũng Tàu",
    price: "1.500.000 VND",
  },
  {
    id: 4,
    name: "Hoang Phat Hotel",
    image: "/assets/hotellist/Hoang Phat Hotel.jpg", 
    rating: 5,
    score: "9.5/10",
    review: "Tuyệt vời",
    address: "23D Thùy Vân, Phường 2, Bà Rịa - Vũng Tàu",
    price: "2.200.000 VND",
  },
  
];




const StarRating = ({ count = 5 }) => {
  return (
    <div>{[...Array(count)].map((_, i) => <span key={i} className="star">★</span>)}</div>
  );
};

function Hotel() {
  return (
    <IonPage>
      <HeaderMain />

      <IonContent fullscreen>
        <div className="hero-image">
          <IonGrid className="search-bar">
            <IonRow>
              
              <IonCol><IonInput type="date" /></IonCol>
              <IonCol><IonInput type="date" /></IonCol>
              <IonCol>
                <IonSelect placeholder="Loại phòng">
                  <IonSelectOption>Phòng đơn</IonSelectOption>
                  <IonSelectOption>Phòng đôi</IonSelectOption>
                  <IonSelectOption>Phòng gia đình</IonSelectOption>
                  <IonSelectOption>Phòng VIP</IonSelectOption>
                </IonSelect>
              </IonCol>
              <IonCol><IonButton className="btn-search">TÌM</IonButton></IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <div className="breadcrumb">
          Trang chủ / <b>Khách sạn Vũng Tàu</b> <br />
          <Link to="/hotellist">Địa điểm</Link>
        </div>

        <IonGrid className="content">
          <IonRow>
            <IonCol size="3">
              <IonCard className="contact-card">
                <IonCardContent className="contact-content">
                  <div className="contact-left">
                    <IonImg src="/assets/hotel-contact.png" className="support-img" />
                  </div>
                  <div className="contact-right">
                    {[1, 2, 3].map((_, i) => (
                      <div className="phone-row" key={i}>
                        <IonImg src="/assets/phone.png" className="phone-icon" />
                        <span className="phone-number">19001823</span>
                      </div>
                    ))}
                  </div>
                </IonCardContent>
              </IonCard>

              <div className="search-hotel-name">
                <IonInput placeholder="Nhập tên khách sạn" className="hotel-input" />
                <IonButton className="hotel-search-btn">🔍
                </IonButton>
                
              </div>
              
          

              {/* Các filter dạng IonList */}
              <IonList>
                <IonItem><IonLabel>Hạng khách sạn</IonLabel></IonItem>
                {[5,4,3,2,1].map(star => (
                  <IonItem key={star}>
                    <IonCheckbox slot="start" />
                    <IonLabel>{'★'.repeat(star)}</IonLabel>
                  </IonItem>
                ))}
              </IonList>

              <IonCol size="12" size-md="3">
                {/* Khu vực */}
                <div className="filter-group">
                  <h4>Khu vực</h4>
                  {["Bãi đầu", "Bãi dứa", "Bãi sau", "Bãi trước", "Bình Châu", "Côn Đảo"].map((area, idx) => (
                    <label key={idx} className="checkbox-label">
                      <input type="checkbox" />
                      {area}
                    </label>
                  ))}
                  <div className="see-more">Xem thêm</div>
                </div>

                {/* Loại hình nơi ở */}
                <div className="filter-group">
                  <h4>Loại hình nơi ở</h4>
                  {[
                    "Cottages/Cabins/Houses",
                    "Khách sạn (Hotel)",
                    "Căn hộ (Apartment)",
                    "Khu nghỉ dưỡng (Resort)",
                    "Nhà nghỉ (Homestay)",
                    "Biệt thự (Villa)",
                  ].map((type, idx) => (
                    <label key={idx} className="checkbox-label">
                      <input type="checkbox" />
                      {type}
                    </label>
                  ))}
                  <div className="see-more">Xem thêm</div>
                </div>

                {/* Tiện ích */}
                <div className="filter-group">
                  <h4>Tiện ích</h4>
                  {[
                    "Phòng gia đình",
                    "Bãi biển riêng",
                    "Hồ bơi",
                    "Bãi đỗ xe oto",
                    "Khu vui chơi trẻ em",
                  ].map((amenity, idx) => (
                    <label key={idx} className="checkbox-label">
                      <input type="checkbox" />
                      {amenity}
                    </label>
                  ))}
                  <div className="see-more">Xem thêm</div>
                </div>

                {/* Cẩm nang du lịch */}
                <div className="guide-card">
                  <h2 className="guide-title">Cẩm nang du lịch Vũng Tàu</h2>
                  <p>
                    Vũng Tàu là điểm đến yêu thích của du khách phía Nam với đường bờ biển dài đến 20km. Bạn sẽ có cảm giác bình yên, dễ chịu với những con đường ven biển xinh đẹp thoáng mát.
                  </p>
                  <p>
                    Một bên là biển, một bên là núi, điểm xuyên cùng những ngôi chùa thanh tịnh hoặc nhà thờ kiến trúc độc đáo.
                  </p>
                  <a className="guide-link">Xem thêm</a>
                </div>
              </IonCol>

            </IonCol>

            <IonCol size="9">
              {hotels.map(hotel => (
                <IonCard key={hotel.id} className="hotel-item">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="4">
                        <IonImg src={hotel.image} className="hotel-img" />
                      </IonCol>
                      <IonCol size="5">
                        <IonCardHeader>
                          <IonCardTitle>{hotel.name}</IonCardTitle>
                        </IonCardHeader>
                        <StarRating count={hotel.rating} />
                        <p className="hotel-score"><b>{hotel.score}</b> {hotel.review} | 11111 đánh giá</p>
                        <p className="hotel-address">{hotel.address}</p>
                        <div className="hotel-tags">
                          <span>Thương hiệu quốc tế</span>
                          <span>Hiện đại</span>
                        </div>
                      </IonCol>
                      <IonCol size="3" className="hotel-price">
                        <p>{hotel.price}</p>
                        <IonButton className="btn-book" fill="clear">Đặt phòng</IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCard>
              ))}
            </IonCol>
          </IonRow>
        </IonGrid>

        <div className="load-more-container">
          <IonButton fill="clear" className="load-more-btn">Hiển thị thêm 357 khách sạn</IonButton>
        </div>

        {/* Footer */}
        <footer className="footer" id="section-footer">
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
}

export default Hotel;

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";
import "../../css/Hotel.css";

const hotels = [
  {
    id: 1,
    name: "Khu nghỉ dưỡng................",
    rating: 5,
    score: "9.9/10",
    review: "Tuyệt vời",
    address: "Địa chỉ của khách sạn",
    price: "2.100.980 VND",
  },
  {
    id: 2,
    name: "Khu nghỉ dưỡng................",
    rating: 5,
    score: "9.9/10",
    review: "Tuyệt vời",
    address: "Địa chỉ của khách sạn",
    price: "2.100.980 VND",
  },
  {
    id: 33,
    name: "Khu nghỉ dưỡng................",
    rating: 5,
    score: "9.9/10",
    review: "Tuyệt vời",
    address: "Địa chỉ của khách sạn",
    price: "2.100.980 VND",
  },
  {
    id: 4,
    name: "Khu nghỉ dưỡng................",
    rating: 5,
    score: "9.9/10",
    review: "Tuyệt vời",
    address: "Địa chỉ của khách sạn",
    price: "2.100.980 VND",
  },
  {
    id: 55,
    name: "Khu nghỉ dưỡng................",
    rating: 5,
    score: "9.9/10",
    review: "Tuyệt vời",
    address: "Địa chỉ của khách sạn",
    price: "2.100.980 VND",
  },
  {
    id: 6,
    name: "Khu nghỉ dưỡng................",
    rating: 5,
    score: "9.9/10",
    review: "Tuyệt vời",
    address: "Địa chỉ của khách sạn",
    price: "2.100.980 VND",
  },
];

const StarRating = ({ count }) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <span key={i} className="star">
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

function HotelListPage() {
  return (
    <div className="Hotel">
      <Header />

      <div className="hero-image">
        <div className="search-bar">
          <input type="text" placeholder="Vũng Tàu" />
          <input type="date" placeholder="Bắt đầu" />
          <input type="date" placeholder="Kết thúc" />
          <select>
            <option>Loại phòng</option>
            <option>Phòng đơn</option>
            <option>Phòng đôi</option>
            <option>Phòng gia đình</option>
            <option>Phòng VIP</option>
          </select>
          <button className="btn-search">TÌM</button>
        </div>
      </div>

      <div className="app">
        <div className="breadcrumb">
          Trang chủ / <b>Khách sạn Vũng Tàu</b> <br />
          <a href="#">Xem bản đồ</a>
        </div>

        <hr />

        <div className="content">
          <div className="sidebar">
            <div className="contact">
              <img
                src="src/img/contact.png"
                alt="support"
                className="support-img"
              />
              <div>
                <p>19001823</p>
                <p>19001823</p>
                <p>19001823</p>
              </div>
            </div>

            <div className="search-hotel-name">
              <input type="text" placeholder="Nhập tên khách sạn" />
              <button>🔍</button>
            </div>
            <div className="utility">
              <div className="rating-filter">
                <h4>Hạng khách sạn</h4>
                {[5, 4, 3, 2, 1].map((star) => (
                  <label key={star} className="star-filter">
                    <input type="checkbox" />
                    {[...Array(star)].map((_, i) => (
                      <span key={i} className="star">
                        ★
                      </span>
                    ))}
                  </label>
                ))}
                <hr />
              </div>

              <div className="area-filter">
                <h4>Khu vực</h4>
                {[
                  "Bãi đầu",
                  "Bãi dứa",
                  "Bãi sau",
                  "Bãi trước",
                  "Bình Châu",
                  "Côn Đảo",
                ].map((area, idx) => (
                  <label key={idx} className="checkbox-label">
                    <input type="checkbox" />
                    {area}
                  </label>
                ))}
                <div className="see-more">Xem thêm</div>
                <hr />
              </div>

              {/* Accommodation Type Filter */}
              <div className="type-filter">
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
                <hr />
              </div>

              {/* Amenities Filter */}
              <div className="amenities-filter">
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
            </div>
            <div className="guide-card">
              <h2 className="guide-title">Cẩm nang du lịch Vũng Tàu</h2>
              <p>
                Cách Sài Gòn khoảng 3 tiếng lái xe, Vũng Tàu là một trong những
                điểm đến yêu thích của du khách phía Nam với đường bờ biển trải
                dài đến 20km.
              </p>
              <p>
                Đến với Vũng Tàu bạn sẽ có cảm giác bình yên, dễ chịu với những
                con đường ven biển xinh đẹp thoáng mát. Một bên là biển, một bên
                là núi, điểm xuyên cùng những ngôi chùa thanh tịnh hay nhà thờ
                với kiến trúc độc đáo... Tất cả tạo nên một Vũng Tàu chưa bao
                giờ hết thu hút.
              </p>
              <p>
                Đặt phòng ngay và nhanh tay lưu lại cẩm nang du lịch Vũng Tàu
                cho chuyến đi thú vị của bạn!
              </p>
              <a href="#" className="guide-link">
                Xem thêm
              </a>
            </div>
          </div>

          <div className="hotel-list">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-item">
                <img
                  src="src/img/hotel.png"
                  alt="hotel"
                  className="hotel-img"
                />
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <StarRating count={hotel.rating} />
                  <p className="hotel-score">
                    <b>{hotel.score}</b> {hotel.review} | 11111 đánh giá
                  </p>
                  <p className="hotel-address">{hotel.address}</p>
                  <div className="hotel-tags">
                    <span>Thương hiệu quốc tế</span>
                    <span>Hiện đại</span>
                  </div>
                </div>
                <div className="hotel-price">
                  <p>{hotel.price}</p>
                  <button className="btn-book">Đặt phòng</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="load-more-container">
        <button className="load-more-btn">Hiển thị thêm 357 khách sạn</button>
      </div>

      <Footer />
    </div>
  );
}

export default HotelListPage;

import React, { useEffect, useState } from "react";
import Header from "../../components/globals/header";
import Footer from "../../components/globals/footer";
import "../../css/Hotel.css";

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
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/hotels")
      .then((res) => {
        if (!res.ok) throw new Error("Lỗi khi tải dữ liệu khách sạn");
        return res.json();
      })
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="Hotel">
      <Header />

      <div className="hero-image">
        <div className="search-bar">
          <input type="text" placeholder="Vũng Tàu" />
          <input type="date" />
          <input type="date" />
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
          <div className="sidebar">{/* contact + filter (giữ nguyên) */}</div>

          <div className="hotel-list">
            <div style={{ height: "1000px", background: "#f0f0f0" }}></div>
            {loading ? (
              <p>Đang tải dữ liệu...</p>
            ) : error ? (
              <p style={{ color: "red" }}>Lỗi: {error}</p>
            ) : (
              hotels.map((hotel) => (
                <div key={hotel.id} className="hotel-item">
                  <img src="/img/hotel.png" alt="hotel" className="hotel-img" />
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
              ))
            )}
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

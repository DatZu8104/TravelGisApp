import React from "react";
import "../../css/HotelList.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 👇 Cấu hình lại icon Leaflet an toàn với TypeScript
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Thiết lập icon mặc định để tránh lỗi không hiển thị marker
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const hotels = [
    {
        name: "Khách Sạn 1",
        rating: "9.2/10",
        price: "2.999.000 VND",
        image: "/images/hotel.jpg",
        lat: 10.3475,
        lng: 107.0843,
    },
    {
        name: "Khách Sạn 2",
        rating: "8.8/10",
        price: "2.499.000 VND",
        image: "/images/hotel.jpg",
        lat: 10.3505,
        lng: 107.0821,
    },
    {
        name: "Khách Sạn 3",
        rating: "9.5/10",
        price: "3.200.000 VND",
        image: "/images/hotel.jpg",
        lat: 10.3450,
        lng: 107.0810,
    },
    {
        name: "Khách Sạn 4",
        rating: "8.0/10",
        price: "1.999.000 VND",
        image: "/images/hotel.jpg",
        lat: 10.3430,
        lng: 107.0860,
    },
    {
        name: "Khách Sạn 5",
        rating: "9.0/10",
        price: "2.800.000 VND",
        image: "/images/hotel.jpg",
        lat: 10.3490,
        lng: 107.0880,
    },
];

const HotelList = () => {
    return (
        <div className="hotel-page">
            <div className="hotel-content">
                <div className="hotel-list">
                    {hotels.map((hotel, index) => (
                        <div className="hotel-card" key={index}>
                            <img src={hotel.image} alt="hotel" className="hotel-image" />
                            <div className="hotel-info">
                                <h3>{hotel.name}</h3>
                                <p>{hotel.rating}</p>
                            </div>
                            <div className="hotel-price">{hotel.price}</div>
                        </div>
                    ))}

                    <div className="pagination">
                        <span className="dot active" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>

                    <button className="next-btn">Next</button>
                </div>

                <div className="hotel-map">
                    <MapContainer
                        center={[10.3475, 107.0843]}
                        zoom={13}
                        style={{ height: "400px", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {hotels.map((hotel, index) => (
                            <Marker key={index} position={[hotel.lat, hotel.lng]}>
                                <Popup>
                                    <strong>{hotel.name}</strong>
                                    <br />
                                    {hotel.price}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default HotelList;

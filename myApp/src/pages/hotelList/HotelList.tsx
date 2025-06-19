import React, { useEffect, useRef, useState } from "react";
import {
    IonPage,
    IonContent,
} from "@ionic/react";
import "../../css/HotelList.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerRed from '../../assets/marker-icon-red.png'; 
import markerShadow from "../../assets/marker-shadow.png";
import HotelPopup from "./HotelPopup";
import { Geolocation } from '@capacitor/geolocation';

import { useLocation } from "react-router-dom";
import HeaderMain from "../../components/headerMain";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";

// Thiết lập mặc định
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const redIcon = new L.Icon({
    iconUrl: markerRed,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const blueIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const MapWithInvalidateSize = () => {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 300);
    }, [map]);
    return null;
};

const hotels = [
    {
        name: "Annata Beach Hotel",
        rating: "9.2/10",
        price: "2.999.000 VND",
        images: ["/assets/hotellist/Annata Beach Hotel.jpg"],
        lat: 10.326893,
        lng: 107.081039,
        phone: "0963823642",
        owner: "376 Trần Phú, Phường 5, Bà Rịa - Vũng Tàu",
    },
    {
        name: "BELLA VT HOTEL",
        rating: "8.8/10",
        price: "2.499.000 VND",
        images: ["/assets/hotellist/BELLA VT HOTEL.jpg"],
        lat: 10.343569,
        lng: 107.095251,
        phone: "0963854642",
        owner: "03 06 Hạ Long, Street, Bà Rịa - Vũng Tàu",
    },
    // Thêm các khách sạn khác tương tự...
];

const HotelList = () => {
    const location = useLocation();
    const [showMap, setShowMap] = useState(false);
    const [currentPosition, setCurrentPosition] = useState<[number, number] | null>(null);
    const [selectedHotelPosition, setSelectedHotelPosition] = useState<[number, number] | null>(null);
    const [selectedZoom, setSelectedZoom] = useState<number>(13);
    const [selectedMarkerIndex, setSelectedMarkerIndex] = useState<number | null>(null);

    const mapRef = useRef<HTMLDivElement>(null);
    const markerRefs = useRef<(L.Marker | null)[]>([]);

    const scrollToMap = () => {
        if (mapRef.current) {
            mapRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useEffect(() => {
        setShowMap(false);
        const timeout = setTimeout(() => {
            setShowMap(true);
        }, 300);
        return () => clearTimeout(timeout);
    }, [location.pathname]);

    useEffect(() => {
        if (
            selectedMarkerIndex !== null &&
            markerRefs.current[selectedMarkerIndex]
        ) {
            markerRefs.current[selectedMarkerIndex]?.openPopup();
        }
    }, [selectedMarkerIndex]);

    async function handleLocateUser() {
        try {
            const pos = await Geolocation.getCurrentPosition({
                enableHighAccuracy: true
            });
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;

            setSelectedHotelPosition(null);
            setSelectedZoom(15);
            setCurrentPosition([lat, lng]);
            setSelectedMarkerIndex(null);
            scrollToMap();
        } catch (err) {
            console.error("Error getting location:", err);
        }
    }

    return (
        <IonPage>
            <HeaderMain />
            <IonContent>
                <div className="hotel-content">
                    <div className="hotel-list">
                        {hotels.map((hotel, index) => (
                            <div className="hotel-card" key={index}>
                                <img src={hotel.images[0]} alt={hotel.name} className="hotel-image" />
                                <div className="hotel-info">
                                    <h3>{hotel.name}</h3>
                                    <p>{hotel.rating}</p>
                                </div>
                                <div className="hotel-price">{hotel.price}</div>

                                <button onClick={() => {
                                    setSelectedHotelPosition([hotel.lat, hotel.lng]);
                                    setSelectedZoom(17);
                                    setSelectedMarkerIndex(index);
                                    scrollToMap();
                                }}>
                                    Xem vị trí
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="hotel-map" ref={mapRef}>
                        <button onClick={handleLocateUser}>Vị trí hiện tại</button>

                        {showMap && (
                            <MapContainer
                                key={location.pathname + JSON.stringify(currentPosition) + JSON.stringify(selectedHotelPosition)}
                                center={selectedHotelPosition ?? currentPosition ?? [10.3475, 107.0843]}
                                zoom={selectedZoom}
                                style={{ height: "400px", width: "100%" }}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <MapWithInvalidateSize />

                                {hotels.map((hotel, index) => (
                                    <Marker
                                        key={index}
                                        position={[hotel.lat, hotel.lng]}
                                        icon={selectedMarkerIndex === index ? blueIcon : redIcon}
                                        ref={(ref) => {
                                            if (ref) markerRefs.current[index] = ref as L.Marker;
                                        }}
                                    >
                                        <Popup>
                                            <HotelPopup hotel={hotel} />
                                        </Popup>
                                    </Marker>
                                ))}

                                {currentPosition && (
                                    <Marker position={currentPosition} icon={blueIcon}>
                                        <Popup>Bạn đang ở đây</Popup>
                                    </Marker>
                                )}
                            </MapContainer>
                        )}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HotelList;

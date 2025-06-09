import React, { useState } from "react";

type Hotel = {
    name: string;
    rating: string;
    price: string;
    images: string[];
    phone: string;
    owner: string;
};

const HotelPopup = ({ hotel }: { hotel: Hotel }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === hotel.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div style={{ width: "200px", textAlign: "center", fontFamily: "sans-serif" }}>
            {/* ảnh + nút bọc trong relative div */}
            <div style={{ position: "relative" }}>
                <img
                    src={hotel.images[currentImageIndex]}
                    alt={hotel.name}
                    style={{
                        width: "100%",
                        borderRadius: "5px",
                        marginBottom: "8px",
                    }}
                />
                {/* nút Prev */}
                <button
                    onClick={prevImage}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "5px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                    }}
                >
                    {"<"}
                </button>
                {/* nút Next */}
                <button
                    onClick={nextImage}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "5px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                        cursor: "pointer",
                    }}
                >
                    {">"}
                </button>
            </div>

            <h4 style={{ margin: "5px 0" }}>{hotel.name}</h4>
            <p style={{ margin: "3px 0" }}>⭐ {hotel.rating}</p>
            <p style={{ margin: "3px 0", color: "#e91e63", fontWeight: "bold" }}>
                {hotel.price}
            </p>
            <p className="">
                <p>☎{hotel.phone}</p>
                <p>{hotel.owner}</p>
            </p>
            
        </div>
    );
};

export default HotelPopup;

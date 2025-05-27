// Header.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <div className="nav-links">
        <div className="text-wrapper-2" onClick={() => navigate("/Home")}>
          Home
        </div>
        <div className="text-wrapper" onClick={() => navigate("/Hotel")}>
          Khách sạn
        </div>
        <div className="text-wrapper-3" onClick={() => navigate("/Location")}>
          Địa điểm
        </div>
      </div>

      <div className="account-section">
        <div className="button-group">
          <button
            className="header-login-btn"
            onClick={() => navigate("/Login")}
          >
            Sign in
          </button>
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
        <img className="line" alt="Line" src="src/img/line-30.svg" />

        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <img className="vector" alt="Notify" src="src/img/notify.png" />
            <div className="ellipse" />
          </div>
        </div>
        <img className="img" alt="Account" src="src/img/account.png" />
      </div>
    </div>
  );
};

export default Header;

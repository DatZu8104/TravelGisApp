// Header.tsx
import React from "react";
import "../../css/Header.css";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();

  return (
      <div className="header-container">
        <div className="nav-links">
          <div className="text-wrapper-2" onClick={() => history.push("/Home")}>
            Home
          </div>
          <div className="text-wrapper" onClick={() => history.push("/Hotel")}>
            Khách sạn
          </div>
          <div className="text-wrapper-3" onClick={() => history.push("/Location")}>
            Địa điểm
          </div>
        </div>

        <div className="account-section">
          <div className="button-group">
            <button className="header-login-btn" onClick={() => history.push("/Login")}>
              Sign in
            </button>
            <button className="register-btn" onClick={() => history.push("/register")}>
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

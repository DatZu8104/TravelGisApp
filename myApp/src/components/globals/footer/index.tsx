import React from "react";
import "../../../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>ShareRight</h3>
          <p>
            © 2014–2023 BuyLeft. <br />
            All Rights Reserved.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick links</h4>
          <ul>
            <li>About</li>
            <li>Items</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Terms of use</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact us</h4>
          <ul>
            <li>
              <span>
                <img alt="phone-outgoing" src="src/img/phone-outgoing.svg" />
              </span>{" "}
              0123 456 789
            </li>
            <li>
              <span>
                <img alt="mail" src="src/img/mail.svg" />
              </span>{" "}
              nhom1@st.hcmuaf.edu.vn
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow us</h4>
          <div className="social-icons">
            <span>
              <img alt="facebook" src="src/img/logo-facebook.svg" />
            </span>{" "}
            <span>
              <img alt="instagram" src="src/img/logo-instagram.svg" />
            </span>{" "}
            <span>
              <img alt="Social-icon" src="src/img/Social-icon.svg" />
            </span>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

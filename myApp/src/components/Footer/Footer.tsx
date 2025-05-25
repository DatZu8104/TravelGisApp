import React from "react";
import {
  IonFooter,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import phoneOutgoing from "../assets/phone-outgoing.svg";
import mailIcon from "../assets/mail.svg";
import facebookIcon from "../assets/logo-facebook.svg";
import instagramIcon from "../assets/logo-instagram.svg";
import socialIcon from "../assets/Social-icon.svg";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            {/* Footer Brand */}
            <IonCol size="12" sizeMd="3">
              <div className="footer-brand">
                <h3>ShareRight</h3>
                <p>
                  © 2014–2023 BuyLeft. <br />
                  All Rights Reserved.
                </p>
              </div>
            </IonCol>

            {/* Quick Links */}
            <IonCol size="12" sizeMd="2">
              <div className="footer-section">
                <h4>Quick links</h4>
                <ul>
                  <li>
                    <a href="#" onClick={e => e.preventDefault()}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={e => e.preventDefault()}>
                      Items
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={e => e.preventDefault()}>
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={e => e.preventDefault()}>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </IonCol>

            {/* Terms of Use */}
            <IonCol size="12" sizeMd="2">
              <div className="footer-section">
                <h4>Terms of use</h4>
                <ul>
                  <li>
                    <a href="#" onClick={e => e.preventDefault()}>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={e => e.preventDefault()}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={e => e.preventDefault()}>
                      Cookies Policy
                    </a>
                  </li>
                </ul>
              </div>
            </IonCol>

            {/* Contact Us */}
            <IonCol size="12" sizeMd="3">
              <div className="footer-section">
                <h4>Contact us</h4>
                <ul>
                  <li>
                    <img alt="phone-outgoing" src={phoneOutgoing} />
                    &nbsp;0123 456 789
                  </li>
                  <li>
                    <img alt="mail" src={mailIcon} />
                    &nbsp;nhom1@st.hcmuaf.edu.vn
                  </li>
                </ul>
              </div>
            </IonCol>

            {/* Follow Us */}
            <IonCol size="12" sizeMd="2">
              <div className="footer-section">
                <h4>Follow us</h4>
                <div className="social-icons">
                  <a href="#" onClick={e => e.preventDefault()}>
                    <img alt="facebook" src={facebookIcon} />
                  </a>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <img alt="instagram" src={instagramIcon} />
                  </a>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <img alt="social-icon" src={socialIcon} />
                  </a>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;

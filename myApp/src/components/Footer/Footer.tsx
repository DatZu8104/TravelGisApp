import React from "react";
import {
  IonFooter,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import phoneOutgoing from "./assets/phone-outgoing.svg";
import mailIcon from "./assets/mail.svg";
import facebookIcon from "./assets/logo-facebook.svg";
import instagramIcon from "./assets/logo-instagram.svg";
import socialIcon from "./assets/Social-icon.svg";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <div className="footer-container">
          <IonGrid>
            <IonRow>
              {/* Footer Brand */}
              <IonCol size="12" sizeMd="3" className="footer-col">
                <div className="footer-brand">
                  <h3>ShareRight</h3>
                  <p>
                    © 2014–2023 BuyLeft. <br />
                    All Rights Reserved.
                  </p>
                </div>
              </IonCol>

              {/* Quick Links */}
              <IonCol size="12" sizeMd="2" className="footer-col">
                <div className="footer-section">
                  <h4>Quick links</h4>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Items</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </div>
              </IonCol>

              {/* Terms of Use */}
              <IonCol size="12" sizeMd="2" className="footer-col">
                <div className="footer-section">
                  <h4>Terms of use</h4>
                  <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Cookies Policy</a></li>
                  </ul>
                </div>
              </IonCol>

              {/* Contact Us */}
              <IonCol size="12" sizeMd="3" className="footer-col">
                <div className="footer-section">
                  <h4>Contact us</h4>
                  <ul>
                    <li>
                      <img alt="phone-outgoing" src={phoneOutgoing} />
                      &nbsp;0123 834 2257
                    </li>
                    <li>
                      <img alt="mail" src={mailIcon} />
                      &nbsp;nhom1@st.hcmuaf.edu.vn
                    </li>
                  </ul>
                </div>
              </IonCol>

              {/* Follow Us */}
              <IonCol size="12" sizeMd="2" className="footer-col">
                <div className="footer-section">
                  <h4>Follow us</h4>
                  <div className="social-icons">
                    <a href="#"><img alt="facebook" src={facebookIcon} /></a>
                    <a href="#"><img alt="instagram" src={instagramIcon} /></a>
                    <a href="#"><img alt="social-icon" src={socialIcon} /></a>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;

import React from "react";
import "../../App.css";
import logo from "@assets/logoBlack.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img style={{ width: 50, height: 50 }} src={logo} alt="Logo" />
      </div>
      <div className="footer-copyright">
        <p>&copy; 2023 BoostMyAthlete</p>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
            <span className="twitter-link">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </span>
            <span className="facebook-link">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </span>
          </li>
          <li><a href="#">Terms &amp; Conditions</a>
            <span className="facebook-link">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </span>
          </li>
          <li><a href="#">Cookie Policy</a>
            <span className="twitter-link">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </span>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

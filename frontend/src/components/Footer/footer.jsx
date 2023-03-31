import React from "react";
import "../../App.css";
import { Instagram, Facebook, Twitter } from "react-bootstrap-icons";
import bmaWhite from "../../assets/BMA White.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img style={{ width: 50, height: 50 }} src={bmaWhite} alt="Logo" />
        <div className="footer-copyright">
          <p>&copy; 2023 BoostMyAthlete</p>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            {/* <a href="#" style={{ color: "#A0ABC0" }}>
              Privacy Policy
                </a> */}
          </li>
          <li>
            {/* <a href="#" style={{ color: "#A0ABC0" }}>
              Terms &amp; Conditions
            </a>
              */}
          </li>
          <li>
            {/* <a href="#" style={{ color: "#A0ABC0" }}>
              Cookie Policy
            </a>
            */}
          </li>
          <li>
            {/* <a href="#" style={{ color: "#A0ABC0" }}>
              Contact
            </a>
          */}
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <a href="https://www.instagram.com/">
              <Instagram color="#E1306C" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <Facebook color="#3B5998" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <Twitter color="#1DA1F2" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

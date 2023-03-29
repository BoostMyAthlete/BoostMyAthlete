import React from "react";
import "../App.css";
import logo from "@assets/logoBlack.png";

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
          </li>
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

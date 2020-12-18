import React from "react";
import GidaraLogo from "../assets/gidara-logo.png";
import { FaTwitter, FaInstagram, FaGoogle, FaFacebookF } from "react-icons/fa";

const Footer = () => (
  <div className="footer-section">
    <div className="section-content">
      <div className="footer-content__navs">
        <div>
          <span>Store</span>
          <ul>
            <li>Catalog</li>
            <li>Popular</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <span>About</span>
          <ul>
            <li>Catalog</li>
            <li>Popular</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <span>Catalog</span>
          <ul>
            <li>Catalog</li>
            <li>Popular</li>
            <li>Features</li>
          </ul>
        </div>
      </div>
      <div className="footer-content__logo">
        <div className="logo">
          <img src={GidaraLogo} alt="logo" />{" "}
        </div>
        <div className="footer-content__logo-text">
          <span>Gidara</span>
          <p className="tiny-text">Your music career success partner</p>
        </div>
      </div>
    </div>
    <div className="footer-content__tm">
      <h5>© 2018. All rights reserved</h5>
      <div className="social-links">
        <FaTwitter />
        <FaFacebookF />
        <FaGoogle />
        <FaInstagram />
      </div>
    </div>
  </div>
);

export default Footer;

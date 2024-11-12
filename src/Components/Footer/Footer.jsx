// import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="" alt="logo" />
          <p>
            dsjgfjsdvafhvjdshgfhgdshgf hgdshafjdsgfhdsjhgfjhsdghfgslh
            djgfjsdjgfsjdgfjs
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="" alt="user-icon" />
            <input type="email" placeholder="Enter Your Email:" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 Rohan Pengonda All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

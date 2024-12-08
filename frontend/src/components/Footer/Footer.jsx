import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            laudantium quae, rerum fugit ut quaerat exercitationem eum sint nisi
            asperiores iste voluptates quia cum ducimus ipsum voluptate,
            distinctio blanditiis saepe.
          </p>
          <div className="social-media-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+250-791-954-372</li>
            <li>volonterwicha123@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright-desc">
        Copyright 2024 &copy; volonte rwicha - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

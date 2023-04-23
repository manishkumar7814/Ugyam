import React from "react";
import "./App.css"
import logo1 from '../Images/logo1.jpg';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-body">
    <div className="footer-wrapper">
      <div className="footer-section-one">
        {/* <div className="footer-logo"> */}
          <img className="footer-logo" src={logo1} alt="" />
        {/* </div> */}
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Home</span>
          <span>About Us</span>
          <span>Booking</span>
          <span>Contact Us</span>
          <span>Our Services</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@Ugyam.com</span>
          <span>press@Ugyam.com</span>
          <span>contact@Ugyam.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
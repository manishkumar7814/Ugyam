import React from "react";
import Header from "./../components/Layout/Header";
import Footer from "./../components/Layout/Footer";
import "./Contact.css"

const Contact = () => {
  return (
        <>
        <div className="contact-body">
        <Header></Header>
        <div className="contact-page-wrapper">
          <h1 className="primary-heading">Contact Us</h1>
          <h3 className="primary-heading">Let Us Help You</h3>
          <div className="contact-form-container">
              <input type="text" placeholder="Enter your Name" />
              <input type="text" placeholder="yourmail@gmail.com" />
              <input type="number" placeholder="Enter your Phone Number" />
              <textarea name="textarea" rows="3" cols="4" placeholder="How can we help you?"></textarea>
              <button className="secondary-button">Submit</button>
          </div>
      </div>
      <Footer></Footer>
      </div>
      </>
  );
};

export default Contact;
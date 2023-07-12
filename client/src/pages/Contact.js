import React, { useRef } from "react";
import Header from "./../components/Layout/Header";
import Footer from "./../components/Layout/Footer";
import "./Contact.css";
import {BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md';
import {AiTwotonePhone} from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nhwamwm', 'template_2m0mf5g', form.current, 'L1fEMVArXZ9eD3PtO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      alert("message sent succesfully");
    };
  return (
        <>
        <div className="contact-body">
        <Header></Header>
        <div className="contact-page-wrapper">
          <h1 className="primary-heading">Contact Us</h1>
          <h3 className="primary-heading1">Let's Connect</h3>
          <div className="contact-form-container">
            <form ref={form} onSubmit={sendEmail}>
              <input type="name" name="name" placeholder="Enter your Name" />
              <input type="email" name="email" placeholder="yourmail@gmail.com" />
              <input type="phone" name="phone" placeholder="Enter your Phone Number" />
              <textarea name="message" rows="3" cols="4" placeholder="How can we help you?"></textarea>
              <button type="submit" className="secondary-button">Submit</button>
            </form>
          </div>
      <div className="container contact_container">
        <div className="contact_text">
          <h3>OR</h3>
          <h5>Get in touch with...</h5>
        </div>
        <div className="contact_options">
        <div className="contact_option">
            <MdOutlineEmail />
            <a href="mailto:hwymansihkumar@gmail.com" target="_blank">Email</a>
          </div>
          <div className="contact_option">
            <BsWhatsapp />
            <a href="https://wa.me/+918910515541" target="_blank">WhatsApp</a>
          </div>
          <div className="contact_option">
            <AiTwotonePhone />
            <a href="tel: +918910515541" target="_blank">Phone</a>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
      </div>
      </>
  );
};

export default Contact;
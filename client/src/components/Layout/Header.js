import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { message } from "antd";
import logo1 from '../Images/logo1.jpg';
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    
  ];
  const handleAnchorClick = event => {
    // 👇 use event.preventDefault() if you want to
    // prevent navigation
    // event.preventDefault();

    console.log('Anchor element clicked');

    // 👇 refers to the link element
    console.log(event.currentTarget);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > */}
            {/* <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <Link className="navbar-brand" to="/"> */}
            <img src={logo1} className="logo-img" width={60} height={40} alt="" />
              
            <div className="navbar-links-container">
            <ul >
            <li>
            <Link to="/HomePage">
            <a >Home</a>
           </Link></li>
           <li>
            <Link to="/About">
            <a >About</a>
           </Link></li>
           <li>
            {/* <Link to="/Testimonial">
            <a >Testimonials</a> */}
            <Link to="/Vendors">
              <a>Vendors</a>
           </Link></li>
           <li>
            <Link to="/Contact">
            <a >Contacts</a>
           </Link></li>
           <li>
           <Link to='#'>
          <a onClick={handleAnchorClick}
        href="https://bobbyhadz.com"
        target="_blank"
        rel="noreferrer">Book Now</a></Link></li>
           </ul>
      </div>
      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div> */}
     
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {" "}
                <p className="nav-link">{loginUser && loginUser.name}</p>{" "}
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

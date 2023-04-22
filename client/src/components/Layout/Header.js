import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { message } from "antd";
import logo1 from './logo1.webp';
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
            <div className="navbar-links-container">
              {/* <div className="nav-logo"> */}
            <img src={logo1} width={70} height={35} alt="" margin-right={100}/>
            {/* </div> */}
            {/* <a href="/HomePage">Home</a> */}
            <div className="navbar-right">
            <Link to="/HomePage">
            <button className="btn btn-outline-success">Home</button>
           </Link>
            <Link to="/About">
            <button className="btn btn-outline-success">About</button>
           </Link>
            <Link to="/Testimonial">
            <button className="btn btn-outline-success">Testimonials</button>
           </Link>
            <Link to="/Contact">
            <button className="btn btn-outline-success">Contacts</button>
           </Link>
           {/* <a href="">Testimonials</a> */}
           {/* <a href="">Contact</a> */}
        <button className="primary-button">Book Now</button>
           </div>
        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
     
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

import React, {useState, Component} from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import big from "./../components/Images/big.jpg";
import small from "./../components/Images/small.jpg";
import corporate from "./../components/Images/corporate.jpg";
import './Slider.css';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';
import AboutCard from "./AboutCard";

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
      <Layout>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt=""
                        />
                       
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>

              <h1 className="heading">Events</h1>

        <div className="card text-center">
          <div className="card-main">
          <div className="overflow">
            <img src={small} alt="" />
          <div className="card-body text-dark">
            <h4 className="card-title">Small Event</h4>
            <p className="card-text text-secondary">
            Change of Control Event means the occurrence of an event or series of events whereby one or more Persons, 
            not being the Main Shareholders (or an Affiliate of the Main Shareholders), acting together, acquire control 
            over the Issuer and where "control" means (a) acquiring or controlling, directly or indirectly, more than 50
             per cent.
            </p>
            <Link to="/smallEvents" >
              <button className="btn btn-outline-success">See More</button>
            </Link>
              {/* <a href="/smallEvents" className="btn btn-outline-success">See More</a> */}
          </div>
          </div>
          <div className="overflow">
            <img src={big} alt="" />
          
          <div className="card-body text-dark">
            <h4 className="card-title">Big Event</h4>
            <p className="card-text text-secondary">
            Change of Control Event means the occurrence of an event or series of events whereby one or more Persons, 
            not being the Main Shareholders (or an Affiliate of the Main Shareholders), acting together, acquire control 
            over the Issuer and where "control" means (a) acquiring or controlling, directly or indirectly, more than 50
             per cent.
            </p>
            <Link to="/BigEvent" >
              <button className="btn btn-outline-success">See More</button>
            </Link>
            {/* <a href="#" className="btn btn-outline-success">See More</a> */}
          </div>
          </div>
          <div className="overflow">
            <img src={corporate} alt="" />
          
          <div className="card-body text-dark">
            <h4 className="card-title">Corporate Event</h4>
            <p className="card-text text-secondary">
            Change of Control Event means the occurrence of an event or series of events whereby one or more Persons, 
            not being the Main Shareholders (or an Affiliate of the Main Shareholders), acting together, acquire control 
            over the Issuer and where "control" means (a) acquiring or controlling, directly or indirectly, more than 50
             per cent.
            </p>
            <Link to="/Corporate" >
              <button className="btn btn-outline-success">See More</button>
            </Link>
            {/* <a href="#" className="btn btn-outline-success">See More</a> */}
          </div>
          </div>
        </div>
        </div>
        {/* <Link to="/About"></Link> */}
        {/* <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section> */}
        
    </Layout>
    )
};

export default HomePage;

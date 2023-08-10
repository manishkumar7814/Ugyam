import React, {useState, useEffect, useRef} from "react";
import Footer from "./../components/Layout/Footer";
import Layout from "./../components/Layout/Layout";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import big from "./../components/Images/big.jpg";
import small from "./../components/Images/small.jpg";
import photographer from "./../components/Images/photographer.jpeg";
import corporate from "./../components/Images/corporate.jpg";
import './Slider.css';
import dataSlider from './dataSlider';
import video from "./../components/Images/video.mp4";
import Testimonial from "./Testimonial";
import axios from "axios";
import Spinner from "../components/Spinner";


const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const timeoutRef = useRef(null);
  const delay = 2500;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/review/homepage", values);
      // console.log(values);
      message.success("Reviewed Successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Please fill all required fields");
    }
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
    () =>
    setSlideIndex((prevSlide) =>
     prevSlide === dataSlider.length  ? 1 : prevSlide + 1),
    
    delay);
  
  }, [slideIndex]);


    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(() => {
      if (!localStorage.getItem("user")) {
        message.error("Please login to review");
      }
    }, [navigate]);

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

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
                  <section class="third">
                          <h2 className="third_head"><span className="sp">Customize&nbsp;</span> your own Event</h2>
                          <p className="para2">Design a professional and customized look for your booking website. Choose from our beautiful brand new 
                      fully responsive templates to fit your company brand. You can even choose the
                       most convenient way for your clients to see your booking availability such as by class, time or staff.</p>
                      <div class="container">
                        <div class="left-content">
                          <ul className="third_ul">
                            <li>Arrangements according to your venue</li><br/>
                            <li>Choose from a variety of service providers</li><br/>
                            <li>Talk to any service providers</li><br/>
                            <li>No Convenience Charge</li><br/>
                            {/* <li>Book service providers</li><br/> */}
                            <li>Ask for recommendation</li><br/>
                            <li>Arrangements according to events type</li>
                          </ul>
                            <a class="cta" href="#">Start Booking »</a>
                        </div>
                        <div class="right-img">
                        <video width="560" height="315" controls>
                          <source src={video} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        </div>
                      </div>   
                    </section> 

        <section className="hfour">
          <h4>Events&nbsp;<span className="sp">Categories</span> </h4>
          <div className="card text-center">
          <div className="card-main">
          <div className="overflow">
            <img src={photographer} alt="" />
          <div className="card-body text-dark">
            <a><h3>Photographer</h3>
                  <p className="card_para">Our Photographers use top-of-the-line camera equipment, lenses, and lighting gear to ensure the best 
                    possible results. My goal is to provide clients with exceptional photographers that they can cherish for a lifetime.</p>
                    </a>
            </div>
            </div>
          <div className="overflow">
            <img src={photographer} alt="" />
          <div className="card-body text-dark">
            <a><h3>Makeup</h3>
                  <p className="card_para">As a makeup artist specializing in event makeup, we provide professional makeup services for various occasions. 
                    Here's what you can expect from our makeup services:<br/><i>Bridal Makeup, Party and Special Occasion Makeup,
                      Group Makeup Services and many more.</i></p>
                    </a>
            </div>
            </div>
          <div className="overflow">
            <img src={photographer} alt="" />
          <div className="card-body text-dark">
            <a><h3>Makeup</h3>
                  <p className="card_para">As a makeup artist specializing in event makeup, we provide professional makeup services for various occasions. 
                    Here's what you can expect from our makeup services:<br/><i>Bridal Makeup, Party and Special Occasion Makeup,
                      Group Makeup Services and many more.</i></p>
                    </a>
            </div>
            </div>
            </div>
            <div className="card-main">
          <div className="overflow">
            <img src={photographer} alt="" />
          <div className="card-body text-dark">
            <a><h3>Makeup</h3>
                  <p className="card_para">As a makeup artist specializing in event makeup, we provide professional makeup services for various occasions. 
                    Here's what you can expect from our makeup services:<br/><i>Bridal Makeup, Party and Special Occasion Makeup,Fashion and Editorial Makeup
                    ,Makeup Consultations and Trials,Makeup for Special Effects and Cosplay,Group Makeup Services and many more.</i></p>
                    </a>
            </div>
            </div>
          <div className="overflow">
            <img src={photographer} alt="" />
          <div className="card-body text-dark">
            <a><h3>Makeup</h3>
                  <p className="card_para">As a makeup artist specializing in event makeup, we provide professional makeup services for various occasions. 
                    Here's what you can expect from our makeup services:<br/><i>Bridal Makeup, Party and Special Occasion Makeup,
                      Group Makeup Services and many more.</i></p>
                    </a>
            </div>
            </div>
          <div className="overflow">
            <img src={photographer} alt="" />
          <div className="card-body text-dark">
            <a><h3>Makeup</h3>
                  <p className="card_para">As a makeup artist specializing in event makeup, we provide professional makeup services for various occasions. 
                    Here's what you can expect from our makeup services:<br/><i>Bridal Makeup, Party and Special Occasion Makeup,
                      Group Makeup Services and many more.</i></p>
                    </a>
            </div>
            </div>
            </div>
          </div>
        </section>

        <section className="hfive">
          <h2 className="third_head">Why to Choose <span className="sp">&nbsp;Ugyam</span></h2>
          <p className="five_para">Dulhaniyaa is a leading Indian wedding planning website with 1000’s of vendors 
          competing for hosting your perfect wedding in budgets that suit you. If you are in search of vendors for your
           wedding and related ceremonies then your search ends here as we have various categories and every category has
            the top wedding vendors.</p>

          <p className="five_para"> This Indian Wedding Planning Website brings equal style and detail to every wedding 
          and related event – consulting, designing & coordinating everything from the venue to the theme; the first 
          dance to the last goodbye and there will be no disappointment with the work done by the vendors.</p>

          <p className="five_para">Now you can choose Dulhaniyaa services to help you save and choose the best from our
           in-house wedding related services. Strategically divided into 5 segments with our best services, you won't
            need to spend hours planning a wedding anymore.</p>

          <p className="five_para">•<b>Dulhaniyaa Wedding Stories:</b>When we plan, design, style & execute your weddings,
           we not only burn our midnight oil to make it perfect & flawless for you, we put our soul in it too! Same goes 
           for the Wedding Photography & Videography Services from the House of Dulhaniyaa. Be it your Pre-Wedding Shoots 
           or your Wedding & Pre-Functions Photography, you can expect nothing but only the best from our passionate & 
           professional crew loaded with the best & latest equipment’s. Experience our DIY booking format on our website
            today and build your shoot package step-by-step. Now you pay only for what you buy and enjoy your shoots like 
            never before!</p>

          <p className="five_para"><b>•Dulhaniyaa Makeup Masters:</b> At DULHANIYAA MAKEUP MASTERS, we have a very lengthy 
          process to evaluate our artists for their training, experience, work quality, customer friendliness and 
          professionalism, before they qualify to go out and work for you. We specialise in doing Party Makeups, Pre
           Wedding Shoot Makeups, Bridal Makeups, Family Makeups & Hair Styling services. So now, you don’t need to make
            booking with different artists for booking simple makeups for your sister/ mom and HD Makeup or Airbrush 
            Makeup for the bride. We are one stop for hiring makeup artists for your entire family at the best prices
             with very high quality artists using only international cosmetic brands.</p>

          <p className="five_para"><b>• Dulhaniyaa Models:</b> At Dulhaniyaa Models we do portfolio shoots which will make you 
          look like a real model. All the youngsters who want their best portfolio can contact us and we will make sure 
          that our services will just create the best of you. You can share your ideas and desires of what exactly you
           want in your portfolio shoot and our expert in-house team of photography will make it more innovative which
            will meet your expectations.</p>

          <p className="five_para"><b>• Dulhaniyaa Shaadi Stylists:</b> It’s wedding time in family, half the bookings are yet
           to be confirmed & your budget has already gone over than you decided. Our expertise of managing & styling more
            than 500 flawlessly executed weddings over the last two decades allows us to bring our expertise at your 
            service in a very cost competitive way. All our services can be booked online, in a transparent manner and 
            now you can avail EASY EMI’s too. Manage your weddings with zero stress & enjoy them too! We bring an Industry
             First Wedding Planning Fee starting from as low as 2.5% of your total event budget.</p>

          <p className="five_para"><b>•Dulhaniyaa Matrimony:</b> Welcome to Dulhaniyaa Matrimony. Every life has its own charm
           in each and every stage and a married life is no exception. Marriage is an institution, which initiates the 
           authentic and real values of life. Traditionally in India, a marriage is usually arranged by the family or
            Relatives of the bride or the groom within a particular known circle. But today’s nomad life has narrowed 
            this choice and hence wedding websites lead an important role. Dulhaniyaa.com helps you find your perfect 
            match. We offer India’s First GUARANTEED MATCH MAKING SERVICE. We charge only if we get you matched with 
            someone through us. Happy Matching!</p>

        </section>

          <h3 className="heading">Events</h3>
        <div className="card text-center">
          <div className="card-main">
          <div className="overflow">
            <img src={small} alt="" />
          <div className="card-body text-dark">
            <h4 className="card-title">Small Event</h4>
            <p className="card_para">
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
            <p className="card_para">
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
            <p className="card_para">
            Change of Control Event means the occurrence of an event or series of events whereby one or more Persons, 
            not being the Main Shareholders (or an Affiliate of the Main Shareholders), acting together, acquire control 
            over the Issuer and where "control" means (a) acquiring or controlling, directly or indirectly, more than 50
             per cent.
            </p>
            <Link to="/Corporate" >
              <button className="btn btn-outline-success">See More</button>
            </Link>
          </div>
          </div>
        </div>
        </div>

        <Testimonial></Testimonial>

        <div className="title">
        <h3>Please&nbsp;<span className="sp">review</span>&nbsp;our <span className="sp">Services</span></h3>
      </div>
        <div className="user-review">
      <div className="review-form">
          <Form layout="vertical" onFinish={submitHandler}>
          <Form.Item name="name">
            <Input type="name" placeholder="Please enter your name" required />
          </Form.Item>
          <Form.Item name="post">
            <Input type="post" placeholder="Designation like student, Developer,.." required/>
          </Form.Item>
          <Form.Item name="review">
            <Input type="review" placeholder="Please write your valuable review" required/>
          </Form.Item>
          <Form.Item name="upImg" label="Please upload your image: ">
            <Input type="file" className="filename" ></Input>
          </Form.Item>
            <button type="submit" className="secondary-button">Review</button>
            </Form>
            </div>
        </div>

        <Footer></Footer>
     </Layout>
    )
};

export default HomePage;

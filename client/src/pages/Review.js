import React, {useState, useEffect} from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Review = () => {   
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

const submitHandlers = async (values) => {
    try {
      setLoading(true);
      await axios.post("/review/feedback", values);
      // console.log(values);
      message.success("Reviewed Successfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Please check...");
    }
  };

  
    useEffect(() => {
      if (!localStorage.getItem("user")) {
        message.error("Please login to review");
      }
    }, [navigate]);


    return(
    <div className="user-review">
        {loading && <Spinner />}
      <div className="review-form">
          <Form layout="vertical" onFinish={submitHandlers}>
          <Form.Item name="name">
            <Input type="name" placeholder="Please enter your name" required />
          </Form.Item>
          <Form.Item name="post">
            <Input type="post" placeholder="Designation like student, Developer,.." required/>
          </Form.Item>
          <Form.Item name="reviewed">
            <Input type="reviewed" placeholder="Please write your valuable review" required/>
          </Form.Item>
          {/* <Form.Item name="upImg" label="Please upload your image: ">
            <Input type="file" className="filename" ></Input>
          </Form.Item> */}
            <button type="submit" className="secondary-button">Review</button>
            </Form>
            </div>
        </div>

    );
};

export default Review;
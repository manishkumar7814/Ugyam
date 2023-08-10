const userModel = require("../models/userModel");
const reviewModel = require("../models/reviewModel");

// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//Review Callback
const reviewController = async (req, res) => {
  try {
    console.log(req.body);
    const{name,post,review} = req.body;
    console.log(name,post,review);
    const newReview = new reviewModel({name,post,review,profile:null});
    const treview = await newReview.save();
    // await newReview.save();
    res.status(201).json({
      success: true,
      newReview,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController, reviewController};

const reviewModel = require("../models/reviewModel");

//Review Callback
const reviewController = async (req, res) => {
    try {
      // console.log(req.body);
      const newReview = new reviewModel(req.body);
      await newReview.save();
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

  module.exports = {reviewController};
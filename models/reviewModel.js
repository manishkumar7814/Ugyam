const mongoose = require("mongoose");
//schema design
const reviewSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "name is required"],
      },
      post: {
        type: String,
        required: [true, "email is required and should be unique"],
        unique: true,
      },
      reviewed: {
        type: String,
        required: [true, "password is required"],
      },
      // profile: {
      //   type: File
      // },
    },
    { timestamps: true }
  );
  
  //export
  const reviewModel = mongoose.model('review', reviewSchema);
  module.exports = reviewModel;
  
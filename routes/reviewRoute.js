const express = require("express");
const {
  reviewController,
} = require("../controllers/reviewController");

//router object
const router = express.Router();


//POST || REVIEW USER
router.post("/feedback", reviewController);


module.exports = router;
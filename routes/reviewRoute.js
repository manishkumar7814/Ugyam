const express = require("express");
const {
  reviewController,
} = require("../controllers/userController");

//router object
const router = express.Router();


//POST || REVIEW USER
router.post("/homepage", reviewController);
module.exports = router;
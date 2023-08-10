const express = require("express");
const {
  loginController,
  registerController,
  reviewController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);

//POST || REVIEW USER
// router.post("/homepage", reviewController);

module.exports = router;

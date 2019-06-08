// Route file for user login and signup

const loginController = require("../controller/login");
const signupController = require("../controller/signup");

const express = require("express");
const router = express.Router();
//route for signup
router.post("/signup", signupController());

//route for login
router.post("/login", loginController());

module.exports = router;

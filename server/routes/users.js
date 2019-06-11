// Route file for user login and signup

const loginController = require("../controller/login");
const signupController = require("../controller/signup");
const passportGithub = require("../controller/github");

const express = require("express");
const router = express.Router();
//route for signup
router.post("/signup", signupController());

//route for login
router.post("/login", loginController());

//route for signup with GitHub
router.get(
	"/signup-with-github",
	passportGithub.authenticate("github", { scope: ["user:email"] })
);

router.get(
	"/signup-with-github/callback",
	passportGithub.authenticate("github", { failureRedirect: "/login" }),
	function(req, res) {
		// Successful authentication
		res.json(req.user);
	}
);

module.exports = router;

const { body } = require("express-validator/check");

const signupValidation = {
	user_id: body("user_id")
		.not()
		.isEmpty()
		.withMessage("Can not be empty")
		.isLength({ min: 2 })
		.withMessage("Must be at least 2 characters"),
	email: body("email")
		.isEmail()
		.withMessage("Invalid email"),
	password: body("password")
		.isLength({ min: 8 })
		.withMessage("Invalid password")
};

module.exports = signupValidation;

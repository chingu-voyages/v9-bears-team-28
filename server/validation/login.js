const { body } = require("express-validator/check");

const loginValidation = {
	email: body("email")
		.not()
		.isEmpty()
		.withMessage("Email is required")
		.isEmail()
		.withMessage("Invalid email"),
	password: body("password")
		.not()
		.isEmpty()
		.withMessage("Password is required")
		.isLength({ min: 8 })
		.withMessage("Invalid password")
};

module.exports = loginValidation;

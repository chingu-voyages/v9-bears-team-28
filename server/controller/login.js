// @route POST /api/users/login
// @desc Login user and return JWT token
//@access PUBLIC
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator/check");
const jwt = require("jsonwebtoken");

const loginValidation = require("../validation/login");

const keys = require("../config/keys");

module.exports = () => {
	return [
		loginValidation.email,
		loginValidation.password,

		(req, res) => {
			let errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json(errors.array());
			}
			const email = req.body.email;
			const password = req.body.password;

			//Check if user exists by email
			User.findOne({ email }).then(user => {
				if (!user) {
					return res.status(404).json({
						incorrectEmail: "Email not found"
					});
				}

				//Check password
				bcrypt.compare(password, user.password).then(isMatch => {
					if (isMatch) {
						//Password matches ,create JWT payload
						const payload = {
							id: user.id,
							user_id: user.user_id
						};

						//Signing JWT token
						jwt.sign(
							payload,
							keys.secretOrKey,
							{
								expiresIn: 31556926
							},
							(error, token) => {
								res.json({
									success: true,
									token: "Bearer " + token
								});
							}
						);
					} else {
						return res.status(400).json({
							incorrectPassword: "Incorrect Password"
						});
					}
				});
			});
		}
	];
};

//Load User model
const User = require("../models/User");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator/check");

//Load register user validation
const signupValidation = require("../validation/signup");

module.exports = () => {
	return [
		signupValidation.user_id,
		signupValidation.email,
		signupValidation.password,

		(req, res) => {
			let errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json(errors.array());
			}

			User.findOne({ email: req.body.email }).then(user => {
				if (user) {
					return res.status(400).json({ email: "Email already exists" });
				} else {
					const newUser = new User({
						user_id: req.body.user_id,
						email: req.body.email,
						password: req.body.password
					});

					//Hashing password before persisting in DB
					bcrypt.genSalt(10, (error, salt) => {
						bcrypt.hash(newUser.password, salt, (error, hash) => {
							if (error) throw error;
							newUser.password = hash;
							newUser
								.save()
								.then(user => res.json(user))
								.catch(error => console.log(error));
						});
					});
				}
			});
		}
	];
};

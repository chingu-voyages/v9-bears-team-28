const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;

const User = require("../models/User");
const config = require("../config/socialID");
const init = require("./init");

passport.use(
	new GitHubStrategy(
		{
			clientID: config.github.clientID,
			clientSecret: config.github.clientSecret,
			callbackURL: config.github.callbackURL
		},
		function(accessToken, refreshToken, profile, done) {
			const searchQuery = {
				user_id: profile.username
			};

			const updates = {
				name: profile.displayName,
				user_id: profile.username,
				email: profile.email
			};

			const options = {
				upsert: true
			};
			//Either update existing or create a new User
			User.findOneAndUpdate(searchQuery, updates, options, function(err, user) {
				if (err) {
					return done(err);
				} else {
					return done(null, user);
				}
			});
		}
	)
);

//Serialize user into the session
init();

module.exports = passport;

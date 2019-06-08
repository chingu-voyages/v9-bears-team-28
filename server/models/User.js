const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create user schema
const UserSchema = new Schema({
	user_id: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: "member"
	},
	timeStamp: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model("User", UserSchema);

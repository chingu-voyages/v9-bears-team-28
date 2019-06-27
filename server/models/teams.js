const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user schema
const TeamSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	tier: String,
	members: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
		},
	],
	githubRepo: [
		{
			type: String,
		},
	],
	imageUrl: {
		type: String,
		default:
			'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwj7_svFjIrjAhWUWisKHbJ3CQAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.industryweek.com%2Fleadership%2Fbuilding-better-leadership-team-through-trust-and-quickly-resolving-conflict&psig=AOvVaw1Tue6Sy92rKJbgUGHR_5OC&ust=1561739859485174',
	},
	voyageId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'voyage',
	},
	projects: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'projects',
		},
	],
});

module.exports = mongoose.model('team', TeamSchema);

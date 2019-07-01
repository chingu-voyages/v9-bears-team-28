const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
	title: {
		type: String,
		default: '',
	},
	description: String,
	projectMembers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
		},
	],
	deploymentUrl: String,
	githubUrl: String,
	voyageId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'voyage',
	},
	imageUrl: {
		type: String,
		default: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
	},
	sprints: [
		{
			title: String,
			description: String,
			startDate: String,
			endDate: String,
		},
	],
});

module.exports = mongoose.model('projects', projectSchema);

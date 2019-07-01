const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
	title: {
		type: String,
		default: '',
	},
	description: String,
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

module.exports = mongoose.model('ticket', ticketSchema);

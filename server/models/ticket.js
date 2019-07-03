const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
	title: {
		type: String,
		default: '',
	},
	description: String,
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	onHold: { type: Boolean, default: false },
});

module.exports = mongoose.model('ticket', ticketSchema);

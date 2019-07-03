const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
	title: {
		type: String,
		default: '',
	},
	description: String,
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	onHold: { type: Boolean, default: false },
	accept: { type: Boolean, default: false },
	reject: { type: Boolean, default: false },
	admin_notes: { type: String, default: '' },
});

module.exports = mongoose.model('ticket', ticketSchema);

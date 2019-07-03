var express = require('express');
var router = express.Router();
const Ticket = require('../models/ticket');

router.get('/', async (req, res) => {
	try {
		const resp = await Ticket.find({});
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the tickets' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.post('/', async (req, res) => {
	const newTicket = new Ticket({
		title: req.body.title,
		description: req.body.description,
		createdBy: req.body.userId,
	});
	try {
		await newTicket.save();
		res.status(200).send({ message: 'Ticket is successfully created' });
	} catch (error) {
		console.log(error);
	}
});

router.put('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Ticket.findByIdAndUpdate(id, req.body, { new: true }, function(err, model) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
			res.status(200).send(model);
		});
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Ticket.remove({ _id: id }, function(err) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
			res.status(200).send({ msg: 'Successfully deleted ticket' });
		});
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

module.exports = router;
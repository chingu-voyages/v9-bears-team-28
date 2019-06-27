var express = require('express');
var router = express.Router();
const Team = require('../models/teams');

router.get('/', async (req, res) => {
	try {
		const resp = await Team.find({});
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the teams' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		console.log(id);
		const resp = await Team.findOne({ _id: id });
		console.log(resp);
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the team' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const newTeam = new Team({
			name: req.body.name,
            tier: req.body.tier,
            members:req.body.members,
            voyageId:req.body.voyageId
		});
		console.log(newTeam);
		try {
			await newTeam.save();
			res.status(200).send({ message: 'Team is successfully created' });
		} catch (error) {
			console.log(error);
		}
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Team.findByIdAndUpdate(id, req.body, { new: true }, function(err, resp) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
			res.status(200).send(resp);
		});
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Team.remove({ _id: id }, function(err) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
			res.status(200).send({ msg: 'Successfully delete' });
		});
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

module.exports = router;

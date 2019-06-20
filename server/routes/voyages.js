var express = require('express');
var router = express.Router();
const Project = require('../models/project');
const Voyage = require('../models/voyage');

router.get('/', async (req, res) => {
	try {
		const resp = await Voyage.find({});
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the projects' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const newVoyage = new Voyage({
			name: req.body.name,
			description: req.body.description,
			startDate: req.body.startDate,
			endDate: req.body.endDate,
			participationNumber: req.body.participationNumber,
			articleLink: req.body.articleLink,
		});
		console.log(newVoyage);
		try {
			await newVoyage.save();
			res.status(200).send({ message: 'Voyage is successfully created' });
		} catch (error) {
			console.log(error);
		}
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.put('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Voyage.findByIdAndUpdate(id, req.body, { new: true }, function(err, resp) {
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
		await Voyage.remove({ _id: id }, function(err) {
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

router.post('/:id/add-project', async (req, res) => {
	try {
		let id = req.params.id;
		const newProject = new Project({
			title: req.body.title,
			description: req.body.description,
			deploymentUrl: req.body.deploymentUrl,
			githubUrl: req.body.githubUrl,
			voyageId: id,
		});
		console.log(newProject);
		try {
			const resp = await newProject.save();
			const updateResponse = await Voyage.findOneAndUpdate(
				{ _id: id },
				{ $push: { projects: resp._id } },
				{ new: true }
			);
			res.status(200).send({ msg: updateResponse });
		} catch (error) {
			console.log(error);
			res.status(400).send({ error });
		}
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.delete('/:voyageid/:projectid', async (req, res) => {
	try {
		let voyageId = req.params.voyageid;
		let projectId = req.params.projectid;
		await Voyage.update({ _id: voyageId }, { $pull: { projects: projectId } }, function(err, resp) {
			if (err) {
				console.log(err);
				return res.status(400).send(err);
			}
		});
		Project.deleteOne({ _id: projectId }, function(err) {
			if (err) {
				console.log(err);
			}
		});
		res.status(200).send({ msg: 'Successfully deleted' });
	} catch (err) {
		console.log(err);
		return res.status(400).send(err);
	}
});

module.exports = router;

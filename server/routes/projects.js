var express = require('express');
var router = express.Router();
const Project = require('../models/project');

router.get('/', async (req, res) => {
	try {
		const resp = await Project.find({});
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the projects' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.get('/single-project/:id', async (req, res) => {
	let id=req.params.id;
	try {
		const resp = await Project.findOne({_id:id});
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the projects' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.get('/:voyageId', async (req, res) => {
	let voyageId = req.params.voyageId;
	try {
		const resp = await Project.find({ voyageId: voyageId });
		if (resp) {
			return res.status(200).send(resp);
		}
		return res.status(400).send({ msg: 'error getting the projects' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

// router.post('/add-project', async (req, res) => {
// 	try {
// 		const newProject = new Project({
// 			name: req.body.name,
// 			description: req.body.description,
// 			deploymentUrl: req.body.deploymentUrl,
// 			githubUrl: req.body.githubUrl,
// 		});
// 		console.log(newProject);
// 		try {
// 			await newProject.save();
// 			res.status(200).send({ message: 'Project is successfully created' });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	} catch (err) {
// 		return res.status(400).send(err);
// 	}
// });

router.put('/:id', async (req, res) => {
	try {
		let id = req.params.id;
		await Project.findByIdAndUpdate(id, req.body, { new: true }, function(err, model) {
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

// router.delete('/:id', async (req, res) => {
// 	try {
// 		let id = req.params.id;
// 		await Project.remove({_id:id}, function(err) {
// 			if (err) {
//                 console.log(err);
// 				return res.status(400).send(err);
// 			}
// 			res.status(200).send({msg:"Successfully delete"});
// 		});
// 	} catch (err) {
// 		console.log(err);
// 		return res.status(400).send(err);
// 	}
// });

router.post('/:id/add-sprint', async (req, res) => {
	try {
		let id = req.params.id;
		let sprint = req.body.sprint;
		const project = Project.findOne({ _id: id });
		project.sprints.push(sprint);
		await project.save();
		res.status(200).send({ message: 'Project is successfully created' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.put('/:id/edit-sprint', async (req, res) => {
	try {
		let id = req.params.id;
		let sprintUpdated = req.body.sprint;
		const project = Project.findOne({ _id: id });
		project.sprints = sprintUpdated;
		await project.save();
		res.status(200).send({ message: 'Project is successfully updated' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

router.post('/:id/add-comment', async (req, res) => {
	try {
		let id = req.params.id;
		let comments = req.body.comments;
		const project = Project.findOne({ _id: id });
		project.comments = comments;
		await project.save();
		res.status(200).send({ message: 'Comments successfully added' });
	} catch (err) {
		return res.status(400).send(err);
	}
});

module.exports = router;

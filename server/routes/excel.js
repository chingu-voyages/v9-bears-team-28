var express = require('express');
var router = express.Router();
var xlsxtojson = require('xlsx-to-json');
// var xlstojson = require('xls-to-json');
var multer = require('multer');

function getValidRows(result) {
	let validRows = 0;

	for (let i = 0; i < result.length; i++) {
		let values = Object.values(result[i]);
		let entireRowEmpty = true;
		for (let str in values[i]) {
			if (str !== '') {
				entireRowEmpty = false;
				break;
			}
		}
		if (entireRowEmpty) {
			break;
		}
		validRows = validRows + 1;
	}
	result = result.slice(0, validRows);
	console.log(result);
	return { result, validRows };
}

router.get('/', function(req, res) {
	res.send('Hello World');
});

router.post('/xlstojson', function(req, res) {
	var upload = multer({
		dest: 'uploads/',
	}).single('file');

	upload(req, res, function(err) {
		xlsxtojson(
			{
				input: req.file.path, // input xls
				output: null, // output json
				lowerCaseHeaders: true,
			},
			function(err, result) {
				if (err) {
					res.json(err);
				} else {
					let resp = getValidRows(result);
					result = resp.result;
					let validRows = resp.validRows;
					res.json({ result, validRows });
				}
			}
		);
	});
});

module.exports = router;

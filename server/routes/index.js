//Main route file for each routes

const express = require("express");
const router = express.Router();
const voyages = require("./voyages");
const projects = require("./projects");
const excel=require("./excel");

router.use("/voyages", voyages);
router.use("/projects", projects);
router.use("/excel", excel);
router.use("/users", require("./users"));

module.exports = router;

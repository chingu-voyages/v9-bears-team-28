//Main route file for each routes

const express = require("express");
const router = express.Router();
const voyages = require("./voyages");
const projects = require("./projects");

router.use("/voyages", voyages);
router.use("/projects", projects);

router.use("/users", require("./users"));

module.exports = router;

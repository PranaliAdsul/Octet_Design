const express = require("express");
const router = express.Router();

const jobdataController = require("../controllers/controller.js");

// Create a new JobData
router.post("/", jobdataController.create);

// Retrieve all JobData
router.get("/", jobdataController.findAll);

module.exports = router;

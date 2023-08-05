const jobdata = require("../models/jobdata.js");

// Create and Save a new JobData
exports.create = (req, res) => {
  const { name, location, posted, applied, jobViews, daysLeft, premium, dateFormats } = req.body;

  // Create a new JobData instance
  const Jobs = new jobdata({
    name,
    location,
    posted,
    applied,
    jobViews,
    daysLeft,
    premium,
    dateFormats
  });

  // Save JobData in the database
  Jobs.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Some error occurred while creating the JobData.",
        error: err.message
      });
    });


};
// Retrieve all JobData from the database.
exports.findAll = (req, res) => {
  const job = req.body;

  jobdata.find(job)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving jobdata."
      });
    });
};
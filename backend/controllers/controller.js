const db = require("../models");
const JobData = db.JobData;

// Create and Save a new JobData
exports.create = (req, res) => {
  const { name, location, posted, applied, jobViews, daysLeft, premium, dateFormats } = req.body;

    // Create a new JobData instance
    const jobdata = new JobData({
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
    jobdata
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while creating the JobData.",
                error: err.message
            });
        });
    // const jobdata= new JobData({
    //     name: req.body,
    //     location: req.body,
    //     posted:  req.body,
    //     applied: req.body, 
    //     jobViews: req.body,
    //     daysLeft: req.body,
    //     premium: req.body,
    //     dateFormats: req.body,
    //   });
    
    //   // Save JobData in the database
    //   jobdata
    //     .save()
    //     .then(data => {
    //       res.send(data);
    //     })
    //     .catch(err => {
    //       res.status(500).send({
    //         message:
    //           err.message || "Some error occurred while creating the JobData."
    //       });
    //     });
     
};
// Retrieve all JobData from the database.
exports.findAll = (req, res) => {
    const job = req.body;
    
   JobData.find(job)
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



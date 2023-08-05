const mongoose = require("mongoose");

const jobDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    posted: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    applied: {
      type: Number,
    },
    jobViews: {
      type: Number,
    },
    daysLeft: {
      type: Number,
    },
    premium: {
      type: Boolean,
    },
    dateFormat: {
      type: String,
    },
  },
  { timestamps: true }
);

const JobData = mongoose.model("JobData", jobDataSchema);

module.exports = JobData; 
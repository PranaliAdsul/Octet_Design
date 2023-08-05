module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        location: String,
        posted: String,
        status: String,
        applied: Number,
        jobViews: Number,
        daysLeft: Number,
        premium: Boolean,
        dateFormat: String,
      },
      { timestamps: true }
    );
    const JobData = mongoose.model("JobData", schema);
    return JobData;
  };
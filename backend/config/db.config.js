const mongoose = require("mongoose");

// Define the MongoDB connection URL
const dbUrl = "mongodb+srv://pranuadsulst1137:Ijs1NdfPy4jvKJZo@octet-assignment.jwnf5kh.mongodb.net/test?retryWrites=true&w=majority";

// Set Mongoose's default Promise library
mongoose.Promise = global.Promise;

// Connect to the MongoDB database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectToDatabase;
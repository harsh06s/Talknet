const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); 
    const connection = await mongoose.connect(process.env.MONGO_URI );
    console.log(`MongoDB connected: ${connection.connection.host}`);

  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

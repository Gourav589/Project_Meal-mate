const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

const dbConfig = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1); // Exit process with failure
    }
}

module.exports = dbConfig;

require("dotenv").config();
const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require("mongoose");
const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");

    } catch (error) {

        console.error("MongoDB connection error:", error.message);

    }
};

module.exports = connectDB;
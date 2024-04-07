const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/";

const connectTOMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
    } catch (error) {
        console.log("Connection Faield",error);
    }
};

module.exports = connectTOMongoDB;

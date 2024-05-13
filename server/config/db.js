const mongoose = require('mongoose');
require("dotenv").config();
const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://hurairaFurqan:2K4A8eJkLGrc3H6M@mernstack.qicdj5n.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(console.log("MongoDB is connected"));
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
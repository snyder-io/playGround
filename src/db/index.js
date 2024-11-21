require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');
const MONGO_URI = process.env.MONGO_URI;

module.exports.connectDB = async () => {
    try {
        const uri = `${MONGO_URI}/${DB_NAME}`;
        await mongoose.connect(uri);
        console.log(`\n MongoDB is Connected. \n`);
        console.log();

    } catch (error) {
        console.error("MongoDB Connection Error: \n", error);
        process.exit(1);
    }
}

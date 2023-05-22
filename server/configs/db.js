const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/testDB').then(() =>
        console.log("connected successfully - testDB ")).catch(err => console.log(err))
    // const db = mongoose.connection;
    // db.on("error", console.error.bind(console, "connection error: "));
    // db.once("open", function () {
    //     console.log("Connected successfully");
    // });
}

module.exports = connectDB;
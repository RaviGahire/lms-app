
const mongoose = require('mongoose')

//create schema instance 
const userSchema = new mongoose.Schema({

    // Schema with validation
    "userName": {
        type: String,
        required: true

    },

    "email": {
        type: String,
        // required: true,
        // unique: true,
        lowercase: true,
        Date: new Date()
    },
    "password": {
        type: String,
        required: true,
        minlength: 8,

    },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("LMS_APP", userSchema, "LMS_APP_DATA")
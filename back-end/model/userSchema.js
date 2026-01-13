
const mongoose = require('mongoose')

//create schema instance 
const userSchema = new mongoose.Schema({

    // Schema with validation
    "userName": {
        type: String,
        unique: true,
    },

    "email": {
        type: String,
        unique: true,
        lowercase: true,
    },
    "password": {
        type: String,
        minlength: 5,
    },

    "profileImage": String,
    "profession": String,
    "college": String,
    "phone": Number,
    'createdAt': { type: Date, default: Date.now },
});

module.exports = mongoose.model("LMS_APP", userSchema, "LMS_APP_DATA")
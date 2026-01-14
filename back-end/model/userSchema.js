
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
       
    },
    "password": {
        type: String,
     
    },
    "role": {
        type: String,
        enum: ['student', 'instructor', 'admin'],
        default: 'student',
    },

    "profileImage": String,
    "profession": String,
    "college": String,
    "phone": Number,
    'createdAt': { type: Date, default: Date.now() },
});

module.exports = mongoose.model("LMS_APP", userSchema, "LMS_APP_DATA")
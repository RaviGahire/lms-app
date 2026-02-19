const mongoose = require('mongoose')

//create user schema instance 
const userSchema = new mongoose.Schema({
    // Schema with validation
    "userName": {
        type: String,
        // unique: true,
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
        enum: ['student', 'admin', 'super-admin'],
        default: 'student',
    },

    "profileImage": String,
    "college": String,
    "phone": String,
    "address": String,
    "gender": String,
    "college": String,
    "qualification": String,
    "nationality": String,
    "dob": String,
    isVerified: {
        type: Boolean,
        default: false
    },
    'createdAt': { type: Date, default: Date.now() },
});

// exported schema
module.exports = mongoose.model("LMS_APP", userSchema, "LMS_APP_DATA")
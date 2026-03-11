const mongoose = require('mongoose')

//created user schema instance 
const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: [true, "Username is required"],
        unique:true,
        trim: true,
        lowercase: true

    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true

    },
    password: {
        type: String,
        required: [true, "Password is required"]

    },
    role: {
        type: String,
        enum: ['student', 'admin', 'super-admin'],
        default: 'student',
        trim: true
    },

    avatar: {
        type: String,
        trim: true
    },

    college: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    college: {
        type: String,
        trim: true
    },
    qualification: {
        type: String,
        trim: true
    },
    nationality: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        trim: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },

},
    { timestamps: true }
);

// exported user_schema
module.exports = mongoose.model("LMS_APP", userSchema, "LMS_APP_DATA")
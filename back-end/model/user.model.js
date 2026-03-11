const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
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
        enum: ["'user','student', 'instructor', 'admin'"],
        default: 'user',
        trim: true
    },
    
    isVerified: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

const User = mongoose.model("User", userSchema)
module.exports = User
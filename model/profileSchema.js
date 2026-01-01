
const mongoose = require('mongoose')

//create schema instance 
const profileSchema = new mongoose.Schema({
    "profileImage": String,
    "profession": String,
    "college": String,
    "phone": Number,
    'createdAt': { type: Date, default: Date.now },
});

module.exports = mongoose.model("EDIT_PROFILE", profileSchema, "EDIT_PROFILE")
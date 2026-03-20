const mongoose = require("mongoose")

const instructorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bio: {
        type: String,
        trim: true
    },
    experience: {
        type: Number, 
        default: 0
    },
    expertise: {
        type: [String],
        default: []
    },
    phone: {
        type: String,
        trim: true
    },
    rating: {
        type: Number,
        default: 0
    },

    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ],


}, { timestamps: true })
const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
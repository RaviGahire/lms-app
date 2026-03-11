const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 0
    },
    instructor: [{
        type: mongoose.Types.ObjectId,
        ref: "Instructor"
    }],
    students: [{
        type: mongoose.Types.ObjectId,
        ref: "Student"
    }]

}, { timestamps: true })

const Course = mongoose.model("Course", courseSchema)
module.exports = Course;
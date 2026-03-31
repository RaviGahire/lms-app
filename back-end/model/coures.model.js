const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,

    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0

    },
    coverImage: {
        type: String,
        required: true,
        trim: true
    },

    createdBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],


    deletedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    enrolledBy: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Student"
        }
    ]

}, { timestamps: true })

const Course = mongoose.model("Course", courseSchema)
module.exports = Course;
const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    adminDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    avatar: {
        type: String,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    permissions: {
        type: [String],
        default: []
    },

}, { timestamps: true })

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
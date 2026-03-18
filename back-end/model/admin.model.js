const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
        default: ['edit','update','delete']
    },

}, { timestamps: true })

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
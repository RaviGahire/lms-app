const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    phone: {
        type: String,
        trim: true
    },
  

}, { timestamps: true })

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
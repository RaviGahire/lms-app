const mongoose = require('mongoose')

//created user schema instance 
const studentSchema = new mongoose.Schema({
    user: [{
      type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

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
 

},
    { timestamps: true }
);

// exported user_schema
const Student = mongoose.model("Student", studentSchema);
module.exports = Student
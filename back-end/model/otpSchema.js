const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    //   required: true,
    //   lowercase: true,
    //   index: true
    },

    otp: {
      type: String,
    //   required: true
    },

    isVerified: {
      type: Boolean,
    //   default: false
    },

 
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('AUTH_OTP', otpSchema);

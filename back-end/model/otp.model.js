const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required for OTP"],
      lowercase: true,
      trim:true

    },

    otp: {
      type: String,
      required: [true, "OTP is required"],
      trim:true
    },

  },
  {
    timestamps: true
  }
);

const OTP = mongoose.model('Auth_Opt', otpSchema);
module.exports = OTP


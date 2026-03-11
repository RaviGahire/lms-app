const OTP = require("../model/otp.model")
const User = require("../model/user.model")
const verifyUser = require("../utils/verifyUser")

exports.verifyUserOtp = async (req, res, next) => {
  try {
    //check from user
    const { email, otp } = req.body;
    console.log(email, otp)

    // check email and otp in body user given or not 
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required"
      });
    }

    //find user email in schema
    const findUserOtp = await OTP.findOne({ email });

    //user is in otp schema or not 
    if (!findUserOtp) {
      return res.status(400).json({
        success: false,
        message: "OTP not found or expired"
      });
    }

    // Check expiry of otp
    if (findUserOtp.expiresAt < new Date()) {
      await OTP.deleteOne({ email });
      return res.status(400).json({
        success: false,
        message: "OTP has expired"
      });
    }

    // Compare OTP 
    if (findUserOtp.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    //set user isverifed=true
    await verifyUser(email)

    await findUserOtp.save();
    // OTP is correct then go next
    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "OTP verification failed",
      error: error.message
    })
  }
}
const userSchema = require('../model/userSchema')
const generateOTP = require('../utils/generateOTP')
const gmailOTP = require('../utils/gmailOTP')
const otpSchema = require('../model/otpSchema')

exports.generateUserOTP = async (req, res, next) => {
  try {

    // user email 
    const { email } = req.body

    //check user email
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // called generateOTP function for otp
    const otp = await generateOTP();

    //if any error while generating otp
    if (!otp) {
      return res.status(400).json({
        success: false,
        message: "Failed to generate OTP"
      });
    }
    // Expiry time 5 minutes
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Delete old OTP if exists
    await otpSchema.deleteMany({ email });


    // save otp in db for veriftication 
    await otpSchema.create({
      email,
      otp,
      expiresAt
    });

    // Send OTP to Gmail 
    await gmailOTP(req.body.email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP generated successfully",
      otp: otp
    });

    next()

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate OTP",
      error: error.message
    });
  }
};


exports.verifyOtp = async (req, res, next) => {
  try {

    //check from user
    const { email, otp } = req.body;

    // check email and otp in body user given or not 
    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required"
      });
    }

    //find user email in schema
    const findUserOtp = await otpSchema.findOne({ email });

    //user is in otp schema or not 
    if (!findUserOtp) {
      return res.status(400).json({
        success: false,
        message: "OTP not found or expired"
      });
    }

    // Check expiry of otp
    if (findUserOtp.expiresAt < new Date()) {
      await otpSchema.deleteOne({ email });
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

    // change the isverified in true by deafult is false
    findUserOtp.isVerified = true;
    await findUserOtp.save();

    // // OTP is correct then go next
    // next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "OTP verification failed",
      error: error.message
    })
  }
}
const userSchema = require('../model/userSchema')
const generateOTP = require('../utils/generateOTP')
const gmailOTP = require('../utils/gmailOTP')


exports.sendOtp = async (req, res,next) => {
  try {
    // called generateOTP function 
    const otp = await generateOTP();

    //if any error while generating otp
    if (!otp) {
      return res.status(400).json({
        success: false,
        message: "Failed to generate OTP"
      });
    }

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
      message: "Internal server error",
      error: error.message
    });
  }
};


exports.verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required"
      });
    }

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.otp !== otp) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP"
      });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(401).json({
        success: false,
        message: "OTP expired"
      });
    }

    // OTP is correct
    next();

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "OTP verification failed"
    });
  }
};


const User = require("../model/user.model")
const bcrypt = require('bcrypt');
const OTP = require('../model/otp.model')
const OtpGenerator = require("../utils/OtpGenerator")
const SendEmailOtp = require("../utils/SendEmailOtp")
const jwt = require('jsonwebtoken');

//user signup
exports.userRegister = async (req, res) => {
  const { email, password, userName, } = req.body;
  try {

    if (!email || !userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check if user already exists
    const isExistingUser = await User.findOne({
      $or: [{ email }, { userName }]
    });

    // if user exists, return error
    if (isExistingUser) {
      return res.status(409).json({ message: "User with this email or username already exists" });
    }
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);


    // create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      userName,
    });

    // save user to database
    await newUser.save();
        return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser
    });


  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error"
    });
  }
}

// email verification otp
exports.generateEmailVerificationOtp = async (req, res) => {
  try {
    // user email 
    const { email } = req.body

    //check user email
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // called generateOTP function for otp
    const generatedOtp = await OtpGenerator();


    //if any error while generating otp
    if (!generatedOtp) {
      return res.status(400).json({
        success: false,
        message: "Failed to generate OTP"
      });
    }
    // Expiry time 5 minutes
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Delete old OTP if exists
    await OTP.deleteMany({ email });


    // save otp in db for veriftication 
    await OTP.create({ email, otp: generatedOtp, expiresAt });

    // Send OTP to Gmail 
    const sending = await SendEmailOtp(email, generatedOtp);
    // console.log(sending)

    if (!sending) {
      return res.status(400).json({
        success: false,
        message: "Error occured while sending OTP"
      })
    }


    return res.status(200).json({
      success: true,
      otp: generatedOtp, // remove after testing
      message: "OTP generated successfully",

    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to generate OTP",
      error: error.message
    });
  }
};

//login user
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {  // if user does not exist, return error
      return res.status(401).json({ success: false, message: "User not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);  // compare password

    if (!isPasswordValid) {//if password is invalid
      return res.status(401).json({ success: false, message: "Invalid password" });
    }
  
    if (user && isPasswordValid) { //verifying if both condition true then create jwt token
     
      // generate jwt token and payload
      const token = jwt.sign({
         _id: user._id, 
         userName: user.userName, 
         email: user.email, 
         role:user.roles, 
         isVerified:user.isVerified
        }, process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRES_IN }) 


      return res.status(200).json({ //sending user data 
        success: true,
        message: "User Logged In Successfully",
        token
      });
    }

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error"
    });
  }
}


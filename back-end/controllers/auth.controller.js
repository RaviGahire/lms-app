const User = require("../model/user.model")
const bcrypt = require('bcrypt')
const OTP = require('../model/otp.model')
const OtpGenerator = require("../utils/OtpGenerator")
const userVerificationOtp = require("../utils/UserVerificationOtp")
const jwt = require('jsonwebtoken')
const uploadOnCloudinary = require('../utils/Cloudinary')

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
      return res.status(409).json({
        success: false,
        message: "Email or username already exists"
      });
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
};

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
    const sending = await userVerificationOtp(email, generatedOtp);
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
    const { email, password, role } = req.body;

    const user = await User.findOneAndUpdate(
      { email: email },
      { $set: { roles: role } },
      { new: true }
    )

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
        role: user.roles,
        isVerified: user.isVerified,
        avatar:user.avatar
      }, process.env.JWT_ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES })


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
};

//current user pass the token 
exports.getCurrentUser = async (req, res) => {

  const loggedInUserId = req.user._id

  if (!loggedInUserId) {
    return res.status(400).json({ message: 'Current user not found' })
  }

  try {
    const user = await User.findById(loggedInUserId).select("-password")

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" })
    }


    return res.status(200).json({
      success: true,
      message: "Current user fetched successfully",
      data: user
    })

  } catch (error) {
    return res.status(500)
      .json({
        success: false,
        message: "Error accourd while fetching user profile",
        error: error.message
      })
  }
};

exports.getAllUsers = async (_, res) => {
  try {
    const users = await User.find().select("-password")

    if (users) {
      return res.status(200)
        .json({
          success: true,
          message: "Fetched all users successfully",
          user: users
        })
    }

  } catch (error) {
    return res.status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message
      })
  }

};


// CRUD OPS FOR ADMIN
//delete user 
exports.deleteUser = async (req, res) => {
  const userId = req.params.id
  // console.log(userId)
  try {

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// user account deletion request
exports.userAccountDeleteRequest = async (req, res) => {
  const userId = req.user._id
  // console.log(userId)
  try {
    //find the user 
    const user = await User.findById(userId)
      .select("-password -isVerified -roles -createdAt -updatedAt -_id")

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "We are unable to process your deletion request at this time"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Your request has been submitted successfully",
      data: user
    })
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

//update user details TODO : save in db deletion request
exports.updateUserAccountDetails = async (req, res) => {
  const userId = req.user._id
  const updatedData = req.body

  if (!(userId && updatedData)) {
    return res.status(401).json({ message: "Please provide required details" })
  }

  try {

    let avatarUrl = "";
    if (req.file && req.file.path) {
      const avatar = await uploadOnCloudinary(req.file.path);
      avatarUrl = avatar?.secure_url;
      updatedData.avatar = avatarUrl;
    }

    const user = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select("-password")

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found while updating data" })
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error"
    });
  }


};

//change current password
exports.changeCurrentUserPassword = async (req, res) => {
  const userId = req.user._id
  const { oldPassword, newPassword } = req.body

  if (!(userId && oldPassword && newPassword)) {

    return res.status(400).json({ success: false, message: "All fields are required" })
  }
  try {

    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      })
    }

    const isCorrectPassword = await bcrypt.compare(
      oldPassword,
      user.password
    )

    if (!isCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Old password is incorrect"
      })
    }

    // hash newpassword 
    const hashPass = await bcrypt.hash(newPassword, 10)

    const updatedPass = await User.findByIdAndUpdate(user._id, { $set: { password: hashPass } }, { new: true })

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
      data: updatedPass
    })

  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    })
  }
};

//forgot password 
exports.forgotPassword = async (req, res) => {

  const { email, userName, newPassword } = req.body

  if (!email && !userName) {
    return res.status(404).json({ success: false, message: "Username or email is required" })
  }

  if (!newPassword) {
    return res.status(404).json({ success: false, message: "Please provide password" })
  }

  try {

    const user = await User.findOne({ $or: [{ email }, { userName }] })

    if (!user) {
      return res.status(401).json({ message: "We are unable to findout your account" })
    }

    const hashPass = await bcrypt.hash(newPassword, 10)

    await User.findByIdAndUpdate(user._id, { $set: { password: hashPass } }, { new: true })

    return res.status(200).json({ success: true, message: 'Your password changed successfully' })

  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    })
  }

}

// get users by id 

exports.getUserById = async (req,res) => {
const userId = req.params.id


if(!userId){
  return res.status(400).json({
    success:false,
    message: "User ID parameter is missing"
  })
}

try {

 const users = await User.findById(userId)

if(!users){
  return res.status(404).json({
    success:false,
    message: "User not found"
  })
}

return res.status(200).json({
  success:true,
  message: 'User successfully fetched',
  users
})

  
} catch (error) {
  return res.status(500).json({
   success: false,
      message: "Internal Server Error",
      error: error.message
  })
  
}
}



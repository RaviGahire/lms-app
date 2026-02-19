const userSchema = require("../model/userSchema");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//user signup
exports.userRegister = async (req, res) => {
  try {
    // check if user already exists
    const { email, password, userName, } = req.body;
    const isExistingUser = await userSchema.findOne({ email: email });

    // if user exists, return error
    if (isExistingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    // create new user
    const newUser = new userSchema({
      email,
      password: hashedPassword,
      userName,
    });
    // save user to database
    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User create successfully",
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

//user login
exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });

    if (!user) {  // if user does not exist, return error
      return res.status(401).json({ success: false, message: "User not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);  // compare password

    if (!isPasswordValid) {//if password is invalid
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    const secretKey = process.env.JWT_SECRET //const secret key

    const expires = process.env.JWT_EXPIRES_IN // token expire duration

    if (user && isPasswordValid) { //verifying both conditions is true

      // if both condition true then create jwt token

      // generate jwt token 
      const token = jwt.sign({ userID: user._id, userName:user.userName, email: user.email, role: user.role, verified:user.isVerified }, secretKey, { expiresIn: expires }) // payload


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


// student dashboard 
exports.studentDashboard = async (req, res) => {

  try {
    return res.status(200).json({
      success: true,
      message: 'student logged in successfully'
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'No Permission'
    })

  }
}

//admin dashboard
exports.adminDashboard = async (req, res) => {

  try {
    return res.status(200).json({
      success: true,
      message: 'Admin logged in successfully'
    })

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'No Permission'
    })

  }
}

// for profile profile
exports.getProfile = async (req, res) => {

  // console.log(req.user)
  try {
    const id = req.user.userID // fetching from client localstorage 

    const user = await userSchema.findById(id).select("-password");



    if (!user) { // if user not in db
      return res.status(401).json({
        success: false,
        message: "User Not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "User data found from profile",
      data: user,

    })

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    })

  }


}
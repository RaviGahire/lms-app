const userSchema = require("../model/userSchema");
const bcrypt = require('bcrypt')


// exports.sendUersOtp = async (req, res,next) => {
//     try {
//         return res.status(200).json({
//             success: true,
//             message: "OTP send sucessfully"

//         })

//         next()
//     } catch (error) {

//         return res.status(500).json({
//             success: false,
//             message: "Internal server error",
//             error: error.message
//         })

//     }
// }
exports.userRegister = async (req, res) => {
  try {
    // check if user already exists
    const { email, password, userName, } = req.body;
    const isExistingUser = await userSchema.findOne({email:email });

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
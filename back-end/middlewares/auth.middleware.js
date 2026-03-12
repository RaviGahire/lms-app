const jwt = require("jsonwebtoken");
const User = require("../model/user.model")

exports.verifyJwtToken = async (req, res, next) => {

  const authHeader = req.headers.authorization // get bearer token from client

  // console.log(authHeader)

  if (!authHeader) {
    //check header
    return res.status(401).json({ success: false, message: "Authorization header is missing" });
  }

  const token = authHeader.split(" ")[1]; // split the token string and extract token

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token is missing" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    req.user = user; // adding new property to req
   
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

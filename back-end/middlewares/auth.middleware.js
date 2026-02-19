const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET; 

exports.verifyJwtToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // get bearer token from client
  // console.log(authHeader)

  if (!authHeader) {
    //check header
    res.status(401).json({ success: false, message: "Authorization header is missing" });
  }

  const token = authHeader.split(" ")[1]; // split the token string and extract token

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token is missing" });
  }

  try {
    const decoded = jwt.verify(token, secretKey); // verify
    req.user = decoded;

    // console.log('Token verifyed successfully')

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

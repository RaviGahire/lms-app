const express = require('express');
const router = express.Router();

// auth-controllers 
const { userRegister ,generateEmailVerificationOtp } = require('../controllers/auth.controller');
const { verifyUserOtp } = require('../middlewares/otp.middleware');

//Email and OTP verification routes
router.post('/send-email-otp', generateEmailVerificationOtp);
router.post('/verify-otp', verifyUserOtp,  (_, res) => {
  return res.status(200).json({success: true,message: "OTP verified successfully" });
});


//register user 
router.post('/register',userRegister);

//login user 






module.exports = router;

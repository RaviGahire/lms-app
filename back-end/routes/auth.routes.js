const express = require('express');
const router = express.Router();

// auth-controllers 
const { userRegister ,generateEmailVerificationOtp, userLogin, getCurrentUser, getAllUsers, deleteUser, userAccountDeleteRequest, changeCurrentUserPassword, forgotPassword, updateUserAccountDetails } = require('../controllers/auth.controller');
const { verifyUserOtp } = require('../middlewares/otp.middleware');
const { verifyJwtToken } = require('../middlewares/auth.middleware');

//Email and OTP verification routes
router.post('/send-email-otp', generateEmailVerificationOtp);
router.post('/verify-otp', verifyUserOtp,  (_, res) => {
  return res.status(200).json({success: true,message: "OTP verified successfully" });
});


//register user 
router.post('/register',userRegister);

//login user 
router.post('/login' , userLogin)

//current user 
router.get('/current-user',verifyJwtToken,getCurrentUser)
//all users
router.get('/all/users',getAllUsers)

//CRUD OPS ROUTES ON USER 

// update user details
router.post('/update-details',verifyJwtToken, updateUserAccountDetails)

//Admin can deleted user using id 
router.delete('/delete/u/:id',deleteUser)

//user request to delete account 
router.delete('/delete/request',verifyJwtToken, userAccountDeleteRequest)

//change current user password 
router.patch('/change/p' , verifyJwtToken , changeCurrentUserPassword)

router.patch("/forgot-password",forgotPassword)






module.exports = router;

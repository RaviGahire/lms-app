const express = require('express')
const router = express.Router()

// ─────────────────────────────────────────
// auth-controllers 
// ─────────────────────────────────────────
const {
  userRegister,
  generateEmailVerificationOtp,
  userLogin,
  getCurrentUser,
  getAllUsers,
  userAccountDeleteRequest,
  changeCurrentUserPassword,
  forgotPassword,
  updateUserAccountDetails,
  getUserById
} = require('../controllers/auth.controller')

const { verifyUserOtp } = require('../middlewares/otp.middleware')
const { verifyJwtToken } = require('../middlewares/auth.middleware')
const upload = require('../middlewares/multer.middlerware')

// ─────────────────────────────────────────
// OTP Routes
// ─────────────────────────────────────────
router.route('/otp/send').post(generateEmailVerificationOtp)
router.route('/otp/verify').post(verifyUserOtp, (_, res) => {
  return res.status(200).json({ success: true, message: "OTP verified successfully" })
})

// ─────────────────────────────────────────
// Auth Routes
// ─────────────────────────────────────────
router.route('/register').post(userRegister)
router.route('/login').post(userLogin)

// ─────────────────────────────────────────
// User Routes
// ─────────────────────────────────────────
router.route('/users').get(verifyJwtToken, getAllUsers)
router.route('/users/me')
  .get(verifyJwtToken, getCurrentUser)
  .patch(verifyJwtToken, upload.single('avatar'), updateUserAccountDetails)
  .delete(verifyJwtToken, userAccountDeleteRequest)

router.route('/users/:id').get(getUserById)

// ─────────────────────────────────────────
// Password Routes
// ─────────────────────────────────────────
router.route('/password/change').patch(verifyJwtToken, changeCurrentUserPassword)
router.route('/password/forgot').patch(forgotPassword)

// ─────────────────────────────────────────
// Exported All Routes
// ─────────────────────────────────────────
module.exports = router

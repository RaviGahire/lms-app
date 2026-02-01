const express = require('express');
const router = express.Router();

// Import user schema
const userSchema = require('../model/userSchema');

// Import bcrypt for password hashing
const bcrypt = require('bcrypt');
// auth-controllers 
const { userRegister, userLogin, adminDashboard,studentDashboard } = require('../controllers/authControllers')
// otp middleware 
const { generateUserOTP, verifyOtp } = require('../middlewares/otp.middleware');
// verify token middleware 
const { verifyJwtToken } = require('../middlewares/auth.middleware');


// Example route for authentication
router.get('/', (req, res) => {
    return res.status(200).json({ message: "Auth route is working" });
});

//generate-opt 
router.post('/generate-otp', generateUserOTP);

//verify-opt
router.post('/verify-otp', verifyOtp, (req, res) => {
    return res.status(200).json({ success: true, message: 'OTP verification Done Please Login' })
})

//register user 
router.post('/users/register', userRegister);

// login user 
router.post('/users/login',userLogin);

//admin dashboard 

const authorizedRoles = require('../middlewares/authorized.role');

router.get('/student-dashboard',verifyJwtToken ,authorizedRoles('student'),studentDashboard);

router.get('/admin-dashboard',verifyJwtToken ,authorizedRoles('admin'),adminDashboard);

// find all users 
router.get('/users', async (req, res) => {
    try {
        const users = await userSchema.find();
        return res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error"
        });
    }
});

// find user by id 
router.get('/users/:id', async (req, res) => {
    try {
        const user = await userSchema.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error"
        });
    }
});


// update user by id route
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await userSchema.findByIdAndUpdate(req.params
            .id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            success: true,
            message: "User updated  successfully",
            data: updatedUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error"
        });
    }
});

// delete user by id route
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await userSchema.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
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
            error: error.message,
            message: "Internal server error"
        });
    }
});


module.exports = router;

const express = require('express');
const router = express.Router();

// Import user schema
const userSchema = require('../model/userSchema');

// Import bcrypt for password hashing
const bcrypt = require('bcrypt');


// Example route for authentication
router.get('/', (req, res) => {

    try {
        return res.status(200).json({ message: "Auth route is working" });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }

})


// create user route
router.post('/users/register', async (req, res) => {
    try {
        // check if user already exists
        const { email, password, userName, } = req.body;
        const isExistingUser = await userSchema.findOne({ email: req.body.email });
        // if user exists, return error
        if (!isExistingUser) {
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

        return res.status(200).json({
            success: true,
            message: "Registration successful",
            data: newUser
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error"
        });
    }
});


// login user route
router.post('/users/login', async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await userSchema.findOne({ email: email });

        console.log(user);

        // if user does not exist, return error
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        // compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: user
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error"
        });
    }
});

// find all users route
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

// find user by id route
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

const express = require('express')
const router = express.Router()

// ─────────────────────────────────────────
// Instructor controllers
// ─────────────────────────────────────────
const {
    getInstructorProfile,
    updateInstructorProfile,
    checkEarnings,
    checkRating,
    getMostPopularCourses
} = require('../controllers/instructor.controller')

const { verifyJwtToken } = require('../middlewares/auth.middleware')
const authorizeRoles = require('../middlewares/authorized.role')
const createInstructorProfile = require('../middlewares/instructor.middleware')

// ─────────────────────────────────────────
// Instructor Profile Routes
// ─────────────────────────────────────────
router.route('/me')
    .get(verifyJwtToken, createInstructorProfile, getInstructorProfile)
    .patch(verifyJwtToken, updateInstructorProfile)

// ─────────────────────────────────────────
// Instructor Stats Routes
// ─────────────────────────────────────────
router.route('/me/earnings').get(verifyJwtToken, checkEarnings)
router.route('/me/rating').get(verifyJwtToken, checkRating)
router.route('/me/courses/popular').get(verifyJwtToken, getMostPopularCourses)

module.exports = router
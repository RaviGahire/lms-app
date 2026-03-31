const express = require('express')
const { verifyJwtToken } = require('../middlewares/auth.middleware')
// const authorizeRoles = require('../middlewares/authorized.role')
const {
    getInstructorProfile,
    updateInstructorProfile,
    checkEarnings,
    checkRating,
    getMostPopularCourses
} = require('../controllers/instructor.controller')

const createInstructorProfile = require('../middlewares/instructor.middleware')

const router = express.Router()

router.get('/current-instructor', verifyJwtToken, createInstructorProfile, getInstructorProfile)

router.post('/update-instructor/:id', updateInstructorProfile)

router.get('/check-earnings', verifyJwtToken, checkEarnings)

router.get('/check-rating', verifyJwtToken, checkRating)

router.get('/most-popular-courses', verifyJwtToken, getMostPopularCourses)


module.exports = router
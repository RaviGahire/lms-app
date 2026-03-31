const express = require('express');
const { verifyJwtToken } = require('../middlewares/auth.middleware');
const authorizeRoles = require('../middlewares/authorized.role');
const { getInstructorProfile } = require('../controllers/instructor.controller');
const createInstructorProfile= require('../middlewares/instructor.middleware')

const router = express.Router()

router.get('/current-instructor', verifyJwtToken,createInstructorProfile,getInstructorProfile)

router.post('/update-instructor', verifyJwtToken, authorizeRoles("instructor"))

router.get('/check-earnings', verifyJwtToken, authorizeRoles("instructor"))

router.get('/check-rating', verifyJwtToken, authorizeRoles("instructor"))

router.get('/most-popular-courses', verifyJwtToken, authorizeRoles("instructor"))


module.exports = router
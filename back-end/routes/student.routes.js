const express = require('express');
const router = express.Router();


const { getAllStudents, getStudentProfile, updateStudentDetails, getEnrolledCourses } = require('../controllers/student.controller');
const { verifyJwtToken } = require('../middlewares/auth.middleware');
const createStudentProfile = require('../middlewares/student.middleware');
const authorizeRoles = require('../middlewares/authorized.role');

router.get('/all-studs', getAllStudents)

router.get('/current-studs', verifyJwtToken, createStudentProfile, getStudentProfile)

router.post('/update-studs/:id', verifyJwtToken, authorizeRoles('student', 'admin'), updateStudentDetails)

router.get('/my-courses', verifyJwtToken, authorizeRoles('student', 'admin'), getEnrolledCourses)






module.exports = router;
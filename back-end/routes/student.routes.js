const express = require('express')
const router = express.Router()

// ─────────────────────────────────────────
// Student 
// ─────────────────────────────────────────
const { 
  getAllStudents, 
  getStudentProfile, 
  updateStudentDetails, 
  getEnrolledCourses 
} = require('../controllers/student.controller')

const { verifyJwtToken } = require('../middlewares/auth.middleware')
const createStudentProfile = require('../middlewares/student.middleware')
const authorizeRoles = require('../middlewares/authorized.role')

// ─────────────────────────────────────────
// All Student Route
// ─────────────────────────────────────────
router.route('/').get(verifyJwtToken, authorizeRoles('admin'), getAllStudents) // get all students

// ─────────────────────────────────────────
// Student Profile Routes
// ─────────────────────────────────────────
router.route('/me').get(verifyJwtToken, createStudentProfile, getStudentProfile) 
router.route('/me/:studentId').patch(verifyJwtToken, updateStudentDetails)

// ─────────────────────────────────────────
// Student Enrolled Courses Routes
// ─────────────────────────────────────────
router.route('/me/courses').get(verifyJwtToken, getEnrolledCourses)


module.exports = router;
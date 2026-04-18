const express = require("express")
const router = express.Router()

// ─────────────────────────────────────────
// course-controller
// ─────────────────────────────────────────
const { 
  getAllCoureses, 
  addNewCourses, 
  updateCourses, 
  deleteCourses, 
  enrollCourses 
} = require('../controllers/course.controller')

const { verifyJwtToken } = require("../middlewares/auth.middleware")
const authorizeRoles = require("../middlewares/authorized.role")
const upload = require('../middlewares/multer.middlerware')

// ─────────────────────────────────────────
// Course Routes
// ─────────────────────────────────────────
router.route('/')
  .get(getAllCoureses)
  .post(verifyJwtToken, authorizeRoles("instructor"), upload.single("coverImage"), addNewCourses)

// ─────────────────────────────────────────
// Course CRUD Routes
// ─────────────────────────────────────────
router.route('/:courseId')
  .patch(verifyJwtToken, authorizeRoles("instructor"), upload.single("coverImage"), updateCourses)
  .delete(verifyJwtToken, authorizeRoles("instructor"), deleteCourses)

// ─────────────────────────────────────────
// Course Enrollment Routes
// ─────────────────────────────────────────
router.route('/:courseId/enroll')
  .post(verifyJwtToken, authorizeRoles("student"), enrollCourses)

module.exports = router
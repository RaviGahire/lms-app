const express = require("express")
const router = express.Router()

const {getAllCoureses, addNewCoureses, updateCourses, deleteCourses, enrollCourses} = require('../controllers/course.controller')

const authorizedRoles = require('../middlewares/authorized.role')
const { verifyJwtToken } = require("../middlewares/auth.middleware")


router.get('/all-courses', getAllCoureses)

//crud ops
router.post('/create-courses', verifyJwtToken,authorizedRoles('instructor','admin'), addNewCoureses )

router.put('/update-course/:courseId',verifyJwtToken,authorizedRoles('instructor','admin'),updateCourses)

router.delete('/delete-course/:id', verifyJwtToken,authorizedRoles('instructor', 'admin'),deleteCourses)

router.post( '/:courseId/enroll', verifyJwtToken, authorizedRoles('student'),enrollCourses)


module.exports = router;
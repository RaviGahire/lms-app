const express = require("express")
const router = express.Router()
const upload = require('../middlewares/multer.middlerware')

const { getAllCoureses, addNewCoureses, updateCourses, deleteCourses, enrollCourses } = require('../controllers/course.controller')

const { verifyJwtToken } = require("../middlewares/auth.middleware")
const authorizeRoles = require("../middlewares/authorized.role")

router.get('/all-courses', getAllCoureses)

//crud ops
router.post('/create-courses',verifyJwtToken,authorizeRoles("instructor"), upload.single("coverImage"), addNewCoureses)
   
router.put('/update-courses/:courseId',authorizeRoles("instructor"),upload.single("coverImage"),updateCourses)

router.delete('/delete-courses/:courseId',  deleteCourses)

router.post('/:courseId/enroll', verifyJwtToken, enrollCourses)

module.exports = router;
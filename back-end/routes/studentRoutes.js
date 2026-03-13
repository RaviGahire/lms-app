const express = require('express');
const router = express.Router();



const { getAllStudents, getStudentProfile, updateStudentDetails } = require('../controllers/student.controller');
const { verifyJwtToken } = require('../middlewares/auth.middleware');
const createStudentProfile = require('../middlewares/student.middleware')

router.get('/all-studs', getAllStudents)

router.get('/current-studs', verifyJwtToken, createStudentProfile,  getStudentProfile)

router.post('/update-studs/:id', verifyJwtToken, updateStudentDetails)







module.exports = router;
const express = require('express');
const router = express.Router();



const { getAllStudents, getCurrentStudent } = require('../controllers/student.controller');
const { verifyJwtToken } = require('../middlewares/auth.middleware');

router.get('/all-studs', getAllStudents)
router.get('/current-studs', verifyJwtToken, getCurrentStudent)






module.exports = router;
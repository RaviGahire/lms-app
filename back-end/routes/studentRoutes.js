const express = require('express');
const router = express.Router();


const {currentStudent} = require('../controllers/student.controller')

router.get('/all-studs' , currentStudent )






module.exports = router;
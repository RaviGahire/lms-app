const express = require('express');
const { verifyJwtToken } = require('../middlewares/auth.middleware');
const authorizeRoles = require('../middlewares/authorized.role')

const router = express.Router()

router.get('/check-earnings', verifyJwtToken, authorizeRoles("instructor"))

router.get('/check-rating', verifyJwtToken, authorizeRoles("instructor"))

router.get('/most-popular-courses', verifyJwtToken, authorizeRoles("instructor"))


module.exports = router
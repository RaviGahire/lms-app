const express = require('express')

const router = express.Router()

const { verifyJwtToken } = require("../middlewares/auth.middleware")

const authorizeRoles = require("../middlewares/authorized.role")

const {deleteUser} = require('../controllers/auth.controller')

//Admin can deleted user using id 
router.route('/delete/u/:id').delete(deleteUser)

router.patch("/courses/:courseId/publish", verifyJwtToken, authorizeRoles("admin"))

router.patch("/courses/:courseId/unpublish", verifyJwtToken, authorizeRoles("admin"))

router.get("/analytics/overview", verifyJwtToken, authorizeRoles("admin"))

router.get("/analytics/revenue", verifyJwtToken, authorizeRoles("admin"))

router.get("/reviews", verifyJwtToken, authorizeRoles("admin"))

router.delete("/reviews/:reviewId", verifyJwtToken, authorizeRoles("admin"))

module.exports = router
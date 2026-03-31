const express = require('express')
const router = express.Router()
const { verifyJwtToken } = require("../middlewares/auth.middleware")
const { createAdminProfile,isAdmin} = require('../middlewares/admin.middleware')
const authorizeRoles = require("../middlewares/authorized.role")
const {deleteUser, getAllUsers} = require('../controllers/auth.controller')
const { getAdminProfile } = require('../controllers/admin.controller')


//Admin can deleted user using id 
router.route('/me').get(verifyJwtToken,createAdminProfile,isAdmin,authorizeRoles("admin"),getAdminProfile)

router.route('/u').get(verifyJwtToken,isAdmin,authorizeRoles("admin"),getAllUsers)

router.route('/delete/u/:id').delete(verifyJwtToken,isAdmin,authorizeRoles("admin"),deleteUser)



//Advance routes for admin dashboard
// router.patch("/courses/:courseId/publish", verifyJwtToken, authorizeRoles("admin"))
// router.patch("/courses/:courseId/unpublish", verifyJwtToken, authorizeRoles("admin"))
// router.get("/analytics/overview", verifyJwtToken, authorizeRoles("admin"))
// router.get("/analytics/revenue", verifyJwtToken, authorizeRoles("admin"))
// router.get("/reviews", verifyJwtToken, authorizeRoles("admin"))
// router.delete("/reviews/:reviewId", verifyJwtToken, authorizeRoles("admin"))

module.exports = router
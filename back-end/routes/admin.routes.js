const express = require('express')
const router = express.Router()

// ─────────────────────────────────────────
// Adim Controller
// ─────────────────────────────────────────
const { getAdminProfile } = require('../controllers/admin.controller')
const { deleteUser, getAllUsers } = require('../controllers/auth.controller')

// ─────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────
const { verifyJwtToken } = require("../middlewares/auth.middleware")
const { createAdminProfile, isAdmin } = require('../middlewares/admin.middleware')
const authorizeRoles = require("../middlewares/authorized.role")

// ─────────────────────────────────────────
// Reusable middleware stack for admin
// ─────────────────────────────────────────
const adminAccess = [verifyJwtToken, createAdminProfile, isAdmin, authorizeRoles("admin")]

// ─────────────────────────────────────────
// Admin Profile Routes
// ─────────────────────────────────────────
router.route('/me').get(...adminAccess, getAdminProfile)

// ─────────────────────────────────────────
//  Admin User Management Routes
// ─────────────────────────────────────────
router.route('/users').get(...adminAccess, getAllUsers)
router.route('/users/:id').delete(...adminAccess, deleteUser)

// ─────────────────────────────────────────
// Admin Course Management Routes
// ─────────────────────────────────────────
router.route('/courses/:courseId/publish').patch(...adminAccess)
router.route('/courses/:courseId/unpublish').patch(...adminAccess)

// ─────────────────────────────────────────
// Admin Analytics Routes
// ─────────────────────────────────────────
router.route('/analytics/overview').get(...adminAccess)
router.route('/analytics/revenue').get(...adminAccess)

// ─────────────────────────────────────────
// Admin Review Routes
// ─────────────────────────────────────────
router.route('/reviews').get(...adminAccess)
router.route('/reviews/:reviewId').delete(...adminAccess)

module.exports = router




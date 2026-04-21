const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

// ─────────────────────────────────────────
// All Necessary Middlewares
// ─────────────────────────────────────────
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use(express.static('public/'))

// ─────────────────────────────────────────
// CORS
// ─────────────────────────────────────────
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}))

// ─────────────────────────────────────────
// Database Connection
// ─────────────────────────────────────────
const connectDB = require('./config/connectDB')

// ─────────────────────────────────────────
// All App Routes
// ─────────────────────────────────────────
const defaultRoutes = require('./routes/default.routes')
const authRoutes = require('./routes/auth.routes')
const studentRoutes = require('./routes/student.routes')
const courseRoutes = require('./routes/course.routes')
const instructorRoutes = require('./routes/instructor.routes')
const adminRoutes = require('./routes/admin.routes')

// ─────────────────────────────────────────
// All API End-points
// ─────────────────────────────────────────
app.use('/check',defaultRoutes)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/instructors', instructorRoutes)
app.use('/api/v1/courses', courseRoutes)
app.use('/api/v1/admin', adminRoutes)

// ─────────────────────────────────────────
// Server Listening
// ─────────────────────────────────────────
app.listen(process.env.PORT || 5000, process.env.HOST, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
});

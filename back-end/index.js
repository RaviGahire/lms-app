const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public/'))
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))

// db connection
const connectDB = require('./config/connectDB')

//All routes
const authRoutes = require('./routes/auth.routes')
const studentRoutes = require('./routes/student.routes')
const courseRoutes = require('./routes/course.routes')
const instructorRoutes = require('./routes/instructor.routes')
const adminRoutes = require('./routes/admin.routes')
//APi endpoints
app.use('/api/v1/users', authRoutes)
app.use('/api/v1/students', studentRoutes)
app.use('/api/v1/courses', courseRoutes)
app.use('/api/v1/instructor', instructorRoutes)
app.use('/api/v1/admin', adminRoutes)

//Server Listening
app.listen(process.env.PORT || 5000, process.env.HOST, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
});

const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const upload = require("./middlewares/multer.middlerware")


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/'));
app.use(cors({origin: process.env.CORS_ORIGIN,credentials: true}));

// db connection
const connectDB = require('./config/connectDB');

//All routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/v1/users', authRoutes);

//Server Listening
app.listen(process.env.PORT || 5000, process.env.HOST, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

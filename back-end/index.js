const express = require('express');
const app = express();
require('dotenv').config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/'));

// db connection
const connectDB = require('./config/connectDB');

//importing user schema
const userSchema = require('./model/userSchema');

// routes
app.get('/', async (req, res) => {
  try {
   return res.status(200).json({
      success: true,
      massage: 'API is working....'
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      massage: 'Internal server error....'
    })

  }
});

const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);



//Server Listening
app.listen(process.env.PORT || 5000, process.env.HOST, () => {
  console.log(`Server is running on port http://${process.env.HOST}:${process.env.PORT || 5000}`);
});

require('dotenv').config();
const session = require('express-session');
const SECRET_KEY = process.env.SECRET_KEY;

const sessionMiddleware = session({
    resave: false,
    saveUninitialized: false,
    secret: SECRET_KEY
})

// if (!process.env.SECRET_KEY) {
//   throw new Error("SECRET_KEY missing in .env file");
// }


module.exports = sessionMiddleware;
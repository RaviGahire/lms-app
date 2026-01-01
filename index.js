const express = require("express");
const session = require('express-session')
// const bcrypt = require('bcrypt')
const app = express();
const path = require("path");
// const url = require("url");
require("dotenv").config();


// All Middlerwares
// Use all files from public folder
app.use(express.static("public/"));

// EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Session 
const SECRET_KEY = process.env.SECRET_KEY
app.use(session({
 resave:false,
 saveUninitialized:false,
secret:SECRET_KEY
}))


// post method data handling - middleware
app.use(express.urlencoded({ extended: true }));

// DB connection imported
const connectionDB = require("./config/connectDB");


// All routes 
app.get("/", (req, res) => {
  res.render("home/home");
});


// register user routes
app.get("/register", (req, res) => {
  res.render("auth/register");
});

// register controller
const { registerUser } = require('./controller/users_controllers/register')
app.post("/register_user", registerUser);



// login user route
app.get("/login", (req, res) => {
  res.render("auth/login");
});
// login controller
const {loginUser} = require('./controller/users_controllers/login');
// User login auth 
app.post('/login_user',loginUser )


//user profile 

const {upload} = require('./middlewares/multer.middlerware');

app.get('/edit_profile',(req,res)=>{

res.render('profile/update_profile.ejs')

})

//Edit Profile
const {EditProfile} = require('./controller/users_controllers/editProfile')

app.post('/save_edited_profile',upload.single('profileImage'), EditProfile)





app.get("/courses", (req, res) => {
  res.render("courses/course");
});

app.get("/blog", (req, res) => {
  res.render("blog/blog");
});
app.get("/blogdetails", (req, res) => {
  res.render("blog/blogDetails");
});

app.get("/about", (req, res) => {
  res.render("aboutus/about");
});

// fallback route
app.use((req, res) => {
  res.status(404).render("partials/pageerror");
});

// server listening
const Host = 3001;
const Port = "127.0.0.1";

app.listen(Host, Port, () => {
  console.log(`Server running on http://${Port}:${Host}`);
});

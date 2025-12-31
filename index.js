const express = require("express");
const app = express();
const path = require("path");
const url = require("url");
require("dotenv").config();


// All Middlerwares
// use all files from public folder
app.use(express.static("public/"));

// EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");




// post method data handling - middleware
app.use(express.urlencoded({ extended: true }));

// DB connection imported
const connectionDB = require("./config/connectDB");

// import user model
const userSchema = require("./model/userSchema");


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
const {loginUser} = require('./controller/users_controllers/login')
// User login auth 
app.post('/login_user',loginUser )

// // for checking user is logedin or not 
// app.use((req, res, next) => {
//    res.locals.isLoggedIn = req.session.isLoggedIn || false;
//   next();
// });


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

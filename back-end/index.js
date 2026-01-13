const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const mongoose = require('mongoose')


// All Middlerwares
// Use all files from public folder
app.use(express.static("public/"));

// EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Session 
const sessionMiddleware = require('./middlewares/session.middlerware');
app.use(sessionMiddleware);

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
const { upload } = require('./middlewares/multer.middlerware');
const { loginUser } = require('./controller/users_controllers/login');
// User login auth 
app.post('/login_user', loginUser)


//user profile update ops
const userSchema = require("./model/userSchema");

app.get('/update_profile', (req, res) => {
  res.render('profile/profile.ejs')
})

app.get('/update_profile/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const findLoggedInUser = await userSchema.findById(id);
    console.log(findLoggedInUser)

    res.render('profile/update_profile', { data: findLoggedInUser })

  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});


app.post(
  '/save_updated_profile/:id',
  upload.single('profileImage'),
  async (req, res) => {
    try {
      const id = req.params.id;

      // validate ObjectId 
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send("Invalid User ID");
      }

      const { profession, college, phone } = req.body;

      // ✅ prepare update object
      const updateData = {
        profession,
        college,
        phone
      };

      // ✅ only add image if uploaded
      if (req.file) {
        updateData.profileImage = req.file.filename;
      }

      const updateUser = await userSchema.findByIdAndUpdate(
        id,
        updateData,);

      if (!updateUser) {
        return res.status(404).send("User not found");
      }

      // res.send(`<script>
      //   alert('Profile updated successfully')
      //   window.location.href('/')
      //   <script>`)
      res.redirect('/')


    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }
);








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
// app.use((req, res) => {
//   res.status(404).render("partials/pageerror");
// });

// server listening
const Host = 3001;
const Port = "127.0.0.1";

app.listen(Host, Port, () => {
  console.log(`Server running on http://${Port}:${Host}`);
});

const userSchema = require("../../model/userSchema");
const bcrypt = require('bcrypt')


exports.loginUser = async (req, res) => {
  try {

    // to check user is exists or not
    const isUserExist = await userSchema.findOne({ email: req.body.email });

    if (!isUserExist) {
      return res.status(404).send("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password, isUserExist.password)

    if (!isPasswordMatch) {
      return res.status(401).send("Invalid credentials");
    }


    // if both condition satisfy

    if (isUserExist && isPasswordMatch) {
      // created a temporary session  and stored unique id inside that session memory for protecting further routes. 
      req.session.userID = isUserExist._id

      if (req.session.userID) {
        return res.render('profile/profile.ejs', { data: isUserExist, token: req.session.userID })
      }
      else {
        res.send(`<script>
    alert('Your session has been expired')
    window.location.assign('/login')
    </script>`)
      }

    }

    // res.redirect("/");



  } catch (error) {
    console.log("Something went wrong while login", error);
    res.status(500).send("Server error");
  }
};

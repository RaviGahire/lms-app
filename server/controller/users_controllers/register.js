const userSchema = require('../../model/userSchema');

const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {

    try {

        //check user already exists 
        const isExists = await userSchema.findOne({ email: req.body.email });
        if (isExists) {
            res.send(`<script>
                alert('User already registered');
          window.location.href = '/login'
                </script>`)
        }

        const { userName, email, password } = req.body

        // password hashing (10 salt rounds)
        const hash_pass = await bcrypt.hash(password, 10);

        const register_user = new userSchema({ userName, email, password: hash_pass })
        await register_user.save()

        res.send(`<script>
                alert('User registered successfully!');
          window.location.href = '/login'
                </script>`)
        res.redirect('/login');


    } catch (err) {
        console.error('Registration failed:', err)
        res.status(500).send('Something went wrong while register user')
    }


}
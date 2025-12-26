const userSchema = require('../../model/userSchema');
exports.loginUser = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await userSchema.findOne({ email });
        const user_pass = await userSchema.findOne({ password })

        if (!user) {
            return res.status(404).send('User not found');
        }
        if (!user_pass) {
            return res.status(401).send('Invalid credentials');
        }

        res.redirect('/');



    } catch (error) {
        console.log('Something wrong while user login')
    }
}
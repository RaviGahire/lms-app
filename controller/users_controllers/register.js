const userSchema = require('../../model/userSchema');

exports.registerUser  = async (req, res) => {

    try {
        const register_user = new userSchema(req.body)
        await register_user.save()
        res.redirect('/login')
        console.log('User Register successfully...!')

    } catch (err) {
        console.error('Registration failed:', err)
        res.status(500).send('Something went wrong')
    }


}
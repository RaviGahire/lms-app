const profileSchema = require('../../model/profileSchema')



exports.EditProfile = async (req, res) => {
    try {
        // console.log(req.file); 
        // req.body will now look like: 
        // { college: 'IIT', profession: 'Dev', mobileNumber: '123', email: 'a@b.com' }

        res.send(req.file); 
    } catch (error) {
        console.log('Error occurred:', error);
    }
};
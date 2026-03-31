const Student = require('../model/student.model')

const createStudentProfile = async (req, res, next) => {
    try {
        const userId = req.user._id
       
        let student = await Student.findOne({ user: userId }).populate('user', 'userName roles email isVerified avatar')

        if (!student) {
            await Student.findOneAndUpdate(
                { user: userId },
                { $setOnInsert: { user:userId } }, //ensures that the 'user' field is only set on the FIRST creation
                { upsert: true, new: true } //creates it if it doesn't exist.

            )
 
        }

        next()

    } catch (error) {
        return res.status(500).json({ success: false, error: error.message })
    }
};

module.exports = createStudentProfile
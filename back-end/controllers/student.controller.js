const Student = require('../model/student.model')
const User = require('../model/user.model')


//get all user role is student
exports.getAllStudents = async (req, res) => {

    try {
        const students = await User.find({ roles: 'student' })

        if (!students || students.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No students found in the database",
            })
        }

        return res.status(200).json({
            success: true,
            count: students.length,
            message: "Successfully fetched all students",
            studs: students
        })




    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }

}

// get current user whos logged in 
exports.getCurrentStudent = async (req, res) => {
    const studId = req.user._id
    try {
        const student = await User.findById(studId).select("-password")

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student profile not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Current student fetched successfully",
            student
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch student profile",
            error: error.message
        });
    }

}


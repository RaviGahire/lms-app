const Student = require('../model/student.model')
const User = require('../model/user.model')





//get all user role is student
exports.getAllStudents = async (req, res) => {

    try {
        const students = await Student.find().populate('user','userName email roles')

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
exports.getStudentProfile = async (req, res) => {
    try {
        const studId = req.user._id;

        const student = await Student.findOne({ user: studId }).populate('user','userName roles email isVerified')
           
        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Student and User data fetched",
            student 
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

exports.updateStudentDetails = async (req, res) => {

    const studId = req.params.id 

    console.log(studId)

    const updatedData = req.body

    if (!studId || Object.keys(updatedData).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Student ID or update data is missing"
        });
    }
    try {


        const student = await Student.findByIdAndUpdate(studId,  updatedData , { new: true })

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Student updated successfully",
            student
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error occurred while updating student",
            error: error.message
        })
    }
}
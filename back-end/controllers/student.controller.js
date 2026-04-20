const Course = require('../model/coures.model')
const Student = require('../model/student.model')

// ─────────────────────────────────────────
// Get All student
// ─────────────────────────────────────────
exports.getAllStudents = async (req, res) => {

    try {
        const students = await Student.find().populate('user', 'userName email roles')

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

// ─────────────────────────────────────────
// Get student by Id
// ─────────────────────────────────────────
exports.getStudentById = async (req, res) => {
    const { studentId } = req.params

    try {
                
        if (!studentId) {
            return res.status(400).json({
                success: false,
                message: "Student ID is required",
            })
        }
    
        const student = await Student.findById(studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: student,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

// ─────────────────────────────────────────
// Get student profile for dashboard
// ─────────────────────────────────────────
exports.getStudentProfile = async (req, res) => {
    try {
        const studId = req.user._id;

        const student = await Student.findOne({ user: studId }).populate('user', 'userName roles email isVerified avatar')

        if (!student) {
            return res.status(404).json({ success: false, message: "Student not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Student data fetched",
            student
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

// ─────────────────────────────────────────
// Update student details
// ─────────────────────────────────────────
exports.updateStudentDetails = async (req, res) => {
    const studId = req.params.studentId
    const updatedData = req.body
    // console.log(studId)

    if (!studId || Object.keys(updatedData).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Student ID or update data is missing"
        });
    }
    try {

        const student = await Student.findByIdAndUpdate(studId, updatedData, { new: true }).populate('user', 'userName roles email isVerified avatar')

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

// ─────────────────────────────────────────
// Helper for enroll to courses
// ─────────────────────────────────────────
exports.getEnrolledCourses = async (req, res) => {
    const userId = req.user?._id;

    try {

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            })
        }


        const enrollments = await Student.find({ student: userId })
            .populate("course");


        if (!enrollments || enrollments.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No enrolled courses found",
            });
        }


        const courses = enrollments.map(item => item.course);

        return res.status(200).json({
            success: true,
            message: "Enrolled courses fetched successfully",
            courses,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching enrolled courses",
            error: error.message,
        });
    }
}
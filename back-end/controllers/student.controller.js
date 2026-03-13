const Student = require("../model/student.model")




exports.currentStudent = async (req, res) => {

    try {
        const student = Student.find()

        return res.status(200).json({
            success: true,
            messsage: "Student fetched successfully",
            data:student
        })


    } catch (error) {
        return res.status(50).json({
            success: false,
            messsage: "Something went wrong"
        })
    }

}
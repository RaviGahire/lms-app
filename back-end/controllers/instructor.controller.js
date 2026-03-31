const Instructor = require('../model/instructor.model')



//get-current-instructor-profile
exports.getInstructorProfile = async (req, res) => {

    try {

        const instructorId = req.instructor?._id

        // Check if instructor ID exists
        if (!instructorId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Instructor ID not found",
            })
        }

        // Fetch instructor from DB
        const instructor = await Instructor.findById(instructorId).populate('user','userName roles email')

        // Check if instructor exists
        if (!instructor) {
            return res.status(404).json({
                success: false,
                message: "Instructor not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Instructor fetched successfully",
            data: instructor,
        })



    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }

}



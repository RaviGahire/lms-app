const Instructor = require("../model/instructor.model");

const createInstructorProfile = async (req, res, next) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User not found"
            });
        }

        const instructor = await Instructor.findOneAndUpdate(
            { user: userId },
            { $setOnInsert: { user: userId } },
            { upsert: true, new: true }
        )

        req.instructor = instructor

        next()

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in createInstructorProfile middleware",
            error: error.message
        })
    }
};

module.exports = createInstructorProfile;
const Instructor = require("../model/instructor.model");

const createInstructorProfile = async (req, res, next) => {
    try {
        const userId = req.user._id;

        let instructor = await Instructor.findOne({ user: userId });

        if (!instructor) {
            await Instructor.findOneAndUpdate(
                { user: userId },
                { $setOnInsert: { user: userId } },
                { upsert: true, new: true }
            )
        }

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = createInstructorProfile;
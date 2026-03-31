const Instructor = require('../model/instructor.model')
const Course = require('../model/coures.model')


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
        const instructor = await Instructor.findById(instructorId).populate('user', 'userName roles email')

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

//update 
exports.updateInstructorProfile = async (req, res) => {

    const instructorId = req.user?._id || req.params.id
    const updatedData = req.body

    if (!instructorId || Object.keys(updatedData).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Instructor ID or update data is missing"
        })
    }


    try {
        const instructor = await Instructor.findByIdAndUpdate(instructorId, updatedData, { new: true })
            .populate('user', 'userName roles email isVerified avatar')

        if (!instructor) {
            return res.status(404).json({
                success: false,
                message: "Instructor not found",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Instructor profile updated successfully",
            data: instructor,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

//checkEarnings
exports.checkEarnings = async (req, res) => {
    try {
        const instructorId = req.user?._id;

        if (!instructorId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Instructor ID not found",
            });
        }


        const instructor = await Instructor.findById(instructorId)
            .populate("courses")


        if (!instructor) {
            return res.status(404).json({
                success: false,
                message: "Instructor not found",
            });
        }


        let totalEarnings = 0

        instructor.courses.forEach(course => {
            const price = course.price || 0;
            const students = course.studentsEnrolled?.length || 0;
            totalEarnings += price * students;
        })

        return res.status(200).json({
            success: true,
            message: "Earnings fetched successfully",
            data: {
                totalEarnings,
                totalCourses: instructor.courses.length,
            },
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Check Earnings Error",
            error: error.message
        });
    }
}

//checkRating
exports.checkRating = async (req, res) => {
    try {
        const instructorId = req.instructor?._id;

        if (!instructorId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Instructor ID not found",
            })
        }


        const instructor = await Instructor.findById(instructorId)
            .populate({
                path: "courses",
                populate: {
                    path: "ratings",
                },
            });


        if (!instructor) {
            return res.status(404).json({
                success: false,
                message: "Instructor not found",
            });
        }

        let totalRatings = 0;
        let totalReviews = 0;

        instructor.courses.forEach(course => {
            course.ratings.forEach(rating => {
                totalRatings += rating.value;
                totalReviews++;
            });
        });


        const averageRating = totalReviews === 0 ? 0 : (totalRatings / totalReviews).toFixed(1);

        return res.status(200).json({
            success: true,
            message: "Rating fetched successfully",
            data: {
                averageRating,
                totalReviews,
            },
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Check Rating Error",
            error: error.message
        });
    }
}

//getMostPopularCourses
exports.getMostPopularCourses = async (req, res) => {
    try {
        const courses = await Course.find()
            .populate("instructor", "name email")
            .sort({ studentsEnrolled: -1 })
            .limit(5)

        const sortedCourses = courses
            .map(course => ({
                ...course._doc,
                totalStudents: course.studentsEnrolled?.length || 0,
            }))
            .sort((a, b) => b.totalStudents - a.totalStudents);

        return res.status(200).json({
            success: true,
            message: "Most popular courses fetched successfully",
            data: sortedCourses,
        })

    } catch (error) {
        console.error(":", error);

        return res.status(500).json({
            success: false,
            message: "Most Popular Courses Error",
            error: error.message
        })
    }
}
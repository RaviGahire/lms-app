const Course = require('../model/coures.model')

exports.getAllCoureses = async (req, res) => {
    try {

        const courses = await Course.find()

        if (!courses.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Courses not found",

            })
        }

        return res.status(200).json({
            success: true,
            message: "Fetched all courses successfully",
            courses: courses || []
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching courses",
            error: error.message
        })
    }
}

exports.addNewCoureses = async (req, res) => {
    const userId = req.user?._id
    const data = req.body

    try {

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User not found",
            })
        }

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Course data is required",
            })
        }

        const { title, description } = data;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required",
            });
        }

        data.createdBy = userId;
        const newCourse = await Course.create(data)



        return res.status(201).json({
            success: true,
            message: "Course created successfully",
            course: newCourse
        })




    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while creating course",
            error: error.message
        })
    }

}

exports.updateCourses = async (req, res) => {
    const courseId = req.params.id
    const updatedData = req.body

    try {

        if (!courseId || !updatedData || Object.keys(updatedData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Course ID and update data are required",
            })
        }


        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            })
        }

        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            updatedData,
            { new: true }
        );

        return res.status(200).json({
            success: true,
            message: "Course updated successfully",
            course: updatedCourse,
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error while updating course",
            error: error.message,
        })


    }


}

exports.deleteCourses = async (req, res) => {
    const courseId = req.params.id;
    try {
        if (!courseId) {
            return res.status(400).json({
                success: false,
                message: "Course ID is required",
            })
        }

        const course = await Course.findById(courseId);


        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            })
        }

        const deletedCourese = await Course.findByIdAndDelete(courseId)

        return res.status(200).json({
            success: true,
            message: "Course deleted successfully",
            deletedCourese
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while deleting course",
            error: error.message,
        })
    }

}

exports.enrollCourses = async (req, res) => {
    const userId = req.user?._id;
    const courseId = req.params.courseId;

    try {
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized user",
            })
        }

        if (!courseId) {
            return res.status(400).json({
                success: false,
                message: "Course ID is required",
            })
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            })
        }

        if (course.createdBy.toString() === userId.toString()) {
            return res.status(400).json({
                success: false,
                message: "You cannot enroll in your own course",
            })
        }

        const alreadyEnrolled = await Student.findOne({
            student: userId,
            course: courseId,
        })

        if (alreadyEnrolled) {
            return res.status(400).json({
                success: false,
                message: "Already enrolled in this course",
            });
        }

        const enrollment = await Student.create({
            student: userId,
            course: courseId,
        });


        return res.status(200).json({
            success: true,
            message: "Enrolled successfully",
            enrollment,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while enrolling",
            error: error.message,
        })
    }


}
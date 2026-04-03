const Course = require('../model/coures.model')
const Student = require('../model/student.model')
const uploadOnCloudinary = require('../utils/Cloudinary')

exports.getAllCoureses = async (req, res) => {
    try {

        const courses = await Course.find().populate("createdBy", 'userName')

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

exports.addNewCourses = async (req, res) => {
    const userId = req.user?._id
    const data = req.body
    const file = req.file;
    // console.log(file);
    try {

        if (!file) {
            return res.status(400).json({
                success: false,
                message: "Cover image is required"
            });
        }

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: or user not found",
            })
        }

        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Course data is required",
            })
        }
        data.createdBy = userId;

        const { title, description, duration, createdBy } = data;


        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required",
            });
        }


        let imageUrl = "";

        if (file && file.path) {
            const filePath = file.path.replace(/\\/g, "/");

            const uploaded = await uploadOnCloudinary(filePath);
            imageUrl = uploaded.secure_url;
        }





        const newCourse = await Course.create({
            title,
            createdBy,
            description,
            duration,
            coverImage: imageUrl
        });



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
    const { courseId } = req.params;
    const { title, description, duration } = req.body;
    const file = req.file;

    try {

        if (!courseId) {
            return res.status(400).json({
                success: false,
                message: "Course ID ",
            })
        }

        if (!title || !description || !file) {

            return res.status(400).json({
                success: false,
                message: "All fields are required",
            })
        }


        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            })
        }


        if (title) course.title = title;
        if (description) course.description = description;
        if (duration) course.duration = duration;

        if (file && file.path) {
            const uploaded = await uploadOnCloudinary(file.path);
            course.coverImage = uploaded.secure_url;
        }

        await course.save()

        return res.status(200).json({
            success: true,
            message: "Course updated successfully",
            course
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
    const { courseId } = req.params;
    const userId = req.user?._id;
    try {
        if (!courseId) {
            return res.status(400).json({
                success: false,
                message: "Course ID is required",
            })
        }

        if (!userId) {
            return res.status(400).json({
                message: false,
                message: "Please login to delete course"
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
    const courseId = req.params?.courseId
    const userId = req.user?._id

    // console.log(courseId)
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

    try {


        const course = await Course.findById(courseId)

        // console.log(course)

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
            user: userId,
            course: courseId,
        })

        // console.log(alreadyEnrolled)

        if (alreadyEnrolled) {
            return res.status(400).json({
                success: false,
                message: "Already enrolled in this course",
            });
        }

        // Create enrollment
        const enrollment = await Student.findOneAndUpdate(
            { user: userId },
            { $addToSet: { course: courseId } },
            { upsert: true, new: true }
        )

        //prevent duplicates
        await Course.findByIdAndUpdate(courseId, {
            $addToSet: { enrolledBy: enrollment._id }
        })
        

        return res.status(200).json({
            success: true,
            message: "Enrolled successfully",
            enrollment,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while enrolling",
            error: error.message,
        });
    }
}
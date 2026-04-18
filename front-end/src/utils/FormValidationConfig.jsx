
export const FormValidationConfigs = () => {

    // for create course
    const create_Course_Config = {
        title: [
            { required: true, message: "Please enter title" },
            { minLength: 5, message: "Title should be at least 5 characters" }
        ],

        price: [
            { required: true, message: "Please enter course price" },
            { min: 1000, message: "Price must be at least ₹1000" },
            { max: 10000, message: "Price should be less than ₹10000" }
        ],

        duration: [
            { required: true, message: "Please enter duration in hours" },
            { min: 10, message: "Duration should be at least 10 hours" },
            { max: 199, message: "Duration should be less than 199 hours" }
        ],

        category: [
            { required: true, message: "Please select a category" }
        ],

        description: [
            { required: true, message: "Please enter description" },
            { minLength: 20, message: "Description should be at least 20 characters" }
        ],

        coverImage: [
            { required: true, message: "Please upload a cover image" },
            {
                fileType: ["image/jpeg", "image/png", "image/webp"],
                message: "Only JPG, PNG, or WEBP images are allowed"
            },
            {
                maxSize: 2 * 1024 * 1024, // 2MB
                message: "Image size should be less than 2MB"
            }
        ]
    }



    return {create_Course_Config }
}

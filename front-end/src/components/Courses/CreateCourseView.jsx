import { useState } from "react"
import { DescriptionInput, Input, SelectInput } from "../Input"
import { getStoredToken } from "../../utils/getStoredToken"
import { toast } from "react-toastify"
import { FormValidationConfigs } from "../../utils/FormValidationConfig"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

// console.log(FormValidationConfigs())

export const CreateCourseView = () => {
    const [error, setError] = useState({})
    const [courseData, setCourseData] = useState({
        title: '',
        duration: '',
        description: '',
        coverImage: '',
        category: '',
        price: ''
    });

    // console.log(courseData)


    // validation config 
    const config = FormValidationConfigs()
    const courseConfig = config.create_Course_Config

    // validate function

    const validate = (courseData) => {
        const errorData = {} // empty obj for hold error

        Object.entries(courseData).forEach(([key, val]) => {
            // console.log(key,val)
            courseConfig[key].map((rule) => {
                // console.log(rule)
                if (rule.required && !val) {
                    errorData[key] = rule.message
                }


            })
        })

        // //conditions for the inputs 
        // if (!courseData.title) errorData.title = "Title is required"
        // if (!courseData.duration) errorData.duration = "Duration is required"
        // if (!courseData.description) errorData.description = "Description is required"
        // if (!courseData.coverImage) errorData.coverImage = "Cover image is required"
        // if (!courseData.category) errorData.category = "Category is required"
        // if (!courseData.price) errorData.price = "Price is required"

        setError(errorData) // set the error data

        return errorData
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        //called from validation function 
        const validationErrors = validate(courseData)
        //if error array length is 0 
        if (Object.keys(validationErrors).length) return



        const token = getStoredToken()

        try {

            const formData = new FormData();
            formData.append('title', courseData.title);
            formData.append('duration', courseData.duration);
            formData.append('description', courseData.description);
            formData.append('coverImage', courseData.coverImage);
            formData.append('category', courseData.category);
            formData.append('price', courseData.price);


            const response = await axios.post(`${API_URL}courses`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(response)
            if(response){
                alert(response?.data?.message)
            }
           
        } catch (error) {
            alert(error.response?.data.message)
            console.log(error.response?.data || error.message);
        }

    }

    const handleChange = (e) => {
        const { name, files, value } = e.target

        setCourseData({ ...courseData, [name]: files ? files[0] : value })

        setError({}) // While typing remove the all errors
    }
    // console.log(courseData)

    return (
        <div className="max-w-3xl animate-in fade-in duration-500 ">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-800 mb-6 underline">Course Details</h2>
            {/* Form */}
            <form className="space-y-6" method="post" onSubmit={handleSubmit}  >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* Course Title */}
                    <div className="space-y-2">
                        <Input
                            label="Course Title"
                            type="text"
                            name='title'
                            id='title'
                            placeholder='Please Enter Title'
                            onChange={handleChange}
                            value={courseData.title}
                            error={error.title}
                        />
                    </div>
                    {/* Course Duration in Hr */}
                    <div className="space-y-2">
                        <Input
                            label="Duration"
                            type="number"
                            name='duration'
                            id='duration'
                            placeholder='Please Enter duration'
                            onChange={handleChange}
                            value={courseData.duration}
                            error={error.duration}
                        />
                    </div>

                    {/* Course Category*/}
                    <div className="space-y-2">
                        <SelectInput
                            label={'Category'}
                            name={'category'}
                            defaultOption='Select Category'
                            options={['development', 'design', 'business', 'personal-development', 'it-software', 'data-ai', 'creative', 'language-learning']}
                            value={courseData.category}
                            onChange={handleChange}
                            error={error.category}

                        />
                    </div>

                    {/* Course Price*/}
                    <div className="space-y-2">
                        <Input
                            label="Price"
                            type="text"
                            name='price'
                            id='price'
                            placeholder='Please Enter price'
                            onChange={handleChange}
                            value={courseData.price}
                            error={error.price}

                        />
                    </div>

                    {/* Course Description */}
                    <div className="space-y-2">
                        <DescriptionInput
                            label='Description'
                            id='description'
                            name='description'
                            rows={8}
                            placeholder={'Write Course Description'}
                            onChange={handleChange}
                            value={courseData.description}
                            error={error.description}

                        />
                    </div>
                    {/* Cover Image */}
                    <div className="space-y-2">
                        <Input
                            label="Cover Image"
                            type="file"
                            name='coverImage'
                            id='coverImage'
                            onChange={handleChange}
                            value={courseData.coverImage}
                            error={error.coverImage}

                        />
                    </div>
                </div>
                {/* Submit Btn */}
                <button type="submit" className="bg-cyan-600 cursor-pointer text-white px-10 py-4 rounded-2xl font-bold hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 active:scale-95">
                    Save & Continue
                </button>

            </form>

        </div>
    )
}

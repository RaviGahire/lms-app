import { useState } from "react"
import { DescriptionInput, Input, SelectInput } from "../Input"
import { getStoredToken } from "../../utils/getStoredToken"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const CreateCourseView = () => {

    const [courseData, setCourseData] = useState({
        title: '',
        duration: '',
        description: '',
        coverImage: '',
        category: '',
        price:''
    });

    // console.log(courseData)
    
    const [error, setError] = useState()

    // form Validation

    const formValidation = (courseData)=>{
        const errorData ={} // empty obj for hold error
        //conditions for the inputs 
        if(!courseData.title) return errorData.title = "Title is required"
        if(!courseData.duration) return errorData.duration = "Duration is required"
        if(!courseData.description) return errorData.description = "Description is required"
        if(!courseData.coverImage) return errorData.coverImage = "Cover image is required"
        if(!courseData.category) return errorData.category = "Category is required"
        if(!courseData.price) return errorData.price = "Price is required"
        setError(errorData) // set the error data
        return errorData
    } 



    const handleSubmit = async (e) => {
        e.preventDefault()

        //called from validation function
     const validationErrors = formValidation(courseData);
    //  console.log(validationErrors)
// console.log(Object.keys({validationErrors}))


        const token = getStoredToken()

        try {

            const formData = new FormData();
            formData.append('title', courseData.title);
            formData.append('duration', courseData.duration);
            formData.append('description', courseData.description);
            formData.append('coverImage', courseData.coverImage);
            formData.append('category', courseData.category);
            formData.append('price', courseData.price);


            const response = await axios.post(`${API_URL}courses/create-courses`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(response.data)
        } catch (error) {
            // setError(error.response?.data.message)
            console.log(error.response?.data || error.message);
        }

    }

    const handleChange = (e) => {
        const { name, files, value } = e.target

        setCourseData({ ...courseData, [name]: files ? files[0] : value })
    }
    // console.log(courseData)

    return (
        <div className="max-w-3xl animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Details</h2>
            {/* Form */}
            <form className="space-y-6" method="post" onSubmit={handleSubmit}  >
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
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
                            Error={error }
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
                            Error={error }
                        />
                    </div>

                    {/* Course Category*/}
                    <div className="space-y-2">
                        <SelectInput
                            label={'Category'}
                            name={'category'}
                            placeholder="Select Category"
                            options={['development', 'design', 'business', 'personal-development', 'it-software', 'data-ai', 'creative', 'language-learning']}
                            value={courseData.category}
                            onChange={handleChange}
                            Error={error }

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
                            Error={error }

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
                            Error={error }

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



import { useState } from "react"
import { DescriptionInput, Input } from "../Input"
import axios from "axios"
import { getStoredToken } from "../../utils/getStoredToken"

const API_URL = import.meta.env.VITE_API_URL

export const CreateCourseView = () => {

    const [courseData, setCourseData] = useState({
        title: '',
        duration: '',
        description: '',
        coverImage: ''

    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = getStoredToken()

        try {

            const formData = new FormData();
            formData.append('title', courseData.title);
            formData.append('duration', courseData.duration);
            formData.append('description', courseData.description);
            formData.append('coverImage', courseData.coverImage);


            const response = await axios.post(`${API_URL}courses/create-courses`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(response.data);

          

        } catch (error) {
            console.log(error.response?.data || error.message);
        }

    }

    const handleChange = (e) => {
        const { name, files, value } = e.target

        setCourseData({ ...courseData, [name]: files ? files[0] : value })
    }
    console.log(courseData)

    return (
        <div className="max-w-3xl animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Details</h2>
            <form className="space-y-6" method="post" onSubmit={handleSubmit}  >
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="space-y-2">
                        <Input
                            label="Course Title"
                            type="text"
                            name='title'
                            id='title'
                            placeholder='Please Enter Title'
                            onChange={handleChange}
                            value={courseData.title}
                        />
                    </div>

                    <div className="space-y-2">
                        <Input
                            label="Duration"
                            type="number"
                            name='duration'
                            id='duration'
                            placeholder='Please Enter duration'
                            onChange={handleChange}
                            value={courseData.duration}
                        />
                    </div>

                    <div className="space-y-2">
                        <DescriptionInput
                            label='Description'
                            id='description'
                            name='description'
                            rows={8}
                            placeholder={'Write Course Description'}
                            onChange={handleChange}
                            value={courseData.description}

                        />
                    </div>

                    <div className="space-y-2">
                        <Input
                            label="Cover Image"
                            type="file"
                            name='coverImage'
                            id='coverImage'
                            onChange={handleChange}
                            value={courseData.coverImage}

                        />
                    </div>
                </div>

                <button type="submit" className="bg-cyan-600 cursor-pointer text-white px-10 py-4 rounded-2xl font-bold hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-100 active:scale-95">
                    Save & Continue
                </button>
            </form>
        </div>
    )
}

import { useEffect, useState } from 'react'
import { DescriptionInput, Input } from '../Input'

export const UpdateCourse = ({ course }) => {

    console.log(course)
    const [formData, setFormData] = useState({
        title: course?.title || '',
        description: course?.description || '',
        duration: course?.duration || '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Updated Data:', formData)
        
    }

     useEffect(() => {
        if (course) {
            setFormData({
                title: course.title || '',
                description: course.description || '',
                duration: course.duration || '',
            })
        }
    }, [course]) 

    return (
        <div className="w-full max-w-4xl">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8">

                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Update Course Details</h2>
                    <p className="text-gray-500 mt-1">Fill the details below in existing course</p>
                </div>

                <form onSubmit={handleSubmit}  className="space-y-6">  

                    <Input
                        label="Title"
                        placeholder="Enter Course Title"
                        name="title"               
                        value={formData.title}     
                        onChange={handleChange}    
                    />
                    <Input
                        label="Duration"
                        placeholder="Enter Course Duration"
                        name="duration"            
                        value={formData.duration}  
                        onChange={handleChange}   
                    />
                    <DescriptionInput
                        label="Description"
                        placeholder="Enter Course Description"
                        name="description"             
                        value={formData.description}    
                        onChange={handleChange}         
                    />

                    <div className="flex items-center gap-4 pt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition shadow-md"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="px-8 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

import { useEffect, useState } from 'react'
import { DescriptionInput, Input, SelectInput } from '../Input'
import { UpdateUserDetails } from '../../utils/UpdateUserDetails'
import { Link, useNavigate } from 'react-router-dom'

export const UpdateCourse = ({ course }) => {
      const [formData, setFormData] = useState({
        title: course?.title || '',
        description: course?.description || '',
        duration: course?.duration || '',
        price: course?.price || '',
        category: course?.category || '',
        coverImage: course?.coverImage || ''
    })

    // console.log(formData)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Updated Data:', formData)

    }

    useEffect(() => {
        if (course) {
            setFormData({
                title: course?.title || '',
                description: course?.description || '',
                duration: course?.duration || '',
                price: course?.price || '',
                category: course?.category || '',
                coverImage: course?.coverImage || '',
            })
        }
    }, [course])

    // console.log(course)
    return (
        <div className="w-full max-w-3xl">
            <div className="p-1.5 md:p-2">
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 underline">Update Course Details</h2>
                    <p className="text-gray-500 mt-1">Fill the details below in existing course</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <Input
                        label="Title"
                        type='text'
                        id='title'
                        name="title"
                        placeholder="Enter Course Title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    {/*Duration  */}
                    <Input
                        label="Duration"
                        type='number'
                        name="duration"
                        id='duration'
                        placeholder="Enter Course Duration"
                        value={formData.duration}
                        onChange={handleChange}
                    />
                    {/*Price  */}
                    <Input
                        label="Price"
                        type='number'
                        name="price"
                        id='price'
                        placeholder="Enter Course price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <SelectInput
                        label='Category'
                        type='text'
                        id='category'
                        name='category'
                        defaultOption='Select Category'
                        options={['development', 'design', 'business', 'personal-development', 'it-software', 'data-ai', 'creative', 'language-learning']}
                        value={formData.category}
                        onChange={handleChange}
                    />

                    <Input
                        label='Cover Image'
                        type='file'
                        name='coverImage'
                        id='coverImage'
                        value={formData.coverImage}
                        onChange={handleChange}


                    />
                    {/* Description */}
                    <DescriptionInput
                        label="Description"
                        placeholder="Enter Course Description"
                        name="description"
                        id='description'
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <div className="flex items-center gap-4 pt-4">
                        <UpdateUserDetails
                            label={'Save'}
                            endpoint={`courses/${course?._id}`}
                            payload={formData}
                            redirectTo={'/instructor'}
                        />
                        <Link to={'/courses'}
                            type="reset"
                            className="px-8 py-3 cursor-pointer rounded-md font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
                        >
                            Cancel
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

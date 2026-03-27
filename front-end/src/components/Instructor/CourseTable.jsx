
import { useEffect, useState } from "react";
import { SelectInput, Input } from "../Input"

export const CourseTable = ({ courses }) => {
    const [search, setSearch] = useState({query:''})
    const [filter,setFilter] = useState([])


    const handleChange =(e) =>{
             const {name,value} = e.target
        setSearch({...search,[name]:value})


const filteredData = courses.filter((course) => 
        course.title.toLowerCase().includes(value.toLowerCase())
    )
    setFilter(filteredData)

    }


    const handleSearchQuery =(e)=>{
         e.preventDefault()
              const data = courses.filter((val)=> val.title.toLowerCase().includes(search.query.toLowerCase()))
         setFilter(data)
         
    }

useEffect(() => {
    setFilter(courses);
}, [courses]);


    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="shadow-sm bg-white">

                {/* Search Section */}
                <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
                    <form
                        onSubmit={handleSearchQuery}
                        className="w-full max-w-md"
                    >
                        <div className="relative">
                            <Input
                                label="Search Courses"
                                id="search"
                                name="query"
                                type="text"
                                placeholder="Enter course name..."
                                onChange={handleChange}
                                value={search.query}
                                className="pl-10"
                            />

                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Header Section */}
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Course Management</h2>
                    <p className="text-xl font-semibold text-gray-800">Courses <span className="font-bold text-blue-500">{filter.length}</span></p>

                </div>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600 uppercase text-xs leading-normal">
                                <th className="py-3 px-6">No</th>
                                <th className="py-3 px-6">Title</th>
                                <th className="py-3 px-6">Description</th>
                                <th className="py-3 px-6">Duration</th>
                                <th className="py-3 px-6">Created By</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm font-light">
                            {filter.map((course, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition duration-150 cursor-pointer">
                                    <td className="py-3 px-6 font-medium">{index + 1}</td>
                                    <td className="py-3 px-6 font-semibold text-blue-600">{course.title}</td>
                                    <td className="py-3 px-6">{course.description}</td>
                                    <td className="py-3 px-6">{course.duration}</td>
                                    <td className="py-3 px-6">{course.createdBy}</td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center gap-3">
                                            <button className="text-blue-500 hover:text-blue-700 font-medium cursor-pointer">
                                                Edit
                                            </button>
                                            <span className="text-gray-300">|</span>
                                            <button className="text-red-500 hover:text-red-700 font-medium cursor-pointer">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {courses.length === 0 && (
                    <div className="text-center py-10 text-gray-500">
                        No courses found. Click "Add New Course" to get started.
                    </div>
                )}
            </div>
        </div>
    );
};


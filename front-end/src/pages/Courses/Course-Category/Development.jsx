import { Input} from "../../Auth/FormFields"
import { CourseCard } from "../CourseCard"


export const Development = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
  {/* Header Section */}
  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    
    {/* Heading */}
    <h1 className="text-2xl font-semibold text-gray-800 tracking-tight">
      Development Courses
    </h1>

    {/* Filters */}
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
      <Input
      placeholder={'Search development courses'}
      />
      <button className="px-6 py-2 bg-cyan-400 rounded-md text-white font-bold cursor-pointer hover:bg-cyan-700 transition-colors">Search</button>
    </div>
  </div>

  {/* Course List */}
  <div className="mt-8">
    <CourseCard />
  </div>
</div>
  )
}

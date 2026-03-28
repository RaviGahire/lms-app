import { DescriptionInput, Input } from '../Input'

export const UpdateCourse = ({ data }) => {


    return (
        <div className="w-full max-w-4xl ">
            <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8">

                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Update Course Details</h2>
                    <p className="text-gray-500 mt-1">Fill the details below in existing course</p>
                </div>
                <form method="post" className="space-y-6">

                    <Input
                        label={'Title'}
                        placeholder={'Enter Course Title'}
                    />
                    <Input
                        label={'Duration'}
                        placeholder={'Enter Course Title'}
                    />
                    <DescriptionInput
                        label={'Description'}
                        placeholder={'Enter Course Title'}
                    />

                    {/* Buttons */}
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

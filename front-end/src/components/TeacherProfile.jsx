export const TeacherProfile = () => {
    return (
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md p-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="teacher"
                    className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Ravi Gahire
                    </h2>
                    <p className="text-[#49BBBD] font-semibold">
                        Senior UI/UX Instructor
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                    <p className="text-xl font-bold text-gray-800">12</p>
                    <p className="text-sm text-gray-500">Courses</p>
                </div>
                <div>
                    <p className="text-xl font-bold text-gray-800">4.8</p>
                    <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div>
                    <p className="text-xl font-bold text-gray-800">2k+</p>
                    <p className="text-sm text-gray-500">Students</p>
                </div>
            </div>

            {/* Bio */}
            <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-2">About</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Passionate instructor with 5+ years of experience in UI/UX and frontend
                    development. Loves teaching and building real-world projects.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-[#49BBBD] text-white py-3 rounded-xl font-semibold hover:bg-[#3ca1a3] transition">
                    View Courses
                </button>
                <button className="flex-1 border border-[#49BBBD] text-[#49BBBD] py-3 rounded-xl font-semibold hover:bg-[#49BBBD] hover:text-white transition">
                    Contact
                </button>
            </div>
        </div>
    );
};

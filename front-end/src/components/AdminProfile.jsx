export const AdminProfile = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="admin"
            className="w-20 h-20 rounded-full object-cover border-4 border-[#49BBBD]"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">Admin Ravi</h2>
          <p className="text-sm text-[#49BBBD] font-semibold">System Administrator</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-6"></div>

      {/* Admin Info */}
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Email</span>
          <span className="font-medium">admin@gmail.com</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Role</span>
          <span className="font-medium">Super Admin</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Joined</span>
          <span className="font-medium">Dec 2024</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Last Login</span>
          <span className="font-medium text-green-600">Online</span>
        </div>
      </div>

      {/* Permissions */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-2">Permissions</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-sm rounded-full bg-[#49BBBD]/10 text-[#49BBBD]">
            Manage Users
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-[#49BBBD]/10 text-[#49BBBD]">
            Manage Courses
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-[#49BBBD]/10 text-[#49BBBD]">
            View Reports
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-[#49BBBD]/10 text-[#49BBBD]">
            System Settings
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 bg-[#49BBBD] text-white py-3 rounded-xl font-semibold hover:bg-[#3ca1a3] transition">
          Edit Profile
        </button>
        <button className="flex-1 border border-red-500 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition">
          Logout
        </button>
      </div>
    </div>
  );
};

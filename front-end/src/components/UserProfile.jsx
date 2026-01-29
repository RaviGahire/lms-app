import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserProfile = () => {

    const [user, setUser] = useState({})

    const location = useLocation();
    const userId = location.state?.userId; // for user detials

    const fetcUserDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/users/${userId}`,)

            //console.log(res.data.data)

            const userDetails = {
                email: res.data.data.email,
                role: res.data.data.role,
                userName: res.data.data.userName,
                email: res.data.data.email,
                joined:res.data.data.createdAt,

            }

            setUser(userDetails)

        } catch (error) {
            console.log(error)
        }

    }



    // useEffect for data

    useEffect(() => {
        fetcUserDetails()
    }, [])

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6">
            {/* Profile Header */}
            <div className="flex items-center gap-4">
                <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="user"
                    className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{user.userName}</h2>
                    <p className="text-sm text-gray-500">{user.role}</p>
                </div>
            </div>

            {/* Info Section */}
            <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium">{user.email}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Joined</span>
                    <span className="font-medium">{user.joined.split('T')[0]}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500">Courses</span>
                    <span className="font-medium">5</span>
                </div>
            </div>

            {/* Action Button */}
            <button className="mt-6 w-full bg-[#49BBBD] text-white py-3 rounded-xl font-semibold hover:bg-[#3ca1a3] transition">
                Edit Profile
            </button>
        </div>
    );
};

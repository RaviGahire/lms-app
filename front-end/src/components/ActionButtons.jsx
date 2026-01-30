import axios from "axios"
import { Link } from "react-router-dom";

//
export const UpdateButton = ({ apiUrl, userId, updatedData }) => {

    //update handler function 
    const handleUpdate = async () => {
        try {
            const res = await axios.put(`${apiUrl}/${userId}`, updatedData)
            // if 
            if (res.data?.message) {
                alert(res.data.message);
            } else {
                alert(res.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Update failed");
        }
    }
    return (
        <button onClick={handleUpdate} class="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
            Update
        </button>
    )
}

//
export const LogoutButton = () => {
    const handlelogout = () => {
        alert('I am working logout')
    }

    return (
        <button onClick={handlelogout} className="px-4 py-2 rounded-md cursor-pointer bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition">
            Logout
        </button>

    )
}





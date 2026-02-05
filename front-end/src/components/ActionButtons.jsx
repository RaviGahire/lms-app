import axios from "axios"
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

//
export const UpdateButton = ({ componetRoute, apiUrl, userId, updatedData, clearData }) => {

    // console.log('from update btn',updatedData )


    //update handler function 
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(
                `${apiUrl}/${userId}`,
                updatedData
            )
            alert(res.data?.message || "Updated successfully")
            Navigate(componetRoute)

        } catch (error) {
            console.error(error);
            alert("Update failed");
        }
    }
    return (
        <button type="submit" onClick={(e) => handleUpdate(e)} class="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
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





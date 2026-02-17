import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import ContextData from "../Contexts/Context"


export const UpdateButton = ({ userId, updatedData }) => {

    const nav = useNavigate()
    const { fetchUserProfile } = useContext(ContextData)
    const API_URL = import.meta.env.VITE_API_URL

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.put(`${API_URL}/users/${userId}`, updatedData);

            await fetchUserProfile(); 

            alert(response.data?.message || "Profile updated successfully! 🎉");

            nav('/student');

        } catch (error) {
   
            const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
            console.error("Update failed:", error);
            alert(`Update Failed: ${errorMessage}`);
        }
    };
    return (
        <button
            type="submit"
            onClick={handleUpdate}
            className="w-full sm:w-max px-10 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
            Save Changes
        </button>
    )
}
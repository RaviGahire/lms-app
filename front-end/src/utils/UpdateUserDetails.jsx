import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import ContextData from "../Contexts/Context"
import { getStoredToken } from "./getStoredToken"


export const UpdateUserDetails = ({ label, endpoint, payload, redirectTo }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const { fetchUserProfile } = useContext(ContextData)

    const API_URL = import.meta.env.VITE_API_URL

    const handleUpdate = async (e) => {

        if (e) e.preventDefault()

        const token = getStoredToken()
        if (!token) return alert("Session expired. Please login again.")

        setLoading(true)

        try {

            const response = await axios.post(
                `${API_URL}${endpoint}`,
                payload,
                { headers: { Authorization: `Bearer ${token}` } }
            )

            console.log(response)
            await fetchUserProfile()

            alert(response.data?.message || "Updated successfully!")

            if (redirectTo) navigate(redirectTo)

        } catch (error) {

            const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
            console.error("Update failed:", error);
            alert(`Update Failed: ${errorMessage}`);
        }
        finally {
            setLoading(false)
        }
    };
    return (
        <button
            type="submit"
            onClick={handleUpdate}
            className={`w-full sm:w-max px-10 py-3 font-bold rounded-xl transition-all shadow-lg 
        ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95 shadow-blue-200'}
      `}        >
            {loading ? "Processing..." : label}

        </button>
    )
}
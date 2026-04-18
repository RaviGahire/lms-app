import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL

export const getAllCourses = async () => {
    try {
        const response = await axios.get(`${API_URL}courses`)
        return response.data?.courses || []
    } catch (error) {
        console.error("Error fetching courses:", error);
        return []
    }
}


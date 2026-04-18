import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getStoredToken } from "../utils/getStoredToken"
import ContextData from "../Contexts/Context"
import { useContext } from "react"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const ChangeProfileAvatar = () => {
    
    const [avatar, setAvatar] = useState(null)
    const [preview, setPreview] = useState(null)   
    const { fetchUserProfile } = useContext(ContextData)

    const navigate = useNavigate()
    
    // console.log(avatar)

    const handleChange = (e) => {
        const file = e.target.files[0]
        setAvatar(file)
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("avatar", avatar)

        console.log(formData)
        const token = getStoredToken()
        try {
            const res = await axios.post(
                `${API_URL}auth/users/me`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            // console.log(res)

            if (res.data.success) {
                alert("Avatar updated successfully")
                navigate("/student");
            }

            await fetchUserProfile()


        } catch (error) {
            console.error(error)
            alert("Error uploading avatar");
        }
    }



    return (
        <div className="max-w-md mx-auto mt-20 bg-amber-700 p-6 rounded-lg">

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Preview */}
                {preview && (
                    <img
                        src={preview}
                        alt="avatar preview"
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                    />
                )}

                {/* File Input */}
                <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleChange}
                    className="bg-white p-2 rounded"
                />
                {/* Submit Button */}
                <button type="submit" className="bg-black text-white py-2 rounded">Upload Avatar</button>
            </form>
        </div>

    )
}

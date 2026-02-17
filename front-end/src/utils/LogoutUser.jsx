import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContextData from "../Contexts/Context"


export const LogoutButton = () => {

    const nav = useNavigate()
    const { userLogout } = useContext(ContextData)

    const handlelogout = () => {
        const userAction = window.confirm('Are you sure you want to logout?');
        if (userAction) {
            userLogout();
            nav('/login')
        }
        alert('Logout successfully ')

    }
    return (
        <button onClick={handlelogout} className="px-4 py-2 rounded-md cursor-pointer bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition">
            Logout
        </button>
    )
}
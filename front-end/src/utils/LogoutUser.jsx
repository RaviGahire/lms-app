import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ContextData from "../Contexts/Context"
import { IconLogout } from "@tabler/icons-react"


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
        <button
            onClick={handlelogout}
            className="flex items-center cursor-pointer justify-center gap-2 w-full py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition active:scale-95"
        >
            <IconLogout size={20} /> Logout
        </button>
    )
}
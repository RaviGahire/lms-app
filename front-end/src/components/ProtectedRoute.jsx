import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ allowedRole }) => {

    const token = localStorage.getItem('token') // get token from localstorage      

    if (!token) { // if token not in local storage 

        return <Navigate to={'/login'} replace></Navigate> // redirect on login page

    }

    if (allowedRole && !allowedRole.includes(token.role)) { // if role not in the token 
        return <Navigate to={'unauthorized'} replace></Navigate>
    }
    return <Outlet />;

}

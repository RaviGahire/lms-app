import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ loading, user, allowedRole, children }) => {

    if (loading) {
        return <p>Loading....</p>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    if (allowedRole && !allowedRole.includes(user.role)) {

        return <Navigate to='/unauthorized'></Navigate>

    }

    return children


}

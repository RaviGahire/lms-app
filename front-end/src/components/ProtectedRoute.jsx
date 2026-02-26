import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ loading, user, allowedUserRoles, children }) => {
  
    // console.log(user.role)
    // console.log(allowedUserRoles)

    if (loading) {
        return <p>Loading....</p>
    }

    if (!user) {
        return <Navigate to='/login' replace />
    }

    if (allowedUserRoles && !allowedUserRoles.includes(user.role)) {

        return <Navigate to='/unauthorized' replace/>

    }

    return children


}

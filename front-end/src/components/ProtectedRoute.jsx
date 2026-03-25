import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ loading, user, allowedUserRoles, children }) => {

    // console.log(user)
    // console.log(allowedUserRoles)

    if (user === null  && allowedUserRoles === null || user === undefined  && allowedUserRoles === undefined ) {
      return <p>Loading....</p>
    }

    if (!user) {
        return <Navigate to='/login' />
    }

    if (allowedUserRoles && !allowedUserRoles.includes(user.role?.toLowerCase())) {
        return <Navigate to="/unauthorized" />;
    }

    return children
}

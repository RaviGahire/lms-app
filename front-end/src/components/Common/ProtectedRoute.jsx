import { Navigate } from "react-router-dom"


export const ProtectedRoute = ({ loading, user, allowedUserRoles, children }) => {
// console.log(user)

    if (loading) {
        return (
            <div className="flex h-screen bg-cyan-800 items-center justify-center">
                <p className="text-cyan-100 font-medium animate-pulse">
                    Wait, we are fetching profile....
                </p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login"  />;
    }

    // if (!user?.isVerified) {
    //     return <Navigate to="/verify-profile"  />;
    // }


    const userRole = user.role?.toLowerCase();

    if (allowedUserRoles && !allowedUserRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children
}

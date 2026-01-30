import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/Home"
import { Login } from "../components/Login"
import { OtpPopup } from "../utils/OtpPopup"
import { SignUp } from "../components/SignUp"
import { BlogPage } from "../pages/BlogPage"
import { CourseCard } from "../pages/CourseCard"
import { UserProfile } from "../components/UserProfile"
import { TeacherProfile } from "../components/TeacherProfile"
import { AdminProfile } from "../components/AdminProfile"


export const AppRoutes = () => {
    return (
        <>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/courses" element={<CourseCard />} />
                        <Route path="/blogs" element={<BlogPage />} />
                        <Route path="/aboutus" element={<div>aboutus Page</div>} />

                        {/* Auth Routes */}
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/otp_pop_up" element={<OtpPopup />} />
                        <Route path="/login" element={<Login />} />

                        {/* Profile routes */}
                        <Route path="/user_profile" element={<UserProfile />} />
                        <Route path="/admin_profile" element={<AdminProfile />} />

                        {/* Update user route */}
                        <Route path="/update_user/:id" element={<AdminProfile />} />

                        {/* Fallback Route */}
                        <Route path="*" element={<><h1>Fallbackroute</h1></>} />
                    </Routes>
                </MainLayout>
            </Router>
        </>
    )
}

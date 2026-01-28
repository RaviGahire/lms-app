import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/Home"
import { Login } from "../components/Login"
import { OtpPopup } from "../utils/OtpPopup"
import { SignUp } from "../components/SignUp"

export const AppRoutes = () => {
    return (
        <>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/courses" element={<OtpPopup />} />
                        <Route path="/blogs" element={<div>blogs Page</div>} />
                        <Route path="/aboutus" element={<div>aboutus Page</div>} />

                        {/* Auth Routes */}
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/otp_pop_up" element={<OtpPopup />} />
                        <Route path="/login" element={<Login />} />
                        
                        



                        {/* Fallback Route */}
                        <Route path="*" element={<><h1>Fallbackroute</h1></>} />
                    </Routes>
                </MainLayout>
            </Router>
        </>
    )
}

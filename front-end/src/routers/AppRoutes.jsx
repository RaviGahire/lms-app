import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/Home"
import { Login } from "../components/Login"
import { SignIn } from "../components/SignIn"

export const AppRoutes = () => {
    return (
        <>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/courses" element={<div>courses Page</div>} />
                        <Route path="/blogs" element={<div>blogs Page</div>} />
                        <Route path="/aboutus" element={<div>aboutus Page</div>} />


                        {/* Auth Routes */}
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signin" element={<SignIn/>} />

                        {/* Fallback Route */}
                        <Route path="*" element={<><h1>Fallbackroute</h1></>}/>
                    </Routes>
                </MainLayout>
            </Router>
        </>
    )
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"

export const AppRoutes = () => {
    return (
        <>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<div>Home Page</div>} />
                        <Route path="/courses" element={<div>courses Page</div>} />
                        <Route path="/blogs" element={<div>blogs Page</div>} />
                        <Route path="/aboutus" element={<div>aboutus Page</div>} />


                        {/* Auth Routes */}
                        <Route path="/login" element={<div>Login Page</div>} />
                        <Route path="/signin" element={<div>Signin Page</div>} />

                        {/* Fallback Route */}
                        <Route path="*" element={<><h1>Fallbackroute</h1></>}/>
                    </Routes>
                </MainLayout>
            </Router>
        </>
    )
}

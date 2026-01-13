import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"

export const AppRoutes = () => {
    return (
        <>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<div>Home Page</div>} />
                        <Route path="/about" element={<div>About Page</div>} />
                    </Routes>
                </MainLayout>
            </Router>
        </>
    )
}

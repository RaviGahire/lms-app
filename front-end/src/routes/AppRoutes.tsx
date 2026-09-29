import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home';


export const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                {/* Routes inside the shared MainLayout */}
                <Route element={<MainLayout />}>
                    {/* Home-Page */}
                    <Route element={<HomePage />} path="/" />
                </Route>
                {/* 404 Fallback */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    )
}


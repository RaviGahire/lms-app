import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home';
import { ExplorePage } from '../pages/explore';
import { AboutPage } from '../pages/about';
import { ContactPage } from '../pages/contact';


export const AppRoutes = () => {

    return (
        <Router>
            <Routes>
                {/* Routes inside the shared MainLayout */}
                <Route element={<MainLayout />}>
                    {/* Home-Page */}
                    <Route element={<HomePage />} path="/" />
                    <Route element={<ExplorePage />} path="/explore" />
                    <Route element={<AboutPage />} path="/about" />
                    <Route element={<ContactPage />} path="/contact" />
                </Route>
                {/* 404 Fallback */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
            </Routes>
        </Router>
    )
}


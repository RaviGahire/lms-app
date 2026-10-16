import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home';
import { CoursesPage } from '../pages/courses';
import { AboutPage } from '../pages/about';
import { ContactPage } from '../pages/contact';
import { AuthRoutes } from './AuthRoutes';
import { CourseCategoryDetails } from '../features/courses';


export const AppRoutes = () => {
  return (
    <Router>
      <Routes>

        {/* Main site pages with shared MainLayout */}
        <Route element={<MainLayout />}>
          {/* Main Pages */}
          <Route element={<HomePage />} path="/" />
          <Route element={<CoursesPage />} path="/courses" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ContactPage />} path="/contact" />
          <Route element={<CourseCategoryDetails categoryDetails={"category"}/> } path="/category/:id" />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthRoutes />}  path="/auth/*" />

        {/* 404 Fallback */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

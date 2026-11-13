import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/home';
import { CoursesPage } from '../pages/courses';
import { AboutPage } from '../pages/about';
import { ContactPage } from '../pages/contact';
import { AuthRoutes } from './AuthRoutes';
import { CouresDetails, CourseCategoryDetails } from '../features/courses';
import { CheckoutPage } from '../features/payments/CheckoutPage';
import { CourseManagementPage } from '../features/instructor';
import { StudentDashboard } from '../features/student';
import { SettingsPage } from '../features/settings';
import { CourseRoutes } from './CourseRoutes';

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

          {/* Course-Category */}
          <Route
            element={<CourseCategoryDetails categoryDetails={'category'} />}
            path="/category/:id"
          />
          <Route
            element={<CouresDetails courseDetails={''} />}
            path="/course-details/:id"
          />
          {/* Profile */}
          <Route element={<SettingsPage />} path="/settings" />
          {/* Instructor routes */}
          <Route element={<CourseManagementPage />} path="/instructor" />

          {/* Student-Dashboard */}
          <Route element={<StudentDashboard />} path="/student-dashboard" />

          {/* Payment */}
          <Route element={<CheckoutPage />} path="/payment" />
        </Route>

        {/* Course Routes */}
        <Route element={<CourseRoutes />} path="/course/*" />

        {/* Auth Routes */}
        <Route element={<AuthRoutes />} path="/auth/*" />

        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}

        {/* 404 Fallback */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

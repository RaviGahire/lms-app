import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { SignUpPage } from '../pages/auth/SignUpPage';
import { SignInPage } from '../pages/auth/SignInPage';

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </AuthLayout>
  );
};

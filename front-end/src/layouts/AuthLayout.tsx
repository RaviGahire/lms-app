import React from 'react';
import { Navbar } from '../shared/components/Navbar';

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div aria-label='auth-layout-section' className='bg-app'>
      {/* Navbar */}
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

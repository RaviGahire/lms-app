import {
  IconBrandGoogle,
  IconBrandFacebook,
  IconBrandApple,
} from '@tabler/icons-react';
import { SignInForm } from '../../features/auth';
import { Button } from '../../shared/components/Buttons/Buttons';
import { Link } from 'react-router-dom';

export const SignInPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-app p-4 font-inter text-primary antialiased">
      <div className="w-full max-w-3xl rounded-2xl border border-subtle bg-card p-8 sm:p-10 shadow-2xl">
        {/* Header Section */}
        <div className="text-left mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl leading-snug">
            Sign In to Master-Track
          </h1>
          <p className="mt-2 text-sm text-secondary leading-relaxed">
            Enter your credentials to access your courses, interactive labs, and
            certificates.
          </p>
        </div>

        {/* Form */}
        <SignInForm />

        {/* Divider */}
        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-subtle" />
          </div>
          <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
            <span className="bg-card px-3 text-muted">
              Or continue with Google
            </span>
          </div>
        </div>

        {/* OAuth Buttons */}
        <div className="flex justify-around items-center gap-4">
          {/* Google */}
          <Button
            size="md"
            variant="outline"
            id="google"
            label="Google"
            icon={<IconBrandGoogle size={16} />}
            className="w-full"
          />
          {/* Facebook */}
          <Button
            size="md"
            variant="outline"
            id="facebook"
            label="Facebook"
            icon={<IconBrandFacebook size={16} />}
            className="w-full"
          />
          {/* Apple ID */}
          <Button
            size="md"
            variant="outline"
            id="apple-id"
            label="apple ID"
            icon={<IconBrandApple size={16} />}
            className="w-full"
          />
        </div>

        {/* Redirection Footer Link */}
        <p className="mt-8 text-center text-sm text-secondary">
          Don't have an account yet?{' '}
          <Link
            to={'/auth/sign-up'}
            // onClick={onSignUpClick}
            className="font-bold text-highlight hover:underline focus:outline-none"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

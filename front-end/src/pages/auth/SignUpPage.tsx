import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGoogleFilled,
  IconLogin,
} from '@tabler/icons-react';
import { SignUpForm } from '../../features/auth';
import { Button } from '../../shared/components/Buttons/Buttons';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center  p-4 font-inter text-primary">
      <div className="w-full max-w-3xl rounded-2xl border border-subtle bg-card p-8 sm:p-10 shadow-2xl">
        {/* Header Section */}
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl leading-snug">
            Create Your Master-Track Account
          </h1>
        </div>

        <p className="mt-3 text-sm text-muted leading-relaxed">
          Join 850,000+ students mastering sciences, engineering, systems, and
          creative arts.
        </p>

        {/* OAuth Buttons */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          <Button
            id="google"
            label="Google"
            size="sm"
            variant="outline"
            icon={<IconBrandGoogleFilled size={16} />}
          />
          <Button
            id="facebook"
            label="facebook"
            size="sm"
            variant="outline"
            icon={<IconBrandFacebook size={16} />}
          />
          <Button
            id="apple-id"
            label="apple ID"
            icon={<IconBrandApple size={16} />}
            variant="outline"
          />
        </div>

        {/* Divider */}
        <div className="relative my-7">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-subtle" />
          </div>
          <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
            <span className="bg-card px-3 font-semibold text-muted">
              Or register with email
            </span>
          </div>
        </div>

        {/* Form  */}
        <SignUpForm />

        {/* Legal Disclaimer */}
        <p className="mt-5 text-center text-xs text-muted leading-relaxed">
          By selecting Create Free Account, you agree to SkillForge&apos;s{' '}
          <a href="#" className="font-medium text-primary hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="font-medium text-primary hover:underline">
            Privacy Policy
          </a>
          . No payment required today.
        </p>

        {/* Sign In Footer Box */}
        <div className="mt-8 flex items-center justify-between rounded-xl border border-subtle bg-surface/20 px-5 py-4">
          <span className="text-xs text-secondary">
            Already have a verified Master-track account?
          </span>
          <Link
            to={'/auth/sign-in'}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-highlight transition-colors shrink-0 ml-4"
          >
            <span>Sign in</span>
            <IconLogin size={16} stroke={2} />
          </Link>
        </div>
      </div>
    </div>
  );
};

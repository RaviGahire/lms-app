import React, { useState } from 'react';
import { IconArrowRight, IconUserCheck } from '@tabler/icons-react';
import { TextInput } from '../../../shared/components/Form';
import { Button } from '../../../shared/components/Buttons/Buttons';

interface SignInPageProps {
  onSuccess?: () => void;
  // onSignUpClick?: () => void;
  onForgotPasswordClick?: () => void;
}

export const SignInForm = ({
  onSuccess,
  onForgotPasswordClick,
}: SignInPageProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    showPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // const togglePasswordVisibility = () => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     showPassword: !prev.showPassword,
  //   }));
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}
      <div>
        <TextInput
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="e.g. example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      {/* Password */}
      <div>
        <TextInput
          id="password"
          type="password"
          name="password"
          label="Password"
          placeholder="••••••••••••"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* Keep logged in and Passkey Action row */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-2.5">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 rounded border border-subtle bg-surface/40 text-[#4F75FF] focus:ring-0 focus:ring-offset-0 accent-[#4F75FF] cursor-pointer"
          />
          <label
            htmlFor="rememberMe"
            className="text-xs text-secondary cursor-pointer select-none"
          >
            Remember this device for 30 days
          </label>
        </div>

        {/* Passkey */}
        <Button
          size="sm"
          variant="ghost"
          label="Use Passkey"
          disabled
          icon={<IconUserCheck size={16} />}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="md"
        id="sign-in"
        label="Sign In to Account"
        className="w-full"
        icon={<IconArrowRight size={18} />}
        iconPosition="right"
      />
    </form>
  );
};

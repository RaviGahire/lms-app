import React, { useState } from 'react';
import {
  IconId,
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
  IconSchool,
  IconArrowRight,
} from '@tabler/icons-react';
import { TextInput } from '../../../shared/components/Form';
import { Button } from '../../../shared/components/Buttons/Buttons';

interface SignUpFormProps {
  onSuccess?: () => void;
}

export const SignUpForm = ({ onSuccess }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    subscribeNewsletter: true,
    showPassword: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <TextInput
          type="text"
          id="fullName"
          name="fullName"
          label="Full Name (Legal)"
          placeholder="e.g. ravi gahire"
          value={formData.fullName}
          onChange={handleChange}
          error={error}
        />
      </div>

      {/* Email */}
      <div>
        <TextInput
          id="email"
          name="email"
          type="email"
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
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••••••"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-start gap-3 pt-1">
        <input
          id="subscribeNewsletter"
          name="subscribeNewsletter"
          type="checkbox"
          checked={formData.subscribeNewsletter}
          onChange={handleChange}
          className="mt-0.5 h-4 w-4 rounded border-subtle bg-surface/40 text-blue-light focus:ring-0 focus:ring-offset-0 accent-[#4F75FF] cursor-pointer"
        />
        <label
          htmlFor="subscribeNewsletter"
          className="text-xs text-secondary leading-snug cursor-pointer select-none"
        >
          Send me interactive weekly lab challenges, real-time benchmark
          competitions, and mentor office hours invitations.
        </label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="md"
        label="Create Account"
        className="w-full"
      />
    </form>
  );
};

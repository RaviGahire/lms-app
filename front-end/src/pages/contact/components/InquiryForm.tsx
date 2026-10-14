import React, { useState } from 'react';
import { Button } from '../../../shared/components/Buttons/Buttons';
import {
  OptionInput,
  TextAreaInput,
  TextInput,
} from '../../../shared/components/Form';

const subjects = [
  'Enterprise Training',
  'Technical Support',
  'Curriculum & Mentorship',
  'Billing & Subscriptions',
  'General Inquiry',
];

// Options
const teamSizes = [
  {
    label: 'Individual Developer ',
    value: 'individual-developer',
    description: '(1 user)',
    // badge: 'POPULAR',
    // disabled: true
  },
  {
    label: 'Small Team ',
    value: 'small-team',
    description: '(2 - 15 users)',
    badge: 'POPULAR',
    // disabled: true
  },
  {
    label: 'Department / Business Unit',
    value: 'department-business',
    description: '(16 - 100 users)',
  },
  {
    label: 'Enterprise Scale (100+ users)',
    value: 'enterprise',
    description: '(100+ users)',
  },
];

export const InquiryForm = () => {
  const [selectedSubject, setSelectedSubject] = useState('Enterprise Training');
  const [selectedTeamSize, setSelectedTeamSize] = useState(
    'Department / Business Unit (16 – 100 users)'
  );

  const [sendCompliance, setSendCompliance] = useState(true);

  const [selectedTrack, setSelectedTrack] = useState<string>('');
  const [error, setError] = useState<string>('');
  // Form Fields
  const [formData, setFormData] = useState({
    fullName: 'Alex Vance',
    workEmail: 'alex@company.com',
    organization: 'Acme Systems / Stanford CS',
    role: 'Staff Software Engineer / VP Eng',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (val: string) => {
    setSelectedTrack(val);
    if (!val) {
      setError('Please choose a curriculum track to continue.');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting inquiry:', {
      subject: selectedSubject,
      teamSize: selectedTeamSize,
      sendCompliance,
      ...formData,
    });
  };

  return (
    <section className="min-h-screen py-12 px-6 flex items-center justify-center text-white">
      {/* Outer Card Container */}
      <div className="w-full max-w-6xl rounded-3xl border border-border p-7 sm:p-10 shadow-2xl backdrop-blur-xl">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
              Send an inquiry
            </h2>
            <p className="text-sm text-text-muted">
              Our engineering operations desk handles requests directly.
            </p>
          </div>

          {/* Response SLA Badge */}
          <div className="self-start inline-flex items-center gap-2 rounded-xl border border-slate-800/90 bg-[#0a1220] px-3.5 py-2 text-xs font-mono text-[#10b981]">
            <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>Avg Response: ~2.5 hrs</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inquiry Subject Selection */}
          <div>
            <label className="block text-xs font-bold tracking-wider uppercase text-yellow-400 mb-3">
              SELECT INQUIRY SUBJECT
            </label>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => {
                const isActive = selectedSubject === subject;
                return (
                  <Button
                    key={subject}
                    label={subject}
                    size="sm"
                    type="button"
                    variant="outline"
                    onClick={() => setSelectedSubject(subject)}
                    className={`${
                      isActive ? 'border border-success-dark' : ''
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <TextInput
                label="Name"
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="e.g. Jonh Doe"
                error={error}
                required
              />
            </div>

            {/* Work Email */}
            <div>
              <TextInput
                label="Email"
                type="email"
                name="email"
                value={formData.workEmail}
                placeholder="e.g. example@gmail.com"
                error={error}
                required
              />
            </div>
          </div>

          {/* Organization & Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              label="Organization / University"
              type="text"
              name="organization"
              value={formData.organization}
              placeholder="e.g. SPPU niversity"
              error={error}
            />
            <div>
              <TextInput
              id='role'
                type="text"
                name="role"
                value={formData.role}
                label="Role / Title"
                placeholder="Staff Software Engineer / VP Eng"
                error={error}
              />
            </div>
          </div>

          {/* Full-width Select: Team Size */}
          <div>
            <OptionInput
              label="Team Size"
              options={teamSizes}
              onChange={handleSelect}
              value={selectedTrack}
              error={error}
              required
            />
          </div>

          {/* Message / Technical Requirements */}
          <div>
            <TextAreaInput
              value={formData.message}
              name="message"
              onChange={handleChange}
              label="Message"
              error={error}
              required
            />
          </div>

          {/* Checkbox Notice */}
          <div className="flex items-start gap-3 pt-1">
            <input
              id="compliance-checkbox"
              type="checkbox"
              checked={sendCompliance}
              onChange={(e) => setSendCompliance(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-700 bg-[#09101d] text-blue-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-blue-500"
            />
            <label
              htmlFor="compliance-checkbox"
              className="text-xs text-slate-300 leading-relaxed cursor-pointer select-none"
            >
              Send me a copy of the{' '}
              <strong className="font-semibold text-white">
                Enterprise Security & SOC 2 Type II Compliance Summary
              </strong>{' '}
              alongside our discussion notes.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <Button
              size="md"
              type="submit"
              variant="danger"
              className="max-w-md w-full"
              label="Send Message"
            />
          </div>
        </form>

        {/* Security & Compliance Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 11V7a5 5 0 0 1 10 0v4"
              />
            </svg>
            <span>Encrypted via TLS 1.3</span>
          </div>

          <span className="text-slate-700">·</span>
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <span>Zero Third-Party Telemetry Sharing</span>
          </div>

          <span className="text-slate-700">·</span>

          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.5 12 2.5 2.5 5-5"
              />
            </svg>
            <span>SOC-2 Type II Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};
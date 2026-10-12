import { IconAlertTriangle } from '@tabler/icons-react';
import React, { forwardRef, useId } from 'react';

// Regex 
export const Text_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '.\-][A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

// Reusable Form TextInput Component

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label = 'Legal Full Name',
      error,
      helperText,
      id,
      className = '',
      containerClassName = '',
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className={`w-full flex flex-col ${containerClassName}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-slate-300 mb-2.5 flex items-center gap-1 select-none"
          >
            {label}
            {required && <span className="text-red-400 text-xs">*</span>}
          </label>
        )}

        {/* Input Wrapper */}
        <div className="relative w-full">
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={`
              w-full h-12 px-4 py-3.5 rounded-md
              bg-[#0b1324] text-white text-base
              placeholder:text-text-muted
              border transition-all duration-200 outline-none
              disabled:opacity-50 disabled:cursor-not-allowed
              ${
                error
                  ? 'border-red-500/80 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-slate-700'
              }
              ${className}
            `}
            {...props}
          />

          {/* Error Indicator Icon */}
          {error && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-red-400">
              <IconAlertTriangle size={18} />
            </div>
          )}
        </div>

        {/* Error / Helper Messages */}
        {error ? (
          <p
            id={errorId}
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-xs text-red-400 leading-none"
          >
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p id={helperId} className="mt-2 text-xs text-slate-400 leading-none">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);


import React, {
  forwardRef,
  useState,
  useRef,
  useId,
  ChangeEvent,
  useEffect,
} from 'react';

export interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  maxLength?: number;
  showCharCount?: boolean;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
}

/**
 * Custom Dark-Themed TextArea Component matching the MasterTrack design system.
 * Supports character counting, auto-resizing, validation regex/error handling, and full accessibility.
 */
export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(
  (
    {
      label = 'Project Architecture Proposal',
      error,
      helperText,
      id,
      className = '',
      containerClassName = '',
      maxLength,
      showCharCount = true,
      autoResize = true,
      minRows = 3,
      maxRows = 10,
      rows = 4,
      required,
      disabled,
      value: controlledValue,
      defaultValue = '',
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const charCountId = `${inputId}-char-count`;

    const internalRef = useRef<HTMLTextAreaElement | null>(null);
    const [internalValue, setInternalValue] = useState<string>(
      String(defaultValue ?? '')
    );

    const isControlled = controlledValue !== undefined;
    const textValue = isControlled
      ? String(controlledValue ?? '')
      : internalValue;
    const charCount = textValue.length;

    // Handle auto-resizing height if enabled
    const adjustHeight = (textarea: HTMLTextAreaElement | null) => {
      if (!autoResize || !textarea) return;

      textarea.style.height = 'auto';
      const computedLineHeight =
        parseFloat(window.getComputedStyle(textarea).lineHeight) || 24;
      const minHeight = minRows * computedLineHeight + 24; // padding allowance
      const maxHeight = maxRows * computedLineHeight + 24;

      const newHeight = Math.min(
        Math.max(textarea.scrollHeight, minHeight),
        maxHeight
      );
      textarea.style.height = `${newHeight}px`;
    };

    useEffect(() => {
      if (internalRef.current) {
        adjustHeight(internalRef.current);
      }
    }, [textValue, autoResize]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      adjustHeight(e.target);
      onChange?.(e);
    };

    return (
      <div className={`w-full flex flex-col ${containerClassName}`}>
        {/* Label & Header Row */}
        {label && (
          <div className="flex items-center justify-between mb-2 select-none">
            <label
              htmlFor={inputId}
              className="text-sm font-medium text-slate-300 flex items-center gap-1"
            >
              {label}
              {required && <span className="text-red-400 text-xs">*</span>}
            </label>

            {/* Character Count Top Counter */}
            {showCharCount && maxLength && (
              <span
                id={charCountId}
                aria-live="polite"
                className={`text-xs ${
                  charCount >= maxLength
                    ? 'text-red-400 font-semibold'
                    : charCount > maxLength * 0.9
                      ? 'text-amber-400'
                      : 'text-slate-500'
                }`}
              >
                {charCount}/{maxLength}
              </span>
            )}
          </div>
        )}

        {/* Textarea Wrapper */}
        <div className="relative w-full">
          <textarea
            ref={(node) => {
              internalRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref)
                (
                  ref as React.MutableRefObject<HTMLTextAreaElement | null>
                ).current = node;
            }}
            id={inputId}
            rows={rows}
            maxLength={maxLength}
            disabled={disabled}
            value={textValue}
            onChange={handleChange}
            aria-invalid={Boolean(error)}
            aria-describedby={
              [
                error ? errorId : null,
                helperText ? helperId : null,
                showCharCount && maxLength ? charCountId : null,
              ]
                .filter(Boolean)
                .join(' ') || undefined
            }
            className={`
              w-full px-4 py-3.5 rounded-md
              bg-[#0b1324] text-white text-sm sm:text-base leading-relaxed
              placeholder:text-slate-500
              border transition-all duration-200 outline-none
              disabled:opacity-50 disabled:cursor-not-allowed
              ${autoResize ? 'resize-none overflow-y-auto' : 'resize-y'}
              ${
                error
                  ? 'border-red-500/80 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                  : 'border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
              }
              ${className}
            `}
            {...props}
          />

          {/* Inline Error Icon Indicator */}
          {error && (
            <div className="pointer-events-none absolute top-3.5 right-3.5 text-red-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
          )}
        </div>

        {/* Bottom Error or Helper Text */}
        {error ? (
          <p
            id={errorId}
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-xs text-red-400"
          >
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p id={helperId} className="mt-2 text-xs text-slate-400">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

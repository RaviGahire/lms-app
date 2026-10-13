import { IconAlertTriangle } from '@tabler/icons-react';
import React, {
  forwardRef,
  useState,
  useId,
  KeyboardEvent,
  ChangeEvent,
} from 'react';

// Regex for valid numerical strings (allows optional negative sign, integers, and decimals)
export const NUMBER_REGEX = /^-?\d*(\.\d*)?$/;

// Strict number validator (ensures non-empty and well-formed decimal/integer)
export const STRICT_NUMBER_REGEX = /^-?\d+(\.\d+)?$/;

export interface NumberInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'min' | 'max' | 'step'
> {
  label?: string;
  value?: number | string;
  defaultValue?: number | string;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  prefix?: string;
  suffix?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  hideSteppers?: boolean;
  onChange?: (value: number | undefined, rawValue: string) => void;
  onValidate?: (error: string) => void;
}

/**
 * Custom Dark-Themed Number Input Component
 */
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      label = 'Number of Seats',
      value: controlledValue,
      defaultValue = '',
      min = -Infinity,
      max = Infinity,
      step = 1,
      precision,
      prefix,
      suffix,
      error,
      helperText,
      containerClassName = '',
      className = '',
      hideSteppers = false,
      disabled = false,
      readOnly = false,
      required = false,
      id,
      onChange,
      onValidate,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string>(
      String(defaultValue ?? '')
    );

    const displayString = isControlled
      ? String(controlledValue ?? '')
      : internalValue;

    // Helper: round to precision if specified
    const formatValue = (num: number): number => {
      if (precision !== undefined) {
        return parseFloat(num.toFixed(precision));
      }
      return num;
    };

    // Update value handler
    const updateValue = (nextStr: string) => {
      if (!isControlled) {
        setInternalValue(nextStr);
      }

      if (nextStr === '' || nextStr === '-') {
        onChange?.(undefined, nextStr);
        return;
      }

      const parsed = parseFloat(nextStr);
      if (!isNaN(parsed)) {
        onChange?.(parsed, nextStr);
      }
    };

    // Step change (increment / decrement)
    const handleStep = (direction: 1 | -1) => {
      if (disabled || readOnly) return;

      const currentNum = parseFloat(displayString);
      let nextNum: number;

      if (isNaN(currentNum)) {
        nextNum = direction === 1 ? (min !== -Infinity ? min : 0) : 0;
      } else {
        nextNum = formatValue(currentNum + direction * step);
      }

      // Clamp within min / max bounds
      if (nextNum < min) nextNum = min;
      if (nextNum > max) nextNum = max;

      updateValue(String(nextNum));
    };

    // Text change with regex filter
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;

      // Allow empty string or match partial valid numeric expression
      if (raw === '' || NUMBER_REGEX.test(raw)) {
        updateValue(raw);
      }
    };

    // Keyboard controls for a11y (Up/Down arrow, PageUp/Down)
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          handleStep(1);
          break;
        case 'ArrowDown':
          e.preventDefault();
          handleStep(-1);
          break;
        case 'PageUp':
          e.preventDefault();
          if (step) {
            const currentNum = parseFloat(displayString) || 0;
            const nextNum = Math.min(max, formatValue(currentNum + step * 10));
            updateValue(String(nextNum));
          }
          break;
        case 'PageDown':
          e.preventDefault();
          if (step) {
            const currentNum = parseFloat(displayString) || 0;
            const nextNum = Math.max(min, formatValue(currentNum - step * 10));
            updateValue(String(nextNum));
          }
          break;
        default:
          props.onKeyDown?.(e);
      }
    };

    const parsedNum = parseFloat(displayString);
    const isAtMin = !isNaN(parsedNum) && parsedNum <= min;
    const isAtMax = !isNaN(parsedNum) && parsedNum >= max;

    return (
      <div className={`w-full flex flex-col font-sans ${containerClassName}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-slate-300 mb-2 flex items-center justify-between select-none"
          >
            <span className="flex items-center gap-1">
              {label}
              {required && <span className="text-red-400 text-xs">*</span>}
            </span>

            {/* Min / Max Range Hint (optional) */}
            {(min !== -Infinity || max !== Infinity) && (
              <span className="text-xs text-slate-500 font-normal">
                {min !== -Infinity && max !== Infinity
                  ? `${min} – ${max}`
                  : min !== -Infinity
                    ? `Min: ${min}`
                    : `Max: ${max}`}
              </span>
            )}
          </label>
        )}

        {/* Input & Stepper Container */}
        <div
          className={`
            relative flex items-center w-full rounded-xl bg-[#0b1324] border transition-all duration-200
            ${
              error
                ? 'border-red-500/80 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-500/20'
                : 'border-slate-800 hover:border-slate-700 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {/* Prefix (e.g. $, #) */}
          {prefix && (
            <span className="pl-4 pr-1 text-slate-500 text-sm select-none">
              {prefix}
            </span>
          )}

          {/* Actual Input */}
          <input
            ref={ref}
            id={inputId}
            type="text"
            inputMode="decimal"
            role="spinbutton"
            aria-valuenow={isNaN(parsedNum) ? undefined : parsedNum}
            aria-valuemin={min !== -Infinity ? min : undefined}
            aria-valuemax={max !== Infinity ? max : undefined}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            disabled={disabled}
            readOnly={readOnly}
            value={displayString}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={`
              w-full h-12 bg-transparent text-white text-base
              placeholder:text-slate-600 outline-none
              ${prefix ? 'pl-1' : 'pl-4'}
              ${suffix || !hideSteppers ? 'pr-2' : 'pr-4'}
              ${className}
            `}
            {...props}
          />

          {/* Suffix (e.g. %, USD, seats) */}
          {suffix && (
            <span className="px-2 text-slate-400 text-xs font-medium select-none">
              {suffix}
            </span>
          )}

          {/* Custom Increment / Decrement Steppers */}
          {!hideSteppers && !readOnly && (
            <div className="flex items-center gap-1 pr-2">
              {/* Decrement (-) Button */}
              <button
                type="button"
                tabIndex={-1}
                aria-label="Decrease value"
                disabled={disabled || isAtMin}
                onClick={() => handleStep(-1)}
                className="cursor-pointer w-8 h-8 rounded-lg bg-[#141d33] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-[#1a2642] hover:text-white active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>

              {/* Increment (+) Button */}
              <button
                type="button"
                tabIndex={-1}
                aria-label="Increase value"
                disabled={disabled || isAtMax}
                onClick={() => handleStep(1)}
                className="cursor-pointer w-8 h-8 rounded-lg bg-[#141d33] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-[#1a2642] hover:text-white active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Error / Helper text */}
        {error ? (
          <p
            id={errorId}
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-xs text-red-400"
          >
            <IconAlertTriangle size={18} />
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

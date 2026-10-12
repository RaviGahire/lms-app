import React, {
  useState,
  useRef,
  useEffect,
  useId,
  KeyboardEvent,
} from "react";

export interface OptionItem {
  value: string;
  label: string;
  description?: string;
  badge?: string;
  disabled?: boolean;
}

export interface OptionInputProps {
  label?: string;
  options: OptionItem[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  className?: string;
  onChange?: (value: string, option: OptionItem) => void;
  onBlur?: () => void;
}

/**
 * Custom Dropdown / OptionInput Component with dark aesthetic
 * Features a custom table icon in place of the standard dropdown arrow
 */
export const OptionInput: React.FC<OptionInputProps> = ({
  label = "Select Track",
  options,
  value: controlledValue,
  defaultValue = "",
  placeholder = "Select an option...",
  error,
  helperText,
  required = false,
  disabled = false,
  containerClassName = "",
  className = "",
  onChange,
  onBlur,
}) => {
  const generatedId = useId();
  const inputId = generatedId;
  const listboxId = `${inputId}-listbox`;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string>(defaultValue);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        if (isOpen) {
          setIsOpen(false);
          onBlur?.();
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onBlur]);

  // Sync focused index when opening
  useEffect(() => {
    if (isOpen) {
      const idx = options.findIndex((opt) => opt.value === selectedValue);
      setFocusedIndex(idx >= 0 ? idx : 0);
    }
  }, [isOpen, selectedValue, options]);

  const handleSelect = (option: OptionItem) => {
    if (option.disabled || disabled) return;

    if (controlledValue === undefined) {
      setInternalValue(option.value);
    }
    onChange?.(option.value, option);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (isOpen && focusedIndex >= 0 && options[focusedIndex]) {
          handleSelect(options[focusedIndex]);
        } else {
          setIsOpen(!isOpen);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        }
        break;
      case "Escape":
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
          triggerRef.current?.focus();
        }
        break;
      case "Tab":
        if (isOpen) {
          setIsOpen(false);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col font-sans ${containerClassName}`}
    >
      {/* Label */}
      {label && (
        <label
          id={`${inputId}-label`}
          htmlFor={inputId}
          className="text-sm font-medium text-slate-300 mb-2 flex items-center gap-1 select-none"
        >
          {label}
          {required && <span className="text-red-400 text-xs">*</span>}
        </label>
      )}

      {/* Custom Trigger Input */}
      <button
        ref={triggerRef}
        id={inputId}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-labelledby={`${inputId}-label`}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`
          relative w-full h-13 px-4 py-3 rounded-xl
          bg-[#0b1324] text-left text-base
          border transition-all duration-200 outline-none
          flex items-center justify-between gap-3
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            error
              ? "border-red-500/80 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : isOpen
              ? "border-blue-500 ring-2 ring-blue-500/20"
              : "border-slate-800 hover:border-slate-700"
          }
          ${className}
        `}
      >
        {/* Selected Label Display */}
        <span
          className={`truncate block ${
            selectedOption ? "text-white" : "text-slate-500"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Custom Table Icon in place of Arrow */}
        <div
          className={`shrink-0 transition-colors duration-200 ${
            isOpen ? "text-blue-400" : "text-slate-400"
          }`}
          aria-hidden="true"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            {/* Table / Grid Icon */}
            <rect x="3" y="4" width="18" height="16" rx="2.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15h18" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 4v16" />
          </svg>
        </div>
      </button>

      {/* Dropdown Options Popup */}
      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${inputId}-label`}
          className="absolute top-[calc(100%+8px)] left-0 w-full z-50 rounded-xl bg-[#101726] border border-slate-700/80 p-1.5 shadow-2xl backdrop-blur-xl max-h-64 overflow-y-auto focus:outline-none"
        >
          {options.length === 0 ? (
            <div className="py-3 px-4 text-xs text-slate-500 text-center">
              No options available
            </div>
          ) : (
            options.map((option, index) => {
              const isSelected = option.value === selectedValue;
              const isFocused = index === focusedIndex;

              return (
                <div
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onClick={() => handleSelect(option)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  className={`
                    w-full px-3.5 py-2.5 rounded-lg text-sm flex items-center justify-between cursor-pointer transition-all duration-150 select-none
                    ${
                      option.disabled
                        ? "opacity-40 cursor-not-allowed"
                        : isSelected
                        ? "bg-[#182642] text-white"
                        : isFocused
                        ? "bg-[#141d33] text-slate-200"
                        : "text-slate-300 hover:bg-[#141d33] hover:text-white"
                    }
                  `}
                >
                  <div className="flex flex-col pr-2">
                    <span className="font-medium tracking-tight">
                      {option.label}
                    </span>
                    {option.description && (
                      <span className="text-xs text-slate-400 mt-0.5">
                        {option.description}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {/* Optional Badge */}
                    {option.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#132832] text-[#10b981] border border-teal-500/20">
                        {option.badge}
                      </span>
                    )}

                    {/* Active Selected Checkmark */}
                    {isSelected && (
                      <svg
                        className="w-4 h-4 text-blue-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Error / Helper text */}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-xs text-red-400"
        >
          <svg
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={helperId} className="mt-2 text-xs text-slate-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

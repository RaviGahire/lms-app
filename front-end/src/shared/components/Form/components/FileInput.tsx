import React, {
  forwardRef,
  useState,
  useRef,
  useId,
  DragEvent,
  ChangeEvent,
} from 'react';

export interface FileInputProps {
  label?: string;
  accept?: string;
  allowedExtensions?: string[]; // e.g., [".pdf", ".zip", ".png"]
  maxSizeMB?: number; // e.g., 10 for 10MB
  multiple?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  className?: string;
  value?: File[];
  onChange?: (files: File[]) => void;
  onError?: (errorMessage: string) => void;
}

// Format bytes into readable string (KB, MB)
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
};

/**
 * Custom Dark-Themed File Upload Component with Drag & Drop, File Validation & Previews
 */
export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      label = 'Upload Capstone Artifact',
      accept,
      allowedExtensions = ['.pdf', '.zip', '.tar.gz', '.json'],
      maxSizeMB = 15,
      multiple = false,
      required = false,
      disabled = false,
      error: controlledError,
      helperText,
      containerClassName = '',
      className = '',
      value: controlledFiles,
      onChange,
      onError,
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = `${generatedId}-file-input`;
    const errorId = `${generatedId}-error`;
    const helperId = `${generatedId}-helper`;

    const internalInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [internalFiles, setInternalFiles] = useState<File[]>([]);
    const [internalError, setInternalError] = useState<string>('');

    const activeFiles =
      controlledFiles !== undefined ? controlledFiles : internalFiles;
    const activeError =
      controlledError !== undefined ? controlledError : internalError;

    // Validate a single file against extension and size
    const validateFile = (file: File): string | null => {
      // 1. File size check
      const maxBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxBytes) {
        return `"${file.name}" exceeds the maximum size limit of ${maxSizeMB}MB.`;
      }

      // 2. Extension validation
      if (allowedExtensions.length > 0) {
        const fileExt = `.${file.name.split('.').pop()?.toLowerCase()}`;
        const isMatch = allowedExtensions.some(
          (ext) =>
            ext.toLowerCase() === fileExt ||
            file.name.toLowerCase().endsWith(ext.toLowerCase())
        );
        if (!isMatch) {
          return `"${file.name}" has an unsupported format. Allowed: ${allowedExtensions.join(', ')}`;
        }
      }

      return null;
    };

    const handleFiles = (incomingFileList: FileList | null) => {
      if (!incomingFileList || incomingFileList.length === 0 || disabled)
        return;

      const fileArray = Array.from(incomingFileList);
      // Strictly guarantee an array of File (never contains undefined)
      const candidates: File[] = multiple
        ? fileArray
        : fileArray[0]
          ? [fileArray[0]]
          : [];

      if (candidates.length === 0) return;

      // Run validations
      for (const file of candidates) {
        const validationErr = validateFile(file);
        if (validationErr) {
          setInternalError(validationErr);
          onError?.(validationErr);
          return;
        }
      }

      // Valid files
      setInternalError('');
      onError?.('');

      const nextFiles: File[] = multiple
        ? [...activeFiles, ...candidates]
        : candidates;
      if (controlledFiles === undefined) {
        setInternalFiles(nextFiles);
      }
      onChange?.(nextFiles);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
      if (e.target) e.target.value = '';
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (disabled) return;
      handleFiles(e.dataTransfer.files);
    };

    const handleRemoveFile = (indexToRemove: number) => {
      if (disabled) return;
      const updated = activeFiles.filter((_, idx) => idx !== indexToRemove);
      if (controlledFiles === undefined) {
        setInternalFiles(updated);
      }
      onChange?.(updated);
    };

    return (
      <div className={`w-full flex flex-col font-sans ${containerClassName}`}>
        {/* Label */}
        {label && (
          <div className="flex items-center justify-between mb-2 select-none">
            <label
              htmlFor={inputId}
              className="text-sm font-medium text-slate-300 flex items-center gap-1"
            >
              {label}
              {required && <span className="text-red-400 text-xs">*</span>}
            </label>
            <span className="text-xs text-slate-500 font-normal">
              Max {maxSizeMB}MB{' '}
              {allowedExtensions.length > 0 &&
                `(${allowedExtensions.join(', ')})`}
            </span>
          </div>
        )}

        {/* Hidden Native File Input */}
        <input
          ref={(node) => {
            (
              internalInputRef as React.MutableRefObject<HTMLInputElement | null>
            ).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref)
              (ref as React.MutableRefObject<HTMLInputElement | null>).current =
                node;
          }}
          id={inputId}
          type="file"
          accept={accept || allowedExtensions.join(',')}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          className="hidden"
          aria-invalid={Boolean(activeError)}
          aria-describedby={
            activeError ? errorId : helperText ? helperId : undefined
          }
        />

        {/* Custom Dropzone Container */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !disabled && internalInputRef.current?.click()}
          className={`
            relative flex flex-col items-center justify-center p-7 rounded-2xl
            cursor-pointer border-2 border-dashed transition-all duration-200 text-center
            ${
              disabled
                ? 'bg-[#0b1324]/50 border-slate-800/50 opacity-50 cursor-not-allowed'
                : isDragging
                  ? 'bg-[#132238] border-blue-400 shadow-lg shadow-blue-500/10'
                  : activeError
                    ? 'bg-[#161220] border-red-500/80 hover:border-red-400'
                    : 'bg-[#0b1324] border-slate-800 hover:border-slate-700 hover:bg-[#0e172c]'
            }
            ${className}
          `}
        >
          {/* Upload Cloud / Archive Icon */}
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 transition-colors duration-200 ${
              isDragging
                ? 'bg-blue-500/20 text-blue-400'
                : activeError
                  ? 'bg-red-500/10 text-red-400'
                  : 'bg-[#141f36] border border-slate-700/60 text-slate-300'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">
              <span className="text-[#38bdf8] hover:underline">
                Click to browse
              </span>{' '}
              or drag and drop
            </p>
            <p className="text-xs text-slate-400">
              {allowedExtensions.join(' ')} files supported up to {maxSizeMB}MB
            </p>
          </div>
        </div>

        {/* Selected Files List / Previews */}
        {activeFiles.length > 0 && (
          <div className="mt-3.5 space-y-2">
            {activeFiles.map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between p-3 rounded-xl bg-[#101726] border border-slate-800 transition-all duration-150 hover:border-slate-700"
              >
                <div className="flex items-center gap-3 min-w-0 pr-3">
                  <div className="w-8 h-8 rounded-lg bg-[#172338] border border-slate-700/50 flex items-center justify-center text-[#38bdf8] shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>

                  <div className="truncate">
                    <p className="text-xs font-semibold text-slate-200 truncate">
                      {file.name}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>

                {!disabled && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile(idx);
                    }}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-[#1f1a29] transition-colors shrink-0"
                    aria-label={`Remove ${file.name}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Error / Helper text */}
        {activeError ? (
          <p
            id={errorId}
            role="alert"
            className="mt-2.5 flex items-center gap-1.5 text-xs text-red-400"
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
            <span>{activeError}</span>
          </p>
        ) : helperText ? (
          <p id={helperId} className="mt-2.5 text-xs text-slate-400">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';

export default function FileInputDemo() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [customError, setCustomError] = useState<string>('');

  return (
    <div className="min-h-screen bg-[#070b14] flex items-center justify-center p-6 antialiased">
      <div className="w-full max-w-lg bg-[#101726] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <h3 className="text-lg font-bold text-white mb-6 tracking-tight">
          Submit Capstone Code Bundle
        </h3>

        <FileInput
          label="Verification Tarball or ZIP"
          allowedExtensions={['.zip', '.tar.gz', '.tar', '.json']}
          maxSizeMB={25}
          multiple={true}
          value={uploadedFiles}
          onChange={(files) => {
            setUploadedFiles(files);
            setCustomError('');
          }}
          error={customError}
          onError={(err) => setCustomError(err)}
          helperText={
            !customError
              ? 'Bundles will run inside an isolated SOC2 sandbox container.'
              : undefined
          }
          required
        />
      </div>
    </div>
  );
}

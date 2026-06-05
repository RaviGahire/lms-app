// Input Tag

export const Input = ({ label, id, error, icon, rightIcon, className, ...props }) => {

  const inputId = id || props.name;

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-gray-100 text-xs
           md:text-sm font-bold mb-2 ml-2 md:ml-4"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {/* Left Icon*/}
        {icon && (
          <div className="absolute left-3 md:left-5 text-gray-400 peer-focus:text-cyan-400 transition-colors pointer-events-none">
            {icon}
          </div>
        )}

        <input
          id={inputId}
          className={`
            w-full text-xs md:text-sm  py-2.5 md:py-3 placeholder:text-white/50
            border md:border-2 rounded-full focus:outline-none 
             text-white bg-gray-900/90 transition-colors peer
            ${icon ? "pl-9 md:pl-12" : "pl-3 md:pl-6"} 
            ${rightIcon ? "pr-10 md:pr-14" : "pr-3 md:pr-6"}
            ${error ? "border-red-500 focus:border-red-500" : "border-cyan-200/50 focus:border-cyan-400"}
            ${className || ""}
          `}
          {...props}
        />

        {/* Right Icon */}
        {rightIcon && (
          <div className="absolute right-3 md:right-5 text-gray-400 hover:text-cyan-500 transition-colors cursor-pointer z-10">
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 ml-2 md:ml-4 text-xs text-red-500 font-semibold">
          {error}
        </p>
      )}
    </div>
  );
};





// Text Area
export function TextArea({ label, id, placeholder, name, value, onChange, className, isEditable, rows, maxLength, error }) {

  return (
    <div className={`flex flex-col gap-2 relative ${className}`} >
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
      <textarea
        className="w-full shadow-sm text-[12px] placeholder:text-white/50 tracking-wide md:text-[16px] px-2 md:px-3 py-1 md:py-1.5 disabled rounded-md border border-slate-300 focus:ring-1 focus:ring-blue-500/80 focus:outline-none transition-all"
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        rows={rows}
        onChange={onChange}
        maxLength={maxLength}

      />
      <p className="absolute top-18 text-xs text-red-500 font-medium">{error}</p>

    </div>
  );
}

//select input
export const Select = ({
  className,
  label,
  name,
  id,
  value = "",
  onChange,
  options = [],
  defaultOption,
  error
}) => {

  // console.log(error)

  return (
    <div className="flex flex-col gap-2 w-full ">

      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className={`${className} block w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition`}
        >
          {/* Placeholder */}
          <option className={className} value="" disabled>
            {defaultOption || "Default Select"}
          </option>

          {/* Options */}
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        {/* Dropdown Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {/* error */}
        <p className="absolute top-11.5 text-xs text-red-500 font-medium animate-in fade-in slide-in-from-top-1">{error}</p>
      </div>
    </div>
  );
};

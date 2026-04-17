
//form input
export const Input = ({ label, id, placeholder, name, type, value, onChange, className, isEditable, error }) => {

  // console.log(error)
  // handle file input
  const inputValue = type === 'file' ? undefined : value;

  return (
    <div className={`flex flex-col gap-2 relative ${className}`} >
      {/* label */}
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
      {/* Input  */}
      <input type={type} id={id} name={name} placeholder={placeholder} disabled={isEditable}
        value={inputValue}
        onChange={onChange}
        className='w-full shadow-sm text-[12px] tracking-wide md:text-[16px] px-2 md:px-3 py-1 md:py-1.5 disabled rounded-md border border-slate-300 focus:ring-1 focus:ring-blue-500/80 focus:outline-none transition-all' />
      {/* Error Message */}
      <p className="absolute top-18 text-[8px] md:text-xs text-red-500 font-medium">{error}</p>
    </div>
  )
}

// Text Area
export function DescriptionInput({ label, id, placeholder, name, value, onChange, className, isEditable, rows, maxLength, error }) {

  return (
    <div className={`flex flex-col gap-2 relative ${className}`} >
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
      <textarea
        className="w-full shadow-sm text-[12px] tracking-wide md:text-[16px] px-2 md:px-3 py-1 md:py-1.5 disabled rounded-md border border-slate-300 focus:ring-1 focus:ring-blue-500/80 focus:outline-none transition-all"
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
export const SelectInput = ({
  style,
  label,
  name,
  id,
  value = "",
  onChange,
  options = [],
  placeholder = "Select option",
  error
}) => {

  console.log(error)

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
          className={`${style} block w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition`}
        >
          {/* Placeholder */}
          <option className={`${style} `} value="" disabled>
            {placeholder}
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

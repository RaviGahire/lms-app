
export const Input = ({ label, id, placeholder, name, type, value, onChange, className, isEditable, Error }) => {
    //handle file input
    const inputValue = type === 'file' ? undefined : value;

    return (
        <div className={`flex flex-col gap-2 relative ${className}`} >
            {/* label */}
            <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
            {/* Input  */}
            <input type={type} id={id} name={name} placeholder={placeholder} disabled={isEditable}
                value={inputValue}
                onChange={onChange}
                className='w-full px-4 py-1.5 disabled rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all' />
            {/* Error Message */}
            <p className="absolute top-18 text-xs text-red-500 font-medium animate-in fade-in slide-in-from-top-1">{Error}</p>
        </div>
    )
}

// Text Area
export function DescriptionInput({ label, id, placeholder, name, value, onChange, className, isEditable, Error, rows, maxLength}) {

    return (
        <>
            <label htmlFor={id} className="text-sm font-semibold text-slate-700">{label}</label>
            <textarea
                className="w-full px-4 py-1.5 disabled rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder={placeholder}
                value={value}
                name={name}
                id={id}
                rows={rows}
                onChange={onChange}
                maxLength={maxLength}
            />

        </>
    );
}

//select input
export const SelectInput = ({ 
  label, 
  name, 
  id, 
  value, 
  onChange, 
  options = [], 
  placeholder = "Select a course" 
}) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-xs">
      
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer transition duration-200"
        >
           <option value="" disabled>
            {placeholder}
          </option>

                  {options.map((course, index) => (
            <option key={course.id || index} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>
        
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

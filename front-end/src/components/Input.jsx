
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


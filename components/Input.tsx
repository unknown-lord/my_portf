import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  className?: string;
}

const Input = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  multiline = false,
  rows = 4,
  required = false,
  className = '',
}: InputProps) => {
  const baseStyles = 'w-full px-4 py-3 bg-input-bg border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-accent';
  
  return (
    <div className={`w-full ${className}`}>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
          rows={rows}
          required={required}
          className={baseStyles}
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
          required={required}
          className={baseStyles}
          aria-label={label}
        />
      )}
    </div>
  );
};

export default Input;
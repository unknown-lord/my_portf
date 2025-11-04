import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  className = '',
  loading = false,
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-md font-medium transition-colors';
  
  const variantStyles = {
    primary: 'bg-foreground text-background hover:opacity-90',
    secondary: 'border border-border hover:bg-input-bg',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={buttonStyles} disabled={disabled || loading}>
      {loading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
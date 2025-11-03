import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  className = '',
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
    <button type={type} onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};

export default Button;
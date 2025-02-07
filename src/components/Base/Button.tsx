import React from 'react';

type ButtonProps = {
  size: 'small' | 'medium' | 'large' | 'circle';
  color: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({
  size,
  color,
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const sizeClass = {
    small: 'btn-small',
    medium: 'btn-medium',
    large: 'btn-large',
    circle: 'btn-circle',
  }[size];

  const colorClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
  }[color];

  return (
    <button
      className={`${colorClass} ${sizeClass} flex items-center justify-center btn-hover ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

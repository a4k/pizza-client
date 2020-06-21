import * as React from 'react';

export interface ButtonProps {
  outline?: boolean;
  children: React.ReactNode;
}

export function Button({ children, outline = false }: ButtonProps) {
  let className = outline ? 'button--outline' : '';
  return <button className={`button ${className}`}>{children}</button>;
}

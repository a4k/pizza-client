import * as React from 'react';

export interface ButtonProps {
  onClick?: void;
  className?: string;
  outline?: boolean;
  children: React.ReactNode;
}

export function Button({
  onClick,
  className,
  children,
  outline = false,
}: ButtonProps) {
  let arClass = [];
  arClass.push(outline ? 'button--outline' : '');
  arClass.push(className);
  return <button className={`button ${arClass.join(' ')}`}>{children}</button>;
}

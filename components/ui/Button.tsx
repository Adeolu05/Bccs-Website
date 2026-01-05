import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'safety' | 'cobalt';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ to, href, variant = 'primary', children, className = '', onClick, icon }) => {
  
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold tracking-tight rounded-xl transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";
  
  const variants = {
    primary: "text-white bg-zinc-900 border border-white/10 hover:border-blue-500/50 shadow-[0_0_20px_-10px_rgba(59,130,246,0.3)]",
    secondary: "bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/5 hover:border-white/10 backdrop-blur-md shadow-xl",
    outline: "bg-transparent text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-500",
    ghost: "text-zinc-500 hover:text-white bg-transparent px-4",
    safety: "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_0_25px_-5px_rgba(249,115,22,0.4)]",
    cobalt: "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)]"
  };

  const innerContent = (
    <>
      {variant === 'primary' && (
         <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x"></div>
      )}
      {(variant === 'safety' || variant === 'cobalt') && (
        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <span className="group-hover:translate-x-0.5 transition-transform duration-300">{icon}</span>
      </span>
    </>
  );

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {innerContent}
      </a>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {innerContent}
    </button>
  );
};

export default Button;
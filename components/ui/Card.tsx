import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  accent?: 'blue' | 'orange' | 'purple' | 'emerald' | 'none';
}

const Card: React.FC<CardProps> = ({ children, className = "", onClick, accent = 'none' }) => {
  const accentColors = {
    blue: 'group-hover:border-blue-500/50 group-hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)]',
    orange: 'group-hover:border-orange-500/50 group-hover:shadow-[0_0_50px_-10px_rgba(249,115,22,0.5)]',
    purple: 'group-hover:border-purple-500/50 group-hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.5)]',
    emerald: 'group-hover:border-emerald-500/50 group-hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)]',
    none: 'group-hover:border-white/20'
  };

  const gradientColors = {
    blue: 'from-blue-500/20',
    orange: 'from-orange-500/20',
    purple: 'from-purple-500/20',
    emerald: 'from-emerald-500/20',
    none: 'from-white/10'
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 backdrop-blur-xl 
        hover:bg-zinc-900/40 transition-all duration-500 cursor-default
        ${accentColors[accent]}
        ${className}
      `}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[accent]} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
      
      {/* Animated corner light */}
      <div className={`absolute top-0 right-0 w-[1px] h-0 bg-gradient-to-b from-transparent via-white/40 to-transparent group-hover:h-full transition-all duration-1000 delay-100`}></div>
      <div className={`absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:w-full transition-all duration-1000 delay-300`}></div>
      
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default Card;
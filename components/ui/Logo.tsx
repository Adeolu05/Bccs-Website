import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`} style={{ width: size, height: size }}>
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      {/* Animated Outline */}
      <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-blue-500/40 group-hover:rotate-[15deg] transition-all duration-700"></div>
      
      {/* Core Logo Wrapper */}
      <div className="relative z-10 w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden group-hover:border-white/20 transition-colors">
        <svg 
          viewBox="0 0 512 512" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[65%] h-[65%] text-white group-hover:scale-110 transition-transform duration-500"
        >
          <defs>
            <linearGradient id="logo-grad-inner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
          </defs>
          {/* Hexagon Frame */}
          <path 
            d="M256 40L450.861 148v216L256 472L61.1385 364V148L256 40Z" 
            fill="currentColor" 
            fillOpacity="0.02" 
            stroke="url(#logo-grad-inner)" 
            strokeWidth="24"
            strokeLinejoin="round"
          />
          {/* Industrial Hammer Symbol */}
          <path 
            d="M320 180L300 160L180 280L200 300L220 280V400H260V320L280 300L320 260V180Z" 
            fill="currentColor"
            className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          />
          {/* Tech Blocks */}
          <rect x="235" y="340" width="18" height="18" fill="#3b82f6" rx="2" />
          <rect x="235" y="370" width="18" height="18" fill="#f97316" rx="2" />
        </svg>
        
        {/* Shine Animation Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default Logo;
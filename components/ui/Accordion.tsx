import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false, className = "" }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/20 backdrop-blur-md transition-all duration-300 ${isOpen ? 'border-white/20 ring-1 ring-white/5' : ''} ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none group"
      >
        <span className="text-lg font-heading font-semibold text-zinc-100 group-hover:text-white transition-colors">{title}</span>
        <ChevronDown 
          size={20} 
          className={`text-zinc-500 transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180 text-white' : ''}`} 
        />
      </button>
      <div 
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 text-zinc-400 font-light leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
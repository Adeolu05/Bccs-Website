import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md transition-opacity duration-500 animate-in fade-in"
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div 
        className="relative w-full max-w-xl bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <h3 className="text-2xl font-heading font-bold text-white tracking-tight">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-8 max-h-[70vh] overflow-y-auto no-scrollbar">
          {children}
        </div>
        <div className="p-6 border-t border-white/5 bg-zinc-950/50 flex justify-end">
           <button 
             onClick={onClose}
             className="px-6 py-2 rounded-xl bg-white/5 text-sm font-semibold text-zinc-200 hover:bg-white/10 transition-all border border-white/5"
           >
             Close
           </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
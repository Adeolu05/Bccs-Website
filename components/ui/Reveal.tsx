import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = '100%', 
  delay = 0, 
  className = "",
  direction = 'up',
  scale = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      let translate = '';
      switch (direction) {
        case 'up': translate = 'translateY(30px)'; break;
        case 'down': translate = 'translateY(-30px)'; break;
        case 'left': translate = 'translateX(30px)'; break;
        case 'right': translate = 'translateX(-30px)'; break;
        case 'none': translate = 'none'; break;
        default: translate = 'translateY(30px)';
      }
      return `${translate} ${scale ? 'scale(0.95)' : 'scale(1)'}`;
    }
    return 'translate(0,0) scale(1)';
  };

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-[1200ms] will-change-[transform,opacity]`}
      style={{ 
        width, 
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? 1 : 0,
        transform: getTransform()
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
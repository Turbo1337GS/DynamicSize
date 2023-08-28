import React, { useEffect, ReactNode } from 'react';

interface DynamicSizeProps {
  children: ReactNode;
}

const DynamicSize: React.FC<DynamicSizeProps> = ({ children }) => {
  useEffect(() => {
    const baseViewportWidth = 768; 
    const baseFontSize = 7; 

    const updateFontSize = () => {
      const currentViewportWidth = window.innerWidth;
      const fontSize = (currentViewportWidth / baseViewportWidth) * baseFontSize; 
      document.documentElement.style.fontSize = `${fontSize}px`;
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        updateFontSize(); 
      } else { 
        document.documentElement.style.fontSize = `${baseFontSize}px`; 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>{children}</div>; 
};

export default DynamicSize;

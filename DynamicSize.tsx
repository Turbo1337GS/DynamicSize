import React, { useEffect, ReactNode } from 'react';

interface DynamicSizeProps {
  children: ReactNode;
}

const DynamicSize: React.FC<DynamicSizeProps> = ({ children }) => {
  useEffect(() => {
    const baseScreenSize = 17;
    const baseFontSize = 16;

    const updateFontSize = () => {
      const screenWidthInInches =
        window.screen.width / window.devicePixelRatio / 96;
      const fontSize = (screenWidthInInches / baseScreenSize) * baseFontSize;
      document.documentElement.style.fontSize = `${fontSize}px`;
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        updateFontSize();
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

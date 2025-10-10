import { useState, useEffect } from 'react';

export const useScrollPosition = (threshold: number = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};
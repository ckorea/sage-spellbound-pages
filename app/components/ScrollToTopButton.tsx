'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-stone-800 text-white p-3 rounded-full shadow-lg hover:bg-stone-700"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  ) : null;
} 
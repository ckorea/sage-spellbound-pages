'use client';

export default function ScrollToTopButton() {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 bg-stone-800 text-white p-3 rounded-full shadow-lg"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
} 
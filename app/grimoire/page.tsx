'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';
import ImmersiveLibrary from '@/app/components/ImmersiveLibrary';

const Grimoire: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-rose-50 to-teal-50">
      {/* Magical gradient overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-200/20 via-pink-200/5 to-teal-200/20 mix-blend-overlay pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-tr from-teal-200/10 via-transparent to-rose-200/10 mix-blend-screen pointer-events-none" />

      <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600 text-center mt-10 
                     drop-shadow-[0_0_15px_rgba(192,38,211,0.2)] animate-gradient-shift">
        The Grimoire
      </h1>

      <div className="w-full max-w-6xl mt-8 space-y-6 p-6">
        <div className="prose prose-lg mx-auto bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl 
                       border border-pink-200/50 mb-12 hover:shadow-pink-200/20 transition-all duration-500
                       relative overflow-hidden max-w-2xl">
          {/* Holographic glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 via-purple-200/20 to-pink-200/20 opacity-50 mix-blend-overlay" />
          
          <div className="flex items-center gap-4 mb-4 relative z-10">
            <Link href="/about" className="relative group shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-full blur-xl 
                             animate-pulse group-hover:bg-pink-400/30 transition-colors" />
              <Image 
                src="/images/sage-pfp-robot-2.webp" 
                alt="AI Robot" 
                width={64} 
                height={64} 
                className="rounded-full shadow-xl relative z-10 border-2 border-pink-300/30 
                         group-hover:border-purple-400/50 transition-all duration-300 
                         group-hover:scale-105 hover:shadow-lg hover:shadow-pink-200/50"
              />
            </Link>
            <div>
              <h2 className="text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 m-0">
                Welcome to The Grimoire
              </h2>
              <p className="text-sm text-sage-600 m-0">by Sage × AI</p>
            </div>
          </div>
          
          <p className="text-sage-700 relative z-10 text-sm leading-relaxed m-0">
            Welcome to my magical collection of AI-crafted stories and experiences! 
            Here you'll find an enchanting mix of tales, each one carefully prompted 
            and curated to create immersive worlds and unique perspectives.
          </p>
        </div>

        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-pink-200/30
                      hover:shadow-pink-200/20 transition-all duration-500">
          <ImmersiveLibrary />
        </div>

        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Grimoire;

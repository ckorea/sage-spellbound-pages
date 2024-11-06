'use client';

import Link from 'next/link';
import { Home, Book, User, Heart, BookOpen } from 'lucide-react';
import { useFavorites } from '@/app/context/FavoritesContext';
import { useState } from 'react';

const Navbar = () => {
  const { favorites } = useFavorites();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blossom-200/50 shadow-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-sage-800 hover:text-blossom-500 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-serif text-lg">Sage</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/grimoire" 
              className="flex items-center space-x-2 text-sage-700 hover:text-blossom-500 transition-colors"
            >
              <Book className="w-5 h-5" />
              <span className="font-medium">Grimoire</span>
            </Link>
            
            <Link 
              href="/about" 
              className="flex items-center space-x-2 text-sage-700 hover:text-blossom-500 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="font-medium">About</span>
            </Link>

            <div className="relative group">
              <button 
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 text-sage-700 hover:text-blossom-500 transition-colors"
              >
                <Heart className="w-5 h-5" />
                {favorites.size > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blossom-500 text-white text-xs w-4 h-4 
                                rounded-full flex items-center justify-center">
                    {favorites.size}
                  </span>
                )}
              </button>

              {/* Favorites Preview Popup */}
              {showPreview && favorites.size > 0 && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-cream-200 
                               overflow-hidden transform origin-top-right transition-all duration-200 ease-out">
                  <div className="p-3 border-b border-cream-100 flex items-center justify-between">
                    <h3 className="font-serif text-sage-800">Your Favorites</h3>
                    <span className="text-xs text-sage-500">{favorites.size} books</span>
                  </div>
                  
                  <div className="max-h-[60vh] overflow-y-auto">
                    {Array.from(favorites).map(title => (
                      <Link
                        key={title}
                        href="/grimoire"
                        className="flex items-start gap-3 p-3 hover:bg-cream-50 transition-colors group"
                      >
                        <BookOpen className="w-4 h-4 mt-1 text-sage-400 group-hover:text-blossom-500" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-sage-700 group-hover:text-sage-900 truncate">
                            {title}
                          </p>
                          <p className="text-xs text-sage-500 group-hover:text-sage-600">
                            Click to read
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="p-3 bg-cream-50 border-t border-cream-100">
                    <p className="text-xs text-center text-sage-600">
                      Your favorites are saved locally
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for closing the preview */}
      {showPreview && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setShowPreview(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

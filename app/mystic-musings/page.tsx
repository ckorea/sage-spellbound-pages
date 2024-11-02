'use client';
import { useState } from 'react';

export default function MysticMusings() {
  const [currentCard, setCurrentCard] = useState(0);

  // Array of card content
  const cards = [
    {
      title: "Welcome to Sage’s Corner",
      content: (
        <p>
          Hello there, and welcome! I’m Sage, the persona I’ve created to explore the intersections of tech, creativity, and the quiet wonders of life.
          From the grounded beauty of nature to the transformative power of AI, this space is where I bring all these threads together—a blend of insights, reflections, and a touch of whimsy.
        </p>
      ),
    },
    {
      title: "Why “Sage”?",
      content: (
        <p>
          “Sage” felt like the perfect name—a nod to wisdom, warmth, and growth. It allows me to step into a role that’s fully “me” yet gives me the freedom to explore stories, questions, and ideas from a unique perspective.
        </p>
      ),
    },
    {
      title: "Explorations in Tech and Humanity",
      content: (
        <p>
          Here you’ll find musings on how technology, from AI to machine learning, can shape and enrich our lives, with a focus on bringing more joy, simplicity, and connection to the world.
        </p>
      ),
    },
    {
      title: "Seasonal and Thoughtful Themes",
      content: (
        <p>
          My writing reflects a love of seasons—both in nature and in life’s experiences. Expect cozy fall reflections, holiday musings, and entries on growth, transition, and self-discovery.
        </p>
      ),
    },
    {
      title: "Sage’s Book Club",
      content: (
        <p>
          A shared learning space where we dive into books blending inspiration, innovation, and introspection. Each month, I’ll introduce a new read aligned with our themes.
        </p>
      ),
    },
    {
      title: "A Space for Conversation",
      content: (
        <p>
          I hope this blog becomes a place where we explore, question, and grow together. Join the conversation, share your thoughts, and let’s create a welcoming corner of the internet that’s curious, cozy, and full of life.
        </p>
      ),
    },
  ];

  // Handlers for card navigation
  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-f5f3ed text-3e4c39">

      {/* Header Section */}
      <header className="relative w-full h-60 sm:h-72 bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/header-fall-1.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <h1 className="text-4xl font-bold text-white relative z-10 text-center mt-24">
          Mystic Musings
        </h1>
      </header>

      {/* Card Content */}
      <div className="flex-grow flex flex-col justify-center items-center mt-8 px-4 sm:px-6 lg:px-8 py-6">
        
        <div className="bg-white p-6 max-w-xl w-full rounded-lg shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-8b6c61 text-center">{cards[currentCard].title}</h2>
          <div className="text-lg text-3e4c39 text-center">{cards[currentCard].content}</div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 w-full max-w-xl">
          <button onClick={handlePrevious} className="bg-8b6c61 text-white py-2 px-4 rounded hover:bg-f4a261">
            Previous
          </button>
          <button onClick={handleNext} className="bg-8b6c61 text-white py-2 px-4 rounded hover:bg-f4a261">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

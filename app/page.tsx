export default function Home() {
  return (
    <div className="min-h-screen bg-f5f3ed text-3e4c39 p-8 flex flex-col items-center">
      {/* Main Header */}
      <h1 className="text-5xl font-semibold text-8b6c61 text-center mt-10">
        Welcome to Sage's Spellbound Pages
      </h1>

      {/* Introduction */}
      <p className="text-lg mt-6 max-w-2xl text-center">
        Wanderer, you've stumbled upon Sage's Spellbound Pages—a haven for the curious and the enchanted. Here, you'll find musings, tales, and discoveries from the heart of a modern-day magus.
      </p>

      {/* Sections with Image Headers */}
      <div className="mt-12 space-y-12 w-full max-w-3xl">

        {/* The Grimoire */}
        <a href="/grimoire" className="block transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <section className="relative h-48 flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg" 
                   style={{ backgroundImage: "url('/images/header-fall-3.webp')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 hover:opacity-70"></div>
            <h2 className="text-4xl font-bold text-white relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              The Grimoire
            </h2>
          </section>
        </a>
        {/* About Sage */}
        <a href="/about" className="block transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <section className="relative h-48 flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg" 
                   style={{ backgroundImage: "url('/images/header-fall-1.webp')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 hover:opacity-70"></div>
            <h2 className="text-4xl font-bold text-white relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              About Sage
            </h2>
          </section>
        </a>
      </div>

      {/* Signature */}
      <p className="mt-12 text-center text-9d8471 font-serif text-xl">
        With sparkles, spells, and stories, <br /> Sage
      </p>
    </div>
  );
}

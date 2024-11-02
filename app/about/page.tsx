import AvatarGallery from '../components/AvatarGallery';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center space-y-8">
      {/* Main Header Section */}
      <section className="relative w-full h-72 bg-cover bg-center" 
               style={{ backgroundImage: "url('/images/about-header.webp')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
        <h1 className="text-5xl font-bold text-white relative z-10 mt-24 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          About Sage
        </h1>
      </section>      
      
      {/* Avatar Image with hover effect */}
      <div className="relative group -mt-24 z-10">
        <div className="w-48 h-48 relative">
          <img
            src="/images/sage-pfp-author-1.webp"
            alt="Portrait of Sage in their study, surrounded by magical tomes and ethereal lighting, capturing their role as a modern-day magus"
            className="w-full h-full rounded-full border-4 border-f4a261 shadow-lg object-cover 
                     transition-all duration-300 ease-in-out
                     group-hover:scale-105 group-hover:border-8b6c61"
          />
          {/* Hover overlay with description */}
          <div className="absolute inset-0 rounded-full 
                       bg-3e4c39 bg-opacity-0 group-hover:bg-opacity-75
                       flex items-center justify-center
                       transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            <p className="text-white text-sm px-4 text-center">
              Portrait of Sage in their study
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-2xl space-y-6">
        <p className="text-lg">
          SageTheMagus is a modern-day explorer, blending magic, stories, and technology into a unique journey through the realms of creativity and wonder...
        </p>

        <h2 className="text-3xl font-semibold mt-6">The Journey of a Magus</h2>
        <p className="text-lg">
          Sage began their journey with a fascination for both the old world's mystique and the new world's tech...
        </p>
        
        <p className="text-9d8471 font-serif text-xl mt-10">
          "May the pages of imagination never cease to turn." – SageTheMagus
        </p>
      </div>

      {/* Avatar Gallery */}
      <AvatarGallery />
    </div>
  );
}

import Image from 'next/image';

const avatars = [
  { src: '/images/sage-pfp-nature-1.webp', alt: 'Sage in natural surroundings with mystical elements' },
  { src: '/images/sage-pfp-mermaid-2.webp', alt: 'Sage as a mystical mermaid in oceanic setting' },
  { src: '/images/sage-pfp-librarian-3.webp', alt: 'Sage as a magical librarian among ancient tomes' },
  { src: '/images/sage-pfp-space-3.webp', alt: 'Sage exploring cosmic realms' },
  { src: '/images/sage-pfp-fairy-1.webp', alt: 'Sage with fairy wings in enchanted forest' },
  { src: '/images/sage-pfp-lunar-new-year-1.webp', alt: 'Sage celebrating Lunar New Year' },
  { src: '/images/sage-pfp-christmas-2.webp', alt: 'Sage in festive winter attire' },
  { src: '/images/sage-pfp-fall-1.webp', alt: 'Sage surrounded by autumn magic' },
];

export default function AvatarGallery() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold text-center mb-6 text-8b6c61">Avatar Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {avatars.map((avatar, index) => (
          <div key={index} className="relative group">
            <div className="relative w-full aspect-square">
              <Image
                src={avatar.src}
                alt={avatar.alt}
                fill
                className="rounded-full border-4 border-f4a261 shadow-lg object-cover 
                         transition-all duration-300 ease-in-out
                         group-hover:scale-105 group-hover:border-8b6c61"
              />
              {/* Hover overlay with description */}
              <div className="absolute inset-0 rounded-full 
                          bg-3e4c39 bg-opacity-0 group-hover:bg-opacity-75
                          flex items-center justify-center
                          transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <p className="text-white text-sm px-4 text-center">
                  {avatar.alt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

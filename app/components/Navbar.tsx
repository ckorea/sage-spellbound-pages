import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-8b6c61 text-f5f3ed p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Sage's Spellbound Pages</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-f4a261">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-f4a261">About Sage</Link>
          </li>
          <li>
            <Link href="/mystic-musings" className="hover:text-f4a261">Mystic Musings</Link>
          </li>
          <li>
            <Link href="/lore-legends" className="hover:text-f4a261">Lore & Legends</Link>
          </li>
          <li>
            <Link href="/arcane-library" className="hover:text-f4a261">Arcane Library</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

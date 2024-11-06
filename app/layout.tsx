import { Nunito, Crimson_Pro } from 'next/font/google';
import './globals.css';
import { ClientFavorites } from './context/FavoritesContext';
import Navbar from './components/Navbar';

const nunito = Nunito({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({ 
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${crimsonPro.variable}`}>
      <body className="font-sans bg-cream-50 text-sage-900">
        <ClientFavorites>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </ClientFavorites>
      </body>
    </html>
  );
}

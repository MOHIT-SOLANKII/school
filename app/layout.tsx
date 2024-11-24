import type { Metadata } from 'next';
import { Bubblegum_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const bubblegum = Bubblegum_Sans({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rainbow Kids School',
  description: 'Where Learning Meets Fun!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bubblegum.className}>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
          {children}
        </main>
      </body>
    </html>
  );
}
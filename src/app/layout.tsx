import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="min-h-full relative border-3 border-red-400">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from 'sonner';

import Header from '@/components/layout/Header/Header';

const manrope = Manrope({
  variable: '--font-family',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--second-family',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'RentalCar Marketplace',
    template: '%s | RentalCar',
  },
  description: 'Find your perfect rental car for any journey.',
  keywords: ['car rental', 'rent a car', 'vehicle rental', 'car marketplace'],
  creator: 'Dmytro Farbun',

  // metadataBase: new URL(""),

  openGraph: {
    title: 'RentalCar Marketplace',
    description: 'Find your perfect rental car for any journey.',
    // url: "",
    siteName: 'RentalCar',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'RentalCar Marketplace',
    description: 'Find your perfect rental car for any journey.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${manrope.variable} ${inter.variable} antialiased`}
      >
        <Header />
        <main className="flex-1 h-full">{children}</main>

        <Toaster position='top-right' richColors />
      </body>
    </html>
  );
}

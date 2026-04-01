import type { Metadata } from 'next';
import {
  Chau_Philomene_One,
  Geist,
  Geist_Mono,
  Inter,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteData } from '@/data/site';
import { LanguageProvider } from '@/contexts/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Chau_Philomene_One({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: '400',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: `${siteData.name} - ${siteData.tagline}`,
  description: `Especialistas en ${siteData.tagline.toLowerCase()}. ${siteData.ctaTexts.main}`,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  keywords:
    'sueño infantil, maternidad, consultoría familiar, bienestar niños, rutinas sueño',
  authors: [{ name: siteData.name }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          {/* Skip link para accesibilidad */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50"
          >
            Saltar al contenido principal
          </a>

          {/* Header global */}
          <Header />

          {/* Contenido principal semántico */}
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>

          {/* Footer global */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

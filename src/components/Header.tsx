// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types';
import { siteData } from '@/data/site';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  menu?: MenuItem[];
}

export default function Header({ menu = siteData.navigation }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const isHomePage = pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const getTranslatedLabel = (item: MenuItem): string => {
    if (item.url === '/') return t('nav.home');
    if (item.url === '/sobre-mi') return t('links.nav.about');
    if (item.url === '/mis-servicios') return t('links.nav.services');
    return item.label;
  };

  const handleLanguageChange = () => {
    const newLanguage = language === 'es' ? 'de' : 'es';
    setLanguage(newLanguage);
    closeMenu();
  };

  // Filtrar el menú para excluir "Deutsch"
  const mainMenu = menu.filter((item) => item.label !== 'Deutsch');

  return (
    <header
      className={`${isHomePage ? 'fixed inset-x-0 top-0' : 'sticky top-0'} z-50 px-4 pt-4`}
    >
      <nav className="container mx-auto">
        <div className="flex items-center justify-between rounded-full border border-white/15 bg-black/25 px-7 py-4 md:px-8 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
          {/* Logo */}
          <Link
            href="/"
            className="ml-1 flex items-center hover:opacity-85 transition-opacity duration-200 md:ml-2"
            onClick={closeMenu}
            aria-label="Ir al inicio"
          >
            <Image
              src="/images/cropped-cropped-cropped-Rastergrafik.png"
              alt="Logo Bonanit"
              width={77}
              height={77}
              className="h-[3.6rem] w-auto md:h-[4.2rem]"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 items-center">
            {mainMenu.map((item) => {
              const isActive = pathname === item.url;
              return (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className={`font-semibold tracking-wide text-white/90 transition-colors duration-300 hover:text-[#f4e6d3] ${
                      isActive
                        ? 'border-b-2 border-[#d4a574] pb-1 text-white'
                        : ''
                    }`}
                  >
                    {getTranslatedLabel(item)}
                  </Link>
                </li>
              );
            })}
            {/* Language Toggle Button */}
            <li>
              <button
                onClick={handleLanguageChange}
                className="inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-4 py-2 text-sm font-bold !text-white shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
                aria-label={`Cambiar a ${language === 'es' ? 'alemán' : 'español'}`}
              >
                {language === 'es' ? 'Deutsch' : 'Español'}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden focus:outline-none hover:text-[#f4e6d3] focus:text-[#f4e6d3]"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-3 rounded-3xl border border-white/15 bg-black/60 px-5 pb-4 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col space-y-4 pt-4">
              {mainMenu.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      className={`block font-medium text-white/90 transition-colors duration-200 hover:text-[#f4e6d3] ${
                        isActive ? 'text-white' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      {getTranslatedLabel(item)}
                    </Link>
                  </li>
                );
              })}
              {/* Language Toggle Button Mobile */}
              <li className="border-t border-white/10 pt-2">
                <button
                  onClick={handleLanguageChange}
                  className="inline-flex w-full items-center justify-center rounded-full !bg-[#d4a574] px-4 py-2 text-sm font-bold !text-white shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
                >
                  {language === 'es' ? 'Deutsch' : 'Español'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

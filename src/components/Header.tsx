// src/components/Header.tsx
'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types';
import { siteData } from '@/data/site';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  menu?: MenuItem[];
}

const languageOptions = [
  { value: 'es', label: 'Español' },
  { value: 'de', label: 'Deutsch' },
  { value: 'ca', label: 'Català' },
] as const;

export default function Header({ menu = siteData.navigation }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const overlayHeaderPaths = [
    '/',
    '/sobre-mi',
    '/mis-servicios',
    '/aviso-legal',
    '/terminos-y-condiciones',
    '/politica-de-privacidad',
  ];
  const normalizedPath =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const isOverlayHeader = overlayHeaderPaths.includes(normalizedPath);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const normalizePath = (path: string) =>
    path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;

  const isActivePath = (url: string) => {
    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(url);

    if (targetPath === '/') {
      return currentPath === '/';
    }

    return (
      currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
    );
  };

  const getTranslatedLabel = (item: MenuItem): string => {
    if (item.url === '/') return t('nav.home');
    if (item.url === '/sobre-mi') return t('links.nav.about');
    if (item.url === '/mis-servicios') return t('links.nav.services');
    return item.label;
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'es' | 'de' | 'ca');
    closeMenu();
  };

  // Filtrar el menú para excluir "Deutsch"
  const mainMenu = menu.filter((item) => item.label !== 'Deutsch');

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="container mx-auto">
          <div className="flex items-center justify-between rounded-full border border-white/15 bg-black/25 px-7 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="ml-1 flex items-center transition-opacity duration-200 hover:opacity-85 md:ml-2"
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
            <ul className="hidden items-center space-x-10 md:flex">
              {mainMenu.map((item) => {
                const isActive = isActivePath(item.url);
                return (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      className={`header-nav-link font-semibold tracking-wide text-white/90 no-underline transition-colors duration-300 hover:text-[#f4e6d3] hover:no-underline ${
                        isActive
                          ? 'border-b-2 border-[#d4a574] pb-1 text-white no-underline'
                          : ''
                      }`}
                    >
                      {getTranslatedLabel(item)}
                    </Link>
                  </li>
                );
              })}
              {/* Language Dropdown */}
              <li>
                <div className="relative">
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    aria-label="Seleccionar idioma"
                    className="appearance-none rounded-full border border-white/15 bg-[#d4a574] px-4 py-2 pr-10 text-sm font-bold text-white shadow-[0_10px_24px_rgba(212,165,116,0.25)] outline-none transition-all duration-300 hover:bg-[#c9975e] focus:border-white/40"
                  >
                    {languageOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-[#2b2b2b] text-white"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/90">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 6L8 10.5L12.5 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="text-white hover:text-[#f4e6d3] focus:text-[#f4e6d3] focus:outline-none md:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="mb-1 block h-0.5 w-6 bg-current"></span>
              <span className="mb-1 block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-3 rounded-3xl border border-white/15 bg-black/60 px-5 pb-4 backdrop-blur-xl md:hidden">
              <ul className="flex flex-col space-y-4 pt-4">
                {mainMenu.map((item) => {
                  const isActive = isActivePath(item.url);
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.url}
                        className={`header-nav-link block font-medium text-white/90 no-underline transition-colors duration-200 hover:text-[#f4e6d3] hover:no-underline ${
                          isActive ? 'text-white no-underline' : ''
                        }`}
                        onClick={closeMenu}
                      >
                        {getTranslatedLabel(item)}
                      </Link>
                    </li>
                  );
                })}
                {/* Language Dropdown Mobile */}
                <li className="border-t border-white/10 pt-2">
                  <div className="relative">
                    <select
                      value={language}
                      onChange={handleLanguageChange}
                      aria-label="Seleccionar idioma"
                      className="w-full appearance-none rounded-full border border-white/15 bg-[#d4a574] px-4 py-2 pr-10 text-sm font-bold text-white shadow-[0_10px_24px_rgba(212,165,116,0.25)] outline-none transition-all duration-300 hover:bg-[#c9975e] focus:border-white/40"
                    >
                      {languageOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="bg-[#2b2b2b] text-white"
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/90">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.5 6L8 10.5L12.5 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
      {!isOverlayHeader && <div aria-hidden="true" className="h-28 md:h-32" />}
    </>
  );
}

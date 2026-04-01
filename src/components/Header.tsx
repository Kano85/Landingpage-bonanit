// src/components/Header.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types';
import { siteData } from '@/data/site';
import { useLanguage } from '@/contexts/LanguageContext';
import { type Language } from '@/i18n/translations';

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
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);
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

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setIsLanguageMenuOpen(false);
    closeMenu();
  };

  const currentLanguage =
    languageOptions.find((option) => option.value === language) ??
    languageOptions[0];

  const renderLanguageDropdown = (isMobile = false) => (
    <div
      ref={languageMenuRef}
      className={`relative ${isMobile ? 'w-full' : ''}`}
    >
      <button
        type="button"
        aria-label="Seleccionar idioma"
        aria-haspopup="menu"
        aria-expanded={isLanguageMenuOpen}
        onClick={() => setIsLanguageMenuOpen((current) => !current)}
        className={`inline-flex items-center gap-2 rounded-full border border-[#ead8c2]/70 bg-[#fffaf3]/90 px-3.5 py-2 text-[0.82rem] font-semibold text-[#536764] shadow-[0_10px_22px_rgba(41,57,55,0.1)] backdrop-blur-sm transition-all duration-300 hover:border-[#d4a574] hover:bg-[#fff6eb] hover:text-[#3f5856] ${
          isMobile ? 'w-full justify-between' : ''
        }`}
      >
        <span
          className="tracking-[0.02em]"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {currentLanguage.label}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`text-[#8f7658] transition-transform duration-200 ${
            isLanguageMenuOpen ? 'rotate-180' : ''
          }`}
        >
          <path
            d="M3.5 6L8 10.5L12.5 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isLanguageMenuOpen && (
        <div
          role="menu"
          aria-label="Opciones de idioma"
          className={`absolute z-20 mt-3 overflow-hidden rounded-[1.5rem] border border-[#ead8c2]/85 bg-[#fffaf3]/96 p-2 shadow-[0_24px_60px_rgba(41,57,55,0.18)] backdrop-blur-xl ${
            isMobile ? 'left-0 right-0' : 'right-0 min-w-[12rem]'
          }`}
        >
          {languageOptions.map((option) => {
            const isActive = option.value === language;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => handleLanguageChange(option.value)}
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#f3e4d1] text-[#425a58]'
                    : 'text-[#5e706d] hover:bg-[#f8efe4] hover:text-[#425a58]'
                }`}
              >
                <span
                  className="text-[0.95rem] font-medium"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {option.label}
                </span>
                {isActive ? (
                  <span className="text-[#b77c46]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

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
                      className={`header-nav-link !text-white font-semibold tracking-wide no-underline transition-colors duration-300 hover:!text-[#f4e6d3] hover:no-underline ${
                        isActive
                          ? 'border-b-2 border-[#d4a574] pb-1 !text-white no-underline'
                          : ''
                      }`}
                    >
                      {getTranslatedLabel(item)}
                    </Link>
                  </li>
                );
              })}
              {/* Language Dropdown */}
              <li>{renderLanguageDropdown()}</li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="text-white hover:text-[#f4e6d3] focus:text-[#f4e6d3] focus:outline-none md:hidden"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="relative block h-6 w-6">
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-1/2 block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                  }`}
                ></span>
              </span>
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
                        className={`header-nav-link block !text-white font-medium no-underline transition-colors duration-200 hover:!text-[#f4e6d3] hover:no-underline ${
                          isActive ? '!text-white no-underline' : ''
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
                  {renderLanguageDropdown(true)}
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

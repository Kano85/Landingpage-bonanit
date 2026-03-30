// src/components/Header.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/types';
import { siteData } from '@/data/site';

interface HeaderProps {
  menu?: MenuItem[];
}

export default function Header({ menu = siteData.navigation }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm border-b border-[var(--color-border)] sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity duration-200"
            onClick={closeMenu}
            aria-label="Ir al inicio"
          >
            <Image
              src="/images/cropped-cropped-cropped-Rastergrafik.png"
              alt="Logo Bonanit"
              width={64}
              height={64}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menu.map((item) => {
              const isActive = pathname === item.url;
              return (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className={`text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium ${
                      isActive
                        ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]'
                        : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-text)] hover:text-[var(--color-primary)] focus:outline-none focus:text-[var(--color-primary)]"
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
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--color-border)]">
            <ul className="flex flex-col space-y-4 pt-4">
              {menu.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      className={`block text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200 font-medium ${
                        isActive ? 'text-[var(--color-primary)]' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

// src/components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/data/site';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-surface border-t-2 border-border mt-auto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
            {/* Brand Section - Takes more space on left */}
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-flex items-center hover:opacity-80 transition-opacity duration-200 mb-6"
                aria-label="Ir al inicio"
              >
                <Image
                  src="/images/cropped-cropped-cropped-Rastergrafik.png"
                  alt="Logo Bonanit"
                  width={64}
                  height={64}
                  className="h-14 w-auto"
                />
              </Link>
              <p className="text-text-muted text-base leading-relaxed max-w-xs mb-8">
                {t('footer.tagline')}
              </p>

              {/* Social Links */}
              <div className="pt-2">
                <p
                  className="text-sm font-bold text-primary mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {t('footer.follow')}
                </p>
                <div className="flex items-center gap-5 text-text-muted">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="rounded-lg p-2 transition-colors duration-300 hover:text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="rounded-lg p-2 transition-colors duration-300 hover:text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="rounded-lg p-2 transition-colors duration-300 hover:text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.1 4a4.28 4.28 0 0 0-4.28 4.28c0 .34.04.67.1 1A12.15 12.15 0 0 1 3.15 5a4.28 4.28 0 0 0 1.33 5.71 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.18 0-.36-.01-.53A8.66 8.66 0 0 0 22.46 6z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="rounded-lg p-2 transition-colors duration-300 hover:text-primary"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h4v12H3v-12zm7 0h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2c4 0 4.8 2.6 4.8 6v6.3h-4v-5.6c0-1.4 0-3.3-2-3.3s-2.2 1.5-2.2 3.2v5.7h-4v-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {/* Legal Links */}
                <nav aria-label="Enlaces del footer">
                  <h4
                    className="text-lg font-bold text-primary mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {t('footer.info')}
                  </h4>
                  <ul className="space-y-3" role="list">
                    {siteData.footerLinks.map((item) => {
                      const getTranslatedLabel = () => {
                        if (item.id === '5') return t('links.legal.legal');
                        if (item.id === '6') return t('links.legal.terms');
                        if (item.id === '7') return t('links.legal.privacy');
                        return item.label;
                      };
                      return (
                        <li key={item.id} role="listitem">
                          <Link
                            href={item.url}
                            className="text-text-muted hover:text-primary transition-colors duration-200 font-medium text-base"
                          >
                            {getTranslatedLabel()}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Pages */}
                <nav aria-label="Páginas del sitio">
                  <h4
                    className="text-lg font-bold text-primary mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {t('footer.nav')}
                  </h4>
                  <ul className="space-y-3" role="list">
                    <li role="listitem">
                      <Link
                        href="/sobre-mi"
                        className="text-text-muted hover:text-primary transition-colors duration-200 font-medium text-base"
                      >
                        {t('links.nav.about')}
                      </Link>
                    </li>
                    <li role="listitem">
                      <Link
                        href="/mis-servicios"
                        className="text-text-muted hover:text-primary transition-colors duration-200 font-medium text-base"
                      >
                        {t('links.nav.services')}
                      </Link>
                    </li>
                    <li role="listitem">
                      <Link
                        href="/#contacto"
                        className="text-text-muted hover:text-primary transition-colors duration-200 font-medium text-base"
                      >
                        {t('links.nav.contact')}
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Newsletter/CTA */}
                <div>
                  <h4
                    className="text-lg font-bold text-[#5a7c7f] mb-6"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {t('footer.connect')}
                  </h4>
                  <p className="text-[#7d8b88] text-base mb-6 leading-relaxed">
                    {t('footer.connect_desc')}
                  </p>
                  <a
                    href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
                    className="inline-flex items-center justify-center rounded-full bg-[#d4a574]! px-6 py-3 text-sm font-bold text-white! no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9975e]! hover:text-white! hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
                  >
                    {t('footer.schedule')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#e8e4df]">
          <div className="flex justify-center items-center">
            <p className="text-[#7d8b88] text-sm font-medium">
              © {new Date().getFullYear()} {siteData.name}. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import { siteData } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center hover:opacity-90 transition-opacity duration-200"
              aria-label="Ir al inicio"
            >
              <Image
                src="/images/cropped-cropped-cropped-Rastergrafik.png"
                alt="Logo Bonanit"
                width={64}
                height={64}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[var(--color-text-muted)] mt-2 text-sm">
              Acompaño a familias a mejorar el descanso de sus bebés con un
              enfoque respetuoso, cercano y personalizado, para vivir la
              maternidad con más calma y confianza.
            </p>
          </div>

          {/* Legal Links */}
          <nav className="md:col-span-1" aria-label="Enlaces del footer">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              Enlaces
            </h3>
            <ul className="space-y-3" role="list">
              {siteData.footerLinks.map((item) => (
                <li key={item.id} role="listitem">
                  <Link
                    href={item.url}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="md:col-span-1" aria-label="Páginas del sitio">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              Enlaces
            </h3>
            <ul className="space-y-3" role="list">
              <li role="listitem">
                <Link
                  href="/sobre-mi"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  Sobre mí
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/mis-servicios"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  Mis servicios
                </Link>
              </li>
              <li role="listitem">
                <Link
                  href="/#contacto"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200 text-sm"
                >
                  Formulario de Contacto
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">
              Síguenos
            </h3>
            <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.1 4a4.28 4.28 0 0 0-4.28 4.28c0 .34.04.67.1 1A12.15 12.15 0 0 1 3.15 5a4.28 4.28 0 0 0 1.33 5.71 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.18 0-.36-.01-.53A8.66 8.66 0 0 0 22.46 6z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h4v12H3v-12zm7 0h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2c4 0 4.8 2.6 4.8 6v6.3h-4v-5.6c0-1.4 0-3.3-2-3.3s-2.2 1.5-2.2 3.2v5.7h-4v-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} {siteData.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

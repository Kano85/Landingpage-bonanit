'use client';

import Image from 'next/image';
import Section from '@/components/Section';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SobreMi() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section - Soy Laura Montoy */}
      <Section className="bg-[#f5f3ec] py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Imagen */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/DSC02831-2-scaled.jpg"
                alt="Laura Montoy"
                width={640}
                height={640}
                className="w-full max-w-sm h-auto rounded-full shadow-lg object-cover aspect-square"
                priority
              />
            </div>

            {/* Contenido */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#7f968e] mb-6">
                {t('about.hero.title')}
              </h1>

              <p className="text-lg text-[#2e4e6d] mb-6 leading-relaxed">
                {t('about.hero.p1')}
              </p>

              <p className="text-lg text-[#2e4e6d] leading-relaxed">
                {t('about.hero.p2')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Sección "Cómo empezó todo" */}
      <Section className="bg-[#7f968e] py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Contenido */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {t('about.how.title')}
              </h2>

              <p className="text-base md:text-lg mb-6 leading-relaxed">
                {t('about.how.p1')}
              </p>

              <p className="text-base md:text-lg mb-6 leading-relaxed">
                {t('about.how.p2')}
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                {t('about.how.p3')}
              </p>
            </div>

            {/* Imagen */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/DSC02435-2-2-819x1024.jpg"
                alt="Laura con bebé"
                width={640}
                height={640}
                className="w-full max-w-sm h-auto rounded-2xl shadow-lg object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Sección "Mi forma de trabajar" */}
      <Section className="bg-[#f5f3ec] py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Imagen */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/DSC02799-1-819x1024.jpg"
                alt="Laura"
                width={640}
                height={640}
                className="w-full max-w-sm h-auto rounded-2xl shadow-lg object-cover aspect-square"
              />
            </div>

            {/* Contenido */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2e4e6d] mb-8">
                {t('about.work.title')}
              </h2>

              <p className="text-base md:text-lg text-[#2e4e6d] mb-6 leading-relaxed">
                {t('about.work.p1')}
              </p>

              <p className="text-base md:text-lg text-[#2e4e6d] mb-6 leading-relaxed">
                {t('about.work.p2')}
              </p>

              <p className="text-base md:text-lg text-[#2e4e6d] leading-relaxed">
                {t('about.work.p3')}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/DSC_0872-1-1024x683.jpg"
          alt="Cita gratuita"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#7a664d]/80 to-[#7a664d]/60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            {t('about.cta.title')}
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            {t('about.cta.p')}
          </p>

          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-8 py-4 text-base font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)] md:px-12 md:py-5 md:text-lg"
          >
            {t('about.cta.button')}
          </a>
        </div>
      </section>
    </>
  );
}

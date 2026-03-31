'use client';

import Image from 'next/image';
import Section from '@/components/Section';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SobreMi() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section - Soy Laura Montoy */}
      <Section className="bg-linear-to-b from-[#f7f3ec] via-[#f5f0e7] to-[#eee6da] pt-28 pb-18 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.92fr_1.08fr] md:gap-16">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#e4d7c8] bg-white/75 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b9824f] shadow-[0_12px_30px_rgba(185,130,79,0.08)]">
                <span className="h-2 w-2 rounded-full bg-[#d4a574]"></span>
                Bonanit
              </div>

              <h1
                className="mt-6 text-4xl font-bold leading-[1.02] text-[#496260] md:text-6xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {t('about.hero.title')}
              </h1>

              <div className="mt-8 max-w-2xl md:pr-6">
                <p className="text-lg leading-8 text-[#455967] md:text-[1.18rem] md:leading-9">
                  {t('about.hero.p1')}
                </p>

                <p className="mb-0 text-lg leading-8 text-[#455967] md:text-[1.18rem] md:leading-9">
                  {t('about.hero.p2')}
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#d4a574]/22 blur-2xl"></div>
                <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-[#7f968e]/18 blur-3xl"></div>
                <div className="relative overflow-hidden rounded-[2.25rem] shadow-[0_28px_60px_rgba(55,76,74,0.14)]">
                  <Image
                    src="/images/DSC02831-2-scaled.jpg"
                    alt="Laura Montoy"
                    width={2048}
                    height={2560}
                    className="h-auto w-full rounded-[1.7rem] object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sección "Cómo empezó todo" */}
      <Section className="bg-linear-to-r from-[#6f8683] via-[#7c928f] to-[#8ca09d] py-18 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.02fr_0.98fr] md:gap-16">
            <div className="text-white md:pr-6">
              <h2
                className="text-3xl font-bold leading-tight text-white md:text-5xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {t('about.how.title')}
              </h2>

              <div className="mt-8 space-y-6 text-[1.02rem] leading-8 text-white/92 md:text-lg md:leading-9">
                <p>{t('about.how.p1')}</p>
                <p>{t('about.how.p2')}</p>
                <p className="mb-0">{t('about.how.p3')}</p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md md:max-w-lg">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_28px_60px_rgba(34,49,48,0.18)]">
                <Image
                  src="/images/DSC02435-2-2-819x1024.jpg"
                  alt="Laura con bebé"
                  width={819}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Sección "Mi forma de trabajar" */}
      <Section className="bg-[#f6f2eb] py-18 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
            <div className="mx-auto w-full max-w-md md:max-w-lg">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_52px_rgba(61,77,74,0.1)]">
                <Image
                  src="/images/DSC02799-1-819x1024.jpg"
                  alt="Laura"
                  width={819}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="md:pl-4">
              <h2
                className="text-3xl font-bold text-[#425d61] md:text-5xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {t('about.work.title')}
              </h2>

              <div className="mt-8 space-y-6 text-[1.02rem] leading-8 text-[#47606a] md:text-lg md:leading-9">
                <p>{t('about.work.p1')}</p>
                <p>{t('about.work.p2')}</p>
                <p className="mb-0">{t('about.work.p3')}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final Section */}
      <section className="relative min-h-125 md:min-h-150 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/DSC_0872-1-1024x683.jpg"
          alt="Cita gratuita"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#7a664d]/80 to-[#7a664d]/60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <h2
            className="mb-8 text-3xl font-bold text-white md:text-5xl"
            style={{ color: '#fff' }}
          >
            {t('about.cta.title')}
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            {t('about.cta.p')}
          </p>

          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-flex items-center justify-center rounded-full bg-[#d4a574]! px-8 py-4 text-base font-bold text-white! no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9975e]! hover:text-white! hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)] md:px-12 md:py-5 md:text-lg"
          >
            {t('about.cta.button')}
          </a>
        </div>
      </section>
    </>
  );
}

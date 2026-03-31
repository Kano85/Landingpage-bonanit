'use client';

import Image from 'next/image';
import Accordion from '@/components/Accordion';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MisServicios() {
  const { t } = useLanguage();
  const faqItems = [
    {
      question: t('services.faq.q1'),
      answer: t('services.faq.a1'),
    },
    {
      question: t('services.faq.q2'),
      answer: t('services.faq.a2'),
    },
    {
      question: t('services.faq.q3'),
      answer: t('services.faq.a3'),
    },
    {
      question: t('services.faq.q4'),
      answer: t('services.faq.a4'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#1a3a4a] to-[#0f2530] pt-24 md:pt-32">
        <Image
          src="/images/image.jpg"
          alt="Mis servicios"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1
            className="mb-6 text-5xl font-bold leading-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-playfair)', color: '#ffffff' }}
          >
            {t('services.hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Discount Banner */}
      <Section className="bg-linear-to-b from-[#f7f2ea] to-[#efe8dd] py-14 md:py-18">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-white/70 bg-white/72 p-8 text-center shadow-[0_24px_55px_rgba(79,95,111,0.08)] backdrop-blur-sm md:p-12">
            <div className="mb-5 inline-flex items-center rounded-full bg-[#d4a574]/14 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-[#b77c46] uppercase">
              {t('services.discount.title')}
            </div>
            <p className="mx-auto max-w-3xl text-xl leading-9 text-[#425a58] md:text-[1.55rem] md:leading-10">
              {t('services.discount.p1')}
            </p>
            <p className="mx-auto mb-0 mt-5 max-w-2xl text-base leading-8 text-[#6a7875] md:text-lg">
              {t('services.discount.p2')}
            </p>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-[#f6f2eb] py-18 md:py-28">
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-18">
          <h2
            className="mb-5 text-3xl font-bold text-[#425d61] md:text-5xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {t('services.hero.title')}
          </h2>
          <p className="mx-auto mb-0 max-w-3xl text-lg leading-8 text-[#60706e] md:text-[1.16rem] md:leading-9">
            {t('services.hero.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isReverse={index === 1}
            />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-linear-to-b from-[#f4efe7] via-[#f8f5ef] to-white py-18 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.82fr_1.18fr] md:gap-16">
            <div className="md:pt-4">
              <h2
                className="mb-5 text-3xl font-bold text-[#425d61] md:text-5xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {t('services.faq.title')}
              </h2>
              <p className="max-w-md text-lg leading-8 text-[#61716f] md:text-[1.08rem]">
                {t('services.hero.subtitle')}
              </p>
              <a
                href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#d4a574]! px-8 py-4 text-base font-bold text-white! no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9975e]! hover:text-white! hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
              >
                {t('services.cta.button')}
              </a>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <Accordion key={item.question} title={item.question}>
                  <p className="mb-0 text-[1rem] leading-8 text-[#536764] md:text-[1.05rem]">
                    {item.answer}
                  </p>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
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
            {t('services.cta.title')}
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            {t('services.cta.p')}
          </p>

          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-flex items-center justify-center rounded-full bg-[#d4a574]! px-8 py-4 text-base font-bold text-white! no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9975e]! hover:text-white! hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)] md:px-12 md:py-5 md:text-lg"
          >
            {t('services.cta.button')}
          </a>
        </div>
      </section>
    </>
  );
}

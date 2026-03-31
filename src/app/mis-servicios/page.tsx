'use client';

import Image from 'next/image';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MisServicios() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#1a3a4a] to-[#0f2530]">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('services.hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Discount Banner */}
      <Section className="bg-[#e5e2d4] py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e4e6d] mb-4">
            {t('services.discount.title')}
          </h2>
          <p className="text-lg text-[#2e4e6d] mb-4">
            {t('services.discount.p1')}
          </p>
          <p className="text-base text-[#2e4e6d] leading-relaxed">
            {t('services.discount.p2')}
          </p>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-[#f5f3ec] py-16 md:py-24">
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

      {/* CTA Section */}
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
            {t('services.cta.title')}
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            {t('services.cta.p')}
          </p>

          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-8 py-4 text-base font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)] md:px-12 md:py-5 md:text-lg"
          >
            {t('services.cta.button')}
          </a>
        </div>
      </section>

      {/* Additional Info Section */}
      <Section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e4e6d] mb-8 text-center">
            {t('services.faq.title')}
          </h2>

          <div className="space-y-6">
            <div className="border-b-2 border-[#e5e2d4] pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                {t('services.faq.q1')}
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                {t('services.faq.a1')}
              </p>
            </div>

            <div className="border-b-2 border-[#e5e2d4] pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                {t('services.faq.q2')}
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                {t('services.faq.a2')}
              </p>
            </div>

            <div className="border-b-2 border-[#e5e2d4] pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                {t('services.faq.q3')}
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                {t('services.faq.a3')}
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                {t('services.faq.q4')}
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                {t('services.faq.a4')}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

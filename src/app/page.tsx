'use client';

import Image from 'next/image';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import Accordion from '@/components/Accordion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#4a5f5d] to-[#3a4e4c]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/media/6849031-uhd_3840_2160_24fps-1-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/55 to-black/65"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: 'var(--font-playfair)', color: '#ffffff' }}
          >
            {t('hero.title')}
          </h1>
          <p
            className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed text-[#f8f3eb] drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {t('hero.subtitle')}
          </p>
          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-10 py-5 text-base font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
          >
            {t('hero.cta')}
          </a>
        </div>
      </section>

      {/* Questions Section */}
      <Section className="bg-[#faf8f5] py-20 md:py-28">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
          <div className="text-center">
            <div
              className="inline-block bg-[#7d8b88] text-white px-7 md:px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#6d7b78] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {t('questions.q1')}
            </div>
          </div>
          <div className="text-center">
            <div
              className="inline-block bg-[#7d8b88] text-white px-7 md:px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#6d7b78] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {t('questions.q2')}
            </div>
          </div>
          <div className="text-center">
            <div
              className="inline-block bg-[#7d8b88] text-white px-7 md:px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#6d7b78] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {t('questions.q3')}
            </div>
          </div>
          <div className="text-center">
            <div
              className="inline-block bg-[#7d8b88] text-white px-7 md:px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#6d7b78] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {t('questions.q4')}
            </div>
          </div>
        </div>
      </Section>

      {/* Not Alone Section */}
      <Section className="bg-[#f5f0e6] py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2
              className="text-3xl md:text-5xl font-bold text-[#5a7c7f] mb-8"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {t('alone.title')}
            </h2>
            <div
              className="space-y-6 text-[#3d4a48] text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <p>{t('alone.p1')}</p>
              <p>{t('alone.p2')}</p>
            </div>
          </div>
          <div className="relative min-h-[380px] order-1 md:order-2">
            <Image
              src="/images/postnatal-period-with-mother-child-3-2000x1333.jpg"
              alt="Madre con bebé descansando"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Pullquote */}
      <Section className="bg-linear-to-r from-[#5a7c7f] to-[#7d8b88] py-20 md:py-32">
        <blockquote className="text-center max-w-3xl mx-auto">
          <p
            className="text-3xl md:text-5xl font-semibold text-white leading-relaxed"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            &ldquo;{t('quote')}&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* Real Support Section */}
      <Section className="bg-[#f5f0e6] py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="relative min-h-[380px]">
            <Image
              src="/images/DSC02792-1-scaled.jpg"
              alt="Laura Montoy, especialista en sueño infantil"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#5a7c7f] mb-8"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {t('support.title')}
            </h2>
            <div
              className="space-y-6 text-[#3d4a48] text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <p>{t('support.p1')}</p>
              <p>{t('support.p2')}</p>
              <p>{t('support.p3')}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-[#f5f0e6] py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold text-[#5a7c7f] mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-4 mt-12">
            <Accordion title={t('faq.q1')}>
              <p className="text-[#3d4a48] leading-relaxed text-lg">
                {t('faq.a1')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q2')}>
              <p className="text-[#3d4a48] leading-relaxed text-lg">
                {t('faq.a2')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q3')}>
              <p className="text-[#3d4a48] leading-relaxed text-lg">
                {t('faq.a3')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q4')}>
              <p className="text-[#3d4a48] leading-relaxed text-lg">
                {t('faq.a4')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q5')}>
              <p className="text-[#3d4a48] leading-relaxed text-lg">
                {t('faq.a5')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q6')}>
              <p className="text-[#3d4a48] leading-relaxed text-lg">
                {t('faq.a6')}
              </p>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-[#5a7c7f] py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {t('testimonials.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <TestimonialCard
              name="Sonia y Bertrán"
              role="mamá y papá de Gema, 12 meses"
              content="«Con Laura encontramos la ayuda que necesitábamos: nuestra bebé pasó de despertarse muchas veces a solo 1 vez por noche, y a veces duerme toda la noche. Nos acompañó en el destete nocturno con apoyo práctico y contención emocional. Su paciencia y profesionalismo marcaron la diferencia.»"
              image="/images/foto-gala.jpg"
            />
            <TestimonialCard
              name="Eugenia"
              role="mamá de Benjamín de 16 meses"
              content="«Realmente hemos logrado cosas que nunca hubiésemos imaginado. Esto fue gracias a la paciencia y compromiso que ha puesto Laura con respecto al sueño y situación de nuestro hijo. Día a día nos iba alentando para que no dejemos de intentar, al principio fue difícil pero nos ha entusiasmado y hemos conseguido cambios reales.»"
              image="/images/IMG-20250219-WA0014-3.jpg"
            />
            <TestimonialCard
              name="Fernanda"
              role="mamá de Teo, 10 meses"
              content="«Desde las primeras conversaciones Laura dio un par de tips a cambiar y ¡funcionaron! Luego el trabajo fue día a día, siempre ella observando y preguntando para adaptarse a la situación. MUY buena, realmente muy buena coach. Hoy termina el plan y me voy con una caja llena de herramientas para seguir mejorando el sueño de mi bebé. ¡Muchas gracias Laura!»"
              image="/images/IMG-20250219-WA0014-3.jpg"
            />
            <TestimonialCard
              name="Patri"
              role="mamá de Théo, 7 meses"
              content="«Al principio tenía dudas porque no quería dejar llorar a mi bebé, pero Laura creó un plan sensible y adaptado a nosotros. El seguimiento diario fue excelente y sus recomendaciones nos ayudaron a saber cómo actuar en cada situación.»"
              image="/images/Ellipse-3.png"
            />
          </div>
        </div>
      </Section>

      {/* CTA Final Section */}
      <Section className="bg-linear-to-r from-[#5a7c7f] to-[#7d8b88] py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-10 py-5 text-lg font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)] md:px-14"
          >
            {t('cta.final')}
          </a>
        </div>
      </Section>
    </>
  );
}

'use client';

import Image from 'next/image';
import Section from '@/components/Section';
import Accordion from '@/components/Accordion';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const questionItems = [
    t('questions.q1'),
    t('questions.q2'),
    t('questions.q3'),
    t('questions.q4'),
  ];
  const testimonials = [
    {
      name: 'Sonia y Bertrán',
      role: 'mamá y papá de Gema, 12 meses',
      content:
        '«Con Laura encontramos la ayuda que necesitábamos: nuestra bebé pasó de despertarse muchas veces a solo 1 vez por noche, y a veces duerme toda la noche. Nos acompañó en el destete nocturno con apoyo práctico y contención emocional. Su paciencia y profesionalismo marcaron la diferencia.»',
      image: '/images/foto-gala.jpg',
    },
    {
      name: 'Eugenia',
      role: 'mamá de Benjamín de 16 meses',
      content:
        '«Realmente hemos logrado cosas que nunca hubiésemos imaginado. Esto fue gracias a la paciencia y compromiso que ha puesto Laura con respecto al sueño y situación de nuestro hijo. Día a día nos iba alentando para que no dejemos de intentar, al principio fue difícil pero nos ha entusiasmado y hemos conseguido cambios reales.»',
      image: '/images/IMG-20250219-WA0014-3.jpg',
    },
    {
      name: 'Fernanda',
      role: 'mamá de Teo, 10 meses',
      content:
        '«Desde las primeras conversaciones Laura dio un par de tips a cambiar y ¡funcionaron! Luego el trabajo fue día a día, siempre ella observando y preguntando para adaptarse a la situación. MUY buena, realmente muy buena coach. Hoy termina el plan y me voy con una caja llena de herramientas para seguir mejorando el sueño de mi bebé. ¡Muchas gracias Laura!»',
      image: '/images/fernanda.jpeg',
    },
    {
      name: 'Patri',
      role: 'mamá de Théo, 7 meses',
      content:
        '«Al principio tenía dudas porque no quería dejar llorar a mi bebé, pero Laura creó un plan sensible y adaptado a nosotros. El seguimiento diario fue excelente y sus recomendaciones nos ayudaron a saber cómo actuar en cada situación.»',
      image: '/images/mama-patri.jpg',
    },
  ];

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
            className="inline-flex items-center justify-center rounded-full bg-[#d4a574]! px-10 py-5 text-base font-bold text-white! no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9975e]! hover:text-white! hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
          >
            {t('hero.cta')}
          </a>
        </div>
      </section>

      {/* Questions Section */}
      <Section className="bg-[#faf8f5] py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-4xl">
            <h2
              className="mb-0 text-3xl font-bold text-[#425a58] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Puede que te reconozcas en alguna de estas situaciones
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {questionItems.map((question) => (
              <article
                key={question}
                className="group rounded-[1.5rem] border border-[#e7ddd1] bg-white/85 p-6 shadow-[0_16px_34px_rgba(79,95,111,0.06)] transition-all duration-300 hover:border-[#d8c0a2] hover:shadow-[0_22px_44px_rgba(79,95,111,0.1)] md:p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="mt-1 h-14 w-[3px] shrink-0 rounded-full bg-linear-to-b from-[#d4a574] via-[#c8a17a] to-transparent"></div>
                  <div className="min-w-0">
                    <p
                      className="mb-0 text-lg font-medium leading-8 text-[#425a58] md:text-[1.28rem] md:leading-9"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {question}
                    </p>
                  </div>
                </div>
              </article>
            ))}
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
            className="!text-4xl md:!text-6xl font-semibold text-white !leading-[1.12]"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '2.25rem',
              lineHeight: '1.12',
            }}
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
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2
              className="mb-4 text-3xl font-bold text-[#4a6665] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {t('faq.title')}
            </h2>
          </div>
          <div className="mt-10 space-y-5">
            <Accordion title={t('faq.q1')}>
              <p className="mb-0 text-[1rem] leading-8 text-[#4a5a57] md:text-[1.04rem]">
                {t('faq.a1')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q2')}>
              <p className="mb-0 text-[1rem] leading-8 text-[#4a5a57] md:text-[1.04rem]">
                {t('faq.a2')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q3')}>
              <p className="mb-0 text-[1rem] leading-8 text-[#4a5a57] md:text-[1.04rem]">
                {t('faq.a3')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q4')}>
              <p className="mb-0 text-[1rem] leading-8 text-[#4a5a57] md:text-[1.04rem]">
                {t('faq.a4')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q5')}>
              <p className="mb-0 text-[1rem] leading-8 text-[#4a5a57] md:text-[1.04rem]">
                {t('faq.a5')}
              </p>
            </Accordion>
            <Accordion title={t('faq.q6')}>
              <p className="mb-0 text-[1rem] leading-8 text-[#4a5a57] md:text-[1.04rem]">
                {t('faq.a6')}
              </p>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Testimonials + CTA Section */}
      <Section className="bg-linear-to-b from-[#55726f] via-[#607c79] to-[#6d8582] py-20 md:py-28">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-14 text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-white/30 md:w-20"></span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#ead7c0]">
                Bonanit
              </span>
              <span className="h-px w-12 bg-white/30 md:w-20"></span>
            </div>
            <h2
              className="mx-auto max-w-3xl text-3xl font-bold text-[#f8f3eb] drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)] md:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)', color: '#f8f3eb' }}
            >
              {t('testimonials.title')}
            </h2>
          </div>
        </div>
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <TestimonialMarquee testimonials={testimonials} />
        </div>

        <div className="mx-auto mt-16 max-w-4xl px-4">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 px-6 py-8 text-center shadow-[0_24px_60px_rgba(28,42,41,0.18)] backdrop-blur-md md:px-10 md:py-10">
            <h3
              className="mx-auto max-w-2xl text-2xl font-bold leading-tight text-[#fff8ef] md:text-4xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {t('cta.final')}
            </h3>
            <div className="mt-8 flex justify-center">
              <a
                href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
                className="inline-flex items-center gap-3 rounded-full border border-[#f0c99f] bg-[#d4a574]! px-8 py-4 text-base font-bold text-white! no-underline shadow-[0_14px_34px_rgba(212,165,116,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9975e]! hover:text-white! hover:no-underline hover:shadow-[0_18px_40px_rgba(201,151,94,0.34)] md:px-10 md:py-5 md:text-lg"
              >
                <span>{t('footer.schedule')}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 8H12.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.75 4.5L12.5 8L8.75 11.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

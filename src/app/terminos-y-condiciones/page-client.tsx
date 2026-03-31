'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsPageClient() {
  const { t } = useLanguage();
  const summaryDetails = [
    {
      title: t('terms.service.summary.title'),
      items: [
        t('terms.service.summary.item1'),
        t('terms.service.summary.item2'),
        t('terms.service.summary.item3'),
        t('terms.service.summary.item4'),
      ],
    },
    {
      title: t('terms.keydata.title'),
      items: [
        t('terms.keydata.payment'),
        t('terms.keydata.withdrawal'),
        t('terms.keydata.refunds'),
      ],
    },
  ];

  const sections = [
    {
      title: t('terms.section1.title'),
      paragraphs: [t('terms.section1.p1'), t('terms.section1.p2')],
    },
    {
      title: t('terms.section2.title'),
      paragraphs: [t('terms.section2.p1'), t('terms.section2.p2')],
    },
    {
      title: t('terms.section3.title'),
      items: [
        t('terms.section3.item1'),
        t('terms.section3.item2'),
        t('terms.section3.item3'),
        t('terms.section3.item4'),
        t('terms.section3.item5'),
      ],
    },
    {
      title: t('terms.section4.title'),
      items: [
        t('terms.section4.item1'),
        t('terms.section4.item2'),
        t('terms.section4.item3'),
        t('terms.section4.item4'),
        t('terms.section4.item5'),
      ],
    },
    {
      title: t('terms.section5.title'),
      paragraphs: [t('terms.section5.p1'), t('terms.section5.p2')],
    },
    {
      title: t('terms.section6.title'),
      items: [t('terms.section6.item1'), t('terms.section6.item2')],
    },
    {
      title: t('terms.section7.title'),
      items: [
        t('terms.section7.item1'),
        t('terms.section7.item2'),
        t('terms.section7.item3'),
      ],
    },
    {
      title: t('terms.section8.title'),
      items: [
        t('terms.section8.item1'),
        t('terms.section8.item2'),
        t('terms.section8.item3'),
      ],
    },
    {
      title: t('terms.section9.title'),
      items: [
        t('terms.section9.item1'),
        t('terms.section9.item2'),
        t('terms.section9.item3'),
      ],
    },
    {
      title: t('terms.section10.title'),
      items: [
        t('terms.section10.item1'),
        t('terms.section10.item2'),
        t('terms.section10.item3'),
      ],
    },
    {
      title: t('terms.section11.title'),
      items: [
        t('terms.section11.item1'),
        t('terms.section11.item2'),
        t('terms.section11.item3'),
      ],
    },
    {
      title: t('terms.section12.title'),
      items: [
        t('terms.section12.item1'),
        t('terms.section12.item2'),
        t('terms.section12.item3'),
      ],
    },
    {
      title: t('terms.contact.title'),
      paragraphs: [
        <>
          {t('terms.contact.text')}{' '}
          <a
            href="mailto:info@bonanitsuenoinfantil.com"
            className="text-[#4d6b68] underline decoration-[#d4a574] underline-offset-4"
          >
            {t('terms.contact.email')}
          </a>
          .
        </>,
      ],
      cta: (
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-6 py-3 text-sm font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
        >
          {t('terms.back')}
        </Link>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <section className="bg-linear-to-b from-[#f6f1e8] via-[#f3ede2] to-[#ebe4d8]">
        <div className="mx-auto max-w-5xl px-4 pb-18 pt-36 md:pb-24 md:pt-44">
          <div className="max-w-4xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b9824f]">
              {t('terms.service.section')}
            </p>
            <h1
              className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] text-[#425a58] md:text-6xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {t('terms.title')}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4f6360] md:text-[1.2rem] md:leading-9">
              {t('terms.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {summaryDetails.map((detail) => (
              <div key={detail.title}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7c938a]">
                  {detail.title}
                </p>
                <ul className="space-y-2 pl-5 text-[1.02rem] leading-7 text-[#425a58] marker:text-[#b9824f]">
                  {detail.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-[#e6dccb] pt-12 md:mt-16 md:pt-16">
            <div className="space-y-12 md:space-y-14">
              {sections.map((section) => (
                <section key={section.title} className="max-w-4xl">
                  <h2
                    className="text-[2rem] font-bold leading-tight text-[#4b6664] md:text-[2.8rem]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {section.title}
                  </h2>

                  {section.paragraphs ? (
                    <div className="mt-4 space-y-3 text-[1.02rem] leading-8 text-[#4e615f] [&>p]:mb-0">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={`${section.title}-paragraph-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.items ? (
                    <ul className="mt-5 space-y-3 pl-5 text-[1.02rem] leading-8 text-[#4e615f] marker:text-[#b9824f]">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.cta}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

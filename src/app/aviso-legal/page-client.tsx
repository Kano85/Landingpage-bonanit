'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const socialProfiles = [
  {
    label: 'Instagram',
    url: 'http://instagram.com/bonanit_suenoinfantil',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61571558230641',
  },
];

interface DetailItem {
  title: string;
  content: ReactNode;
}

interface SectionBlock {
  heading?: string;
  content: ReactNode;
}

interface SectionItem {
  title: string;
  blocks: SectionBlock[];
}

export default function AvisoLegalPageClient() {
  const { t } = useLanguage();
  const emailLabelKey = t('legal.contact.emailLabel');
  const emailLabel =
    emailLabelKey === 'legal.contact.emailLabel'
      ? t('legal.contact.email')
      : emailLabelKey;
  const sidebarTitleKey = t('legal.contact.sidebarTitle');
  const sidebarTitle =
    sidebarTitleKey === 'legal.contact.sidebarTitle'
      ? t('legal.contact.title')
      : sidebarTitleKey;
  const details: DetailItem[] = [
    {
      title: t('legal.provider.title'),
      content: (
        <>
          <p>Laura Montoy Blanca, Bonanit</p>
          <p>Thorwaldsenstra&szlig;e 13</p>
          <p>12157 Berl&iacute;n</p>
          <p>Alemania</p>
        </>
      ),
    },
    {
      title: t('legal.contact.title'),
      content: (
        <>
          <p>
            {emailLabel}{' '}
            <a
              href="mailto:info@bonanitsuenoinfantil.com"
              className="text-[#4d6b68] underline decoration-[#d4a574] underline-offset-4"
            >
              info@bonanitsuenoinfantil.com
            </a>
          </p>
          <p>{t('legal.contact.other')}</p>
        </>
      ),
    },
  ];
  const sections: SectionItem[] = [
    {
      title: t('legal.company.title'),
      blocks: [
        {
          heading: t('legal.disputes.title'),
          content: <p>{t('legal.disputes.text')}</p>,
        },
        {
          heading: t('legal.social.title'),
          content: (
            <>
              <p>{t('legal.social.text')}</p>
              <ul className="mt-5 space-y-3">
                {socialProfiles.map((profile) => (
                  <li key={profile.url}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#4d6b68] underline decoration-[#d4a574] underline-offset-4 break-all"
                    >
                      {profile.label}: {profile.url}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: t('legal.data.title'),
      blocks: [
        {
          content: <p>{t('legal.data.text')}</p>,
        },
      ],
    },
    {
      title: t('legal.disclaimer.title'),
      blocks: [
        {
          heading: t('legal.disclaimer.exemption.title'),
          content: <p>{t('legal.disclaimer.exemption.text')}</p>,
        },
        {
          heading: t('legal.disclaimer.copyright.title'),
          content: <p>{t('legal.disclaimer.copyright.text')}</p>,
        },
        {
          heading: t('legal.disclaimer.legal.title'),
          content: <p>{t('legal.disclaimer.legal.text')}</p>,
        },
      ],
    },
    {
      title: t('legal.images.title'),
      blocks: [
        {
          content: (
            <>
              <p>{t('legal.images.text')}</p>
              <p>{t('legal.images.sources')}</p>
              <p className="text-base text-[#667a78]">{t('legal.images.generator')}</p>
            </>
          ),
        },
      ],
    },
    {
      title: sidebarTitle,
      blocks: [
        {
          content: (
            <>
              <p>
                {t('legal.contact.text')}{' '}
                <a
                  href="mailto:info@bonanitsuenoinfantil.com"
                  className="text-[#4d6b68] underline decoration-[#d4a574] underline-offset-4"
                >
                  info@bonanitsuenoinfantil.com
                </a>
                .
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-6 py-3 text-sm font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
              >
                {t('legal.back')}
              </Link>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <section className="bg-linear-to-b from-[#f6f1e8] via-[#f3ede2] to-[#ebe4d8]">
        <div className="mx-auto max-w-5xl px-4 pb-18 pt-36 md:pb-24 md:pt-44">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b9824f]">
            {t('legal.section')}
          </p>
          <h1
            className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] text-[#425a58] md:text-6xl"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {t('legal.title')}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4f6360] md:text-[1.2rem] md:leading-9">
            {t('legal.subtitle')}
          </p>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {details.map((detail) => (
              <div key={detail.title}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7c938a]">
                  {detail.title}
                </p>
                <div className="space-y-2 text-[1.02rem] leading-7 text-[#425a58] [&>p]:mb-0">
                  {detail.content}
                </div>
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

                  <div className="mt-6 space-y-8 md:space-y-9">
                    {section.blocks.map((block, index) => (
                      <div
                        key={block.heading ?? `${section.title}-${index}`}
                        className={index === 0 ? '' : 'border-t border-[#e6dccb] pt-6'}
                      >
                        {block.heading ? (
                          <h3 className="text-[1.4rem] font-semibold text-[#425a58] md:text-[1.55rem]">
                            {block.heading}
                          </h3>
                        ) : null}
                        <div className="mt-3 space-y-3 text-[1.02rem] leading-8 text-[#4e615f] [&_p]:mb-0 [&_ul]:mb-0 [&_li]:mb-0">
                          {block.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

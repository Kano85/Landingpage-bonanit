'use client';

import Image from 'next/image';
import { Service } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
  isReverse?: boolean;
}

export default function ServiceCard({
  service,
  isReverse = false,
}: ServiceCardProps) {
  const { t } = useLanguage();

  // Map service ID to translation keys
  const planNumber =
    service.id === 'plan-basico'
      ? '1'
      : service.id === 'plan-extension'
        ? '2'
        : '3';

  const translatedService = {
    title: t(`service.plan${planNumber}.title`),
    duration: t(`service.plan${planNumber}.duration`),
    desc1: t(`service.plan${planNumber}.desc1`),
    desc2: t(`service.plan${planNumber}.desc2`),
    button: t(`service.plan${planNumber}.button`),
    features: [
      t(`service.plan${planNumber}.f1`),
      t(`service.plan${planNumber}.f2`),
      t(`service.plan${planNumber}.f3`),
      t(`service.plan${planNumber}.f4`),
      planNumber === '1' || planNumber === '2'
        ? t(`service.plan${planNumber}.f5`)
        : null,
    ].filter(Boolean),
  };
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto mb-16 md:mb-24 ${
        isReverse ? 'md:grid-cols-2' : ''
      }`}
    >
      <div className={`${isReverse ? 'md:order-2' : 'md:order-1'}`}>
        <Image
          src={service.image}
          alt={service.title}
          width={service.imageWidth}
          height={service.imageHeight}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-auto w-full rounded-3xl shadow-lg"
        />
      </div>

      <div className={isReverse ? 'md:order-1' : 'md:order-2'}>
        <div className="bg-white/65 backdrop-filter backdrop-blur-md rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e4e6d] mb-2">
            {translatedService.title}
          </h2>

          <p className="text-sm text-[#8a5a3c] font-semibold mb-4">
            · {translatedService.duration}
          </p>

          <div className="mb-6">
            <span className="text-3xl md:text-4xl font-bold text-[#8a5a3c]">
              {service.price}
            </span>
          </div>

          <ul className="space-y-3 mb-8">
            {translatedService.features.map((featureText, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[#5c6f82] text-sm md:text-base leading-relaxed"
              >
                <span className="text-[#e6a57e] font-bold flex-shrink-0 mt-1">
                  ✓
                </span>
                <span>{featureText}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#4f5f6f] text-sm md:text-base leading-relaxed mb-4">
            {translatedService.desc1}
          </p>

          <p className="text-[#4f5f6f] text-sm md:text-base leading-relaxed mb-6">
            {translatedService.desc2}
          </p>

          <a
            href={service.buttonLink}
            className="mt-4 inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-8 py-4 font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
          >
            {translatedService.button}
          </a>
        </div>
      </div>
    </div>
  );
}

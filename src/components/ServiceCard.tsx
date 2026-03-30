'use client';

import Image from 'next/image';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  isReverse?: boolean;
}

export default function ServiceCard({
  service,
  isReverse = false,
}: ServiceCardProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto mb-16 md:mb-24 ${
        isReverse ? 'md:grid-cols-2' : ''
      }`}
    >
      <div className={`relative min-h-[320px] ${isReverse ? 'md:order-2' : 'md:order-1'}`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-3xl shadow-lg object-cover"
        />
      </div>

      <div className={isReverse ? 'md:order-1' : 'md:order-2'}>
        <div className="bg-white/65 backdrop-filter backdrop-blur-md rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e4e6d] mb-2">
            {service.title}
          </h2>

          <p className="text-sm text-[#8a5a3c] font-semibold mb-4">
            · {service.duration}
          </p>

          <div className="mb-6">
            <span className="text-3xl md:text-4xl font-bold text-[#8a5a3c]">
              {service.price}
            </span>
          </div>

          <ul className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[#5c6f82] text-sm md:text-base leading-relaxed"
              >
                <span className="text-[#e6a57e] font-bold flex-shrink-0 mt-1">
                  ✓
                </span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          {service.description.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[#4f5f6f] text-sm md:text-base leading-relaxed mb-4 last:mb-6"
            >
              {paragraph}
            </p>
          ))}

          <a
            href={service.buttonLink}
            className="inline-block mt-4 px-8 py-4 rounded-3xl font-semibold text-white bg-gradient-to-r from-[#8aa6b8] to-[#6f8fa3] hover:from-[#7f9bad] hover:to-[#68869a] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            {service.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

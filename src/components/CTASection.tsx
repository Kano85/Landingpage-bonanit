// src/components/CTASection.tsx
import { ReactNode } from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  children?: ReactNode;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  children,
}: CTASectionProps) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8">{description}</p>
        <a
          href={buttonLink}
          className="inline-flex items-center justify-center rounded-full bg-[#d4a574]! px-6 py-3 font-bold text-white! no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c9975e]! hover:text-white! hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
        >
          {buttonText}
        </a>
        {children}
      </div>
    </section>
  );
}

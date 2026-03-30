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
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {buttonText}
        </a>
        {children}
      </div>
    </section>
  );
}

// src/components/Hero.tsx
import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="bg-linear-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
          style={{ color: '#ffffff' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-white/95">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}

// src/components/Accordion.tsx
'use client';

import { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#e8e4df]">
      <button
        className="w-full text-left py-5 px-6 font-bold text-[#5a7c7f] hover:bg-[#faf8f5] transition-colors duration-200 flex justify-between items-center group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        <span className="text-lg">{title}</span>
        <span
          className={`transform transition-transform duration-300 text-[#7d8b88] group-hover:text-[#5a7c7f] ${isOpen ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 bg-[#fefdfb] border-t border-[#e8e4df]">
          {children}
        </div>
      )}
    </div>
  );
}

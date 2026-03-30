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
    <div className="border border-[var(--color-border)] rounded-sm">
      <button
        className="w-full text-left p-4 font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors duration-200 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-sm">{title}</span>
        <span
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
}

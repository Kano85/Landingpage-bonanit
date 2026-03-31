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
    <div className="overflow-hidden rounded-[1.75rem] border border-[#e8ddd1] bg-white/90 shadow-[0_16px_34px_rgba(79,95,111,0.06)] backdrop-blur-sm">
      <button
        className="group flex w-full items-center justify-between bg-transparent px-7 py-6 text-left transition-colors duration-200 hover:bg-[#fcf8f2]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <span className="pr-6 text-[1.08rem] font-semibold leading-8 text-[#425a58] md:text-[1.18rem]">
          {title}
        </span>
        <span
          className={`shrink-0 text-[#a87845] transition-all duration-300 group-hover:text-[#c48a52] ${isOpen ? 'rotate-180 text-[#c48a52]' : ''}`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.5 6L8 10.5L12.5 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="border-t border-[#eee4d8] bg-[#fffdf9] px-7 pb-7 pt-5">
          {children}
        </div>
      )}
    </div>
  );
}

// src/components/TestimonialCard.tsx
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  image,
}: TestimonialCardProps) {
  return (
    <article className="w-[22rem] shrink-0 rounded-[2rem] border border-white/65 bg-[#fefcf8] p-8 shadow-[0_22px_50px_rgba(34,49,48,0.14)] transition-transform duration-500 hover:-translate-y-1 md:w-[28rem]">
      <div className="flex items-start gap-5">
        {image && (
          <Image
            src={image}
            alt={name}
            width={88}
            height={88}
            className="h-20 w-20 shrink-0 rounded-full object-cover border-4 border-[#f5e7d7] md:h-22 md:w-22"
          />
        )}
        <div className="min-w-0">
          <h3
            className="mb-1 text-[2rem] font-bold leading-[1.02] tracking-[-0.03em] text-[#3d5b5d] md:text-[2.35rem]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {name}
          </h3>
          <div className="mb-0 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#9aa39d] md:text-[0.78rem]">
            {role}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <blockquote
          className="mb-0 text-[0.88rem] leading-7 text-[#536461] italic md:text-[0.96rem]"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {content}
        </blockquote>
      </div>
    </article>
  );
}

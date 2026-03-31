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
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {image && (
        <Image
          src={image}
          alt={name}
          width={72}
          height={72}
          className="w-18 h-18 rounded-full mb-6 object-cover border-4 border-[#f5f0e6]"
        />
      )}
      <p className="text-[#3d4a48] mb-6 leading-relaxed italic text-lg">
        &ldquo;{content}&rdquo;
      </p>
      <div>
        <p
          className="font-bold text-[#5a7c7f] text-lg"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {name}
        </p>
        <p className="text-sm text-[#7d8b88] font-medium">{role}</p>
      </div>
    </div>
  );
}

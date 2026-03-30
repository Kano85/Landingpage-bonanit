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
    <div className="bg-white p-6 rounded-lg shadow-md">
      {image && (
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full mb-4 object-cover"
        />
      )}
      <p className="text-gray-600 mb-4">"{content}"</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

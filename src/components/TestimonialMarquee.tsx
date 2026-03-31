'use client';

import { useEffect, useRef } from 'react';
import TestimonialCard from '@/components/TestimonialCard';

interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  image?: string;
}

interface TestimonialMarqueeProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialMarquee({
  testimonials,
}: TestimonialMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId = 0;
    let previousTime = 0;
    let isPaused = false;
    let loopWidth = track.scrollWidth / 2;
    let position = -loopWidth;

    const updateLoopWidth = () => {
      loopWidth = track.scrollWidth / 2;
      position = -loopWidth;
      track.style.transform = `translate3d(${position}px, 0, 0)`;
    };

    const onMouseEnter = () => {
      isPaused = true;
    };

    const onMouseLeave = () => {
      isPaused = false;
    };

    const animate = (time: number) => {
      if (!previousTime) previousTime = time;
      const delta = time - previousTime;
      previousTime = time;

      if (!isPaused && loopWidth > 0) {
        position += (delta / 1000) * 28;
        if (position >= 0) {
          position = -loopWidth;
        }
        track.style.transform = `translate3d(${position}px, 0, 0)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    updateLoopWidth();
    window.addEventListener('resize', updateLoopWidth);
    track.addEventListener('mouseenter', onMouseEnter);
    track.addEventListener('mouseleave', onMouseLeave);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateLoopWidth);
      track.removeEventListener('mouseenter', onMouseEnter);
      track.removeEventListener('mouseleave', onMouseLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="py-6">
        <div
          ref={trackRef}
          className="flex w-max gap-6 will-change-transform md:gap-8"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

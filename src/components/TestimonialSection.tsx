import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-36 bg-[#0e0f13] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Identifier */}
        <div className="flex items-center justify-between pb-8 border-b border-[#1f2127]">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b]">
            <span className="font-mono text-[11px] text-[#c9b097]">07</span>
            <span>/</span>
            <span>Voices</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#787a82]">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                type="button"
                className="w-9 h-9 flex items-center justify-center border border-[#262830] hover:border-[#c9b097] text-[#909298] hover:text-[#f4f3ef] transition-colors"
                aria-label="Previous quote"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                type="button"
                className="w-9 h-9 flex items-center justify-center border border-[#262830] hover:border-[#c9b097] text-[#909298] hover:text-[#f4f3ef] transition-colors"
                aria-label="Next quote"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Prominent Editorial Quote Presentation */}
        <div className="mt-12 sm:mt-20 max-w-4xl min-h-[220px] flex flex-col justify-between">
          <div className="relative">
            <Quote className="w-10 h-10 text-[#c9b097]/25 mb-4" />
            <blockquote className="text-2xl sm:text-4xl md:text-5xl font-light text-[#f4f3ef] leading-[1.2] tracking-tight">
              “{current.quote}”
            </blockquote>
          </div>

          {/* Client Attribution (Zero-Pills: Clean unboxed typography) */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 text-sm text-[#8c8e94]">
            <span className="text-lg sm:text-xl font-bold text-[#f4f3ef] tracking-tight">
              — {current.client}
            </span>
            <div className="flex items-center gap-2 font-mono text-xs text-[#717379]">
              <span>{current.role}</span>
              <span>·</span>
              <span>{current.sessionType}</span>
              <span>·</span>
              <span>{current.year}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

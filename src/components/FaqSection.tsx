import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 bg-[#0b0c0e] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-4">
              <span className="font-mono text-[11px] text-[#c9b097]">09</span>
              <span>/</span>
              <span>Frequently Asked</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] text-[#f4f3ef] text-balance">
              The clear path to your session.
            </h2>
            <p className="mt-6 text-sm sm:text-base text-[#8e9096] leading-relaxed font-light">
              Clear expectations make space for effortless, natural moments. If
              your question is not answered here, we are always reachable
              directly.
            </p>

            <div className="mt-8 pt-6 border-t border-[#1f2127]">
              <button
                onClick={onOpenBooking}
                type="button"
                className="text-xs uppercase tracking-widest font-mono text-[#c9b097] hover:text-[#f4f3ef] transition-colors"
              >
                Ready to plan? Book a Session →
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Accordion (Hairlines, No heavy card boxes) */}
          <div className="lg:col-span-7 divide-y divide-[#1f2127] border-y border-[#1f2127]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="py-6 sm:py-7">
                  <button
                    onClick={() => toggle(index)}
                    type="button"
                    className="w-full flex items-center justify-between text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-[#f4f3ef] group-hover:text-[#c9b097] transition-colors pr-6">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 shrink-0 flex items-center justify-center border border-[#262830] group-hover:border-[#c9b097] text-[#898a90] group-hover:text-[#f4f3ef] transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-2 pr-12 text-sm sm:text-base text-[#9fa0a6] font-light leading-relaxed animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

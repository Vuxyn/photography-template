import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface FinalCtaProps {
  onOpenBooking: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Atelier Vera, I would love to inquire about booking a photography session.'
  )}`;

  return (
    <section className="relative py-32 sm:py-48 bg-[#07080a] text-[#f4f3ef] overflow-hidden border-b border-[#1b1d24]">
      {/* Subtle Atmospheric Vignette & Grain */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#1e1f26]/40 via-transparent to-black pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-6">
            <span className="font-mono text-[11px] text-[#c9b097]">10</span>
            <span>/</span>
            <span>Commence the Story</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-[-0.035em] leading-[0.98] text-[#f4f3ef] text-balance">
            Let’s make something{' '}
            <span className="font-serif italic font-normal text-[#c9b097]">
              worth
            </span>{' '}
            remembering.
          </h2>

          <p className="mt-8 text-lg sm:text-2xl text-[#a8a9af] font-light leading-relaxed max-w-2xl">
            Tell us about your session, and we’ll take it from there. Dates for
            the 2026/2027 season are currently open for reservation.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenBooking}
              type="button"
              className="group px-7 py-4 bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097] text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2.5"
            >
              <span>Book a Session</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 border border-[#32343e] text-[#f4f3ef] hover:border-white text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2.5"
            >
              <MessageCircle className="w-4 h-4 text-[#c9b097]" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Quick Notice */}
          <div className="mt-12 pt-8 border-t border-[#181921] flex flex-wrap items-center gap-8 text-xs font-mono text-[#6c6e75]">
            <span>Average initial response: &lt; 4 hours</span>
            <span>·</span>
            <span>Bilingual consultation (English & Indonesian)</span>
            <span>·</span>
            <span>Custom destination logistics</span>
          </div>
        </div>
      </div>
    </section>
  );
};

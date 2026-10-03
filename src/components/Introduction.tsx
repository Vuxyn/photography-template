import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface IntroductionProps {
  onLearnMore: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onLearnMore }) => {
  return (
    <section id="introduction" className="py-24 sm:py-36 bg-[#0b0c0e] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Identifier */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-12">
          <span className="font-mono text-[11px] text-[#c9b097]">01</span>
          <span>/</span>
          <span>About the Studio</span>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dominant Large Heading */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-bold tracking-[-0.035em] leading-[1.05] text-[#f4f3ef] text-balance">
              Stories,{' '}
              <span className="font-serif italic font-normal text-[#c9b097]">
                captured
              </span>{' '}
              with intention.
            </h2>

            <div className="mt-8 pt-8 border-t border-[#1f2127] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#8f9095] font-mono uppercase tracking-wider">
              <div>
                <span className="block text-2xl font-normal text-[#f4f3ef] font-sans">340+</span>
                <span className="mt-1 block">Stories Told</span>
              </div>
              <div>
                <span className="block text-2xl font-normal text-[#f4f3ef] font-sans">07 Yrs</span>
                <span className="mt-1 block">Dedicated Craft</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-normal text-[#f4f3ef] font-sans">14 Intl</span>
                <span className="mt-1 block">Exhibitions & Awards</span>
              </div>
            </div>
          </div>

          {/* Right Column: Thoughtful Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 pt-2">
            <p className="text-base sm:text-lg text-[#b8b9be] leading-relaxed font-light">
              We believe a photograph is more than an arrangement of light and
              fabric. It is a vessel for memory—unvarnished, intimate, and
              resilient against time.
            </p>

            <p className="text-sm sm:text-base text-[#8e9096] leading-relaxed font-light">
              Rather than orchestrating artificial moments or following fleeting
              social media trends, we observe with patience. Whether standing
              before two people exchanging silent vows on an ocean bluff or
              framing an artisan’s hands shaping stone, our camera is a quiet,
              respectful observer.
            </p>

            <div className="pt-4">
              <button
                onClick={onLearnMore}
                type="button"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#c9b097] hover:text-[#f4f3ef] transition-colors"
              >
                <span>Read our complete philosophy</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

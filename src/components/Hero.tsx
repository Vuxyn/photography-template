import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PhotoArtwork } from './PhotoArtwork';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreWork }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-between overflow-hidden border-b border-[#1f2127]">
      {/* Editorial Header Meta Track */}
      <div className="max-w-[1360px] mx-auto w-full px-6 sm:px-8 lg:px-12 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[#86878b] pb-6 border-b border-[#22242b]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#c9b097] animate-pulse" />
            <span className="font-mono text-[11px] text-[#cfcec8]">Jakarta · Bali · Worldwide</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>Est. 2019</span>
            <span>·</span>
            <span>Documentary & Editorial Direction</span>
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="mt-8 sm:mt-12 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-[-0.035em] leading-[0.96] text-[#f5f4ef] text-balance">
            Photographs{' '}
            <span className="font-serif italic font-normal text-[#c9b097]">
              made to be
            </span>{' '}
            remembered.
          </h1>
        </div>
      </div>

      {/* Dominant Editorial Photography Frame (Oversized Hero Visual) */}
      <div className="max-w-[1360px] mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="relative group overflow-hidden border border-[#22242a]">
          {/* Main Hero Photographic Artwork */}
          <PhotoArtwork
            photoKey="hero-main"
            aspect="aspect-[16/9] sm:aspect-[21/9]"
            alt="Editorial couple photograph in architectural colonnade"
            className="w-full"
            priority
          />

          {/* Discreet Visual Caption Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none flex flex-col justify-between p-6 sm:p-10">
            <div className="self-end">
              <span className="inline-block text-[11px] uppercase tracking-widest font-mono text-white/70 bg-black/40 backdrop-blur-sm px-3 py-1">
                Story 01 // Autumn Dusk
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-auto">
              <p className="max-w-md text-sm sm:text-base text-[#d6d5ce] leading-relaxed font-light">
                Contemporary photography for weddings, people, brands, and the
                moments that matter.
              </p>

              {/* CTAs */}
              <div className="flex items-center gap-4">
                <button
                  onClick={onExploreWork}
                  type="button"
                  className="group inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097] transition-all"
                >
                  <span>View Our Work</span>
                  <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                </button>

                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="group inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-widest font-semibold text-[#f4f3ef] border border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <span>Book a Session</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Quiet Studio Coordinates */}
      <div className="max-w-[1360px] mx-auto w-full px-6 sm:px-8 lg:px-12 mt-8 flex items-center justify-between text-xs text-[#6e7075] uppercase tracking-widest">
        <span>35mm & Medium Format Archive</span>
        <span className="hidden sm:inline">Natural Light Focus</span>
        <a
          href="#introduction"
          className="flex items-center gap-1.5 hover:text-[#f4f3ef] transition-colors"
        >
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PhotoArtwork } from './PhotoArtwork';

interface FeaturedServiceProps {
  onBookWedding: () => void;
  onExploreWeddingStories: () => void;
}

export const FeaturedService: React.FC<FeaturedServiceProps> = ({
  onBookWedding,
  onExploreWeddingStories,
}) => {
  return (
    <section className="relative py-28 sm:py-40 bg-[#0e1013] overflow-hidden border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Cinematic Card / Billboard Container */}
        <div className="relative border border-[#262832] bg-[#14151a] overflow-hidden">
          {/* Large Background Photo Artwork with Scrim */}
          <div className="relative">
            <PhotoArtwork
              photoKey="featured-wedding-cinema"
              aspect="aspect-[16/9] sm:aspect-[21/9]"
              alt="Cinematic wedding monograph"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-[#0e1013]/60 to-transparent pointer-events-none" />
          </div>

          {/* Content Positioned Over Cinematic Image */}
          <div className="relative -mt-36 sm:-mt-52 p-6 sm:p-12 lg:p-16 z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-4">
                <span className="font-mono text-[11px] text-[#c9b097]">04</span>
                <span>/</span>
                <span>Primary Feature</span>
                <span>·</span>
                <span className="text-[#f4f3ef]">Wedding Photography</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[0.98] text-[#f4f3ef] text-balance">
                Your day,{' '}
                <span className="font-serif italic font-normal text-[#c9b097]">
                  as it felt.
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-xl text-[#cfd0d6] font-light leading-relaxed max-w-2xl">
                We step back so you can step into your story. Unobtrusive
                documentary observation combined with subtle editorial curation.
                Every unscripted tear, glance, and burst of laughter preserved
                forever.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onBookWedding}
                  type="button"
                  className="px-6 py-3.5 bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097] text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2"
                >
                  <span>Inquire for Wedding Dates</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onExploreWeddingStories}
                  type="button"
                  className="px-6 py-3.5 border border-[#3b3e48] text-[#f4f3ef] hover:border-white text-xs uppercase tracking-widest font-semibold transition-all"
                >
                  View Wedding Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

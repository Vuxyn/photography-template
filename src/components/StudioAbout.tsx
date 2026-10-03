import React from 'react';
import { PhotoArtwork } from './PhotoArtwork';

export const StudioAbout: React.FC = () => {
  return (
    <section id="studio" className="py-24 sm:py-36 bg-[#0b0c0e] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Studio Portrait Photo Frame */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#22242a] bg-[#121316] p-2">
              <PhotoArtwork
                photoKey="about-photographer"
                aspect="aspect-[3/4]"
                alt="Lead photographer in atelier studio"
              />
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#717379] font-mono uppercase tracking-wider">
                <span>Adrian & Maya · Lead Curators</span>
                <span>Jakarta Studio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Philosophy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b]">
              <span className="font-mono text-[11px] text-[#c9b097]">06</span>
              <span>/</span>
              <span>The Studio</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.035em] leading-[1.08] text-[#f4f3ef] text-balance">
              Photography is not only about how something looked.{' '}
              <span className="font-serif italic font-normal text-[#c9b097]">
                It’s about how it felt.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#adadb2] font-light leading-relaxed">
              <p>
                Founded in 2019 by partners Adrian and Maya, Atelier Vera was born
                out of resistance to predictable wedding conventions and sterile
                studio portraiture.
              </p>
              <p className="text-sm sm:text-base text-[#898a90]">
                We view ourselves as archivists of genuine human intimacy. Our
                working rhythm is patient and intuitive: understanding when to
                guide gently and when to simply dissolve into the background so
                real life can happen unhindered.
              </p>
            </div>

            {/* Subtle Credentials & Accolades */}
            <div className="pt-6 border-t border-[#1f2127]">
              <span className="text-xs uppercase tracking-widest text-[#72747a] block mb-4 font-mono">
                Recognition & Exhibitions
              </span>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-[#989a9f]">
                <div className="border-l border-[#2c2e35] pl-3 py-1">
                  <span className="text-[#f4f3ef] block font-sans text-sm">Harper’s Bazaar</span>
                  <span className="text-[11px] text-[#6d6e73]">Selected Monograph 2025</span>
                </div>
                <div className="border-l border-[#2c2e35] pl-3 py-1">
                  <span className="text-[#f4f3ef] block font-sans text-sm">Sony Alpha Creator</span>
                  <span className="text-[11px] text-[#6d6e73]">Documentary Shortlist 2024</span>
                </div>
                <div className="border-l border-[#2c2e35] pl-3 py-1">
                  <span className="text-[#f4f3ef] block font-sans text-sm">Vogue Weddings Asia</span>
                  <span className="text-[11px] text-[#6d6e73]">Featured Celebration 2026</span>
                </div>
                <div className="border-l border-[#2c2e35] pl-3 py-1">
                  <span className="text-[#f4f3ef] block font-sans text-sm">Jakarta Art Monograph</span>
                  <span className="text-[11px] text-[#6d6e73]">Permanent Print Archive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

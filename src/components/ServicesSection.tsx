import React, { useState } from 'react';
import { ArrowUpRight, Plus, Minus, Check } from 'lucide-react';
import { ServiceItem } from '../types';
import { PhotoArtwork } from './PhotoArtwork';

interface ServicesSectionProps {
  services: ServiceItem[];
  currency: 'IDR' | 'USD';
  onBookService: (serviceId: string) => void;
  onExploreServiceDetails: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  currency,
  onBookService,
  onExploreServiceDetails,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>('wedding');
  const [hoveredPhotoKey, setHoveredPhotoKey] = useState<string>('service-wedding');

  return (
    <section id="services" className="py-24 sm:py-36 bg-[#0b0c0e] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1f2127]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-4">
              <span className="font-mono text-[11px] text-[#c9b097]">03</span>
              <span>/</span>
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.035em] text-[#f4f3ef] text-balance">
              Photography for{' '}
              <span className="font-serif italic font-normal text-[#c9b097]">
                every kind
              </span>{' '}
              of story.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#8e9096] leading-relaxed font-light">
            Every session is treated as a bespoke monograph. We tailor coverage
            hours, color grading profiles, and physical heirlooms to your exact
            cadence.
          </p>
        </div>

        {/* Two-Column Editorial Layout: Left interactive list, Right dynamic preview artwork on desktop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Service List */}
          <div className="lg:col-span-7 divide-y divide-[#1f2127] border-y border-[#1f2127]">
            {services.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  className="py-6 sm:py-8 transition-colors group"
                  onMouseEnter={() => setHoveredPhotoKey(service.photoKey)}
                >
                  {/* Top Bar for Service Row */}
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-mono text-xs sm:text-sm text-[#73757c] group-hover:text-[#c9b097] transition-colors">
                        ({service.number})
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#f4f3ef] group-hover:text-[#c9b097] transition-colors">
                        {service.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-block text-xs font-mono text-[#82848b]">
                        {currency === 'IDR'
                          ? `From ${service.investmentFromIdr}`
                          : `From ${service.investmentFromUsd}`}
                      </span>

                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center border border-[#2b2d34] group-hover:border-[#c9b097] text-[#9a9a95] group-hover:text-[#f4f3ef] transition-colors"
                        aria-label={isExpanded ? 'Collapse service' : 'Expand service'}
                      >
                        {isExpanded ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Editorial Drawer */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-[#1a1b20] space-y-6 animate-in fade-in duration-200">
                      <p className="text-sm sm:text-base text-[#b0b1b6] font-light leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#8a8c92] pt-2">
                        <div className="bg-[#121316] p-3.5 border border-[#1e2026]">
                          <span className="text-[#65666b] uppercase block text-[10px] tracking-widest">
                            Session Duration
                          </span>
                          <span className="text-[#f4f3ef] text-sm mt-0.5 block font-sans">
                            {service.duration}
                          </span>
                        </div>
                        <div className="bg-[#121316] p-3.5 border border-[#1e2026]">
                          <span className="text-[#65666b] uppercase block text-[10px] tracking-widest">
                            Investment Range
                          </span>
                          <span className="text-[#c9b097] text-sm mt-0.5 block font-sans font-medium">
                            {currency === 'IDR'
                              ? service.investmentFromIdr
                              : service.investmentFromUsd}
                          </span>
                        </div>
                      </div>

                      {/* Deliverables List */}
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#72747a] block mb-3 font-mono">
                          What is Included
                        </span>
                        <ul className="space-y-2 text-xs sm:text-sm text-[#b8b9be]">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <Check className="w-3.5 h-3.5 text-[#c9b097] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => onBookService(service.id)}
                          type="button"
                          className="px-5 py-2.5 bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097] text-xs uppercase tracking-wider font-semibold transition-colors"
                        >
                          Book {service.name}
                        </button>
                        <button
                          onClick={() => onExploreServiceDetails(service)}
                          type="button"
                          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#8e9096] hover:text-[#f4f3ef] transition-colors"
                        >
                          <span>Full Scope & Timeline</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Photo Preview (Sticky on Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="border border-[#22242b] p-2 bg-[#101114]">
              <PhotoArtwork
                photoKey={hoveredPhotoKey}
                aspect="aspect-[4/5]"
                alt="Service preview"
              />
              <div className="p-4 flex items-center justify-between text-xs text-[#73757c] font-mono uppercase tracking-wider">
                <span>Atelier Vera Archive</span>
                <span>Preview Viewfinder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

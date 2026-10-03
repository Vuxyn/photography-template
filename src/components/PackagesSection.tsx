import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { PackageTier } from '../types';

interface PackagesSectionProps {
  packages: PackageTier[];
  currency: 'IDR' | 'USD';
  onSelectPackage: (tierId: 'essential' | 'signature' | 'bespoke') => void;
  onToggleCurrency: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  packages,
  currency,
  onSelectPackage,
  onToggleCurrency,
}) => {
  return (
    <section id="packages" className="py-24 sm:py-36 bg-[#0b0c0e] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1f2127]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-4">
              <span className="font-mono text-[11px] text-[#c9b097]">05</span>
              <span>/</span>
              <span>Investment & Packages</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.035em] text-[#f4f3ef]">
              Transparent curation.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-[#72747a] font-mono">Currency:</span>
            <button
              onClick={onToggleCurrency}
              type="button"
              className="text-xs font-mono tracking-widest px-3 py-1.5 border border-[#2b2d34] hover:border-[#c9b097] text-[#f4f3ef] transition-colors"
            >
              {currency === 'IDR' ? 'IDR (Indonesian Rupiah)' : 'USD (US Dollar)'}
            </button>
          </div>
        </div>

        {/* Editorial Packages Grid (Refined, Fine Hairline Borders, Anti-SaaS) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const isHighlighted = pkg.highlight;

            return (
              <div
                key={pkg.id}
                className={`p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#131418] border-2 border-[#c9b097]/60'
                    : 'bg-[#0e0f12] border border-[#22242a] hover:border-[#383b44]'
                }`}
              >
                <div>
                  {/* Top Label */}
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#787a80] mb-4">
                    <span>{pkg.name}</span>
                    {isHighlighted && (
                      <span className="text-[#c9b097] font-semibold tracking-wider">
                        Most Requested
                      </span>
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div className="mt-2">
                    <span className="text-xs text-[#8e9096] uppercase tracking-wider block font-mono">
                      Starting from
                    </span>
                    <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f3ef] mt-1">
                      {currency === 'IDR' ? pkg.priceIdr : pkg.priceUsd}
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#92949c] font-light leading-relaxed">
                    {pkg.notes}
                  </p>

                  {/* Core Metrics */}
                  <div className="mt-8 pt-6 border-t border-[#1f2127] space-y-2 text-xs font-mono text-[#8a8c92]">
                    <div className="flex justify-between py-1 border-b border-[#18191f]">
                      <span className="text-[#65666b]">Duration</span>
                      <span className="text-[#d8d9de]">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#18191f]">
                      <span className="text-[#65666b]">Photographers</span>
                      <span className="text-[#d8d9de]">{pkg.team}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#65666b]">Curated Selects</span>
                      <span className="text-[#d8d9de]">{pkg.photos}</span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mt-8">
                    <span className="text-[11px] uppercase tracking-widest text-[#72747a] block mb-3 font-mono">
                      Deliverables
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#b2b4ba]">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#c9b097] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 pt-6 border-t border-[#1f2127]">
                  <button
                    onClick={() => onSelectPackage(pkg.id)}
                    type="button"
                    className={`w-full py-3.5 text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center justify-center gap-2 ${
                      isHighlighted
                        ? 'bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097]'
                        : 'border border-[#32343c] text-[#f4f3ef] hover:border-[#f4f3ef]'
                    }`}
                  >
                    <span>
                      {pkg.id === 'bespoke'
                        ? 'Discuss Your Session'
                        : `Select ${pkg.name}`}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Advisory Note */}
        <div className="mt-12 p-6 bg-[#121316] border border-[#1e2026] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-[#8a8c92]">
          <p className="max-w-2xl font-light">
            All collections include full resolution master images, private
            cloud hosting, and full personal printing reproduction rights. We do
            not watermark your memories.
          </p>
          <span className="text-[#c9b097] uppercase tracking-wider shrink-0">
            No Hidden Fees · Clear Terms
          </span>
        </div>
      </div>
    </section>
  );
};

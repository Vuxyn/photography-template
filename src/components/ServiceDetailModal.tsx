import React from 'react';
import { X, Check, ArrowRight, Clock, Award } from 'lucide-react';
import { ServiceItem } from '../types';
import { PhotoArtwork } from './PhotoArtwork';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
  currency: 'IDR' | 'USD';
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
  currency,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0f1014] border border-[#262832] text-[#f4f3ef] shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 text-[#8b8c94] hover:text-[#f4f3ef] border border-[#22242b] hover:border-[#c9b097] transition-colors"
          aria-label="Close details"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pr-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-[#898b92] mb-2">
            <span className="text-[#c9b097]">Discipline ({service.number})</span>
            <span>·</span>
            <span>Atelier Vera</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f4f3ef]">
            {service.name}
          </h3>
          <p className="mt-2 text-base text-[#c9b097] font-serif italic">
            "{service.tagline}"
          </p>
        </div>

        {/* Visual Header */}
        <div className="mt-6 border border-[#22242b] overflow-hidden">
          <PhotoArtwork
            photoKey={service.photoKey}
            aspect="aspect-[21/9]"
            alt={service.name}
          />
        </div>

        {/* Overview */}
        <div className="mt-6 space-y-4 text-sm sm:text-base text-[#adadb4] font-light leading-relaxed">
          <p>{service.description}</p>
          <p className="text-xs sm:text-sm text-[#84868e] bg-[#14151a] p-4 border border-[#22242c]">
            <strong className="text-[#f4f3ef] font-medium block mb-1">Ideal Client Narrative:</strong>
            {service.idealFor}
          </p>
        </div>

        {/* Scope Matrix */}
        <div className="mt-8 pt-6 border-t border-[#1f2127]">
          <h4 className="text-xs uppercase tracking-widest font-mono text-[#76777e] mb-4">
            Deliverable Suite & Archive
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-[#c0c1c8]">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#c9b097] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Actions */}
        <div className="mt-10 pt-6 border-t border-[#1f2127] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono">
            <span className="text-[#64656c] uppercase block text-[10px]">Indicative Investment</span>
            <span className="text-xl font-bold text-[#f4f3ef]">
              {currency === 'IDR' ? service.investmentFromIdr : service.investmentFromUsd}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBook(service.id);
              }}
              type="button"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Book {service.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

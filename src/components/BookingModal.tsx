import React, { useState } from 'react';
import { X, Check, Calendar, MapPin, Mail, Phone, User, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES, PACKAGES, STUDIO_INFO } from '../data/studioData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialPackageTier?: 'essential' | 'signature' | 'bespoke';
  currency: 'IDR' | 'USD';
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'wedding',
  initialPackageTier = 'signature',
  currency,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId,
    packageTier: initialPackageTier,
    fullName: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    notes: '',
    currency: currency,
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];
  const selectedPackage = PACKAGES.find((p) => p.id === formData.packageTier) || PACKAGES[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `AV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Atelier Vera,\nI have submitted a booking inquiry (Ref: ${bookingRef || 'NEW'}).\n\n` +
        `• Name: ${formData.fullName}\n` +
        `• Service: ${selectedService.name}\n` +
        `• Package: ${selectedPackage.name}\n` +
        `• Target Date: ${formData.date || 'TBD'}\n` +
        `• Location: ${formData.location || 'Jakarta/Bali'}\n` +
        `• Notes: ${formData.notes || 'None'}\n\n` +
        `Looking forward to confirming our date.`
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0f1014] border border-[#262832] text-[#f4f3ef] shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 p-2 text-[#8b8c94] hover:text-[#f4f3ef] border border-[#22242b] hover:border-[#c9b097] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="pr-10">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#c9b097] block mb-2">
                Session Reservation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f3ef]">
                Commission your story.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#8c8e96] font-light leading-relaxed">
                Complete this brief inquiry to reserve your date. We will verify
                our calendar and respond with full itinerary details within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Step 1: Choose Service */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-mono text-[#8b8c92] mb-2.5">
                  01. Photography Discipline
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceId: s.id })}
                      className={`p-3 text-left border transition-all text-xs ${
                        formData.serviceId === s.id
                          ? 'border-[#c9b097] bg-[#1a1b22] text-[#f4f3ef] font-semibold'
                          : 'border-[#22242c] bg-[#121317] text-[#86888e] hover:border-[#33353e]'
                      }`}
                    >
                      <span className="block font-mono text-[10px] text-[#6d6e75]">
                        {s.number}
                      </span>
                      <span className="mt-0.5 block truncate">{s.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Package Tier */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-xs uppercase tracking-widest font-mono text-[#8b8c92]">
                    02. Package Tier
                  </label>
                  <span className="text-[11px] font-mono text-[#c9b097]">
                    Est: {currency === 'IDR' ? selectedPackage.priceIdr : selectedPackage.priceUsd}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, packageTier: pkg.id })}
                      className={`p-3 text-left border transition-all text-xs ${
                        formData.packageTier === pkg.id
                          ? 'border-[#c9b097] bg-[#1a1b22] text-[#f4f3ef] font-semibold'
                          : 'border-[#22242c] bg-[#121317] text-[#86888e] hover:border-[#33353e]'
                      }`}
                    >
                      <span className="block font-bold">{pkg.name}</span>
                      <span className="text-[10px] font-mono text-[#787a82] block mt-0.5 truncate">
                        {pkg.duration}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-mono text-[#8b8c92] mb-2">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#121317] border border-[#22242c] text-xs px-3.5 py-3 text-[#f4f3ef] focus:outline-none focus:border-[#c9b097]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-mono text-[#8b8c92] mb-2">
                    Location / Venue
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Bali, Jakarta, Como..."
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#121317] border border-[#22242c] text-xs px-3.5 py-3 text-[#f4f3ef] placeholder-[#4e5058] focus:outline-none focus:border-[#c9b097]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="space-y-4">
                <label className="block text-xs uppercase tracking-widest font-mono text-[#8b8c92]">
                  03. Client Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#121317] border border-[#22242c] text-xs px-3.5 py-3 text-[#f4f3ef] placeholder-[#4e5058] focus:outline-none focus:border-[#c9b097]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#121317] border border-[#22242c] text-xs px-3.5 py-3 text-[#f4f3ef] placeholder-[#4e5058] focus:outline-none focus:border-[#c9b097]"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="WhatsApp / Phone Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#121317] border border-[#22242c] text-xs px-3.5 py-3 text-[#f4f3ef] placeholder-[#4e5058] focus:outline-none focus:border-[#c9b097]"
                />
                <textarea
                  rows={3}
                  placeholder="Tell us about the vision, guest count, or special aesthetic intentions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#121317] border border-[#22242c] text-xs px-3.5 py-3 text-[#f4f3ef] placeholder-[#4e5058] focus:outline-none focus:border-[#c9b097]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Session Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="mt-3 text-[11px] font-mono text-center text-[#676970]">
                  No payment required today · 30% retainer upon date confirmation
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Live Confirmation Screen */
          <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto bg-[#c9b097]/20 border border-[#c9b097] flex items-center justify-center">
              <Check className="w-7 h-7 text-[#c9b097]" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#787a82] block mb-1">
                Booking Reference: {bookingRef}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f3ef]">
                Thank you, {formData.fullName}.
              </h3>
              <p className="mt-2 text-sm text-[#9b9ca4] max-w-md mx-auto font-light leading-relaxed">
                Your inquiry for <strong className="text-[#f4f3ef] font-medium">{selectedService.name} ({selectedPackage.name})</strong> has been received by our lead director.
              </p>
            </div>

            <div className="p-4 bg-[#14151b] border border-[#242630] max-w-md mx-auto text-left text-xs font-mono text-[#8a8c94] space-y-1.5">
              <div><span className="text-[#64666d]">Date:</span> <span className="text-[#dcdde2]">{formData.date || 'To be determined'}</span></div>
              <div><span className="text-[#64666d]">Location:</span> <span className="text-[#dcdde2]">{formData.location}</span></div>
              <div><span className="text-[#64666d]">Rate Guide:</span> <span className="text-[#c9b097]">{currency === 'IDR' ? selectedPackage.priceIdr : selectedPackage.priceUsd}</span></div>
              <div><span className="text-[#64666d]">Primary Contact:</span> <span className="text-[#dcdde2]">{formData.email} / {formData.phone}</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#30323c] text-xs uppercase tracking-wider text-[#d8d9df] hover:border-white transition-colors"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

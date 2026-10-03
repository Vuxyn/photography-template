import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, packageId?: 'essential' | 'signature' | 'bespoke') => void;
  currency: 'IDR' | 'USD';
  onToggleCurrency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  currency,
  onToggleCurrency,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Studio', href: '#studio' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0c0e]/90 backdrop-blur-md border-b border-[#22242a] py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-[-0.04em] uppercase text-[#f4f3ef] hover:text-[#c9b097] transition-colors"
        >
          Atelier Vera
        </a>

        {/* Zone 2: 4-6 Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.14em] font-medium text-[#9a9a95]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#f4f3ef] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c9b097] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Currency Toggle */}
          <button
            onClick={onToggleCurrency}
            type="button"
            className="hidden sm:inline-flex items-center text-[11px] font-mono tracking-widest px-2.5 py-1 text-[#8f8f8b] hover:text-[#f4f3ef] border border-[#2b2d34] hover:border-[#40434c] transition-colors rounded-none"
            title="Switch Currency Display"
          >
            {currency === 'IDR' ? 'IDR (Rp)' : 'USD ($)'}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenBooking()}
            type="button"
            className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] uppercase tracking-wider font-semibold text-[#0b0c0e] bg-[#f4f3ef] hover:bg-[#c9b097] transition-all duration-200"
          >
            <span>Book a Session</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-[#f4f3ef] hover:text-[#c9b097] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#0e0f12] border-b border-[#22242a] px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-5 text-sm uppercase tracking-widest text-[#9a9a95]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#f4f3ef] hover:text-[#c9b097] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#22242a] flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#727376]">Currency</span>
            <button
              onClick={onToggleCurrency}
              className="text-xs font-mono px-3 py-1 border border-[#2b2d34] text-[#f4f3ef]"
            >
              {currency}
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 text-center text-xs uppercase tracking-widest font-semibold bg-[#f4f3ef] text-[#0b0c0e] hover:bg-[#c9b097] transition-colors"
          >
            Book a Session
          </button>
        </div>
      )}
    </header>
  );
};

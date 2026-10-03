import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO, SERVICES } from '../data/studioData';

export const Footer: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        };
        setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
      } catch {
        try {
          setTime(new Date().toLocaleTimeString());
        } catch {
          setTime('14:39:20');
        }
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] text-[#86878e] pt-20 pb-12 border-t border-[#16171d]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#181921]">
          {/* Brand & Statement */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight uppercase text-[#f4f3ef] hover:text-[#c9b097] transition-colors"
            >
              {STUDIO_INFO.name}
            </a>
            <p className="text-sm text-[#8c8d94] leading-relaxed max-w-sm font-light">
              {STUDIO_INFO.description}
            </p>
            <div className="pt-2 text-xs font-mono text-[#67686e]">
              <span>Jakarta Studio (WIB UTC+7)</span>
              <span className="mx-2">·</span>
              <span className="text-[#c9b097]">{time || '14:39:20'}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#f4f3ef] font-mono block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs uppercase tracking-wider">
              <li>
                <a href="#work" className="hover:text-[#f4f3ef] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f4f3ef] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#f4f3ef] transition-colors">
                  Investment
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-[#f4f3ef] transition-colors">
                  Studio & Team
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#f4f3ef] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Directory */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#f4f3ef] font-mono block">
              Disciplines
            </span>
            <ul className="space-y-2 text-xs text-[#8c8d94]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-[#f4f3ef] transition-colors"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Locations & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#f4f3ef] font-mono block">
              Atelier Locations
            </span>
            <div className="text-xs space-y-1 text-[#8c8d94] leading-relaxed">
              <p className="text-[#d8d9de] font-medium">Jakarta Atelier</p>
              <p>{STUDIO_INFO.address}</p>
            </div>
            <div className="text-xs space-y-1 text-[#8c8d94] leading-relaxed">
              <p className="text-[#d8d9de] font-medium">Bali Residency</p>
              <p>{STUDIO_INFO.baliAddress}</p>
            </div>
            <div className="pt-2 flex flex-col gap-1.5 text-xs font-mono">
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="text-[#c9b097] hover:underline"
              >
                {STUDIO_INFO.email}
              </a>
              <span className="text-[#6d6e75]">{STUDIO_INFO.whatsapp}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5b5c62]">
          <div className="flex items-center gap-6">
            <span>© 2026 {STUDIO_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4f3ef] inline-flex items-center gap-1 transition-colors"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4f3ef] inline-flex items-center gap-1 transition-colors"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 hover:text-[#f4f3ef] transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

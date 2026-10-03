/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { FeaturedWork } from './components/FeaturedWork';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedService } from './components/FeaturedService';
import { PackagesSection } from './components/PackagesSection';
import { StudioAbout } from './components/StudioAbout';
import { TestimonialSection } from './components/TestimonialSection';
import { InstagramGrid } from './components/InstagramGrid';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PROJECTS, SERVICES, PACKAGES, TESTIMONIALS, FAQS } from './data/studioData';
import { Project, ServiceItem } from './types';

export default function App() {
  // Global States
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('wedding');
  const [selectedPackageTier, setSelectedPackageTier] = useState<'essential' | 'signature' | 'bespoke'>('signature');
  
  // Monograph Lightbox State
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Service Deep Dive Modal
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'IDR' ? 'USD' : 'IDR'));
  };

  const handleOpenBooking = (
    serviceId: string = 'wedding',
    tier: 'essential' | 'signature' | 'bespoke' = 'signature'
  ) => {
    setSelectedServiceId(serviceId);
    setSelectedPackageTier(tier);
    setIsBookingOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
  };

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setActiveProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setActiveProject(PROJECTS[prevIndex]);
  };

  const handleInstagramClick = (photoKey: string, category: string, caption: string) => {
    // Generate a transient project object for lightbox inspection
    const igProject: Project = {
      id: `ig-${photoKey}`,
      title: `${category} Monograph`,
      subtitle: 'Journal Entry',
      category: 'all',
      categoryLabel: category,
      year: '2026',
      location: 'Studio Archive',
      aspectRatio: 'landscape',
      gridSpan: 'col-span-12',
      photoKey,
      exif: {
        camera: 'Leica M11 / Hasselblad X2D',
        lens: '50mm Prime ASPH',
        focalLength: '50mm',
        aperture: 'f/1.4',
        shutterSpeed: '1/500s',
        iso: '100',
      },
      story: caption,
      client: 'Atelier Archive',
    };
    setActiveProject(igProject);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f2f2ef] selection:bg-[#c9b097] selection:text-black">
      {/* 01 — NAVIGATION (Top Bar Contract) */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        currency={currency}
        onToggleCurrency={toggleCurrency}
      />

      <main>
        {/* 02 — HERO */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreWork={() => {
            const el = document.getElementById('work');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 03 — INTRODUCTION */}
        <Introduction
          onLearnMore={() => {
            const el = document.getElementById('studio');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 04 — FEATURED WORK */}
        <FeaturedWork
          projects={PROJECTS}
          onSelectProject={handleSelectProject}
        />

        {/* 05 — SERVICES */}
        <ServicesSection
          services={SERVICES}
          currency={currency}
          onBookService={(serviceId) => handleOpenBooking(serviceId)}
          onExploreServiceDetails={(service) => setActiveServiceDetail(service)}
        />

        {/* 06 — FEATURED SERVICE (Cinematic Spotlight) */}
        <FeaturedService
          onBookWedding={() => handleOpenBooking('wedding', 'bespoke')}
          onExploreWeddingStories={() => {
            const el = document.getElementById('work');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 07 — PACKAGES */}
        <PackagesSection
          packages={PACKAGES}
          currency={currency}
          onSelectPackage={(tierId) => handleOpenBooking('wedding', tierId)}
          onToggleCurrency={toggleCurrency}
        />

        {/* 08 — STUDIO / ABOUT */}
        <StudioAbout />

        {/* 09 — TESTIMONIALS */}
        <TestimonialSection testimonials={TESTIMONIALS} />

        {/* 10 — INSTAGRAM / LATEST WORK */}
        <InstagramGrid onSelectPhoto={handleInstagramClick} />

        {/* 11 — FAQ */}
        <FaqSection
          faqs={FAQS}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 12 — FINAL CTA */}
        <FinalCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 13 — FOOTER */}
      <Footer />

      {/* INTERACTIVE MODALS & DRAWERS */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
        initialPackageTier={selectedPackageTier}
        currency={currency}
      />

      <LightboxModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
      />

      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onBook={(serviceId) => handleOpenBooking(serviceId)}
        currency={currency}
      />
    </div>
  );
}

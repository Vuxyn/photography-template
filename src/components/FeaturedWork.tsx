import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { Project, Category } from '../types';
import { PhotoArtwork } from './PhotoArtwork';

interface FeaturedWorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { label: string; value: Category }[] = [
    { label: 'All Stories', value: 'all' },
    { label: 'Weddings', value: 'wedding' },
    { label: 'Pre-Wedding & Couples', value: 'pre-wedding' },
    { label: 'Portraits', value: 'portrait' },
    { label: 'Graduations', value: 'graduation' },
    { label: 'Commercial & Brand', value: 'commercial' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#0b0c0e] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1f2127]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-4">
              <span className="font-mono text-[11px] text-[#c9b097]">02</span>
              <span>/</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.035em] text-[#f4f3ef]">
              Recent stories.
            </h2>
          </div>

          {/* Interactive Category Filter - Clean Segmented Buttons */}
          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                type="button"
                className={`px-3.5 py-1.5 transition-all text-xs tracking-wider uppercase ${
                  activeCategory === cat.value
                    ? 'bg-[#f4f3ef] text-[#0b0c0e] font-semibold'
                    : 'text-[#8f9095] hover:text-[#f4f3ef] border border-[#22242a] hover:border-[#383a42]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Gallery Composition */}
        <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => {
            const isWide = project.aspectRatio === 'wide' || project.aspectRatio === 'landscape';
            const aspectClass =
              project.aspectRatio === 'wide'
                ? 'aspect-[16/10] sm:aspect-[16/9]'
                : project.aspectRatio === 'portrait'
                ? 'aspect-[3/4]'
                : 'aspect-[4/3]';

            return (
              <div
                key={project.id}
                className={`${project.gridSpan} group cursor-pointer`}
                onClick={() => onSelectProject(project)}
              >
                {/* Visual Image Container with subtle border */}
                <div className="relative overflow-hidden border border-[#22242b] bg-[#121316]">
                  <PhotoArtwork
                    photoKey={project.photoKey}
                    aspect={aspectClass}
                    alt={project.title}
                  />

                  {/* Hover Inspection Cue */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-widest font-mono">
                      <Maximize2 className="w-3.5 h-3.5 text-[#c9b097]" />
                      <span>View Monograph & EXIF</span>
                    </div>
                  </div>

                  {/* Minimal Year & Category Tag */}
                  <div className="absolute top-4 right-4 text-[11px] font-mono uppercase tracking-wider text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1">
                    {project.year}
                  </div>
                </div>

                {/* Editorial Metadata Block (Zero-Pills: Clean unboxed typography) */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f3ef] group-hover:text-[#c9b097] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#8a8c92] font-light">
                      {project.subtitle}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-[#717379] font-mono">
                      <span>{project.categoryLabel}</span>
                      <span>·</span>
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#25272e] text-[#909298] group-hover:border-[#c9b097] group-hover:text-[#f4f3ef] transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-16 pt-8 border-t border-[#1f2127] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#808288] font-mono uppercase tracking-wider">
          <span>Displaying {filteredProjects.length} Curated Archives</span>
          <span>Captured in Natural Light & 35mm Medium Format</span>
        </div>
      </div>
    </section>
  );
};

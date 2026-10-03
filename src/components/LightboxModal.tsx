import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sliders } from 'lucide-react';
import { Project } from '../types';
import { PhotoArtwork } from './PhotoArtwork';

interface LightboxModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#060709]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#1c1e24] pb-4">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-[#8b8c94]">
          <span className="text-[#c9b097]">{project.categoryLabel}</span>
          <span>·</span>
          <span>{project.location}</span>
          <span>·</span>
          <span>{project.year}</span>
        </div>

        <button
          onClick={onClose}
          type="button"
          className="p-2 border border-[#262832] text-[#8e9098] hover:text-[#f4f3ef] hover:border-[#c9b097] transition-colors"
          aria-label="Close monograph viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Center Image & Nav */}
      <div className="relative flex-1 flex items-center justify-center my-6 max-h-[72vh]">
        <button
          onClick={onPrev}
          type="button"
          className="absolute left-2 sm:left-4 z-10 p-3 bg-black/60 border border-[#2b2d36] text-[#8c8e96] hover:text-white transition-colors"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="w-full max-w-4xl max-h-[68vh] flex items-center justify-center">
          <PhotoArtwork
            photoKey={project.photoKey}
            aspect="aspect-[16/10]"
            alt={project.title}
            className="w-full h-full max-h-[65vh] border border-[#22242b]"
          />
        </div>

        <button
          onClick={onNext}
          type="button"
          className="absolute right-2 sm:right-4 z-10 p-3 bg-black/60 border border-[#2b2d36] text-[#8c8e96] hover:text-white transition-colors"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Monograph & Technical EXIF Panel */}
      <div className="max-w-5xl mx-auto w-full border-t border-[#1c1e24] pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Story */}
        <div className="md:col-span-7">
          <h3 className="text-xl font-bold text-[#f4f3ef]">{project.title}</h3>
          <p className="mt-1 text-xs text-[#9b9ca4] font-light leading-relaxed">
            {project.story}
          </p>
        </div>

        {/* Technical EXIF */}
        <div className="md:col-span-5 bg-[#0f1014] border border-[#20222a] p-3 text-xs font-mono text-[#8a8c92] grid grid-cols-3 gap-2">
          <div>
            <span className="text-[#5f6068] block text-[10px]">CAMERA</span>
            <span className="text-[#dfdfe5] truncate block">{project.exif.camera}</span>
          </div>
          <div>
            <span className="text-[#5f6068] block text-[10px]">LENS</span>
            <span className="text-[#dfdfe5] truncate block">{project.exif.focalLength}</span>
          </div>
          <div>
            <span className="text-[#5f6068] block text-[10px]">EXPOSURE</span>
            <span className="text-[#c9b097] block">
              {project.exif.aperture} · {project.exif.shutterSpeed}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, STUDIO_INFO } from '../data/studioData';
import { PhotoArtwork } from './PhotoArtwork';

interface InstagramGridProps {
  onSelectPhoto: (photoKey: string, title: string, caption: string) => void;
}

export const InstagramGrid: React.FC<InstagramGridProps> = ({ onSelectPhoto }) => {
  return (
    <section className="py-24 sm:py-36 bg-[#0b0c0e] border-b border-[#1f2127]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Identifier */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#1f2127]">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#86878b] mb-4">
              <span className="font-mono text-[11px] text-[#c9b097]">08</span>
              <span>/</span>
              <span>Follow the Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-bold tracking-[-0.035em] text-[#f4f3ef]">
              The ongoing journal.
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#c9b097] hover:text-[#f4f3ef] transition-colors"
          >
            <span>{STUDIO_INFO.instagram}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Varied Aspect Ratio Photo Mosaic */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => onSelectPhoto(post.photoKey, post.category, post.caption)}
            >
              <div className="relative overflow-hidden border border-[#22242a] bg-[#121316]">
                <PhotoArtwork
                  photoKey={post.photoKey}
                  aspect={post.aspect}
                  alt={post.caption}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9b097]">
                    {post.category}
                  </span>
                  <p className="text-[11px] text-white/90 line-clamp-3 leading-tight font-light">
                    {post.caption}
                  </p>
                </div>
              </div>
              <div className="mt-2 text-[11px] font-mono text-[#6e7075] flex items-center justify-between">
                <span>{post.category}</span>
                <span>{post.likes} notes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

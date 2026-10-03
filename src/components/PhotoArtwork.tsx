import React from 'react';

interface PhotoArtworkProps {
  photoKey: string;
  className?: string;
  aspect?: string;
  alt?: string;
  priority?: boolean;
}

export const PhotoArtwork: React.FC<PhotoArtworkProps> = ({
  photoKey,
  className = '',
  aspect = 'aspect-[4/3]',
  alt = 'Editorial photograph',
}) => {
  // Render distinct high-aesthetic editorial photographic scenes using scalable SVG canvas
  // layered with rich cinematic film lighting, tone curves, architectural lines, and textures.
  return (
    <div
      className={`relative overflow-hidden bg-[#121316] select-none ${aspect} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* SVG Photographic Artwork */}
      <svg
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Film Grain Filter */}
          <filter id={`grain-${photoKey}`} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.5   0 0 0 0 0.5   0 0 0 0 0.5  0 0 0 0.08 0" />
            <feBlend mode="overlay" in="SourceGraphic" result="blend" />
          </filter>

          {/* Gradients */}
          <linearGradient id="dusk-sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e2229" />
            <stop offset="40%" stopColor="#3d3536" />
            <stop offset="70%" stopColor="#8c6a58" />
            <stop offset="100%" stopColor="#d4a373" />
          </linearGradient>

          <linearGradient id="warm-gold" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1c1815" />
            <stop offset="60%" stopColor="#4a3b32" />
            <stop offset="100%" stopColor="#c9a882" />
          </linearGradient>

          <linearGradient id="linen-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b2d30" />
            <stop offset="50%" stopColor="#18191c" />
            <stop offset="100%" stopColor="#0d0e10" />
          </linearGradient>

          <linearGradient id="mist-mountain" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e2124" />
            <stop offset="50%" stopColor="#30353b" />
            <stop offset="85%" stopColor="#1a1c1e" />
            <stop offset="100%" stopColor="#0c0d0f" />
          </linearGradient>

          <radialGradient id="spotlight" cx="65%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#f3e7db" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#c5a880" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </radialGradient>

          <radialGradient id="soft-glow" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#dfcfbf" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0a0a0c" stopOpacity="0.9" />
          </radialGradient>
        </defs>

        {/* Scene Switcher based on photoKey */}
        {photoKey.includes('hero') && (
          <g>
            <rect width="1200" height="900" fill="url(#dusk-sky)" />
            {/* Architectural Colonnade */}
            <path d="M 0,0 L 280,0 L 260,900 L 0,900 Z" fill="#141518" opacity="0.9" />
            <path d="M 280,0 L 320,0 L 300,900 L 260,900 Z" fill="#2d2825" opacity="0.6" />
            <path d="M 940,0 L 1200,0 L 1200,900 L 920,900 Z" fill="#141518" opacity="0.95" />
            <path d="M 900,0 L 940,0 L 920,900 L 880,900 Z" fill="#322b27" opacity="0.5" />
            <line x1="260" y1="200" x2="940" y2="200" stroke="#4a3e35" strokeWidth="2" opacity="0.4" />
            <line x1="270" y1="240" x2="930" y2="240" stroke="#3a3028" strokeWidth="1" opacity="0.3" />

            {/* Couple in Silhouette & Veil */}
            {/* Groom Silhouette */}
            <path
              d="M 520,380 C 520,340 540,320 560,320 C 580,320 600,340 600,380 L 615,500 L 635,900 L 515,900 L 530,500 Z"
              fill="#0e0f11"
            />
            {/* Bride Silhouette in Sleek Modern Dress */}
            <path
              d="M 590,390 C 590,350 610,335 625,335 C 640,335 655,350 655,390 L 675,530 C 685,650 720,850 740,900 L 575,900 C 600,820 615,620 615,530 Z"
              fill="#f0ebe4"
              opacity="0.88"
            />
            {/* Flowing Veil blown by breeze */}
            <path
              d="M 625,340 C 670,330 760,370 820,430 C 880,490 940,600 960,780 C 880,720 800,640 730,580 C 690,520 660,420 625,340 Z"
              fill="#ffffff"
              opacity="0.28"
            />
            <path
              d="M 628,345 C 690,355 770,410 840,490 C 900,560 920,680 910,750 C 840,660 780,570 710,510 Z"
              fill="#ffffff"
              opacity="0.18"
            />
            {/* Subtle Horizon Warmth and Dust particles */}
            <circle cx="680" cy="500" r="320" fill="url(#spotlight)" opacity="0.6" />
            <circle cx="580" cy="350" r="8" fill="#d4a373" opacity="0.4" />
          </g>
        )}

        {photoKey.includes('wedding-aruna') && (
          <g>
            <rect width="1200" height="900" fill="#181a1e" />
            {/* Ocean Cliffs at Sunset */}
            <path d="M 0,550 Q 400,520 700,560 T 1200,510 L 1200,900 L 0,900 Z" fill="#0b0d0e" />
            <path d="M 0,600 Q 300,570 650,620 T 1200,590 L 1200,900 L 0,900 Z" fill="#111317" />
            {/* Distant Sea Horizon */}
            <rect x="0" y="440" width="1200" height="120" fill="#252b33" opacity="0.6" />
            {/* Sky Gradient */}
            <rect x="0" y="0" width="1200" height="440" fill="url(#dusk-sky)" />
            {/* Cliff Edge Pavilion and Couple */}
            <rect x="680" y="320" width="8" height="260" fill="#1f1b19" />
            <rect x="860" y="320" width="8" height="260" fill="#1f1b19" />
            <line x1="660" y1="320" x2="880" y2="320" stroke="#2a2420" strokeWidth="6" />
            {/* Couple in embrace */}
            <ellipse cx="770" cy="420" rx="35" ry="40" fill="#0c0d0f" />
            <path d="M 740,460 L 800,460 L 820,680 L 720,680 Z" fill="#e8dfd5" opacity="0.85" />
            <path d="M 725,470 L 760,470 L 765,680 L 710,680 Z" fill="#0f1013" />
            {/* Soft wind ripple */}
            <path d="M 800,480 Q 900,520 950,620 Q 890,600 810,540 Z" fill="#ffffff" opacity="0.25" />
          </g>
        )}

        {photoKey.includes('portrait-quiet') && (
          <g>
            <rect width="1200" height="900" fill="url(#linen-light)" />
            {/* Studio Light Slicing */}
            <polygon points="200,0 650,0 850,900 150,900" fill="#323338" opacity="0.55" />
            <polygon points="320,0 540,0 720,900 360,900" fill="#46423d" opacity="0.35" />
            {/* Portrait Silhouette with Soft Skin Tone */}
            <circle cx="560" cy="380" r="140" fill="#141517" />
            <path d="M 440,500 Q 560,470 680,500 L 720,900 L 400,900 Z" fill="#181a1d" />
            {/* Chiaroscuro Face Profile highlight */}
            <path
              d="M 540,290 C 570,290 595,315 595,350 C 595,365 585,385 600,400 C 605,405 590,430 580,440 C 550,460 520,440 520,400 Z"
              fill="#cfa985"
              opacity="0.65"
            />
            <path
              d="M 570,330 C 585,340 590,360 585,375 C 575,370 565,360 560,345 Z"
              fill="#f1dfcf"
              opacity="0.8"
            />
            {/* Natural hair waves */}
            <path
              d="M 490,320 C 470,380 470,480 500,540 C 520,530 530,500 520,440 C 505,400 500,350 490,320 Z"
              fill="#090a0b"
            />
            {/* Soft Linen Texturing */}
            <line x1="100" y1="0" x2="100" y2="900" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
            <line x1="300" y1="0" x2="300" y2="900" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
            <line x1="700" y1="0" x2="700" y2="900" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
            <line x1="900" y1="0" x2="900" y2="900" stroke="#ffffff" strokeWidth="0.5" opacity="0.05" />
          </g>
        )}

        {photoKey.includes('prewedding-batur') && (
          <g>
            <rect width="1200" height="900" fill="url(#mist-mountain)" />
            {/* Volcanic Ridge Line */}
            <path d="M 0,420 L 350,260 L 600,340 L 900,180 L 1200,360 L 1200,900 L 0,900 Z" fill="#181a1d" />
            <path d="M 0,540 L 400,430 L 750,490 L 1200,410 L 1200,900 L 0,900 Z" fill="#0f1012" />
            {/* Basalt Rock Textures */}
            <polygon points="120,680 180,620 260,690 190,750" fill="#23262b" />
            <polygon points="920,720 980,640 1080,710 1020,800" fill="#202227" />
            {/* Couple on Obsidian Ridge */}
            <path d="M 520,440 L 545,440 L 555,620 L 515,620 Z" fill="#070809" />
            <circle cx="532" cy="415" r="14" fill="#070809" />
            {/* Bride in raw silk flowing dress */}
            <path d="M 555,445 L 585,445 L 630,640 L 545,640 Z" fill="#ded5c8" opacity="0.9" />
            <circle cx="570" cy="420" r="13" fill="#cfab88" />
            <path d="M 585,470 Q 660,510 710,580 Q 640,580 580,530 Z" fill="#ffffff" opacity="0.4" />
            {/* Atmospheric Mist Layer */}
            <rect x="0" y="380" width="1200" height="140" fill="#ffffff" opacity="0.08" />
            <rect x="0" y="440" width="1200" height="80" fill="#ffffff" opacity="0.06" />
          </g>
        )}

        {photoKey.includes('commercial-form') && (
          <g>
            <rect width="1200" height="900" fill="#212226" />
            {/* Brutalist Concrete Wall & Angled Sunlight */}
            <polygon points="0,0 800,0 500,900 0,900" fill="#3a3c42" />
            <polygon points="450,0 720,0 420,900 150,900" fill="#4d4f57" opacity="0.4" />
            {/* Pedestal / Travertine Block */}
            <polygon points="450,520 780,520 720,780 390,780" fill="#75675b" opacity="0.8" />
            <polygon points="780,520 860,560 800,820 720,780" fill="#52473e" />
            {/* Ceramic Stoneware Vessels */}
            {/* Vessel 1: Terracotta Tall Vase */}
            <path
              d="M 540,510 C 510,480 500,420 520,380 C 530,360 540,320 545,300 L 565,300 C 570,320 580,360 590,380 C 610,420 600,480 570,510 Z"
              fill="#9e6648"
            />
            {/* Rim highlight */}
            <ellipse cx="555" cy="300" rx="10" ry="3" fill="#cf8e6d" />
            {/* Vessel 2: Charcoal Stoneware Bowl */}
            <ellipse cx="680" cy="510" rx="55" ry="25" fill="#1b1c1e" />
            <path d="M 625,510 C 625,560 735,560 735,510 Z" fill="#141517" />
            <ellipse cx="680" cy="505" rx="50" ry="18" fill="#2a2c30" />
            {/* Dramatic Cast Shadow */}
            <path d="M 570,510 L 760,650 L 680,670 L 530,520 Z" fill="#1a1411" opacity="0.6" />
          </g>
        )}

        {photoKey.includes('couple-kala') && (
          <g>
            <rect width="1200" height="900" fill="#141517" />
            {/* Colonial Arcade Archway */}
            <path d="M 0,0 L 1200,0 L 1200,900 L 0,900 Z" fill="#181a1f" />
            <path d="M 250,900 L 250,420 C 250,220 400,120 600,120 C 800,120 950,220 950,420 L 950,900 Z" fill="#2b2622" />
            <path d="M 320,900 L 320,440 C 320,280 440,200 600,200 C 760,200 880,280 880,440 L 880,900 Z" fill="#544439" opacity="0.35" />
            {/* Street Lantern Glow */}
            <circle cx="600" cy="380" r="180" fill="url(#warm-gold)" opacity="0.4" />
            {/* Couple Walking Together */}
            <path d="M 530,540 L 565,540 L 575,760 L 520,760 Z" fill="#111215" />
            <circle cx="548" cy="505" r="16" fill="#111215" />
            <path d="M 570,550 L 610,550 L 635,760 L 565,760 Z" fill="#a8927e" opacity="0.9" />
            <circle cx="590" cy="515" r="15" fill="#caa98b" />
          </g>
        )}

        {photoKey.includes('grad-heritage') && (
          <g>
            <rect width="1200" height="900" fill="#161b17" />
            {/* Tropical Stone Garden Pillars */}
            <rect x="180" y="100" width="140" height="800" fill="#252b24" />
            <rect x="880" y="100" width="140" height="800" fill="#252b24" />
            {/* Palm Fronds silhouette */}
            <path d="M 0,0 Q 250,150 400,80 Q 280,220 180,320 Z" fill="#111710" opacity="0.7" />
            <path d="M 1200,0 Q 950,140 820,60 Q 920,240 1020,340 Z" fill="#111710" opacity="0.7" />
            {/* Graduate in Kebaya and Jasmine */}
            <path d="M 520,430 L 680,430 L 660,820 L 540,820 Z" fill="#75563b" />
            <circle cx="600" cy="360" r="32" fill="#d9b18f" />
            {/* Gold Hair Brooch */}
            <circle cx="620" cy="345" r="7" fill="#d4af37" />
            <circle cx="630" cy="355" r="5" fill="#f0db7d" />
            {/* Ancestral Batik Pattern lines */}
            <line x1="550" y1="580" x2="650" y2="580" stroke="#4a3726" strokeWidth="4" />
            <line x1="555" y1="640" x2="645" y2="640" stroke="#4a3726" strokeWidth="4" />
            <line x1="560" y1="700" x2="640" y2="700" stroke="#4a3726" strokeWidth="4" />
          </g>
        )}

        {photoKey.includes('service') && (
          <g>
            <rect width="1200" height="900" fill="url(#linen-light)" />
            <circle cx="600" cy="450" r="400" fill="url(#soft-glow)" opacity="0.5" />
            {/* Editorial geometric framed composition */}
            <rect x="250" y="180" width="700" height="540" fill="none" stroke="#453e39" strokeWidth="1.5" opacity="0.6" />
            <line x1="220" y1="450" x2="980" y2="450" stroke="#453e39" strokeWidth="0.75" opacity="0.3" />
            <circle cx="600" cy="420" r="110" fill="#24211e" />
            <path d="M 480,580 L 720,580 L 750,780 L 450,780 Z" fill="#181715" />
            <text x="600" y="430" textAnchor="middle" fill="#c9b097" fontSize="24" fontFamily="'Instrument Serif', serif" fontStyle="italic" letterSpacing="2">
              ATELIER VERA
            </text>
          </g>
        )}

        {photoKey.includes('about') && (
          <g>
            <rect width="1200" height="900" fill="#191a1d" />
            {/* Atelier Window & Natural Daylight */}
            <rect x="150" y="80" width="380" height="740" fill="#383c44" opacity="0.5" />
            <line x1="340" y1="80" x2="340" y2="820" stroke="#1f2227" strokeWidth="6" />
            <line x1="150" y1="450" x2="530" y2="450" stroke="#1f2227" strokeWidth="6" />
            {/* Photographer at work */}
            <circle cx="720" cy="360" r="70" fill="#d9b698" />
            <path d="M 620,460 L 820,460 L 860,900 L 580,900 Z" fill="#0d0e10" />
            {/* Medium Format Camera in hand */}
            <rect x="670" y="380" width="90" height="70" rx="6" fill="#2b2d31" />
            <circle cx="715" cy="415" r="24" fill="#141517" stroke="#b08b68" strokeWidth="2" />
          </g>
        )}

        {photoKey.includes('featured') && (
          <g>
            <rect width="1200" height="900" fill="url(#warm-gold)" />
            <rect width="1200" height="900" fill="url(#dusk-sky)" opacity="0.6" />
            {/* Hanging String Festoon Lights */}
            <path d="M 0,180 Q 300,260 600,190 Q 900,280 1200,200" fill="none" stroke="#2a231f" strokeWidth="2" />
            <circle cx="200" cy="235" r="6" fill="#fcecd2" />
            <circle cx="400" cy="245" r="6" fill="#fcecd2" />
            <circle cx="600" cy="190" r="6" fill="#fcecd2" />
            <circle cx="800" cy="255" r="6" fill="#fcecd2" />
            <circle cx="1000" cy="240" r="6" fill="#fcecd2" />
            {/* Emotive Couple Laughing Outdoors */}
            <path d="M 520,380 C 520,330 550,300 580,300 C 610,300 640,330 640,380 L 660,540 L 680,900 L 480,900 L 500,540 Z" fill="#0c0d0f" />
            <path d="M 590,390 C 590,340 620,310 650,310 C 680,310 710,340 710,390 L 750,560 L 780,900 L 560,900 L 620,560 Z" fill="#f2ede4" opacity="0.85" />
          </g>
        )}

        {photoKey.includes('ig') && (
          <g>
            <rect width="1200" height="900" fill="url(#linen-light)" />
            <circle cx="600" cy="450" r="280" fill="url(#spotlight)" opacity="0.4" />
            <line x1="300" y1="450" x2="900" y2="450" stroke="#333" strokeWidth="0.5" />
            <line x1="600" y1="200" x2="600" y2="700" stroke="#333" strokeWidth="0.5" />
            <circle cx="600" cy="450" r="8" fill="#c9b097" opacity="0.5" />
          </g>
        )}

        {/* Global Photographic Film Grain Overlay */}
        <rect width="1200" height="900" fill="#ffffff" opacity="0.03" filter={`url(#grain-${photoKey})`} />

        {/* Subtle Vignette */}
        <radialGradient id={`vignette-${photoKey}`} cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
        </radialGradient>
        <rect width="1200" height="900" fill={`url(#vignette-${photoKey})`} pointerEvents="none" />
      </svg>

      {/* Editorial Watermark / Technical Stamp */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 pointer-events-none opacity-40 text-[10px] uppercase font-mono tracking-widest text-neutral-300">
        <span>35mm</span>
        <span>·</span>
        <span>ATELIER VERA</span>
      </div>
    </div>
  );
};

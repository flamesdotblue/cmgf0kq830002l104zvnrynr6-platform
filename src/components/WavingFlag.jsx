import React from 'react';

export default function WavingFlag({ className = '' }) {
  const spokes = Array.from({ length: 24 }, (_, i) => i);
  const cx = 150;
  const cy = 100;
  const rOuter = 30;
  const rInner = 4;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-auto rounded-lg shadow-2xl"
        style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.45))' }}
      >
        <defs>
          <filter id="wavy" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="3">
              <animate attributeName="baseFrequency" dur="10s" values="0.012 0.02;0.02 0.012;0.012 0.02" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="9" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <g filter="url(#wavy)">
          <rect x="0" y="0" width="300" height="200" fill="#ffffff" rx="12" />
          <rect x="0" y="0" width="300" height="66.6667" fill="#FF9933" rx="12" />
          <rect x="0" y="133.3333" width="300" height="66.6667" fill="#138808" rx="12" />

          {/* Ashoka Chakra */}
          <circle cx={cx} cy={cy} r={rOuter} fill="none" stroke="#000080" strokeWidth="3" />
          <circle cx={cx} cy={cy} r={rInner} fill="#000080" />
          {spokes.map((i) => {
            const angle = (i * 15 * Math.PI) / 180; // 360 / 24 = 15 deg
            const x1 = cx + rInner * Math.cos(angle);
            const y1 = cy + rInner * Math.sin(angle);
            const x2 = cx + (rOuter - 2) * Math.cos(angle);
            const y2 = cy + (rOuter - 2) * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#000080"
                strokeWidth="2"
                strokeLinecap="round"
              />
            );
          })}

          {/* Subtle cloth sheen */}
          <rect x="0" y="0" width="300" height="200" fill="url(#gloss)" rx="12" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

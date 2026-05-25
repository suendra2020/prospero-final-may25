import React from 'react';

interface SchoolLogoProps {
  className?: string;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({ className = 'w-12 h-12' }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`${className} select-none shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Crisp White Outer Circle Background */}
      <circle cx="250" cy="250" r="242" fill="#ffffff" />

      {/* Primary Concentric Rings (Navy Blue) */}
      <circle cx="250" cy="250" r="236" stroke="#0f3175" strokeWidth="5" />
      <circle cx="250" cy="250" r="182" stroke="#0f3175" strokeWidth="5" />
      <circle cx="250" cy="250" r="138" stroke="#0f3175" strokeWidth="5" />
      <circle cx="250" cy="250" r="100" stroke="#0f3175" strokeWidth="5" />

      {/* Center Solid Hub */}
      <circle cx="250" cy="250" r="48" fill="#ffffff" stroke="#0f3175" strokeWidth="10" />
      <circle cx="250" cy="250" r="18" fill="#ffffff" stroke="#0f3175" strokeWidth="6" />

      {/* SVG Text Curve Path Definitions */}
      <defs>
        {/* Outer Top Path (Clockwise Arc for English Medium School) */}
        <path id="outer-top-path" d="M 52 250 A 198 198 0 0 1 448 250" fill="none" />
        
        {/* Outer Bottom Path (Counter-Clockwise Arc to render Prospero Gudur upright) */}
        <path id="outer-bottom-path" d="M 52 250 A 198 198 0 0 0 448 250" fill="none" />

        {/* Inner Curved textpaths (Inside Middle Track for Sectant Labels) */}
        <path id="discipline-path" d="M 125 155 A 118 118 0 0 1 375 155" fill="none" />
        <path id="knowledge-path" d="M 105 205 A 118 118 0 0 1 190 130" fill="none" />
        <path id="sports-path" d="M 310 130 A 118 118 0 0 1 395 205" fill="none" />
        <path id="utility-path" d="M 105 295 A 118 118 0 0 0 215 355" fill="none" />
        <path id="service-path" d="M 285 355 A 118 118 0 0 0 395 295" fill="none" />
      </defs>

      {/* Wheel Spokes (7-Spoke Configuration: 8-spoke layout with Top 12 o'clock Spoke Omitted) */}
      {[45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 250 250)`}>
          {/* Decorative Baluster Spindle Spokes inside */}
          <path
            d="M 244 210 L 256 210 L 254 195 L 260 185 L 253 172 L 261 155 L 253 140 L 259 130 L 253 118 L 256 100 L 244 100 L 247 118 L 241 130 L 247 140 L 239 155 L 247 172 L 240 185 L 246 195 Z"
            fill="#0f3175"
          />
          {/* Handle Peg extensions protruding beyond outer wheel rim */}
          <path
            d="M 245 52 L 255 52 L 254 36 L 259 26 L 254 13 L 250 1 L 246 13 L 241 26 L 246 36 Z"
            fill="#0f3175"
          />
        </g>
      ))}

      {/* Inner Track Category Labels */}
      {/* 1. DISCIPLINE (Top) */}
      <text fill="#0f3175" fontSize="15" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">
        <textPath href="#discipline-path" startOffset="50%" textAnchor="middle">
          DISCIPLINE
        </textPath>
      </text>

      {/* 2. KNOWLEDGE (Left) */}
      <text fill="#0f3175" fontSize="12.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.5">
        <textPath href="#knowledge-path" startOffset="50%" textAnchor="middle">
          KNOWLEDGE
        </textPath>
      </text>

      {/* 3. SPORTS (Right) */}
      <text fill="#0f3175" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">
        <textPath href="#sports-path" startOffset="50%" textAnchor="middle">
          SPORTS
        </textPath>
      </text>

      {/* 4. UTILITY (Bottom Left) */}
      <text fill="#0f3175" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">
        <textPath href="#utility-path" startOffset="50%" textAnchor="middle">
          UTILITY
        </textPath>
      </text>

      {/* 5. SERVICE (Bottom Right) */}
      <text fill="#0f3175" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="1">
        <textPath href="#service-path" startOffset="50%" textAnchor="middle">
          SERVICE
        </textPath>
      </text>

      {/* Outer Curved Labels with Letter-Spacing */}
      {/* ENGLISH MEDIUM SCHOOL */}
      <text fill="#0f3175" fontSize="22.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="4.5">
        <textPath href="#outer-top-path" startOffset="50%" textAnchor="middle">
          ENGLISH &nbsp; MEDIUM &nbsp; SCHOOL
        </textPath>
      </text>

      {/* PROSPERO GUDUR (Bottom sweep) */}
      <text fill="#0f3175" fontSize="23.5" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="5.5">
        <textPath href="#outer-bottom-path" startOffset="50%" textAnchor="middle">
          PROSPERO &nbsp;&nbsp; GUDUR
        </textPath>
      </text>

      {/* Small Separator Stars placed precisely in the tracks */}
      {/* Star Angles: 15Â°, 75Â°, 135Â°, 165Â°, 195Â°, 225Â°, 285Â°, 345Â° */}
      {[20, 70, 150, 210, 290, 340].map((angle, idx) => {
        const r = 160;
        const rad = ((angle - 90) * Math.PI) / 180;
        const x = 250 + r * Math.cos(rad);
        const y = 250 + r * Math.sin(rad);
        return (
          <polygon
            key={idx}
            points={`${x},${y - 5} ${x + 1.5},${y - 1.5} ${x + 5},${y - 1.5} ${x + 2},${y + 1} ${x + 3},${y + 4.5} ${x},${y + 2.5} ${x - 3},${y + 4.5} ${x - 2},${y + 1} ${x - 5},${y - 1.5} ${x - 1.5},${y - 1.5}`}
            fill="#0f3175"
          />
        );
      })}
    </svg>
  );
};

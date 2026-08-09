import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', size = 'md' }) => {
  const isDark = variant === 'dark';

  // Size configurations
  const dimensions = {
    sm: { iconSize: 'w-8 h-8', mainText: 'text-xl', subText: 'text-[9px]' },
    md: { iconSize: 'w-10 h-10', mainText: 'text-2xl', subText: 'text-[10px]' },
    lg: { iconSize: 'w-14 h-14', mainText: 'text-4xl', subText: 'text-xs' }
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* 3D Book + Ascending Arrow Icon */}
      <div className={`relative ${dimensions.iconSize} shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bookLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="bookRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="70%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="40%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#00D8FF" />
            </linearGradient>
          </defs>

          {/* Left Page of Book */}
          <path
            d="M 48 82 C 32 75 16 78 8 82 L 8 28 C 16 24 32 21 48 28 Z"
            fill="url(#bookLeftGrad)"
            stroke="#1D4ED8"
            strokeWidth="1.5"
          />
          {/* Inner Left Page Layer */}
          <path
            d="M 45 78 C 31 72 18 75 12 78 L 12 32 C 18 28 31 25 45 31 Z"
            fill="#3B82F6"
            opacity="0.4"
          />

          {/* Right Page of Book */}
          <path
            d="M 52 82 C 68 75 84 78 92 82 L 92 28 C 84 24 68 21 52 28 Z"
            fill="url(#bookRightGrad)"
            stroke="#1E3A8A"
            strokeWidth="1.5"
          />
          {/* Inner Right Page Layer */}
          <path
            d="M 55 78 C 69 72 82 75 88 78 L 88 32 C 82 28 69 25 55 31 Z"
            fill="#1D4ED8"
            opacity="0.5"
          />

          {/* Book Spine Center line */}
          <line x1="50" y1="28" x2="50" y2="82" stroke="#0F172A" strokeWidth="2" opacity="0.3" />

          {/* Dynamic 3D Ascending Arrow rising from the spine */}
          <path
            d="M 44 75 L 44 48 L 32 50 L 58 10 L 82 42 L 70 44 L 70 75 Z"
            fill="url(#arrowGrad)"
          />
          {/* Arrow 3D Bevel Highlight */}
          <path
            d="M 58 10 L 82 42 L 70 44 L 58 28 Z"
            fill="#60A5FA"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Typography Stack */}
      <div className="flex flex-col justify-center leading-none">
        {/* Top Tagline */}
        <span
          className={`font-heading font-semibold uppercase tracking-wider ${
            dimensions.subText
          } ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
          style={{ letterSpacing: '0.12em', fontSize: '0.62em', marginBottom: '2px' }}
        >
          Guia Completo
        </span>

        {/* Brand Name: ENEM */}
        <span
          className={`font-heading font-black tracking-tight ${dimensions.mainText} text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#00D8FF]`}
          style={{ lineHeight: '0.9', filter: 'drop-shadow(0 1px 1px rgba(37,99,235,0.2))' }}
        >
          ENEM
        </span>

        {/* Year with decorative lines */}
        <div className="flex items-center gap-1 mt-0.5">
          <div className="h-[1.5px] w-3 bg-[#2563EB]" />
          <span className="font-heading font-extrabold text-[#2563EB]" style={{ fontSize: '0.68em', letterSpacing: '0.12em' }}>
            2026
          </span>
          <div className="h-[1.5px] w-3 bg-[#2563EB]" />
        </div>
      </div>
    </div>
  );
};

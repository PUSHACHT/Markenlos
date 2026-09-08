import React from 'react';
import imgBracketLeft from '../assets/imgBracketLeft.svg';
import imgBracketRight from '../assets/imgBracketRight.svg';
import imgTeamBracketLeft from '../assets/imgTeamBracketLeft.svg';
import imgTeamBracketRight from '../assets/imgTeamBracketRight.svg';

interface LogoProps {
  size?: 'nav' | 'large';
  className?: string;
  theme?: 'dark' | 'light';
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'nav', 
  className = '', 
  theme = 'dark',
  onClick 
}) => {
  if (size === 'large') {
    return (
      <div 
        onClick={onClick}
        className={`relative w-full max-w-[720px] aspect-[1022/350] select-none cursor-pointer ${className}`}
      >
        <svg viewBox="0 0 1022 350" className="w-full h-full overflow-visible">
          {/* Left Bracket */}
          <g transform="translate(0, 0)">
            <image 
              href={imgTeamBracketLeft} 
              x="0" 
              y="0" 
              width="79" 
              height="177" 
              transform="rotate(-178.37 39.5 88.5)" 
            />
          </g>
          {/* Marken text */}
          <text 
            x="182" 
            y="170" 
            style={{ 
              fontFamily: "'Outfit', 'Montserrat', sans-serif",
              fontSize: '180px', 
              fontWeight: 400,
              fill: theme === 'light' ? '#474747' : '#ffffff',
              letterSpacing: '-2px'
            }}
          >
            Marken
          </text>
          {/* los text */}
          <text 
            x="519" 
            y="320" 
            style={{ 
              fontFamily: "'Outfit', 'Montserrat', sans-serif",
              fontSize: '180px', 
              fontWeight: 800,
              fill: '#39adca',
              letterSpacing: '-2px'
            }}
          >
            los
          </text>
          {/* Right Bracket */}
          <g transform="translate(943, 95)">
            <image 
              href={imgTeamBracketRight} 
              x="0" 
              y="0" 
              width="79" 
              height="177" 
              transform="rotate(1.63 39.5 88.5)" 
            />
          </g>
        </svg>
      </div>
    );
  }

  // Nav Logo (Figma: Staggered "Marken" on top-left, "los" bottom-right with enclosing brackets)
  return (
    <div 
      onClick={onClick}
      className={`relative w-[150px] sm:w-[175px] h-[65px] sm:h-[75px] select-none cursor-pointer ${className}`}
    >
      <svg viewBox="0 0 175 79" className="w-full h-full overflow-visible">
        {/* Left Bracket */}
        <g transform="translate(0, 0)">
          <image 
            href={imgBracketLeft} 
            x="0" 
            y="0" 
            width="29.12" 
            height="65.52" 
            transform="rotate(-178.37 14.56 32.76)" 
          />
        </g>
        {/* Marken Text */}
        <text 
          x="25" 
          y="36" 
          style={{ 
            fontFamily: "'Outfit', 'Montserrat', sans-serif",
            fontSize: '32px', 
            fontWeight: 400,
            fill: theme === 'dark' ? '#ffffff' : '#303030',
          }}
        >
          Marken
        </text>
        {/* los Text */}
        <text 
          x="71" 
          y="68" 
          style={{ 
            fontFamily: "'Outfit', 'Montserrat', sans-serif",
            fontSize: '32px', 
            fontWeight: 800,
            fill: '#39adca',
          }}
        >
          los
        </text>
        {/* Right Bracket */}
        <g transform="translate(129, 13)">
          <image 
            href={imgBracketRight} 
            x="0" 
            y="0" 
            width="29.12" 
            height="65.52" 
            transform="rotate(1.63 14.56 32.76)" 
          />
        </g>
      </svg>
    </div>
  );
};


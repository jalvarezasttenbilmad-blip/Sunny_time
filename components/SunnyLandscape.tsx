
import React from 'react';

const SunnyLandscape: React.FC = () => {
  return (
    <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg rounded-full"
      >
        <rect width="100" height="100" fill="#87CEEB" />
        <circle cx="25" cy="25" r="15" fill="#FFD700">
          <animateTransform 
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
        <path d="M -10 80 Q 25 50 60 75 T 110 70 V 100 H -10 Z" fill="#32CD32" />
        <path d="M -10 90 Q 40 70 70 85 T 110 80 V 100 H -10 Z" fill="#228B22" />
      </svg>
    </div>
  );
};

export default SunnyLandscape;

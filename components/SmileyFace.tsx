
import React from 'react';

const SmileyFace: React.FC = () => {
  return (
    <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <circle cx="50" cy="50" r="48" fill="#FFD700" stroke="#FDB813" strokeWidth="4" />
        <circle cx="35" cy="40" r="5" fill="#2c2c2c" />
        <circle cx="65" cy="40" r="5" fill="#2c2c2c" />
        <path
          d="M 30 65 Q 50 80 70 65"
          stroke="#2c2c2c"
          strokeWidth="5"
          fill="transparent"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default SmileyFace;

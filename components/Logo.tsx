import React, { useState } from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  const [error, setError] = useState(false);

  if (error) {
    // Fallback SVG if logo.jpg is missing
    return (
      <div className={`bg-white p-1 rounded-2xl ${className}`}>
        <svg
          viewBox="0 0 475 489"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="logoTitle"
          role="img"
        >
          <title id="logoTitle">Ev. Freikirche Groß-Gerau Logo</title>
          <path
            d="M211.5 61.5C211.5 48 220 40 234.5 40C247.5 40 258.5 49 258.5 61.5V132.5H356.5C370.5 132.5 379.5 141.5 379.5 156C379.5 170.5 370.5 179.5 356.5 179.5H258.5V429.5C258.5 444 247.5 452 234.5 452C220 452 211.5 444 211.5 429.5V179.5H162C162.5 178 162.5 177 162.5 175.5C162.5 111 113.5 54 44.5 54C28.5 54 13.5 58 0 65V18C13.5 10.5 28.5 6.5 44.5 6.5C138 6.5 211.5 86.5 211.5 179.5V61.5Z"
            fill="#2C3E50"
          />
          <path
            d="M394 62C439 88.5 470.5 133 474.5 185C475.5 198 465 208.5 452 208C439 207.5 429 196.5 428 183.5C425 147.5 404 116.5 373 98C361.5 91.5 358 76.5 364.5 65C371 53.5 385.5 50 397 56.5L394 62Z"
            fill="#F39C12"
          />
        </svg>
      </div>
    );
  }

  return (
    <img 
      src="/images/logo.jpg" 
      alt="Ev. Freikirche Groß-Gerau Logo" 
      onError={() => setError(true)}
      className={`object-contain bg-white p-1 rounded-2xl ${className}`}
    />
  );
};

export default Logo;
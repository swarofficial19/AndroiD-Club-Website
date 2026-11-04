import React from 'react';

interface AndroidLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const AndroidLogo: React.FC<AndroidLogoProps> = ({ 
  className = '', 
  size = 28,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <div 
        className="relative flex items-center justify-center rounded-xl bg-[#3DDC84]/10 p-1.5 border border-[#3DDC84]/30 shadow-[0_0_15px_-3px_rgba(61,220,132,0.35)] transition-transform duration-200 hover:scale-105"
        style={{ width: size + 10, height: size + 10 }}
      >
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="androidGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FF87" />
              <stop offset="100%" stopColor="#3DDC84" />
            </linearGradient>
          </defs>

          {/* Android Robot Head */}
          <path
            d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5847 8.4234 13.8447 8.08 12 8.08c-1.8448 0-3.5847.3434-5.1368.8697L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"
            fill="url(#androidGreenGradient)"
          />
          {/* Eyes */}
          <circle cx="6.48" cy="14.34" r="1.1" fill="#000000" />
          <circle cx="17.52" cy="14.34" r="1.1" fill="#000000" />
          <circle cx="6.48" cy="14.34" r="0.45" fill="#00FF87" />
          <circle cx="17.52" cy="14.34" r="0.45" fill="#00FF87" />
        </svg>
      </div>

      {showText && (
        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
          <span className="font-extrabold tracking-tight text-white text-base">
            ANDROID
          </span>
          <span className="font-bold text-xs tracking-wider text-[#3DDC84] font-mono">
            CLUB
          </span>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export default function MadeInUSA() {
  return (
    <div className="fixed top-32 right-8 z-40 hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative"
      >
        {/* Flag */}
        <div className="relative w-32 h-24 origin-left" style={{
          animation: 'wave 3s ease-in-out infinite'
        }}>
          <svg viewBox="0 0 320 240" className="w-full h-full drop-shadow-2xl">
            <defs>
              <linearGradient id="flag-shadow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.2)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </linearGradient>
            </defs>
            
            {/* Red stripes */}
            <rect width="320" height="18.46" fill="#B22234"/>
            <rect y="36.92" width="320" height="18.46" fill="#B22234"/>
            <rect y="73.84" width="320" height="18.46" fill="#B22234"/>
            <rect y="110.76" width="320" height="18.46" fill="#B22234"/>
            <rect y="147.68" width="320" height="18.46" fill="#B22234"/>
            <rect y="184.6" width="320" height="18.46" fill="#B22234"/>
            <rect y="221.52" width="320" height="18.46" fill="#B22234"/>
            
            {/* White stripes */}
            <rect y="18.46" width="320" height="18.46" fill="white"/>
            <rect y="55.38" width="320" height="18.46" fill="white"/>
            <rect y="92.3" width="320" height="18.46" fill="white"/>
            <rect y="129.22" width="320" height="18.46" fill="white"/>
            <rect y="166.14" width="320" height="18.46" fill="white"/>
            <rect y="203.06" width="320" height="18.46" fill="white"/>
            
            {/* Blue canton */}
            <rect width="128" height="110.76" fill="#3C3B6E"/>
            
            {/* Stars (simplified grid) */}
            {[...Array(50)].map((_, i) => {
              const row = Math.floor(i / 6);
              const col = i % 6;
              const offsetRow = row % 2 === 1;
              const x = offsetRow ? 16 + col * 21.3 : 10.6 + col * 21.3;
              const y = 8 + row * 11.08;
              if (row < 9 && (row % 2 === 0 ? col < 6 : col < 5)) {
                return <circle key={i} cx={x} cy={y} r="3" fill="white" />;
              }
              return null;
            })}
          </svg>
        </div>

        {/* Made in USA Badge */}
        <div className="mt-4 bg-white border-2 border-[#3C3B6E] rounded-lg px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#B22234] rounded-full animate-pulse"></div>
            <span className="font-black text-[#3C3B6E] text-sm tracking-wider">MADE IN USA</span>
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: perspective(400px) rotateY(0deg);
          }
          25% {
            transform: perspective(400px) rotateY(-15deg);
          }
          75% {
            transform: perspective(400px) rotateY(15deg);
          }
        }
      `}</style>
    </div>
  );
}
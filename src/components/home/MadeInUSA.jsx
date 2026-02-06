import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function MadeInUSA() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">American Quality</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Proudly
              <br />
              <span className="text-red-500">Made in USA</span>
            </h2>
            
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              BuffLess is manufactured right here in the United States, ensuring the highest quality standards and supporting American jobs. Every bottle represents American innovation and craftsmanship.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-white">100% American Made Formula</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-white">Supporting Local Communities</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-white">Premium Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Waving Flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <div className="relative" style={{
                  animation: 'wave 4s ease-in-out infinite'
                }}>
                  <svg viewBox="0 0 320 240" className="w-full h-auto drop-shadow-2xl">
                    <defs>
                      <filter id="wave-shadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="2" dy="2" result="offsetblur"/>
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.3"/>
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Red stripes */}
                    <rect width="320" height="18.46" fill="#B22234" filter="url(#wave-shadow)"/>
                    <rect y="36.92" width="320" height="18.46" fill="#B22234" filter="url(#wave-shadow)"/>
                    <rect y="73.84" width="320" height="18.46" fill="#B22234" filter="url(#wave-shadow)"/>
                    <rect y="110.76" width="320" height="18.46" fill="#B22234" filter="url(#wave-shadow)"/>
                    <rect y="147.68" width="320" height="18.46" fill="#B22234" filter="url(#wave-shadow)"/>
                    <rect y="184.6" width="320" height="18.46" fill="#B22234" filter="url(#wave-shadow)"/>
                    <rect y="221.52" width="320" height="18.46" fill="#B22234" filter="url(#wave-shadow)"/>
                    
                    {/* White stripes */}
                    <rect y="18.46" width="320" height="18.46" fill="white" filter="url(#wave-shadow)"/>
                    <rect y="55.38" width="320" height="18.46" fill="white" filter="url(#wave-shadow)"/>
                    <rect y="92.3" width="320" height="18.46" fill="white" filter="url(#wave-shadow)"/>
                    <rect y="129.22" width="320" height="18.46" fill="white" filter="url(#wave-shadow)"/>
                    <rect y="166.14" width="320" height="18.46" fill="white" filter="url(#wave-shadow)"/>
                    <rect y="203.06" width="320" height="18.46" fill="white" filter="url(#wave-shadow)"/>
                    
                    {/* Blue canton */}
                    <rect width="128" height="110.76" fill="#3C3B6E" filter="url(#wave-shadow)"/>
                    
                    {/* Stars */}
                    {[...Array(50)].map((_, i) => {
                      const row = Math.floor(i / 6);
                      const col = i % 6;
                      const offsetRow = row % 2 === 1;
                      const x = offsetRow ? 16 + col * 21.3 : 10.6 + col * 21.3;
                      const y = 8 + row * 11.08;
                      if (row < 9 && (row % 2 === 0 ? col < 6 : col < 5)) {
                        return <circle key={i} cx={x} cy={y} r="3.5" fill="white" />;
                      }
                      return null;
                    })}
                  </svg>
                </div>

                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-white border-2 border-red-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="font-black text-blue-900 text-lg tracking-wider">MADE IN USA</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: perspective(800px) rotateY(0deg) rotateX(2deg);
          }
          25% {
            transform: perspective(800px) rotateY(-12deg) rotateX(2deg);
          }
          50% {
            transform: perspective(800px) rotateY(0deg) rotateX(2deg);
          }
          75% {
            transform: perspective(800px) rotateY(12deg) rotateX(2deg);
          }
        }
      `}</style>
    </section>
  );
}
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'STEP ONE',
    icon: Droplet,
    accentColor: '#3B82F6',
    accentBg: 'from-blue-600 to-blue-800',
    description: 'To repair paint chip or scuffs, first apply your manufacture-recommended touch-up paint in shaded environment to area after ensuring surface is free of dust. Simply allow to dry for',
    highlight: '15-20 minutes',
    descriptionEnd: 'according to manufacturer directions in outside temperatures.',
  },
  {
    number: '02',
    title: 'STEP TWO',
    icon: Sparkles,
    accentColor: '#E10600',
    accentBg: 'from-red-600 to-red-800',
    description: 'Next, apply BuffLess Concentrate on a clean micro-fiber towel and remove any excess touch-up paint from area by reducing touch-up paint to the level of the paint surface clear coat.',
    highlight: 'No re-polishing necessary',
    descriptionEnd: '— the repair is complete and permanent.',
  },
];

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 400 : -400, opacity: 0, scale: 0.92 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -400 : 400, opacity: 0, scale: 0.92 }),
};

export default function ProcessSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 5000);
    return () => clearInterval(t);
  }, [index]);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + steps.length) % steps.length);
  };

  const step = steps[index];
  const Icon = step.icon;

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Scrolling background text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 text-9xl font-black text-gray-100 whitespace-nowrap"
        >
          BUFFLESS • PROFESSIONAL • QUALITY • BUFFLESS • PROFESSIONAL • QUALITY •
        </motion.div>
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 text-9xl font-black text-red-50 whitespace-nowrap"
        >
          MADE IN USA • GUARANTEED • MADE IN USA • GUARANTEED •
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            OUR <span className="text-[#E10600]">1 OR 2 STEP PROCESS</span>
          </h2>
          <p className="text-gray-600 text-lg">Simple, fast, and professional results</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative min-h-[420px] flex flex-col md:flex-row"
              >
                {/* Left accent panel */}
                <div className={`bg-gradient-to-br ${step.accentBg} md:w-64 flex flex-col items-center justify-center p-10 gap-4 relative overflow-hidden`}>
                  <span className="absolute text-[10rem] font-black text-white/10 leading-none select-none -bottom-4 -left-2">
                    {step.number}
                  </span>
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center relative z-10 backdrop-blur-sm">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-white font-black text-2xl relative z-10">{step.title}</span>
                </div>

                {/* Right content panel */}
                <div className="flex-1 bg-white p-10 md:p-14 flex flex-col justify-center">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {step.description}{' '}
                    <span className="font-bold" style={{ color: step.accentColor }}>{step.highlight}</span>{' '}
                    {step.descriptionEnd}
                  </p>

                  {/* Progress dots */}
                  <div className="flex gap-2 mt-8">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                        className="h-2 rounded-full transition-all duration-400"
                        style={{
                          width: i === index ? '2.5rem' : '0.5rem',
                          backgroundColor: i === index ? step.accentColor : '#D1D5DB',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-xl hover:border-[#E10600] hover:bg-red-50 transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-xl hover:border-[#E10600] hover:bg-red-50 transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
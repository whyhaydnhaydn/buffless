import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SponsorSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&h=800&fit=crop"
          alt="NASCAR Racing"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#E10600] text-sm font-semibold uppercase tracking-widest mb-4">
              Racing Partnership
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Official
              <br />
              <span className="text-[#E10600]">Sponsor</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-lg">
              Proudly partnering with NASCAR to bring professional-grade repair solutions to racing teams and enthusiasts around the world.
            </p>
            <button className="group inline-flex items-center gap-3 text-gray-900 font-semibold text-sm uppercase tracking-wider hover:text-[#E10600] transition-colors duration-300">
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <div className="w-96 h-96 border border-[#E10600]/20 rounded-full flex items-center justify-center">
            <div className="w-72 h-72 border border-[#E10600]/30 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-[#E10600]/10 rounded-full flex items-center justify-center">
                <span className="text-[#E10600] font-black text-4xl">NASCAR</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
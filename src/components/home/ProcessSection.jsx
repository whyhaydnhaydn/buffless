import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Sparkles } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Floating Text Background */}
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            OUR <span className="text-[#E10600]">1 OR 2 STEP PROCESS</span>
          </h2>
          <p className="text-gray-600 text-lg">Simple, fast, and professional results</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <div className="mb-4">
              <span className="text-5xl font-black text-blue-600">01</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">STEP ONE</h3>
            <p className="text-gray-700 leading-relaxed">
              To repair paint chip or scuffs, first apply your manufacture-recommended touch-up paint in shaded environment to area after ensuring surface is free of dust. Simply allow to dry for <span className="font-bold text-blue-600">15-20 minutes</span> according to manufacturer directions in outside temperatures.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-red-50 to-white border-2 border-[#E10600] rounded-3xl p-10 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#E10600] rounded-2xl flex items-center justify-center shadow-xl -rotate-12">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="mb-4">
              <span className="text-5xl font-black text-[#E10600]">02</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">STEP TWO</h3>
            <p className="text-gray-700 leading-relaxed">
              Next, apply BuffLess Concentrate on a clean micro-fiber towel and remove any excess touch-up paint from area by reducing touch-up paint to the level of the paint surface clear coat. <span className="font-bold text-[#E10600]">No re-polishing necessary</span>, the repair is complete and permanent.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
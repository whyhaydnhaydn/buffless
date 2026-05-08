import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-[#E10600] rounded-full animate-pulse" />
              <span className="text-gray-700 text-sm font-medium">Premium Quality Products</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] mb-6">
              Fast Repair
              <br />
              <span className="text-[#E10600]">Guaranteed</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Buffless delivers quality repairs in record time. Trusted by thousands of professionals and enthusiasts worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to={createPageUrl('Shop')}
                className="group inline-flex items-center justify-center gap-3 bg-[#E10600] text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-[#c00500] transition-all duration-300"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#E10600]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl">100%</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#E10600]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl">24hr</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Fast Ship</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#E10600]" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-xl">10K+</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">Repairs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#E10600]/20 blur-[100px] rounded-full" />
              
              {/* Product Image Placeholder */}
              <div className="relative aspect-square bg-black rounded-3xl flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white/30 text-3xl">+</span>
                </div>
                <p className="text-white/30 text-sm font-medium uppercase tracking-widest">Add Product Image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
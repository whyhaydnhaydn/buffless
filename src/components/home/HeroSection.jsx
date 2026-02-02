import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#E10600]/20" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
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
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-[#E10600] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm font-medium">Premium Quality Products</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-6">
              Fast Repair
              <br />
              <span className="text-[#E10600]">Guaranteed</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Buffless delivers quality repairs in record time. Trusted by thousands of professionals and enthusiasts worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to={createPageUrl('Shop')}
                className="group inline-flex items-center justify-center gap-3 bg-[#E10600] text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:border-[#E10600] hover:text-[#E10600] transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#E10600]" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">100%</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Guaranteed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#E10600]" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">24hr</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Fast Ship</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#E10600]" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">10K+</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Repairs</p>
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
              <div className="relative aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-3xl border border-white/10 p-12 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                  alt="Buffless Product"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
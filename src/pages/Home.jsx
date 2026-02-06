import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

import HeroSection from '../components/home/HeroSection';
import TrustedBrands from '../components/home/TrustedBrands';
import SponsorSection from '../components/home/SponsorSection';
import ProductBenefits from '../components/home/ProductBenefits';
import ProcessSection from '../components/home/ProcessSection';
import DistributionSection from '../components/home/DistributionSection';
import VideoSection from '../components/home/VideoSection';
import ReviewsSection from '../components/home/ReviewsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function Home() {
  return (
    <div className="bg-white relative">
      {/* Floating Text */}
      <div className="fixed top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="text-[12rem] font-black text-gray-50 whitespace-nowrap"
        >
          MADE IN USA • BUFFLESS • GUARANTEED •
        </motion.div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <TrustedBrands />
        <ProductBenefits />
        <ProcessSection />
        <VideoSection />
        <ReviewsSection />
        <DistributionSection />
        <SponsorSection />
        <NewsletterSection />
      </div>
    </div>
  );
}
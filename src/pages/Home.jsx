import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

import HeroSection from '../components/home/HeroSection';
import TrustedBrands from '../components/home/TrustedBrands';
import SponsorSection from '../components/home/SponsorSection';
import ProductBenefits from '../components/home/ProductBenefits';
import VideoSection from '../components/home/VideoSection';
import ReviewsSection from '../components/home/ReviewsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import MadeInUSA from '../components/home/MadeInUSA';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustedBrands />
      <ProductBenefits />
      <MadeInUSA />
      <VideoSection />
      <ReviewsSection />
      <SponsorSection />
      <NewsletterSection />
    </div>
  );
}
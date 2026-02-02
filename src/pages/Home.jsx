import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

import HeroSection from '../components/home/HeroSection';
import TrustedBrands from '../components/home/TrustedBrands';
import SponsorSection from '../components/home/SponsorSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewsletterSection from '../components/home/NewsletterSection';

export default function Home() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['featured-products'],
    queryFn: () => base44.entities.Product.filter({ featured: true }, '-created_date', 6),
  });

  return (
    <div className="bg-white">
      <HeroSection />
      <TrustedBrands />
      <FeaturedProducts products={products} isLoading={isLoading} />
      <SponsorSection />
      <NewsletterSection />
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBrands() {
  const brands = [
    { name: 'Hertz', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69801f49d55594176e8ca150/ae5f0a917_306-3065904_hertz-car-sales-logo.png' },
    { name: 'Enterprise', logo: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69801f49d55594176e8ca150/988140d36_enterprise-mobility-e1d982cc.png' },
  ];

  return (
    <section className="bg-gray-50 py-20 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-gray-900 text-2xl md:text-3xl font-bold mb-2">
            Used by <span className="text-[#E10600]">Trusted Brands</span>
          </h2>
          <p className="text-gray-600 text-sm">Industry leaders trust Buffless for their repair needs</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-40 h-24 md:w-48 md:h-28 bg-white rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-[#E10600] group-hover:bg-red-50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#E10600]/10 p-6">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
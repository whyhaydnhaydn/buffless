import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedBrands() {
  const brands = [
    { name: 'BMW', initial: 'BMW' },
    { name: 'Mercedes', initial: 'MB' },
    { name: 'Porsche', initial: 'P' },
    { name: 'Audi', initial: 'A' },
    { name: 'Tesla', initial: 'T' },
    { name: 'Ford', initial: 'F' },
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

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-[#E10600] group-hover:bg-red-50 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#E10600]/10">
                <span className="text-gray-400 group-hover:text-[#E10600] font-bold text-xl md:text-2xl transition-colors duration-500">
                  {brand.initial}
                </span>
              </div>
              <p className="text-gray-400 group-hover:text-gray-700 text-xs text-center mt-3 transition-colors duration-500">
                {brand.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
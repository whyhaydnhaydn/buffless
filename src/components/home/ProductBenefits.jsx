import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, DollarSign, Clock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductBenefits() {
  const benefits = [
    'Tree Sap remover',
    'Adhesive remover',
    'Bug remover',
    'Paint thinner',
    'Tar remover',
    'Grease remover',
    'Engine cleaner',
    'Chrome cleaner',
    'Aluminum wheel cleaner',
    'Gum remover',
    'Female Lip Stick',
    'Surface Rust lines',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(benefits.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const currentBenefits = benefits.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            One Product. <span className="text-[#E10600]">Endless Solutions.</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
            This New Age product is silicone free and safe for auto body use. <span className="font-bold text-[#E10600]">BuffLess</span> allows every customer to save money and time by using this one step cleaner polish guaranteed to work.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            BuffLess cleaner polish allows automotive companies to increase customer satisfaction and daily profit. It's awesome as a customer auto beauty gift.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#E10600] hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#E10600]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-[#E10600]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Save Money</h3>
            <p className="text-gray-600">One product replaces 12+ cleaning solutions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#E10600] hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#E10600]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#E10600]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Save Time</h3>
            <p className="text-gray-600">Works in seconds or minutes, guaranteed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#E10600] hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#E10600]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-[#E10600]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Less Chemicals</h3>
            <p className="text-gray-600">Eco-friendly and safe for auto body use</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border-2 border-[#E10600] rounded-3xl p-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            BuffLess Cleaner <span className="text-[#E10600]">Eliminates These Products:</span>
          </h3>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[240px]"
              >
                {currentBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-[#E10600] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-900 font-semibold text-lg">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#E10600] hover:bg-red-50 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#E10600] hover:bg-red-50 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#E10600] w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-4">
              All in <span className="text-[#E10600]">seconds or minutes</span> guaranteed!
            </p>
            <p className="text-lg text-gray-600">
              Allow BuffLess the opportunity to <span className="font-semibold">Save you Time And Money</span> by using <span className="font-semibold">Less Chemicals Guaranteed!!!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
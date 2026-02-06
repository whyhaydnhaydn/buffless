import React from 'react';
import { motion } from 'framer-motion';
import { Store, Users, Wrench, Building2, Truck, Car } from 'lucide-react';

export default function DistributionSection() {
  const outlets = [
    { name: 'Auto Parts Stores', icon: Store },
    { name: 'Auto Detailers', icon: Sparkles },
    { name: 'Auto Dealers', icon: Building2 },
    { name: 'Auto Auctions', icon: Users },
    { name: 'Auto Body Shops', icon: Wrench },
    { name: 'Car Rental Companies', icon: Car },
  ];

  const distributors = [
    { name: 'Car Wash & Detail', icon: Droplet },
    { name: 'Fleet Companies', icon: Truck },
    { name: 'Motorcycle Shops', icon: Bike },
    { name: 'Transportation Companies', icon: Truck },
    { name: 'Truck Stop Shops', icon: Store },
    { name: 'The Do It Yourself Auto Enthusiast', icon: Heart },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Would You Like To <span className="text-[#E10600]">Distribute BuffLess</span>
          </h2>
          <p className="text-xl text-gray-700">
            Products or use within your fleet operation?
          </p>
        </motion.div>

        {/* Distribution Outlets */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            BUFFLESS <span className="text-[#E10600]">DISTRIBUTION OUTLETS</span>
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {outlets.map((outlet, index) => {
              const Icon = outlet.icon;
              return (
                <motion.div
                  key={outlet.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#E10600] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E10600] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#E10600] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-gray-700 font-semibold text-sm leading-tight">{outlet.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Distribution Products */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            DISTRIBUTION <span className="text-[#E10600]">BUFFLESS PRODUCTS</span>
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {distributors.map((distributor, index) => {
              const Icon = distributor.icon;
              return (
                <motion.div
                  key={distributor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#E10600] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E10600] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#E10600] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-gray-700 font-semibold text-sm leading-tight">{distributor.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Import icons we need
import { Sparkles, Droplet, Bike, Heart } from 'lucide-react';
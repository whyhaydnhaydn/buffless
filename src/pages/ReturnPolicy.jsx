import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Package, RefreshCw, Truck, Clock, CheckCircle } from 'lucide-react';

export default function ReturnPolicy() {
  const sections = [
    {
      icon: Clock,
      title: 'Eligibility',
      content: [
        'Items can be returned within 30 days of the original purchase date',
        'All returns must be initiated through our customer support portal',
        'Original proof of purchase is required for all returns',
        'Custom or personalized items are not eligible for return',
      ],
    },
    {
      icon: Package,
      title: 'Condition Requirements',
      content: [
        'Items must be unused and in their original condition',
        'All original packaging must be intact and undamaged',
        'Products must include all accessories and documentation',
        'Items showing signs of use may be subject to restocking fees',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Refund Process',
      content: [
        'Request a return through our website or customer support',
        'Receive a Return Merchandise Authorization (RMA) number',
        'Ship the item back using the provided prepaid label',
        'Refunds are processed within 5-7 business days after receipt',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping Costs',
      content: [
        'Return shipping is free for defective or incorrect items',
        'Standard returns may be subject to shipping deductions',
        'Expedited shipping costs are non-refundable',
        'International returns are the responsibility of the customer',
      ],
    },
  ];

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 bg-[#E10600]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-[#E10600]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Buffless <span className="text-[#E10600]">Return Policy</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We stand behind every product we sell. Our hassle-free return policy ensures your complete satisfaction.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-[#E10600]/30 transition-colors duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#E10600]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-[#E10600]" />
                </div>
                <h2 className="text-2xl font-bold text-[#E10600]">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4 ml-16">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E10600]/70 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-b from-[#E10600]/10 to-transparent border border-[#E10600]/20 rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Questions About Returns?
          </h3>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Our customer support team is here to help you with any questions about our return policy or to assist with a return request.
          </p>
          <a
            href="mailto:support@buffless.com"
            className="inline-flex items-center gap-2 bg-[#E10600] text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Support
          </a>
        </motion.div>

        {/* Last Updated */}
        <div className="mt-12 text-center">
          <p className="text-white/30 text-sm">
            Last updated: February 2026
          </p>
        </div>
      </div>
    </div>
  );
}
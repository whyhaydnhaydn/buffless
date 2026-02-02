import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#E10600]/50 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-white/5 to-black p-8 overflow-hidden">
        <img
          src={product.image_url || 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop'}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
        />
        {!product.in_stock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white/80 text-sm font-medium uppercase tracking-wider">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#E10600] transition-colors duration-300">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-white/50 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-[#E10600] font-bold text-xl">
            ${product.price?.toFixed(2)}
          </span>
          <button
            disabled={!product.in_stock}
            className="flex items-center gap-2 bg-[#E10600] text-white px-4 py-2 rounded-lg font-medium text-sm uppercase tracking-wider hover:bg-black hover:border hover:border-[#E10600] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
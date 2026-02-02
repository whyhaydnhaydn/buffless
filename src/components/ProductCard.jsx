import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import StarRating from './reviews/StarRating';

export default function ProductCard({ product }) {
  const { data: reviews = [] } = useQuery({
    queryKey: ['reviews', product.id],
    queryFn: () => base44.entities.Review.filter({ product_id: product.id }),
  });

  const averageRating = reviews.length > 0
    ? Math.round(reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length)
    : 0;

  return (
    <Link to={createPageUrl('ProductDetail') + '?id=' + product.id}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#E10600] hover:shadow-xl transition-all duration-500 cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative aspect-square bg-gray-50 p-8 overflow-hidden">
          <img
            src={product.image_url || 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop'}
            alt={product.name}
            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
          />
          {!product.in_stock && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="text-white text-sm font-medium uppercase tracking-wider">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-gray-900 font-semibold text-lg mb-2 group-hover:text-[#E10600] transition-colors duration-300">
            {product.name}
          </h3>
          
          {averageRating > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={averageRating} readonly size="sm" />
              <span className="text-sm text-gray-500">({reviews.length})</span>
            </div>
          )}

          {product.description && (
            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-[#E10600] font-bold text-xl">
              ${product.price?.toFixed(2)}
            </span>
            <button
              disabled={!product.in_stock}
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 bg-[#E10600] text-white px-4 py-2 rounded-lg font-medium text-sm uppercase tracking-wider hover:bg-[#c00500] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import StarRating from '../reviews/StarRating';
import { format } from 'date-fns';
import { Quote, User } from 'lucide-react';

export default function ReviewsSection() {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['all-reviews'],
    queryFn: () => base44.entities.Review.list('-created_date', 6),
  });

  if (isLoading || reviews.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Our <span className="text-[#E10600]">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg">Real reviews from real customers</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E10600] hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#E10600]/20 mb-4" />
              <StarRating rating={review.rating} readonly size="sm" />
              {review.title && (
                <h4 className="font-bold text-gray-900 mt-4 mb-2">{review.title}</h4>
              )}
              <p className="text-gray-600 leading-relaxed mb-6">{review.comment}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.reviewer_name || 'Anonymous'}</p>
                  <p className="text-sm text-gray-500">{format(new Date(review.created_date), 'MMM d, yyyy')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
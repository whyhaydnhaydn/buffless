import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, ShoppingCart, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StarRating from '../components/reviews/StarRating';
import ReviewList from '../components/reviews/ReviewList';
import ReviewForm from '../components/reviews/ReviewForm';

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  const { data: product, isLoading: productLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const products = await base44.entities.Product.list();
      return products.find(p => p.id === productId);
    },
    enabled: !!productId,
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => base44.entities.Review.filter({ product_id: productId }),
    enabled: !!productId,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!productId) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  if (productLoading) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mb-8" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-200 rounded-3xl" />
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded w-3/4" />
              <div className="h-6 bg-gray-200 rounded w-1/4" />
              <div className="h-20 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to={createPageUrl('Shop')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#E10600] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center">
            <img
              src={product.image_url || 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop'}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <StarRating rating={Math.round(averageRating)} readonly />
              <span className="text-gray-600">
                {averageRating > 0 ? averageRating.toFixed(1) : 'No reviews'} ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </span>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-[#E10600]">${product.price?.toFixed(2)}</span>
            </div>

            {product.description && (
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                {product.description}
              </p>
            )}

            <div className="flex items-center gap-3 mb-8">
              <Package className="w-5 h-5 text-gray-400" />
              <span className={`font-medium ${product.in_stock ? 'text-green-600' : 'text-red-600'}`}>
                {product.in_stock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <Button
              disabled={!product.in_stock}
              className="w-full bg-[#E10600] hover:bg-[#c00500] text-white py-6 text-lg font-semibold"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ReviewList productId={productId} />
            </div>
            <div>
              <ReviewForm productId={productId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
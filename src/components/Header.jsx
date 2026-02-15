import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Shop', page: 'Shop' },
    { name: 'Return Policy', page: 'ReturnPolicy' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69801f49d55594176e8ca150/61978a214_cropped-cropped-B-08-2.jpg" 
              alt="BuffLess" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className="text-gray-700 hover:text-[#E10600] transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-700 hover:text-[#E10600] transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-[#E10600] transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Shop', page: 'Shop' },
    { name: 'Return Policy', page: 'ReturnPolicy' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'} ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69801f49d55594176e8ca150/cc57405d9_BuffLess-Black-_-Red-with-Tagline-PNG.png" 
              alt="BuffLess" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-20'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={createPageUrl(link.page)}
                className={`transition-colors duration-300 text-sm font-medium uppercase tracking-wider ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#E10600]'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={toggleTheme} className={`p-2 rounded-lg transition-colors duration-300 ${isDark ? 'text-gray-300 hover:text-white bg-gray-800' : 'text-gray-700 hover:text-[#E10600]'}`}>
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className={`transition-colors duration-300 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-[#E10600]'}`}>
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
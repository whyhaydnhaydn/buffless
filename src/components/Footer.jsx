import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-black tracking-tight text-white">
              BUFF<span className="text-[#E10600]">LESS</span>
            </span>
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-md">
              Delivering premium quality repairs with speed and precision. 
              Trusted by thousands of professionals and enthusiasts worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-[#E10600] transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#E10600] transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#E10600] transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to={createPageUrl('Home')} className="text-white/60 hover:text-[#E10600] transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('Shop')} className="text-white/60 hover:text-[#E10600] transition-colors duration-300 text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={createPageUrl('ReturnPolicy')} className="text-white/60 hover:text-[#E10600] transition-colors duration-300 text-sm">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="w-4 h-4" />
                support@buffless.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Buffless. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to={createPageUrl('ReturnPolicy')} className="text-white/40 hover:text-[#E10600] transition-colors duration-300 text-sm">
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
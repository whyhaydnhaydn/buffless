import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';
import { useTheme } from '@/lib/ThemeContext';
import { useBanner } from '@/lib/BannerContext';
import { base44 } from '@/api/base44Client';

function trackVisit() {
  const page = window.location.pathname;
  const referrer = document.referrer
    ? (() => { try { return new URL(document.referrer).hostname; } catch { return document.referrer; } })()
    : 'Direct';
  const ua = navigator.userAgent;
  const device = /Mobi|Android/i.test(ua) ? 'Mobile' : /Tablet|iPad/i.test(ua) ? 'Tablet' : 'Desktop';
  base44.entities.PageVisit.create({ page, referrer, device }).catch(() => {});
}

export default function Layout({ children }) {
  const { isDark } = useTheme();
  const { visible } = useBanner();

  useEffect(() => { trackVisit(); }, []);

  return (
    <div className={isDark ? 'dark' : ''} style={{ colorScheme: isDark ? 'dark' : 'light' }}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
        <style>{`
          :root { --color-primary: #E10600; --color-background: ${isDark ? '#030712' : '#ffffff'}; }
          * { scrollbar-width: thin; scrollbar-color: #E10600 var(--color-background); }
          *::-webkit-scrollbar { width: 8px; }
          *::-webkit-scrollbar-track { background: var(--color-background); }
          *::-webkit-scrollbar-thumb { background: #E10600; border-radius: 4px; }
        `}</style>
        <PromoBanner />
        <div style={{ marginTop: visible ? '48px' : '0', transition: 'margin-top 0.4s ease' }}>
          <Header isDark={isDark} />
          <main className="pt-20">
            {children}
          </main>
          <Footer isDark={isDark} />
        </div>
      </div>
    </div>
  );
}
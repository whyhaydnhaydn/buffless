import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBanner } from '@/lib/BannerContext';

export default function PromoBanner() {
  const { visible, setVisible } = useBanner();

  const { data: settings = [] } = useQuery({
    queryKey: ['site-settings'],
    queryFn: () => base44.entities.SiteSettings.list('-created_date', 1),
  });

  const banner = settings[0];
  const wasDismissed = () => { try { return sessionStorage.getItem('buffless_banner_dismissed') === 'true'; } catch { return false; } };

  useEffect(() => {
    if (banner?.banner_enabled && !wasDismissed()) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [banner]);

  const dismiss = () => {
    try { sessionStorage.setItem('buffless_banner_dismissed', 'true'); } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && banner && (
        <motion.div
          key="banner"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-center px-10"
          style={{ backgroundColor: banner.banner_bg_color || '#E10600', minHeight: '48px' }}
        >
          <motion.p
            animate={{ opacity: [1, 0.75, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white font-semibold text-sm text-center py-3 cursor-default"
            onClick={() => banner.banner_link && window.open(banner.banner_link, '_blank')}
          >
            {banner.banner_text}
          </motion.p>
          <button
            onClick={dismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
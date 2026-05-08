import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Save, Eye } from 'lucide-react';

export default function BannerTab() {
  const qc = useQueryClient();
  const { data: settings = [] } = useQuery({
    queryKey: ['site-settings'],
    queryFn: () => base44.entities.SiteSettings.list('-created_date', 1),
  });

  const banner = settings[0];
  const [form, setForm] = useState({ banner_enabled: false, banner_text: '', banner_bg_color: '#E10600', banner_link: '' });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (banner) setForm({
      banner_enabled: banner.banner_enabled || false,
      banner_text: banner.banner_text || '',
      banner_bg_color: banner.banner_bg_color || '#E10600',
      banner_link: banner.banner_link || '',
    });
  }, [banner]);

  const save = useMutation({
    mutationFn: () => banner
      ? base44.entities.SiteSettings.update(banner.id, form)
      : base44.entities.SiteSettings.create(form),
    onSuccess: () => { qc.invalidateQueries(['site-settings']); setSaved(true); setTimeout(() => setSaved(false), 2000); }
  });

  return (
    <div className="max-w-xl">
      <h2 className="text-white font-bold text-xl mb-2">Promotional Banner</h2>
      <p className="text-gray-400 text-sm mb-6">This banner flashes at the top when visitors open the site.</p>

      {/* Live Preview */}
      {form.banner_text && (
        <div className="mb-6">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-1"><Eye className="w-3 h-3" /> Preview</p>
          <div
            className="rounded-xl py-3 px-6 text-center text-white text-sm font-semibold relative"
            style={{ backgroundColor: form.banner_bg_color || '#E10600' }}
          >
            {form.banner_text}
          </div>
        </div>
      )}

      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 space-y-5">
        {/* Toggle */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-semibold">Enable Banner</p>
            <p className="text-gray-400 text-sm">Show when visitors open the site</p>
          </div>
          <button
            onClick={() => setForm({ ...form, banner_enabled: !form.banner_enabled })}
            className={`w-12 h-6 rounded-full transition-all relative ${form.banner_enabled ? 'bg-[#E10600]' : 'bg-gray-600'}`}
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${form.banner_enabled ? 'right-1' : 'left-1'}`} />
          </button>
        </div>

        {/* Text */}
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Banner Text</label>
          <textarea
            rows={2}
            value={form.banner_text}
            onChange={(e) => setForm({ ...form, banner_text: e.target.value })}
            placeholder="🔥 Limited time offer! Use code BUFF20 for 20% off your order"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E10600] resize-none placeholder-gray-600"
          />
        </div>

        {/* Link */}
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Link URL (optional)</label>
          <input
            value={form.banner_link}
            onChange={(e) => setForm({ ...form, banner_link: e.target.value })}
            placeholder="https://buffless.com/shop"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#E10600] placeholder-gray-600"
          />
        </div>

        {/* Color */}
        <div>
          <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Background Color</label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={form.banner_bg_color}
              onChange={(e) => setForm({ ...form, banner_bg_color: e.target.value })}
              className="w-10 h-10 rounded-lg border border-gray-700 cursor-pointer bg-transparent"
            />
            <input
              value={form.banner_bg_color}
              onChange={(e) => setForm({ ...form, banner_bg_color: e.target.value })}
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#E10600]"
            />
          </div>
        </div>

        <button
          onClick={() => save.mutate()}
          className="flex items-center gap-2 bg-[#E10600] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#c00500] transition-colors"
        >
          <Save className="w-4 h-4" />
          {saved ? 'Saved!' : 'Save Banner'}
        </button>
      </div>
    </div>
  );
}
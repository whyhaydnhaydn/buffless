import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Monitor, Smartphone, TrendingUp, Globe } from 'lucide-react';
import { format, subDays, startOfDay } from 'date-fns';

const COLORS = ['#E10600', '#ef4444', '#f87171', '#fca5a5', '#fecaca'];

export default function AnalyticsTab() {
  const { data: visits = [], isLoading } = useQuery({
    queryKey: ['page-visits'],
    queryFn: () => base44.entities.PageVisit.list('-created_date', 2000),
  });

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i);
    const s = startOfDay(date);
    const e = new Date(s.getTime() + 86400000);
    const count = visits.filter(v => { const d = new Date(v.created_date); return d >= s && d < e; }).length;
    return { day: format(date, 'EEE'), count };
  });

  const referrers = visits.reduce((acc, v) => {
    const ref = v.referrer || 'Direct';
    acc[ref] = (acc[ref] || 0) + 1;
    return acc;
  }, {});
  const topReferrers = Object.entries(referrers).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const devices = visits.reduce((acc, v) => {
    const d = v.device || 'Desktop';
    acc[d] = (acc[d] || 0) + 1;
    return acc;
  }, {});
  const deviceData = Object.entries(devices).map(([name, value]) => ({ name, value }));

  const pages = visits.reduce((acc, v) => {
    const p = v.page || '/';
    acc[p] = (acc[p] || 0) + 1;
    return acc;
  }, {});
  const topPages = Object.entries(pages).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const todayCount = last7Days[last7Days.length - 1]?.count || 0;
  const weekCount = last7Days.reduce((s, d) => s + d.count, 0);
  const desktopPct = visits.length ? Math.round(((devices['Desktop'] || 0) / visits.length) * 100) : 0;
  const mobilePct = visits.length ? Math.round(((devices['Mobile'] || 0) / visits.length) * 100) : 0;

  if (isLoading) return <div className="text-gray-400 text-sm">Loading analytics...</div>;

  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-2">Site Analytics</h2>
      <p className="text-gray-400 text-sm mb-6">Real-time visitor data tracked as users browse the site.</p>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Visits', value: visits.length, icon: Users },
          { label: 'Today', value: todayCount, icon: TrendingUp },
          { label: 'Desktop', value: `${desktopPct}%`, icon: Monitor },
          { label: 'Mobile', value: `${mobilePct}%`, icon: Smartphone },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-[#E10600]" />
              <span className="text-gray-400 text-xs uppercase tracking-wider">{label}</span>
            </div>
            <p className="text-white font-bold text-2xl">{value}</p>
          </div>
        ))}
      </div>

      {/* Visits Chart */}
      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 mb-6">
        <h3 className="text-white font-semibold mb-1">Visits — Last 7 Days</h3>
        <p className="text-gray-400 text-xs mb-4">{weekCount} total this week</p>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={last7Days}>
            <XAxis dataKey="day" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#6b7280" fontSize={12} allowDecimals={false} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ background: '#111827', border: '1px solid #374151', borderRadius: 8, color: '#f9fafb' }} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <Bar dataKey="count" fill="#E10600" radius={[6, 6, 0, 0]} maxBarSize={48} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Top Referrers */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-white font-semibold mb-1 flex items-center gap-2"><Globe className="w-4 h-4 text-[#E10600]" /> Traffic Sources</h3>
          <p className="text-gray-400 text-xs mb-4">Where visitors come from</p>
          {topReferrers.length > 0 ? (
            <div className="space-y-3">
              {topReferrers.map(([source, count]) => (
                <div key={source}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 truncate max-w-[160px]">{source}</span>
                    <span className="text-white font-semibold">{count}</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E10600] rounded-full" style={{ width: `${(count / visits.length) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm py-4 text-center">No data yet. Visits will appear as users browse.</p>
          )}
        </div>

        {/* Top Pages */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
          <h3 className="text-white font-semibold mb-1">Top Pages</h3>
          <p className="text-gray-400 text-xs mb-4">Most visited pages</p>
          {topPages.length > 0 ? (
            <div className="space-y-3">
              {topPages.map(([page, count]) => (
                <div key={page}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300 font-mono text-xs truncate max-w-[160px]">{page}</span>
                    <span className="text-white font-semibold">{count}</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#E10600] rounded-full" style={{ width: `${(count / visits.length) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm py-4 text-center">No page data yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
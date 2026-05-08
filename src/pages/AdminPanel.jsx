import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { LogOut, Package, Star, FileText, Plus, Trash2, Edit2, Check, X, Image } from 'lucide-react';

function AdminGuard({ children }) {
  const navigate = useNavigate();
  const isAdmin = sessionStorage.getItem('buffless_admin') === 'true';
  useEffect(() => { if (!isAdmin) navigate('/admin-login'); }, [isAdmin]);
  return isAdmin ? children : null;
}

// ── Products Tab ──────────────────────────────────────────────
function ProductsTab() {
  const qc = useQueryClient();
  const { data: products = [] } = useQuery({ queryKey: ['products'], queryFn: () => base44.entities.Product.list('-created_date') });
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const save = useMutation({
    mutationFn: (d) => d.id ? base44.entities.Product.update(d.id, d) : base44.entities.Product.create(d),
    onSuccess: () => { qc.invalidateQueries(['products']); setEditing(null); setAdding(false); setForm({}); }
  });
  const remove = useMutation({
    mutationFn: (id) => base44.entities.Product.delete(id),
    onSuccess: () => qc.invalidateQueries(['products'])
  });

  const startEdit = (p) => { setEditing(p.id); setForm(p); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ name: '', price: '', description: '', image_url: '', category: 'scratch-remover', featured: false, in_stock: true }); };

  const FormRow = ({ label, field, type = 'text' }) => (
    <div>
      <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">{label}</label>
      {type === 'checkbox' ? (
        <input type="checkbox" checked={!!form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.checked })} className="w-5 h-5 accent-[#E10600]" />
      ) : type === 'select' ? (
        <select value={form[field] || ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#E10600]">
          {['scratch-remover','polish','kit','accessories'].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      ) : (
        <input type={type} value={form[field] || ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#E10600]" />
      )}
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-bold text-xl">Products</h2>
        <button onClick={startAdd} className="flex items-center gap-2 bg-[#E10600] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c00500] transition-colors">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      {(adding || editing) && (
        <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormRow label="Name" field="name" />
          <FormRow label="Price (USD)" field="price" type="number" />
          <FormRow label="Description" field="description" />
          <FormRow label="Image URL" field="image_url" />
          <FormRow label="Category" field="category" type="select" />
          <div className="flex gap-6">
            <div><label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">Featured</label><FormRow label="" field="featured" type="checkbox" /></div>
            <div><label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">In Stock</label><FormRow label="" field="in_stock" type="checkbox" /></div>
          </div>
          <div className="md:col-span-2 flex gap-3 pt-2">
            <button onClick={() => save.mutate(form)} className="flex items-center gap-2 bg-[#E10600] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#c00500] transition-colors">
              <Check className="w-4 h-4" /> Save
            </button>
            <button onClick={() => { setEditing(null); setAdding(false); }} className="flex items-center gap-2 bg-gray-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors">
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {products.map(p => (
          <div key={p.id} className="bg-gray-800 rounded-xl p-4 flex items-center gap-4 border border-gray-700">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
              {p.image_url ? <img src={p.image_url} alt={p.name} className="w-full h-full object-cover rounded-lg" /> : <Image className="w-5 h-5 text-gray-600" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold truncate">{p.name}</p>
              <p className="text-gray-400 text-sm">${p.price} · {p.category} · {p.in_stock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(p)} className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Edit2 className="w-4 h-4 text-gray-300" />
              </button>
              <button onClick={() => remove.mutate(p.id)} className="w-8 h-8 bg-red-900/40 rounded-lg flex items-center justify-center hover:bg-red-900/70 transition-colors">
                <Trash2 className="w-4 h-4 text-[#E10600]" />
              </button>
            </div>
          </div>
        ))}
        {products.length === 0 && <p className="text-gray-500 text-sm text-center py-8">No products yet.</p>}
      </div>
    </div>
  );
}

// ── Reviews Tab ───────────────────────────────────────────────
function ReviewsTab() {
  const qc = useQueryClient();
  const { data: reviews = [] } = useQuery({ queryKey: ['admin-reviews'], queryFn: () => base44.entities.Review.list('-created_date') });
  const remove = useMutation({ mutationFn: (id) => base44.entities.Review.delete(id), onSuccess: () => qc.invalidateQueries(['admin-reviews']) });

  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-6">Customer Reviews</h2>
      <div className="space-y-3">
        {reviews.map(r => (
          <div key={r.id} className="bg-gray-800 rounded-xl p-4 flex items-start gap-4 border border-gray-700">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-400 text-sm">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                <span className="text-gray-400 text-xs">{r.reviewer_name || 'Anonymous'}</span>
              </div>
              {r.title && <p className="text-white font-semibold text-sm">{r.title}</p>}
              <p className="text-gray-400 text-sm mt-1 line-clamp-2">{r.comment}</p>
            </div>
            <button onClick={() => remove.mutate(r.id)} className="w-8 h-8 bg-red-900/40 rounded-lg flex items-center justify-center hover:bg-red-900/70 transition-colors flex-shrink-0">
              <Trash2 className="w-4 h-4 text-[#E10600]" />
            </button>
          </div>
        ))}
        {reviews.length === 0 && <p className="text-gray-500 text-sm text-center py-8">No reviews yet.</p>}
      </div>
    </div>
  );
}

// ── Blog Tab ──────────────────────────────────────────────────
function BlogTab() {
  const qc = useQueryClient();
  const { data: posts = [] } = useQuery({ queryKey: ['admin-blog'], queryFn: () => base44.entities.BlogPost.list('-created_date') });
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [adding, setAdding] = useState(false);

  const save = useMutation({
    mutationFn: (d) => d.id ? base44.entities.BlogPost.update(d.id, d) : base44.entities.BlogPost.create(d),
    onSuccess: () => { qc.invalidateQueries(['admin-blog']); setEditing(null); setAdding(false); setForm({}); }
  });
  const remove = useMutation({ mutationFn: (id) => base44.entities.BlogPost.delete(id), onSuccess: () => qc.invalidateQueries(['admin-blog']) });

  const startEdit = (p) => { setEditing(p.id); setForm(p); setAdding(false); };
  const startAdd = () => { setAdding(true); setEditing(null); setForm({ title: '', excerpt: '', content: '', image_url: '', author: '', published: true }); };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-bold text-xl">Blog Posts</h2>
        <button onClick={startAdd} className="flex items-center gap-2 bg-[#E10600] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c00500] transition-colors">
          <Plus className="w-4 h-4" /> Add Post
        </button>
      </div>

      {(adding || editing) && (
        <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700 space-y-4">
          {[['Title', 'title'], ['Author', 'author'], ['Excerpt', 'excerpt'], ['Image URL', 'image_url'], ['Content', 'content']].map(([label, field]) => (
            <div key={field}>
              <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">{label}</label>
              {field === 'content' || field === 'excerpt' ? (
                <textarea rows={3} value={form[field] || ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#E10600] resize-none" />
              ) : (
                <input value={form[field] || ''} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#E10600]" />
              )}
            </div>
          ))}
          <div className="flex items-center gap-3">
            <input type="checkbox" checked={!!form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} className="w-5 h-5 accent-[#E10600]" />
            <label className="text-gray-400 text-sm">Published</label>
          </div>
          <div className="flex gap-3 pt-2">
            <button onClick={() => save.mutate(form)} className="flex items-center gap-2 bg-[#E10600] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#c00500] transition-colors">
              <Check className="w-4 h-4" /> Save
            </button>
            <button onClick={() => { setEditing(null); setAdding(false); }} className="flex items-center gap-2 bg-gray-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-600 transition-colors">
              <X className="w-4 h-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {posts.map(p => (
          <div key={p.id} className="bg-gray-800 rounded-xl p-4 flex items-center gap-4 border border-gray-700">
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold truncate">{p.title}</p>
              <p className="text-gray-400 text-sm">{p.author} · {p.published ? 'Published' : 'Draft'}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(p)} className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Edit2 className="w-4 h-4 text-gray-300" />
              </button>
              <button onClick={() => remove.mutate(p.id)} className="w-8 h-8 bg-red-900/40 rounded-lg flex items-center justify-center hover:bg-red-900/70 transition-colors">
                <Trash2 className="w-4 h-4 text-[#E10600]" />
              </button>
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-gray-500 text-sm text-center py-8">No blog posts yet.</p>}
      </div>
    </div>
  );
}

// ── Main Admin Panel ──────────────────────────────────────────
const tabs = [
  { key: 'products', label: 'Products', icon: Package },
  { key: 'reviews', label: 'Reviews', icon: Star },
  { key: 'blog', label: 'Blog', icon: FileText },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('products');
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('buffless_admin');
    navigate('/');
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-950">
        {/* Top Bar */}
        <div className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69801f49d55594176e8ca150/cc57405d9_BuffLess-Black-_-Red-with-Tagline-PNG.png"
              alt="BuffLess"
              className="h-10 w-auto brightness-0 invert"
            />
            <span className="text-gray-500 text-sm font-medium">Admin Panel</span>
          </div>
          <button onClick={logout} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-gray-900 p-1 rounded-xl border border-gray-800 w-fit">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === key ? 'bg-[#E10600] text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'reviews' && <ReviewsTab />}
          {activeTab === 'blog' && <BlogTab />}
        </div>
      </div>
    </AdminGuard>
  );
}
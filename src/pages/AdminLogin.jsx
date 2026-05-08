import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('buffless_admin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-gray-900 rounded-2xl border border-gray-800 p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-[#E10600]/10 rounded-2xl flex items-center justify-center mb-4">
            <Lock className="w-7 h-7 text-[#E10600]" />
          </div>
          <h1 className="text-white font-black text-2xl">Site Login</h1>
          <p className="text-gray-500 text-sm mt-1">Buffless Admin Panel</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#E10600] transition-colors"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#E10600] transition-colors"
              placeholder="Enter password"
            />
          </div>
          {error && <p className="text-[#E10600] text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#E10600] text-white py-3 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-[#c00500] transition-colors mt-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
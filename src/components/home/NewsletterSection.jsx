import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E10600] text-sm font-semibold uppercase tracking-widest mb-4 block">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Subscribe to Our <span className="text-[#E10600]">Newsletter</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Get exclusive offers, product updates, and repair tips delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#E10600]/50 transition-colors duration-300"
              required
            />
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center justify-center gap-2 bg-[#E10600] text-white px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Subscribe
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
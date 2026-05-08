import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 'MGJRjP4ON-o', title: 'Buffless in Action' },
  { id: 'n9HZWA-oA2M', title: 'Buffless Demo' },
];

export default function VideoSection() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            SEE BUFFLESS <span className="text-[#E10600]">IN ACTION!</span>
          </h2>
          <p className="text-gray-400 text-lg">Watch how BuffLess transforms vehicles in seconds</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
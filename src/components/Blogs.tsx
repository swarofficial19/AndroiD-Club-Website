import React, { useState } from 'react';
import { BookOpen, Sparkles, Clock, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EDUCATIONAL_BLOGS } from '../data/blogs';
import { BlogPost } from '../types';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Blogs: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blogs" className="py-24 bg-transparent relative border-t border-[#3DDC84]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101512] border border-[#3DDC84]/30 text-xs font-semibold text-[#3DDC84] mb-3 font-mono">
            <Sparkles size={14} />
            <span>LEARNING HUB & ARTICLES</span>
            <span className="text-slate-500">·</span>
            <span className="text-white">SDC TECH ARCHIVES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            LEARN. EXPLORE. BUILD.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Curated technical write-ups and architectural explanations authored by our core members to help fellow students master modern Android engineering and reactive application design.
          </p>
        </motion.div>

        {/* Four Educational Article Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {EDUCATIONAL_BLOGS.map((article, idx) => (
            <motion.div
              key={article.id}
              variants={fadeIn('up', idx * 0.1)}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/20 hover:border-[#3DDC84]/50 transition-all duration-300 text-left flex flex-col justify-between glow-card shadow-xl group"
            >
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#3DDC84]">
                    ARTICLE {article.number}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Clock size={12} className="text-[#3DDC84]" />
                    {article.estimatedReadTime}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#101512] border border-[#3DDC84]/20 text-[10px] font-mono text-[#00FF87] uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#00FF87] transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {article.description}
                </p>

                {/* Key Concepts Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {article.topics.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#050806] border border-white/5 text-[10px] font-mono text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More Interaction */}
              <button
                onClick={() => setSelectedArticle(article)}
                className="w-full pt-4 border-t border-[#3DDC84]/15 flex items-center justify-between text-xs font-semibold text-[#3DDC84] hover:text-[#00FF87] transition-colors group-hover:translate-x-0.5"
              >
                <span>Read Full Overview</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Article Deep-Dive */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl rounded-3xl bg-[#0A0D0B] border border-[#3DDC84]/30 shadow-2xl p-6 sm:p-8 text-left"
              >
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                  <span className="text-[#3DDC84] font-bold">ARTICLE {selectedArticle.number}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-[#00FF87]">{selectedArticle.category}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">{selectedArticle.estimatedReadTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  {selectedArticle.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {selectedArticle.description}
                </p>

                <div className="p-5 rounded-2xl bg-[#050806] border border-[#3DDC84]/20 mb-6">
                  <p className="text-xs font-mono uppercase text-[#3DDC84] tracking-wider mb-2">
                    Executive Summary & Technical Value
                  </p>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {selectedArticle.summary}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Architectural Takeaways:
                  </p>
                  {selectedArticle.topics.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-[#3DDC84]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#3DDC84]/15 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    SDC Android Club · Learning Resources
                  </span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 rounded-xl bg-[#3DDC84] hover:bg-[#00FF87] text-black font-semibold text-xs transition"
                  >
                    Close Overview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

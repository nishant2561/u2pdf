
import React, { useState, useMemo } from 'react';
import { TOOLS } from '../constants';
import ToolCard from './ToolCard';
import { ToolCategory } from '../types';

interface HomeViewProps {
  onSelectTool: (toolId: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onSelectTool }) => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('All');

  const categories: ToolCategory[] = ['All', 'Conversion', 'Editing', 'Security', 'Popular'];

  const filteredTools = useMemo(() => {
    if (activeCategory === 'All') return TOOLS;
    if (activeCategory === 'Popular') return TOOLS.filter(t => t.hot);
    return TOOLS.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pb-20 animate-fade-in">
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-800 dark:text-white">
          The Ultimate <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
            PDF Solution
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          Convert, Edit, Merge, and Split PDFs instantly. 100% Free and Client-Side Secure. No file uploads to server.
        </p>
        <button 
          onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
        >
          Start Converting
        </button>
      </section>

      <section id="tools" className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">All PDF Tools</h2>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800/60 rounded-2xl md:rounded-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                {cat === 'Popular' ? '🔥 ' : ''}{cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="animate-fade-in">
              <ToolCard 
                tool={tool} 
                onClick={() => onSelectTool(tool.id)} 
              />
            </div>
          ))}
          {filteredTools.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-gray-400">No tools found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-24 px-6">
        <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/40 border border-white/40 dark:border-white/10 p-10 md:p-14 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">🚀 About U2PDF – Best Online PDF Tools</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            <strong>U2PDF</strong> is a powerful, all-in-one online PDF platform designed to help users convert, edit, merge, compress, and secure PDF files instantly. Now featuring our advanced <strong>Text to PDF</strong> and <strong>PDF to Picture</strong> converters, our goal is to provide a simple, fast, and free PDF solution for students, professionals, offices, and businesses.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">Why Choose U2PDF?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-primary/5 dark:bg-white/5 rounded-xl border border-white/20">
               <span className="text-2xl">⚡</span> 
               <span className="font-semibold text-gray-700 dark:text-gray-200">Fast PDF conversion</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary/5 dark:bg-white/5 rounded-xl border border-white/20">
               <span className="text-2xl">🛠️</span> 
               <span className="font-semibold text-gray-700 dark:text-gray-200">Client-Side Secure</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary/5 dark:bg-white/5 rounded-xl border border-white/20">
               <span className="text-2xl">🔒</span> 
               <span className="font-semibold text-gray-700 dark:text-gray-200">Private Processing</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-primary/5 dark:bg-white/5 rounded-xl border border-white/20">
               <span className="text-2xl">🎁</span> 
               <span className="font-semibold text-gray-700 dark:text-gray-200">100% Free Forever</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-10 mb-6">Explore Our PDF Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {TOOLS.map((item, index) => (
              <div key={index} className="bg-white/40 dark:bg-gray-700/40 p-5 rounded-xl border border-white/20 transition-colors hover:bg-white/60 dark:hover:bg-gray-700/60">
                <h4 className="font-bold text-primary text-base mb-2">{index + 1}. {item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="font-bold text-primary text-lg">⭐ U2PDF – The Fastest, Free & Most Complete Online PDF Toolset.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;

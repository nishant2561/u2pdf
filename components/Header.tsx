
import React, { useState } from 'react';
import { TOOLS } from '../constants';
import { ViewType, MainCategory, SubCategory } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewType, toolId?: string) => void;
  toggleTheme: () => void;
  isDark: boolean;
  searchQuery: string;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, toggleTheme, isDark, searchQuery, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainCategories: MainCategory[] = ['CONVERT', 'COMPRESS'];
  const subCategories: SubCategory[] = ['PDF/DOC', 'IMAGE', 'VIDEO/AUDIO'];

  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-white/10 shadow-xl rounded-2xl max-w-7xl mx-auto px-6 py-3 flex justify-between items-center transition-all duration-300 relative">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => { onNavigate('home'); onSearch(''); }}
            className="flex items-center gap-1 text-2xl font-black tracking-tighter cursor-pointer text-gray-800 dark:text-gray-100 hover:opacity-80 transition-opacity"
          >
            U2<span className="text-primary">PDF</span>
          </button>

          {/* Search Bar - Real-time filtering */}
          <div className="hidden md:flex relative items-center">
            <span className="absolute left-3 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search tools..." 
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-64 rounded-full bg-white/40 dark:bg-gray-900/40 border border-white/20 dark:border-white/10 outline-none focus:border-primary/50 text-sm transition-all focus:w-80"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => { onNavigate('home'); onSearch(''); }} 
            className="font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Home
          </button>

          <div className="group relative h-full flex items-center">
            <button className="font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer">
              All Tools <span>▾</span>
            </button>
            
            {/* Extended All Tools Menu showing the full hierarchy - Comprehensive List */}
            <div className="absolute top-full right-0 mt-4 w-[850px] p-6 rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 border border-white/40 dark:border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-y-auto max-h-[85vh]">
              <div className="grid grid-cols-2 gap-8">
                {mainCategories.map(mainCat => (
                  <div key={mainCat} className="space-y-4">
                    <h4 className="text-xs font-black text-primary tracking-widest uppercase mb-2 border-b border-primary/20 pb-1">{mainCat}</h4>
                    {subCategories.map(subCat => {
                      const tools = TOOLS.filter(t => t.mainCategory === mainCat && t.subCategory === subCat);
                      if (tools.length === 0) return null;
                      return (
                        <div key={subCat} className="space-y-1">
                          <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1">{subCat}</h5>
                          <div className="grid grid-cols-1 gap-1">
                            {tools.map(tool => (
                              <button 
                                key={tool.id}
                                onClick={() => onNavigate('tool', tool.id)}
                                className="flex items-center gap-2 p-1.5 rounded hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-150 text-gray-600 dark:text-gray-300 w-full text-left bg-transparent border-none"
                              >
                                <span className="text-lg">{tool.icon}</span>
                                <span className="font-medium text-xs">{tool.title}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xl bg-transparent border-none cursor-pointer"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          
          <button 
            className="md:hidden text-2xl bg-transparent border-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-24 left-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl flex flex-col gap-4 z-40 md:hidden border border-gray-100 dark:border-gray-700 max-h-[80vh] overflow-y-auto">
           <div className="relative mb-2">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Search tools..." 
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-900 border-none outline-none focus:ring-2 ring-primary/30"
            />
          </div>
          <button 
            onClick={() => { onNavigate('home'); onSearch(''); setIsMenuOpen(false); }}
            className="text-left font-bold text-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg w-full bg-transparent border-none"
          >
            Home
          </button>
          
          <div className="space-y-6">
            {mainCategories.map(mainCat => (
              <div key={mainCat} className="space-y-3">
                <div className="text-xs font-black text-primary px-2 uppercase tracking-widest border-l-2 border-primary">{mainCat}</div>
                {subCategories.map(subCat => {
                  const tools = TOOLS.filter(t => 
                    t.mainCategory === mainCat && 
                    t.subCategory === subCat &&
                    (searchQuery === '' || t.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  );
                  if (tools.length === 0) return null;
                  return (
                    <div key={subCat} className="pl-2 space-y-1">
                      <div className="text-[10px] font-bold text-gray-400 uppercase">{subCat}</div>
                      <div className="grid grid-cols-2 gap-1">
                        {tools.map(tool => (
                          <button 
                            key={tool.id}
                            onClick={() => { onNavigate('tool', tool.id); setIsMenuOpen(false); }}
                            className="text-left text-xs p-2 rounded hover:bg-primary/10 text-gray-700 dark:text-gray-200 w-full bg-transparent border-none"
                          >
                            {tool.icon} {tool.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import React, { useState } from 'react';
import { TOOLS } from '../constants';
import { ViewType } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewType, toolId?: string) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, toggleTheme, isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 border border-white/40 dark:border-white/10 shadow-xl rounded-2xl max-w-7xl mx-auto px-6 py-3 flex justify-between items-center transition-all duration-300 relative">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1 text-2xl font-black tracking-tighter cursor-pointer text-gray-800 dark:text-gray-100 hover:opacity-80 transition-opacity"
        >
          U2<span className="text-primary">PDF</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')} 
            className="font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            Home
          </button>

          <div className="group relative h-full flex items-center">
            <button className="font-semibold text-gray-700 dark:text-gray-200 hover:text-primary transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer">
              All Tools <span>▾</span>
            </button>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] p-6 rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 border border-white/40 dark:border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-2 gap-2 z-50">
              {TOOLS.map(tool => (
                <button 
                  key={tool.id}
                  onClick={() => onNavigate('tool', tool.id)}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 text-gray-600 dark:text-gray-300 w-full text-left bg-transparent border-none"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="font-medium text-sm">{tool.title}</span>
                </button>
              ))}
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
        <div className="fixed top-24 left-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl flex flex-col gap-4 z-40 md:hidden border border-gray-100 dark:border-gray-700">
           <button 
            onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
            className="text-left font-bold text-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg w-full bg-transparent border-none"
          >
            Home
          </button>
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-2 uppercase tracking-wider">Tools</div>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
            {TOOLS.map(tool => (
              <button 
                key={tool.id}
                onClick={() => { onNavigate('tool', tool.id); setIsMenuOpen(false); }}
                className="text-left text-sm p-2 rounded hover:bg-primary/10 text-gray-700 dark:text-gray-200 w-full bg-transparent border-none"
              >
                {tool.icon} {tool.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ToolView from './components/ToolView';
import LegalViews from './components/LegalViews';
import { ViewType, Tool } from './types';
import { TOOLS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('u2pdf_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      const legalPages: ViewType[] = ['legal', 'security', 'privacy', 'terms', 'cookies'];
      if (legalPages.includes(hash as ViewType)) {
        setCurrentView(hash as ViewType);
        setActiveTool(null);
        return;
      }

      if (hash) {
        const tool = TOOLS.find(t => t.id === hash);
        if (tool) {
          setActiveTool(tool);
          setCurrentView('tool');
          return;
        }
      }
      setCurrentView('home');
      setActiveTool(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('u2pdf_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('u2pdf_theme', 'light');
    }
  };

  const handleNavigate = (view: ViewType, toolId?: string) => {
    if (view === 'home') {
      window.location.hash = '';
      setSearchQuery('');
    } else if (view === 'tool' && toolId) {
      window.location.hash = toolId;
    } else {
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary ${isDark ? 'dark' : ''}`}>
      <div className="fixed inset-0 -z-10 bg-[#fdfbfb] dark:bg-[#1e272e] transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/50 via-white/0 to-white/0 dark:from-gray-800 dark:via-gray-900 dark:to-black opacity-60"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <Header 
        onNavigate={handleNavigate} 
        toggleTheme={toggleTheme} 
        isDark={isDark} 
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />

      <main className="flex-1 mt-8">
        {currentView === 'home' && (
          <HomeView 
            onSelectTool={(id) => handleNavigate('tool', id)} 
            searchQuery={searchQuery}
          />
        )}
        {currentView === 'tool' && activeTool && (
          <ToolView tool={activeTool} onBack={() => handleNavigate('home')} />
        )}
        {['legal', 'security', 'privacy', 'terms', 'cookies'].includes(currentView) && (
          <LegalViews type={currentView as any} onBack={() => handleNavigate('home')} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;


import React from 'react';
import { ViewType } from '../types';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full py-12 text-center text-gray-500 dark:text-gray-400 mt-auto border-t border-white/20 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
        <div className="space-y-4">
          <div className="text-2xl font-black tracking-tighter text-gray-800 dark:text-white">U2<span className="text-primary">PDF</span></div>
          <p className="text-sm leading-relaxed">The ultimate suite for PDF, image, and video tools. 100% private and secure processing directly in your browser.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-4">Legal & Privacy</h4>
          <ul className="text-sm space-y-2">
            <li><button onClick={() => onNavigate('legal')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0">Legal Disclaimer</button></li>
            <li><button onClick={() => onNavigate('security')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0">Security</button></li>
            <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0">Privacy Policy</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white mb-4">Support & Terms</h4>
          <ul className="text-sm space-y-2">
            <li><button onClick={() => onNavigate('terms')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0">Terms & Conditions</button></li>
            <li><button onClick={() => onNavigate('cookies')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0">Cookies Policy</button></li>
            <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0">Back to Top</button></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 text-xs">
        <p>© {new Date().getFullYear()} U2PDF. All Rights Reserved. Built for privacy.</p>
      </div>
    </footer>
  );
};

export default Footer;

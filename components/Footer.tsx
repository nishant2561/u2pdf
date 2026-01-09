
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 text-center text-gray-500 dark:text-gray-400 mt-auto border-t border-white/20">
      <div className="text-xl font-black mb-2 tracking-tighter">U2<span className="text-primary">PDF</span></div>
      <p className="text-sm">© {new Date().getFullYear()} U2PDF. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

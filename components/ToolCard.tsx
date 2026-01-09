
import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group backdrop-blur-xl bg-white/60 dark:bg-gray-800/40 border border-white/40 dark:border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:border-primary/50 cursor-pointer transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
    >
      <div className="text-5xl mb-6 filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{tool.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{tool.desc}</p>
    </div>
  );
};

export default ToolCard;

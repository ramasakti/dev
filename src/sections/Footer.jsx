import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
           <p className="text-xl font-black text-slate-900 tracking-tighter">Rama<span className="text-blue-600">Sakti</span></p>
           <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-2">&copy; {new Date().getFullYear()} — Production Ready</p>
        </div>

        <div className="flex gap-8">
           <a href="#about" className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors">About</a>
           <a href="#simskul" className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors">SIMSKUL</a>
           <a href="#expertise" className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-widest transition-colors">Stack</a>
        </div>

        <div className="flex items-center gap-4">
           <div className="w-10 h-[1px] bg-slate-200"></div>
           <p className="text-xs font-mono text-slate-400">BUILDING_SYSTEMS_EVERYDAY</p>
           <div className="w-10 h-[1px] bg-slate-200"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

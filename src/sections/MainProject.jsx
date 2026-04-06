import React from 'react';
import Section from '../components/Section';

const MainProject = () => {
  const features = [
    { title: 'Absensi Siswa', desc: 'Real-time attendance using face recognition API.', icon: 'F' },
    { title: 'Digital Flipbook', desc: 'Learning materials converted into interactive flipbooks.', icon: 'B' },
    { title: 'Online Quiz', desc: 'Secure and scalable examinations for students.', icon: 'Q' },
    { title: 'Digital Payroll', desc: 'Automated payroll systems for teachers and staff.', icon: 'P' },
    { title: 'WhatsApp Automation', desc: 'Automated notifications for attendance and school updates via WAHA.', icon: 'W' },
    { title: 'Multi Subdomain', desc: 'Structured production with specialized subdomains.', icon: 'S' },
    { title: 'Object Storage', desc: 'Efficient file management for school data.', icon: 'O' },
  ];

  const subdomains = [
    { name: 'simskul.id', url: 'https://simskul.id' },
    { name: 'kuis.simskul.id', url: 'https://kuis.simskul.id' },
    { name: 'flipbook.simskul.id', url: 'https://flipbook.simskul.id' },
    { name: 'api.simskul.id', url: 'https://api.simskul.id' },
  ];

  return (
    <Section id="simskul" subtitle="Flagship Project" title="SIMSKUL — Sistem Informasi Manajemen Sekolah">
      <div className="grid lg:grid-cols-12 gap-12 mt-12 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800 p-8 lg:p-16">
        
        {/* Left Column: Tech & Description */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-400 opacity-50"></span>
            Comprehensive Ecosystem
          </p>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
            Complete digital<br />transformation for schools.
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Sistem Informasi Manajemen Sekolah yang digunakan secara aktif oleh guru dan siswa. 
            Built on a high-availability infrastructure with specialized services for attendance, learning, and administration.
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {['NextJS', 'ExpressJS', 'MySQL', 'Face-api.js', 'WAHA', 'VPS Ubuntu', 'Nginx', 'PM2', 'Docker', 'Object Storage'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-semibold rounded-xl border border-slate-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {subdomains.map((sub) => (
              <a key={sub.name} href={sub.url} target="_blank" rel="noopener noreferrer" 
                 className="group inline-flex items-center justify-between p-4 bg-slate-800/50 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 rounded-2xl transition-all duration-300">
                <span className="text-white font-bold tracking-wide">{sub.name}</span>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Features Grid */}
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-6 h-full">
            {features.map((f, i) => (
              <div key={i} className={`p-8 bg-slate-800/30 border border-slate-800 rounded-3xl hover:bg-slate-800/50 transition-colors group ${i === 0 ? 'bg-blue-600/10 border-blue-600/20' : ''}`}>
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl text-2xl font-black mb-6 transition-transform duration-500 group-hover:scale-110 shadow-lg ${i === 0 ? 'bg-blue-600 text-white' : 'bg-slate-700 text-blue-400'}`}>
                  {f.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
            
            {/* Visual Callout */}
            <div className="sm:col-span-2 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-between text-white overflow-hidden relative group">
              <div className="relative z-10">
                 <h4 className="text-3xl font-black italic tracking-tighter mb-2">LIVE IN PRODUCTION</h4>
                 <p className="text-blue-100 font-medium">Handling daily student attendance and staff payroll.</p>
              </div>
              <div className="absolute right-[-20px] top-[-20px] text-white/10 text-[10rem] font-black select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000 rotate-12">
                SIM
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default MainProject;

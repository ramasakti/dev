import React from 'react';
import Section from '../components/Section';

const TechnicalExpertise = () => {
  const skills = [
    { name: 'Laravel', icon: 'L' },
    { name: 'NextJS', icon: 'N' },
    { name: 'ExpressJS', icon: 'E' },
    { name: 'MySQL', icon: 'M' },
    { name: 'PostgreSQL', icon: 'P' },
    { name: 'Git', icon: 'G' },
    { name: 'Docker', icon: 'D' },
    { name: 'Nginx', icon: 'N' },
    { name: 'WAHA', icon: 'W' },
    { name: 'Ubuntu', icon: 'U' },
  ];

  return (
    <Section id="expertise" subtitle="Technical Proficiency" title="Production-Grade Technologies. Built to Support Real Users.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 bg-white rounded-[3rem] p-12 border border-slate-200">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className={`w-20 h-20 flex items-center justify-center rounded-3xl bg-slate-50 border border-slate-200 text-3xl font-black text-slate-800 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-2xl group-hover:-rotate-6`}>
              {skill.icon}
            </div>
            <p className="mt-6 text-sm font-bold text-slate-500 group-hover:text-slate-900 group-hover:scale-110 transition-all duration-300 uppercase tracking-widest">{skill.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechnicalExpertise;

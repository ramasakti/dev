import React from 'react';
import Section from '../components/Section';

const About = () => {
  return (
    <Section id="about" subtitle="About Me" title="Engineer focused on real-world school solutions.">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
           <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-medium">
             Rama adalah engineer yang berfokus membangun sistem informasi sekolah dari nol hingga production. Berpengalaman mengembangkan arsitektur NextJS, ExpressJS, Face Recognition, VPS deployment, dan object storage untuk kebutuhan sekolah.
           </p>
           <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
             I don't just write code; I build infrastructure. My goal is to bridge the gap between complex software and the daily needs of educators and students. Every line I write is designed to handle thousands of requests in a live production environment.
           </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 group">
          <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 transition-all duration-500 group-hover:scale-95 hover:!scale-100 hover:shadow-2xl">
            <h4 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter italic">0 to</h4>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Production</p>
          </div>
          <div className="p-8 bg-blue-600 border border-blue-500 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <h4 className="text-5xl font-black text-white mb-2 tracking-tighter">Live</h4>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Systems</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

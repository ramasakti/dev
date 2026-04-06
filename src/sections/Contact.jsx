import React from 'react';
import Section from '../components/Section';

const Contact = () => {
  return (
    <Section id="contact" subtitle="Get In Touch" title="Let’s Discuss Your Next Production System.">
      <div className="grid lg:grid-cols-2 gap-16 mt-12 bg-white p-12 lg:p-24 rounded-[4rem] border border-slate-200 overflow-hidden relative group">
          
          {/* Background decoration */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-50 rounded-full -z-10 group-hover:scale-125 transition-transform duration-1000"></div>

          <div>
             <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">Ready to build<br />something real?</h3>
             <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
               Whether it's a school management system or a complex cloud infrastructure, I'm ready to bring your vision to production.
             </p>
             
             <div className="flex flex-col gap-6">
                <a href="mailto:ramasakti1337@gmail.com" className="group flex items-center gap-6 p-6 bg-slate-50 border border-slate-100 hover:border-blue-600 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1">
                   <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200 transition-transform group-hover:rotate-12">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   </div>
                   <div>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">Email Me</p>
                      <p className="text-2xl font-black text-slate-900 tracking-tight">ramasakti1337@gmail.com</p>
                   </div>
                </a>

                <a href="https://github.com/ramasakti" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 p-6 bg-slate-50 border border-slate-100 hover:border-blue-600 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1">
                   <div className="w-16 h-16 flex items-center justify-center bg-slate-900 rounded-2xl text-white shadow-lg transition-transform group-hover:rotate-12">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                   </div>
                   <div>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-1">Follow My Work</p>
                      <p className="text-2xl font-black text-slate-900 tracking-tight">github.com/ramasakti</p>
                   </div>
                </a>
             </div>
          </div>

          <div className="flex items-center justify-center relative">
             <div className="w-full aspect-square bg-blue-600 rounded-[3rem] p-1 shadow-2xl rotate-3 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-slate-900 rounded-[2.8rem] p-12 text-blue-400 font-mono text-lg flex flex-col justify-center">
                   <p className="mb-4">SYSTEM_STATUS: <span className="text-green-500">READY</span></p>
                   <p className="mb-4">UPLOADING_CONTACT_REQUST...</p>
                   <p className="mb-4">ENCRYPTING_MESSAGE...</p>
                   <p className="mb-8 font-black text-white text-3xl italic animate-pulse tracking-tighter">WAITING_FOR_YOU</p>
                   <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 animate-[loading_2s_ease-in-out_infinite]" style={{width: '60%'}}></div>
                   </div>
                </div>
             </div>
          </div>

      </div>
    </Section>
  );
};

export default Contact;

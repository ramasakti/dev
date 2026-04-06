import React from 'react';
import Section from '../components/Section';

const ProductionProblems = () => {
  const problems = [
    "Blob file upload handling",
    "Image cropper 1:1",
    "Complex Excel import/export",
    "Mail merge automation",
    "QR code mass generation",
    "Knex complex queries",
    "NextJS auth & session handling",
    "Object storage integration",
    "Face recognition implementation",
    "WhatsApp Notification Automation",
    "WAHA Orchestrator Deployment",
  ];

  return (
    <Section id="solutions" subtitle="Production Realities" title="Real Problems. Solved with Efficient Engineering.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 bg-blue-50/50 p-8 lg:p-16 rounded-[4rem] border border-blue-100">
        {problems.map((prob, i) => (
          <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-2xl text-white font-black text-sm group-hover:rotate-12 transition-transform">
              ✓
            </div>
            <p className="text-slate-800 font-bold text-lg tracking-tight">{prob}</p>
          </div>
        ))}
        {/* Engineering Quote */}
        <div className="lg:col-span-3 mt-12 p-10 bg-slate-900 rounded-3xl text-center relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 text-blue-500 font-mono text-sm opacity-20 group-hover:opacity-40 transition-opacity">
              &lt;Engineering_Standards /&gt;
           </div>
           <p className="text-2xl md:text-3xl font-black italic text-white tracking-tighter leading-tight">
             "Engineering is not about finding the perfect solution. It's about finding the right one that handles the real-world chaos."
           </p>
        </div>
      </div>
    </Section>
  );
};

export default ProductionProblems;

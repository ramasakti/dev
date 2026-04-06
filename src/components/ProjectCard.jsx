import React from 'react';

const ProjectCard = ({ title, description, stack, links, imageUrl }) => {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      <div className="aspect-video bg-slate-100 relative overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium italic">
            Screenshot: {title}
          </div>
        )}
        <div className="absolute top-4 right-4 flex gap-2">
           {links?.map((link, idx) => (
             <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" 
                className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-slate-700 hover:text-blue-600 shadow-sm transition-colors border border-slate-100">
               {link.icon || (
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
               )}
             </a>
           ))}
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 uppercase tracking-tight">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

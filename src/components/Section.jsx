import React from 'react';

const Section = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16">
            {subtitle && <p className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3">{subtitle}</p>}
            {title && <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

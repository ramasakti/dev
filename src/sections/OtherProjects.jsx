import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const OtherProjects = () => {
  const projects = [
    {
      title: 'AliFarm Digital',
      description: 'A dedicated crowdfunding platform for livestock management and funding. Built with Python/Flask to handle complex transaction flows.',
      stack: ['Flask', 'Python', 'TailwindCSS'],
      imageUrl: null 
    },
    {
      title: 'Aplikasi Bansos',
      description: 'Laravel-based social assistance application deployed on VPS with Nginx and PHP-FPM, serving DPC PDI Perjuangan Kabupaten Pasuruan.',
      stack: ['Laravel', 'Nginx', 'PHP-FPM', 'MySQL'],
      imageUrl: null
    }
  ];

  return (
    <Section id="projects" subtitle="Other Works" title="Diverse Solutions. Built to Scale.">
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </Section>
  );
};

export default OtherProjects;

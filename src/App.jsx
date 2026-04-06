import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import MainProject from './sections/MainProject';
import OtherProjects from './sections/OtherProjects';
import TechnicalExpertise from './sections/TechnicalExpertise';
import ProductionProblems from './sections/ProductionProblems';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MainProject />
        <OtherProjects />
        <TechnicalExpertise />
        <ProductionProblems />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

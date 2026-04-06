import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[90svh] flex items-center pt-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100/30 rounded-full -z-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Available for Production Systems
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Rama <span className="text-blue-600">Sakti</span><br />
            Hafidz F.A
          </h1>

          <p className="text-2xl md:text-3xl font-medium text-slate-600 leading-tight mb-10 max-w-xl">
            "Membangun ekosistem digital sekolah yang terjangkau, berkualitas, dan fleksibel"
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#simskul" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 hover:-translate-y-1 transition-all shadow-xl shadow-slate-200">
              Explore Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:-translate-y-1 transition-all">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl rotate-3 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent group-hover:opacity-0 transition-opacity duration-700"></div>
            {/* Abstract code visualization placeholder */}
            <div className="w-full h-full bg-slate-900 p-8 font-mono text-sm text-blue-400 overflow-hidden select-none opacity-80 group-hover:scale-110 transition-transform duration-1000">
              <pre>
                {`const buildSystem = async (school) => {
  const simskul = new System({
    modules: [
       "FaceRecognition",
       "RFID Card",
       "QR Code",
       "WhatsApp Notification",
       "Digital Flipbook",
       "Online Examination System"
    ],
    deployment: "VPS-Ubuntu",
    scaling: "Docker"
  });

  await simskul.provision();
  console.log("Serving 1000+ users");
};`}
              </pre>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 -rotate-6">
            <p className="text-blue-600 text-4xl font-black mb-1">100%</p>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Uptime Goal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

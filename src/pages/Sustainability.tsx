import React from 'react';
import { motion } from 'framer-motion';

const Sustainability = () => {
  const pillars = [
    {
      title: 'Aluminio 100% Reciclable',
      desc: 'El aluminio es un material infinitamente reciclable. El 75% de todo el aluminio producido en la historia sigue en uso hoy.',
      icon: 'sync'
    },
    {
      title: 'Eficiencia RPT',
      desc: 'Nuestros sistemas con Ruptura de Puente Térmico reducen hasta un 40% el consumo de energía en climatización.',
      icon: 'eco'
    },
    {
      title: 'Huella de Carbono',
      desc: 'Optimizamos nuestra logística y procesos de extrusión para minimizar las emisiones de CO2 por tonelada producida.',
      icon: 'co2'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0b0e12]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Naturaleza y Sostenibilidad"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e12] via-[#0b0e12]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#a0d87a] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Compromiso Ambiental
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
          >
            Diseño para el <br/>
            <span className="text-[#a0d87a]">Infinito</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl text-lg leading-relaxed"
          >
            En Aluvalle, entendemos que la arquitectura del futuro debe ser circular. Trabajamos con el metal más sustentable del planeta para crear hogares eficientes y conscientes.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a1d21]/80 backdrop-blur-xl border border-gray-800 p-10 rounded-3xl"
            >
              <div className="w-14 h-14 bg-[#a0d87a]/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#a0d87a] text-3xl">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep Content */}
      <section className="max-w-5xl mx-auto px-4 py-32 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Certificaciones LEED y Etiquetado de Eficiencia</h2>
        <p className="text-gray-400 text-lg leading-loose mb-16">
          Nuestros sistemas están ensayados bajo las normas de etiquetado de eficiencia energética, permitiendo a los edificios alcanzar las más altas certificaciones internacionales de sustentabilidad. La elección de una carpintería de aluminio de alta gama con RPT es la decisión más influyente en la reducción de la huella operativa de una vivienda.
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50">
          <span className="text-white font-bold tracking-widest uppercase border-x border-gray-800 px-8">IRAM 11910</span>
          <span className="text-white font-bold tracking-widest uppercase border-x border-gray-800 px-8">LEED SILVER</span>
          <span className="text-white font-bold tracking-widest uppercase border-x border-gray-800 px-8">A+ EFFICIENCY</span>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;

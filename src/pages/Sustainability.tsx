import React from 'react';
import { motion } from 'framer-motion';

const Sustainability = () => {
  const pillars = [
    {
      title: 'Aluminio 100% Reciclable',
      desc: 'El aluminio es un material infinitamente reciclable. El 75% de todo el aluminio producido en la historia sigue en uso hoy.',
      icon: 'sync',
    },
    {
      title: 'Eficiencia RPT',
      desc: 'Nuestros sistemas con Ruptura de Puente Térmico reducen hasta un 40% el consumo de energía en climatización.',
      icon: 'eco',
    },
    {
      title: 'Huella de Carbono',
      desc: 'Optimizamos nuestra logística y procesos de extrusión para minimizar las emisiones de CO2 por tonelada producida.',
      icon: 'co2',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background transition-colors duration-500 relative">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/gallery/showroom.jpg"
          className="bg-image-theme animate-slow-zoom"
          alt=""
        />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/industrial.jpg"
            alt="Naturaleza y Sostenibilidad"
            className="w-full h-full object-cover opacity-20 grayscale img-filter-theme"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Compromiso Ambiental
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-on-surface mb-8 tracking-tighter"
          >
            Diseño para el <br />
            <span className="text-primary">Infinito</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant max-w-xl text-lg leading-relaxed"
          >
            En Aluvalle, entendemos que la arquitectura del futuro debe ser circular. Trabajamos con
            el metal más sustentable del planeta para crear hogares eficientes y conscientes.
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
              className="bg-surface-variant/10 backdrop-blur-xl border border-outline/10 p-10 rounded-3xl"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">{pillar.title}</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep Content */}
      <section className="max-w-5xl mx-auto px-4 py-32 text-center relative z-10">
        <h2 className="text-4xl font-bold text-on-surface mb-8">
          Certificaciones LEED y Etiquetado de Eficiencia
        </h2>
        <p className="text-on-surface-variant text-lg leading-loose mb-16">
          Nuestros sistemas están ensayados bajo las normas de etiquetado de eficiencia energética,
          permitiendo a los edificios alcanzar las más altas certificaciones internacionales de
          sustentabilidad. La elección de una carpintería de aluminio de alta gama con RPT es la
          decisión más influyente en la reducción de la huella operativa de una vivienda.
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50">
          <span className="text-on-surface font-bold tracking-widest uppercase border-x border-outline/10 px-8">
            IRAM 11910
          </span>
          <span className="text-on-surface font-bold tracking-widest uppercase border-x border-outline/10 px-8">
            LEED SILVER
          </span>
          <span className="text-on-surface font-bold tracking-widest uppercase border-x border-outline/10 px-8">
            A+ EFFICIENCY
          </span>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;



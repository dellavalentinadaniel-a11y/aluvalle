import React from 'react';
import { motion } from 'motion/react';
import { Building2, LayoutGrid, Sun } from 'lucide-react';

const systems = [
  {
    title: 'Frente Integral',
    description: 'Sistema de fachada ligera donde los perfiles de aluminio quedan a la vista, formando una cuadrícula exterior. Ideal para locales comerciales y edificios de mediana altura.',
    icon: LayoutGrid
  },
  {
    title: 'Piel de Vidrio (Structural Glazing)',
    description: 'Sistema donde el vidrio es el protagonista exterior, ocultando la estructura de aluminio. Proporciona una estética continua y moderna para torres corporativas.',
    icon: Building2
  },
  {
    title: 'Control Solar y Parasoles',
    description: 'Lamas y perfiles aerodinámicos diseñados para el control de la incidencia solar, mejorando la eficiencia energética del edificio.',
    icon: Sun
  }
];

export default function GlazedFacades() {
  return (
    <section id="fachadas-vidriadas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Glazed Facade"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alu-dark/80 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white font-bold text-xl leading-snug">
                  "La envolvente perfecta para la arquitectura corporativa contemporánea."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">Arquitectura Corporativa</span>
            <h2 className="text-4xl md:text-5xl font-black text-alu-dark mb-8 tracking-tighter">
              Fachadas <span className="text-alu-green">Vidriadas</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Desarrollamos sistemas de fachadas continuas que permiten materializar las visiones arquitectónicas más vanguardistas, garantizando estanqueidad, resistencia estructural y confort interior.
            </p>

            <div className="space-y-8">
              {systems.map((system, index) => (
                <motion.div 
                  key={system.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-alu-green shrink-0">
                    <system.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-alu-dark mb-2">{system.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {system.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

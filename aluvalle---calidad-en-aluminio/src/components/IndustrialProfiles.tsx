import React from 'react';
import { motion } from 'motion/react';
import { Factory, Ruler, Cpu } from 'lucide-react';

const profiles = [
  {
    title: 'Perfiles Estándar',
    items: ['Tubos rectangulares y cuadrados', 'Ángulos de alas iguales y desiguales', 'Planchuelas y barras macizas', 'Perfiles U y T'],
    icon: Ruler
  },
  {
    title: 'Perfiles a Medida (Matricería Propia)',
    items: ['Desarrollo de matrices exclusivas', 'Asesoramiento en diseño de perfil', 'Optimización de peso y resistencia', 'Prototipado rápido'],
    icon: Factory
  },
  {
    title: 'Aplicaciones Especiales',
    items: ['Disipadores de calor para electrónica', 'Perfiles para carrocerías', 'Estructuras para paneles solares', 'Sistemas de exhibición'],
    icon: Cpu
  }
];

export default function IndustrialProfiles() {
  return (
    <section id="perfiles-industriales" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">Soluciones a Medida</span>
          <h2 className="text-4xl md:text-5xl font-black text-alu-dark mb-6 tracking-tighter">
            Perfiles <span className="text-alu-green">Industriales</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Más allá de la arquitectura, proveemos soluciones de extrusión de aluminio para la industria automotriz, electrónica, publicitaria y manufacturera.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {profiles.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-10 shadow-xl shadow-black/5 border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-alu-green/10 flex items-center justify-center text-alu-green mb-8">
                <section.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-alu-dark mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-alu-green mt-2 shrink-0"></div>
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-alu-dark rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">¿Necesitas un perfil específico?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Nuestro departamento técnico te acompaña desde el diseño de la matriz hasta la extrusión final del perfil, garantizando confidencialidad y precisión.
            </p>
            <button className="bg-alu-green text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-alu-green transition-all shadow-xl shadow-alu-green/20">
              Consultar con Ingeniería
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-alu-green/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}

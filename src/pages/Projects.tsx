import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Torre corporativa Catalinas',
    location: 'Puerto Madero, CABA',
    system: 'Frente Integral / Piel de Vidrio',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description:
      'Envolvente de alta performance con control solar activo para optimización energética.',
  },
  {
    id: 2,
    title: 'Residencia Nordelta',
    location: 'Buenos Aires, Argentina',
    system: 'Línea Mediterránea RPT',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Aberturas de grandes luces que integran el interior con el paisaje lacustre.',
  },
  {
    id: 3,
    title: 'Hotel Boutique Alvear',
    location: 'Mendoza, Argentina',
    system: 'Sistemas Mediterránea / Parasoles',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description:
      'Integración de sistemas de control solar para el clima árido de la precordillera.',
  },
  {
    id: 4,
    title: 'Complejo Residencial Forum',
    location: 'Rosario, Santa Fe',
    system: 'Línea Mónaco / Barandas Panorama',
    image:
      'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Balcones con visión infinita mediante sistemas de barandas autoportantes.',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0b0e12]">
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#a0d87a] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
        >
          Portafolio Arquitectónico
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
        >
          Obras <span className="text-[#a0d87a]">Emblemáticas</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl text-lg leading-relaxed"
        >
          Nuestros sistemas visten la arquitectura más exigente de la región. Explore cómo la
          precisión de Aluvalle se materializa en proyectos de escala internacional.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-[600px] rounded-[2.5rem] overflow-hidden cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-[#0b0e12]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[#a0d87a] font-bold text-xs uppercase tracking-widest mb-2">
                {project.location}
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
              <div className="h-px w-0 group-hover:w-full bg-[#a0d87a] transition-all duration-700 mb-4" />
              <p className="text-gray-300 transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                {project.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#a0d87a] font-bold text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">architecture</span>
                {project.system}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="max-w-7xl mx-auto px-4 mt-32 text-center">
        <div className="bg-[#161a1f] border border-gray-800 p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-10">
            <span className="material-symbols-outlined text-[10rem] text-[#a0d87a]">
              architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tiene un proyecto en mente?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Trabajemos juntos para especificar el sistema que mejor se adapte a sus requerimientos
            técnicos y de diseño.
          </p>
          <button className="bg-[#a0d87a] text-[#111417] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#8bc565] transition-all transform hover:scale-105">
            Iniciar Colaboración
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;

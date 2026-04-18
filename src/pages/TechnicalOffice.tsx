import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Resource {
  id: string;
  title: string;
  category: 'manual' | 'cad' | 'bim' | 'video';
  system: string;
  description: string;
  fileSize?: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Manual Técnico Mediterránea RPT',
    category: 'manual',
    system: 'Mediterránea',
    description: 'Cortes, mecanizados y tablas de vidrio.',
    fileSize: '12.4 MB',
  },
  {
    id: '2',
    title: 'Perfiles DWG - Línea Tradicional',
    category: 'cad',
    system: 'Tradicional',
    description: 'Biblioteca completa de perfiles para AutoCAD.',
    fileSize: '4.8 MB',
  },
  {
    id: '3',
    title: 'Objetos BIM RVT - Frente Integral',
    category: 'bim',
    system: 'Fachadas',
    description: 'Componentes paramétricos para Revit.',
    fileSize: '25.1 MB',
  },
  {
    id: '4',
    title: 'Catálogo de Accesorios Alcemar',
    category: 'manual',
    system: 'Accesorios',
    description: 'Guía completa de herrajes y componentes.',
    fileSize: '8.2 MB',
  },
  {
    id: '5',
    title: 'Manual de Instalación Piel de Vidrio',
    category: 'manual',
    system: 'Fachadas',
    description: 'Guía paso a paso para montaje en obra.',
    fileSize: '15.6 MB',
  },
  {
    id: '6',
    title: 'Nudos Constructivos Mediterránea RPT',
    category: 'cad',
    system: 'Mediterránea',
    description: 'Detalles de encuentros en DWG.',
    fileSize: '6.3 MB',
  },
];

const TechnicalOffice = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | Resource['category']>('all');

  const filteredResources =
    activeCategory === 'all'
      ? resources
      : resources.filter((res) => res.category === activeCategory);

  const getIcon = (category: Resource['category']) => {
    switch (category) {
      case 'manual':
        return 'description';
      case 'cad':
        return 'architecture';
      case 'bim':
        return 'view_in_ar';
      case 'video':
        return 'play_circle';
      default:
        return 'folder';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#a0d87a] font-medium tracking-wider uppercase text-sm mb-4 block"
        >
          Área para Profesionales
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Oficina <span className="text-[#a0d87a]">Técnica</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Acceda a toda la documentación técnica, bibliotecas CAD y objetos BIM para integrar
          nuestros sistemas en sus proyectos arquitectónicos.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'manual', 'cad', 'bim', 'video'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize ${
                activeCategory === cat
                  ? 'bg-[#a0d87a] text-[#111417] border-[#a0d87a] font-semibold'
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-[#a0d87a] hover:text-[#a0d87a]'
              }`}
            >
              {cat === 'all' ? 'Todos' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res, index) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#1a1d21] border border-gray-800 p-6 rounded-2xl hover:border-[#a0d87a]/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-[#a0d87a]/10 transition-colors">
                  <span className="material-symbols-outlined text-[#a0d87a]">
                    {getIcon(res.category)}
                  </span>
                </div>
                {res.fileSize && (
                  <span className="text-xs text-gray-500 font-mono">{res.fileSize}</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a0d87a] transition-colors">
                {res.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{res.description}</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                <span className="text-xs uppercase tracking-widest text-[#a0d87a] font-bold">
                  {res.system}
                </span>
                <button className="flex items-center gap-2 text-white hover:text-[#a0d87a] transition-colors text-sm font-medium">
                  Descargar
                  <span className="material-symbols-outlined text-sm">download</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#1a1d21] to-[#111417] border border-[#a0d87a]/20 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesita asistencia personalizada?
            </h2>
            <p className="text-gray-400">
              Nuestro equipo técnico está a su disposición para resolver cualquier duda sobre nudos
              constructivos, cargas de viento o despieces específicos.
            </p>
          </div>
          <button className="bg-[#a0d87a] text-[#111417] px-8 py-4 rounded-xl font-bold hover:bg-[#8bc565] transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap">
            Contactar Soporte Técnico
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalOffice;

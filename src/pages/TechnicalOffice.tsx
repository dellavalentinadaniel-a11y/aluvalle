import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Resource {
  id: string;
  title: string;
  category: 'manual' | 'cad' | 'bim' | 'video';
  system: string;
  description: string;
  fileSize?: string;
  downloadUrl?: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Manual Técnico Mediterránea RPT',
    category: 'manual',
    system: 'Mediterránea',
    description: 'Manual completo de cortes, mecanizados y tablas de vidrio para sistemas RPT.',
    fileSize: '24.1 MB',
    downloadUrl: '/docs/Línea Mediterránea RPT/Catalogo_Linea_Mediterranea_RPT.pdf',
  },
  {
    id: '2',
    title: 'Catálogo Comercial Mediterránea RPT',
    category: 'manual',
    system: 'Mediterránea',
    description: 'Presentación comercial y especificaciones de diseño.',
    fileSize: '6.0 MB',
    downloadUrl: '/docs/Línea Mediterránea RPT/Catalogo_Comercial_Linea_Mediterranea_RPT.pdf',
  },
  {
    id: '3',
    title: 'Manual Técnico Línea Mónaco',
    category: 'manual',
    system: 'Mónaco',
    description: 'Documentación técnica completa para la línea Mónaco.',
    fileSize: '8.3 MB',
    downloadUrl: '/docs/Línea Mónaco/Catalogo_Linea_Monaco.pdf',
  },
  {
    id: '4',
    title: 'Mecanizados Línea Mónaco',
    category: 'manual',
    system: 'Mónaco',
    description: 'Guía de mecanizados y nudos constructivos.',
    fileSize: '1.6 MB',
    downloadUrl: '/docs/Línea Mónaco/Mecanizados_Linea_Monaco.pdf',
  },
  {
    id: '5',
    title: 'Catálogo Línea Tradicional',
    category: 'manual',
    system: 'Tradicional',
    description: 'Manual técnico completo de la Línea Tradicional.',
    fileSize: '5.8 MB',
    downloadUrl: '/docs/Línea Tradicional/Catalogo_Linea_Tradicional (1).pdf',
  },
  {
    id: '6',
    title: 'Biblioteca CAD - Nudos Mediterránea',
    category: 'cad',
    system: 'Mediterránea',
    description: 'Despieces y nudos en formato DWG para integración en proyectos.',
    fileSize: '8.7 MB',
    downloadUrl: '/docs/Línea Mediterránea RPT/Mecanizados_Linea_Mediterranea_RPT.pdf',
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
    <div className="min-h-screen pt-24 pb-20 px-4 bg-background">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <img
          src="/gallery/office.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale"
          alt=""
        />
        <span className="ghost-text absolute -top-20 -left-20 text-[20rem] font-black uppercase">
          Oficina
        </span>
        <span className="ghost-text absolute bottom-0 -right-20 text-[25rem] font-black uppercase">
          Técnica
        </span>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block"
        >
          Área para Profesionales
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-on-surface mb-6 uppercase tracking-tighter"
        >
          Oficina <span className="text-primary">Técnica</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl mx-auto text-lg"
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
                  ? 'bg-primary text-on-primary border-primary font-semibold shadow-lg'
                  : 'bg-transparent text-on-surface-variant border-outline/30 hover:border-primary hover:text-primary'
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
              className="glass-card p-6 rounded-2xl group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    {getIcon(res.category)}
                  </span>
                </div>
                {res.fileSize && (
                  <span className="text-xs text-on-surface-variant font-mono">{res.fileSize}</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                {res.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                {res.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline/10">
                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                  {res.system}
                </span>
                {res.downloadUrl ? (
                  <a
                    href={res.downloadUrl}
                    download
                    className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors text-sm font-medium"
                  >
                    Descargar
                    <span className="material-symbols-outlined text-sm">download</span>
                  </a>
                ) : (
                  <button className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors text-sm font-medium">
                    Solicitar
                    <span className="material-symbols-outlined text-sm">mail</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-surface-container border border-primary/20 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl"
        >
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">
              ¿Necesita asistencia personalizada?
            </h2>
            <p className="text-on-surface-variant">
              Nuestro equipo técnico está a su disposición para resolver cualquier duda sobre nudos
              constructivos, cargas de viento o despieces específicos.
            </p>
          </div>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap shadow-xl">
            Contactar Soporte Técnico
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalOffice;

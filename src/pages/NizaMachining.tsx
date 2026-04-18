import React from 'react';
import { motion } from 'framer-motion';
import {
  Puzzle,
  Droplets,
  Frame,
  Key,
  ChevronRight,
  HelpCircle,
  Gem,
  Cpu,
  Download,
} from 'lucide-react';

const NizaMachining = () => {
  const sections = [
    {
      title: 'Desagües y Estanqueidad',
      icon: <Droplets className="w-6 h-6" />,
      description: 'Sistemas de drenaje invisibles para mantener la estética minimalista.',
      items: [
        'Mecanizados para marcos N-Tres y N-Cinco',
        'Evacuación de agua en umbrales estéticos',
        'Calados ocultos para canalización interna',
        'Mecanizado de inversores de flujo',
      ],
    },
    {
      title: 'Cortes y Armado a 90°',
      icon: <Frame className="w-6 h-6" />,
      description: 'Preparación milimétrica para encuentros perfectos.',
      items: [
        'Mecanizado de Jamba para tornillo de armado',
        'Preparación de umbral y dintel N-UNO',
        'Ensambe de hojas con corte a 90°',
        'Ajuste de guías de cortina premium',
      ],
    },
    {
      title: 'Herrajes y Accionamiento',
      icon: <Key className="w-6 h-6" />,
      description: 'Mecanizado de precisión para componentes móviles.',
      items: [
        'Alojamiento de rodamientos de alta carga',
        'Cierre multipunto Niza con falleba oculta',
        'Mecanizado de cerraduras de seguridad',
        'Calados para accesorios de oscilo-batiente',
      ],
    },
    {
      title: 'Especificación Técnica',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Documentación para procesos automatizados CNC.',
      items: [
        'Referencia de troquelados Niza',
        'Cotas de perforación estandarizadas',
        'Ajustes mecánicos de fábrica',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full mb-6">
          <Gem className="w-4 h-4 text-amber-500" />
          <span className="text-amber-500 text-sm font-medium uppercase tracking-[0.2em]">
            Serie Premium
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Manual de Mecanizados <span className="text-amber-500">Línea Niza</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Guía avanzada de fabricación para carpintería de diseño europeo. Precisión y detalle para
          un acabado impecable.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="group relative"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            <div className="relative bg-[#111] border border-white/5 p-10 rounded-[2.5rem] h-full flex flex-col items-start overflow-hidden">
              <div className="mb-8 w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
              <p className="text-gray-500 mb-8 max-w-sm">{section.description}</p>
              <ul className="space-y-4 w-full">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 group/li">
                    <ChevronRight className="w-4 h-4 mr-3 text-amber-500/50 group-hover/li:text-amber-500 transition-colors" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#111] p-10 rounded-[3rem] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex gap-8">
            <div className="bg-amber-500/20 p-5 rounded-3xl h-fit">
              <HelpCircle className="w-10 h-10 text-amber-500" />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4 italic">Asistencia Técnica Niza</h4>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Debido a la complejidad y fineza de los encuentros de la línea Niza, se recomienda
                consultar con fábrica los ajustes para mecanizado CNC o el uso de troqueladoras
                automatizadas.
              </p>
            </div>
          </div>
          <a
            href="https://www.alcemar.com.ar/of_tecnica/Mecanizados_Linea_Niza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-600 text-[#0b0e12] px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] shadow-2xl"
          >
            <Download className="w-5 h-5" />
            PDF Oficial Alcemar
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default NizaMachining;

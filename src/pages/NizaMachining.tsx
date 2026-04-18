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
    <div className="min-h-screen bg-background relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/gallery/profiles.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03] grayscale animate-slow-zoom"
          alt=""
        />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <motion.div
          className="max-w-7xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <Gem className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-[0.2em]">
              Serie Premium
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-on-surface">
            Manual de Mecanizados <span className="text-primary">Línea Niza</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
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
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-surface-variant/5 border border-outline/10 p-10 rounded-[2.5rem] h-full flex flex-col items-start overflow-hidden backdrop-blur-sm">
                <div className="mb-8 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-on-surface">{section.title}</h3>
                <p className="text-on-surface-variant mb-8 max-w-sm">{section.description}</p>
                <ul className="space-y-4 w-full">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center text-on-surface-variant group/li">
                      <ChevronRight className="w-4 h-4 mr-3 text-primary/5 group-hover/li:translate-x-1 transition-transform" />
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
          <div className="bg-surface-variant/10 p-10 rounded-[3rem] border border-outline/10 flex flex-col lg:flex-row items-center justify-between gap-10 backdrop-blur-md">
            <div className="flex gap-8">
              <div className="bg-primary/20 p-5 rounded-3xl h-fit">
                <HelpCircle className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 italic text-on-surface">Asistencia Técnica Niza</h4>
                <p className="text-on-surface-variant max-w-md leading-relaxed">
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
              className="bg-primary hover:bg-primary/90 text-on-primary px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all uppercase tracking-widest text-xs shadow-2xl shadow-primary/20"
            >
              <Download className="w-5 h-5" />
              PDF Oficial Alcemar
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NizaMachining;

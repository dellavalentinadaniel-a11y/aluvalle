import React from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  Droplet,
  Scissors,
  Lock,
  ChevronRight,
  Info,
  Layers,
  Wrench,
  Download,
} from 'lucide-react';

const MediterraneaMachining = () => {
  const categories = [
    {
      title: 'Cortes y Ángulos',
      icon: <Scissors className="w-6 h-6" />,
      description: 'Dimensionamiento y ángulos de corte para marcos y hojas.',
      items: [
        'Corte a 45° para marcos de rebatir (Pág. 3)',
        'Corte a 90° para hojas corredizas (Pág. 8)',
        'Mecanizado de Jamba para marcos telescópicos (Pág. 6)',
        'Dimensionamiento de zócalos y cabezales (Pág. 10)',
      ],
    },
    {
      title: 'Desagües de Estanqueidad',
      icon: <Droplet className="w-6 h-6" />,
      description: 'Mecanizados para el flujo de agua y hermeticidad.',
      items: [
        'Caja de agua en marcos corredizos (Pág. 5)',
        'Drenaje de condensación en paño fijo (Pág. 12)',
        'Perforación de salida con válvula (Pág. 14)',
        'Mecanizado de bota-aguas en hojas (Pág. 18)',
      ],
    },
    {
      title: 'Sistemas de Cierre',
      icon: <Lock className="w-6 h-6" />,
      description: 'Preparación para herrajes de seguridad y operación.',
      items: [
        'Calado para sistema multipunto Giesse (Pág. 22)',
        'Alojamiento de bisagras de libro (Pág. 25)',
        'Mecanizado para cerradura de seguridad (Pág. 28)',
        'Cajeado de rodamientos regulables (Pág. 30)',
      ],
    },
    {
      title: 'Equipamiento de Taller',
      icon: <Wrench className="w-6 h-6" />,
      description: 'Matrices y troqueles necesarios para el sistema.',
      items: [
        'Uso de Punzonadora Mediterránea N°3 (Pág. 35)',
        'Mecanizado de escuadras de tracción',
        'Plantillas para accesorios complementarios',
        'Ajuste de matrices para corte de poliamidas',
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
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium uppercase">Producción Técnica</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-on-surface">
            Mecanizados <span className="text-primary">Mediterránea</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto">
            Guía técnica completa para el procesamiento y fabricación de la línea Mediterránea.
            Estándares de calidad Alcemar para carpintería de alta gama.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="bg-surface-variant/5 border border-outline/10 p-8 rounded-[2.5rem] hover:border-primary/30 transition-all group backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-on-surface">{cat.title}</h3>
                  <p className="text-on-surface-variant text-sm">{cat.description}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center text-on-surface-variant group/item">
                    <ChevronRight className="w-4 h-4 mr-3 text-primary/50 group-hover/item:translate-x-1 transition-transform" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Info Card */}
        <div className="max-w-7xl mx-auto bg-surface-variant/10 p-12 rounded-[3rem] border border-outline/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
          <div className="flex items-start gap-6 max-w-2xl">
            <div className="bg-primary/20 p-4 rounded-2xl">
              <Info className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-on-surface">Asistencia Técnica</h4>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                La línea Mediterránea requiere una precisión de corte de ±0.5 mm para garantizar el
                funcionamiento de los accesorios multipunto. Utilice siempre las punzonadoras
                originales Alcemar para un acabado profesional.
              </p>
            </div>
          </div>
          <a
            href="https://alcemar.com.ar/of_tecnica/Mecanizados_Linea_Mediterranea.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-colors shrink-0 shadow-lg shadow-primary/20"
          >
            <Download className="w-5 h-5" />
            Descargar Manual
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediterraneaMachining;

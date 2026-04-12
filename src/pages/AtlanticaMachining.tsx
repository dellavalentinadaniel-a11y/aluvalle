
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
  Download
} from 'lucide-react';

const AtlanticaMachining = () => {
  const categories = [
    {
      title: "Desagües y Drenajes",
      icon: <Droplet className="w-6 h-6" />,
      description: "Mecanizados críticos para la estanqueidad del sistema.",
      items: [
        "Mecanizado de caja de agua en marcos (Pág. 2)",
        "Drenaje en umbrales altos (Pág. 4)",
        "Desagüe en marco de 3 guías (Pág. 12)",
        "Perforaciones de salida exterior (Pág. 5)"
      ]
    },
    {
      title: "Ensambles y Uniones",
      icon: <Layers className="w-6 h-6" />,
      description: "Preparación de perfiles para armado estructural.",
      items: [
        "Mecanizado de Jamba de marco (Pág. 3)",
        "Troquelado para escuadras de marco (Pág. 11)",
        "Corte y mecanizado de travesaños (Pág. 18)",
        "Unión de Jamba para marcos telescópicos (Pág. 6)"
      ]
    },
    {
      title: "Cierres y Herrajes",
      icon: <Lock className="w-6 h-6" />,
      description: "Troquelados para sistemas de seguridad y apertura.",
      items: [
        "Mecanizado para cierre lateral Alcemar (Pág. 8)",
        "Falleba multipunto en parante de hoja (Pág. 15)",
        "Alojamiento de rodamientos regulables (Pág. 10)",
        "Cajeado para cerradura de puerta (Pág. 19)"
      ]
    },
    {
      title: "Herramental Específico",
      icon: <Wrench className="w-6 h-6" />,
      description: "Equipamiento recomendado para procesos industriales.",
      items: [
        "Uso de Punzonadora Línea Atlántica (Pág. 20)",
        "Matrices de corte a 45° y 90°",
        "Plantillas de perforación para herrajes"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
          <Settings className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 text-sm font-medium uppercase">Guía de Producción</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Manual de Mecanizados <span className="text-blue-400">Atlántica</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Hoja de ruta técnica para la fabricación de aberturas de alta prestación. 
          Detalles de punzonado, calados y ensambles.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            className="bg-[#111] border border-white/5 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{cat.title}</h3>
                <p className="text-gray-500 text-sm">{cat.description}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-center text-gray-400 group/item">
                  <ChevronRight className="w-4 h-4 mr-3 text-blue-500/50 group-hover/item:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111] to-[#0a0a0a] p-12 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-start gap-6 max-w-2xl">
          <div className="bg-blue-500/20 p-4 rounded-2xl">
            <Info className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Nota para el fabricante</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              Se recomienda el uso de punzonadoras originales Alcemar para garantizar la precisión de los calados y evitar deformaciones en los perfiles. El uso de herramientas genéricas podría anular la garantía del sistema.
            </p>
          </div>
        </div>
        <a 
          href="https://alcemar.com.ar/alcemar.com.ar/wp-content/uploads/2018/08/Mecanizados-Atlantica.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-colors shrink-0"
        >
          <Download className="w-5 h-5" />
          Descargar Manual PDF
        </a>
      </div>
    </div>
  );
};

export default AtlanticaMachining;

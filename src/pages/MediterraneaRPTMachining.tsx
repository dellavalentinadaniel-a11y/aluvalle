
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
  Flame
} from 'lucide-react';

const MediterraneaRPTMachining = () => {
  const categories = [
    {
      title: "Ruptura de Puente Térmico",
      icon: <Flame className="w-6 h-6" />,
      description: "Cálculo y montaje de perfiles con poliamidas.",
      items: [
        "Ensamblado de perfiles exterior/interior (Pág. 4)",
        "Cálculo de varilla de poliamida 24mm (Pág. 6)",
        "Mecanizado de punzonas para poliamida",
        "Detalle de unión mecánica RPT (Pág. 10)"
      ]
    },
    {
      title: "Desagües y Estanqueidad RPT",
      icon: <Droplet className="w-6 h-6" />,
      description: "Sistema de drenaje específico para cámaras térmicas.",
      items: [
        "Desagüe decalado en marcos (Pág. 12)",
        "Corte de burlete central EPDM (Pág. 15)",
        "Mecanizado de salida de agua RPT (Pág. 18)",
        "Sellado de esquinas con pegamento epoxi"
      ]
    },
    {
      title: "Accesorios y Herrajes",
      icon: <Settings className="w-6 h-6" />,
      description: "Instalación de componentes para alta prestación.",
      items: [
        "Montaje de cámara europea 20mm (Pág. 22)",
        "Mecanizado para cremona y varillas (Pág. 25)",
        "Instalación de escuadras de empuje/tracción (Pág. 28)",
        "Ajuste de puntos de cierre perimetral"
      ]
    },
    {
      title: "Procesos Industriales",
      icon: <Wrench className="w-6 h-6" />,
      description: "Maquinaria de precisión para el sistema RPT.",
      items: [
        "Uso de Punzonadora Mediterránea RPT (Pág. 32)",
        "Ajuste de matrices para corte poliamida",
        "Fresa de desagüe automático",
        "Plantillas de perforación para herrajes RPT"
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
        <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full mb-6">
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-orange-400 text-sm font-medium uppercase">Alta Eficiencia Térmica</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Mecanizados <span className="text-orange-400">Mediterránea RPT</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Especificaciones técnicas para la fabricación de sistemas con Ruptura de Puente Térmico. 
          Máximo rendimiento térmico y acústico.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            className="bg-[#111] border border-white/5 p-8 rounded-[2.5rem] hover:border-orange-500/30 transition-all group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
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
                  <ChevronRight className="w-4 h-4 mr-3 text-orange-500/50 group-hover/item:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Info Card */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#111] to-[#0a0a0a] p-12 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-start gap-6 max-w-2xl">
          <div className="bg-orange-500/20 p-4 rounded-2xl">
            <Info className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Nota Técnica RPT</h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              La correcta alineación de las poliamidas es fundamental para evitar filtraciones de aire. Se recomienda el uso de prensas de ensamblado Alcemar para asegurar la homogeneidad del puente térmico.
            </p>
          </div>
        </div>
        <a 
          href="https://alcemar.com.ar/of_tecnica/Mecanizados_Linea_Mediterranea_RPT.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-colors shrink-0"
        >
          <Download className="w-5 h-5" />
          Descargar Manual RPT
        </a>
      </div>
    </div>
  );
};

export default MediterraneaRPTMachining;

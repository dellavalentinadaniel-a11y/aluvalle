
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wind, 
  Droplets, 
  AirVent, 
  CheckCircle2, 
  Info, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Award
} from 'lucide-react';

const MonacoTesting = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center space-x-2 bg-[#a0d87a]/10 border border-[#a0d87a]/20 px-4 py-2 rounded-full mb-6">
          <Award className="w-4 h-4 text-[#a0d87a]" />
          <span className="text-[#a0d87a] text-sm font-medium tracking-wide uppercase">Certificación Oficial INTI</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Informes de Ensayo <span className="text-[#a0d87a]">Línea Mónaco</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Resultados técnicos de laboratorio sobre hermeticidad, estanqueidad y resistencia estructural 
          bajo normas IRAM, garantizando el máximo estándar de calidad en el mercado.
        </p>
      </motion.div>

      {/* Main Results Grid */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Air Permeability */}
        <motion.div variants={itemVariants} className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:border-[#a0d87a]/30 transition-colors group">
          <div className="w-14 h-14 bg-[#a0d87a]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <AirVent className="w-8 h-8 text-[#a0d87a]" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Permeabilidad al Aire</h3>
          <p className="text-gray-500 mb-6 font-medium">Norma IRAM 11.523</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
              <span className="text-gray-400">Clasificación</span>
              <span className="text-[#a0d87a] font-bold">MEJORADA</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
              <span className="text-gray-400">Caudal Infiltrado</span>
              <span className="text-white font-mono">7.17 m³/h.m</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Excelente comportamiento frente a infiltraciones no deseadas, asegurando confort térmico.
          </p>
        </motion.div>

        {/* Water Tightness */}
        <motion.div variants={itemVariants} className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:border-[#a0d87a]/30 transition-colors group">
          <div className="w-14 h-14 bg-[#a0d87a]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Droplets className="w-8 h-8 text-[#a0d87a]" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Estanqueidad al Agua</h3>
          <p className="text-gray-500 mb-6 font-medium">Norma IRAM 11.591</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border-l-4 border-[#a0d87a]">
              <span className="text-gray-400">Presión 10 daN/m²</span>
              <span className="text-white font-bold">SIN FILTRACIONES</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border-l-4 border-[#a0d87a]">
              <span className="text-gray-400">Presión 20 daN/m²</span>
              <span className="text-white font-bold">SIN FILTRACIONES</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border-l-4 border-[#a0d87a]">
              <span className="text-gray-400">Presión 30 daN/m²</span>
              <span className="text-white font-bold">SIN FILTRACIONES</span>
            </div>
          </div>
        </motion.div>

        {/* Wind Resistance */}
        <motion.div variants={itemVariants} className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:border-[#a0d87a]/30 transition-colors group">
          <div className="w-14 h-14 bg-[#a0d87a]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Wind className="w-8 h-8 text-[#a0d87a]" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Resistencia al Viento</h3>
          <p className="text-gray-500 mb-6 font-medium">Norma IRAM 11.590</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
              <span className="text-gray-400">Carga Máxima</span>
              <span className="text-[#a0d87a] font-bold">150 daN/m²</span>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
              <span className="text-gray-400">Estado Final</span>
              <span className="text-white font-bold">SATISFACTORIO</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-400 leading-relaxed">
            Integridad estructural ante presiones extremas. Deformación remanente nula post-ensayo.
          </p>
        </motion.div>
      </motion.div>

      {/* Detailed Technical Specs Section */}
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center">
              <ShieldCheck className="w-8 h-8 mr-3 text-[#a0d87a]" />
              Ensayos Complementarios
            </h2>
            <div className="space-y-4">
              {[
                { title: "Resistencia a la Flexión", status: "Aprobado", detail: "Sin fallas en herrajes ni perfiles." },
                { title: "Resistencia a la Torsión", status: "Aprobado", detail: "Mecanismos de cierre operativos post-ensayo." },
                { title: "Deformación Diagonal", status: "Aprobado", detail: "Rigidez estructural garantizada." }
              ].map((test, index) => (
                <div key={index} className="flex items-start bg-white/5 p-6 rounded-2xl border border-white/5">
                  <div className="bg-[#a0d87a]/20 p-2 rounded-lg mr-4">
                    <CheckCircle2 className="w-5 h-5 text-[#a0d87a]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold flex items-center">
                      {test.title}
                      <span className="ml-3 text-[10px] bg-[#a0d87a]/20 text-[#a0d87a] px-2 py-0.5 rounded-full uppercase tracking-tighter">Satisfactorio</span>
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{test.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-10 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <Zap className="w-12 h-12 text-[#a0d87a]/20" />
            </div>
            <h3 className="text-2xl font-bold mb-6">Detalle del Prototipo</h3>
            <ul className="space-y-6">
              <li className="flex items-center text-gray-300">
                <ChevronRight className="w-5 h-5 mr-3 text-[#a0d87a]" />
                <span className="font-medium">Tipo:</span> 
                <span className="ml-2 text-white">Ventana corrediza de dos hojas</span>
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight className="w-5 h-5 mr-3 text-[#a0d87a]" />
                <span className="font-medium">Medidas:</span> 
                <span className="ml-2 text-white">1600mm x 1000mm</span>
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight className="w-5 h-5 mr-3 text-[#a0d87a]" />
                <span className="font-medium">Accesorios:</span> 
                <span className="ml-2 text-white">Cierres laterales y felpa de polipropileno</span>
              </li>
              <li className="flex items-center text-gray-300">
                <ChevronRight className="w-5 h-5 mr-3 text-[#a0d87a]" />
                <span className="font-medium">Laboratorio:</span> 
                <span className="ml-2 text-white italic">INTI - Construcciones</span>
              </li>
            </ul>
            <div className="mt-10 p-6 bg-white/5 rounded-3xl flex items-center border border-white/5">
              <Info className="w-6 h-6 text-[#a0d87a] mr-4 flex-shrink-0" />
              <p className="text-sm text-gray-400">
                Este informe es de carácter público para profesionales de la construcción. Para obtener el protocolo completo en PDF, solicítelo en nuestra oficina técnica.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MonacoTesting;

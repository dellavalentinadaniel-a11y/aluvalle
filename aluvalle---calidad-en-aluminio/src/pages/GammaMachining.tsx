import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Wrench, Zap, Settings, AlertCircle, CheckCircle } from 'lucide-react';

export default function GammaMachining() {
  const [activeTab, setActiveTab] = useState('herramientas');

  const tools = [
    {
      name: 'Punzonadora Gamma',
      type: 'Neumática',
      specs: ['Presión: 6-8 bar', 'Cadencia: 60-80 golpes/min', 'Fuerza de punzonado: 15 toneladas'],
      applications: ['Perforación de cerraduras', 'Agujeros de pasante', 'Mecanizado rápido']
    },
    {
      name: 'Fresadora Frontal',
      type: 'CNC',
      specs: ['Velocidad: 3000-5000 RPM', 'Precisión: ±0,05mm', 'Capacidad: hasta 200mm ancho'],
      applications: ['Cortes de precisión', 'Fresado de encuentros', 'Acabado fino']
    },
    {
      name: 'Copiadora Vertical',
      type: 'Alta Precisión',
      specs: ['Carrera: 600mm', 'Velocidad variable', 'Templado automático'],
      applications: ['Rebajes de encuentro', 'Moleteado', 'Acabado final']
    }
  ];

  const operations = [
    {
      title: 'Cortes a 45°',
      description: 'Sistema de corte angular con refrigeración líquida para evitar deformación',
      requirements: ['Sierra radial o cinta', 'Refrigeración constante', 'Comprobación de ángulo cada 10 piezas'],
      tolerance: '±0,5mm'
    },
    {
      title: 'Desagües de Marco',
      description: 'Perforaciones 25x5mm para drenaje de condensación en marcos perimetrales',
      requirements: ['Punzonadora neumática', 'Matriz específica G-40', 'Posicionamiento exacto'],
      tolerance: '±1mm'
    },
    {
      title: 'Mecanizado de Cerraduras',
      description: 'Cavidades para accesorios: Giesse, Fapim, Roto y sistemas propios',
      requirements: ['Fresadora CNC', 'Software de programación', 'Juego de fresas completo'],
      tolerance: '±0,1mm'
    },
    {
      title: 'Encuentro de Hojas',
      description: 'Rebaje perimetral para garantizar encuentro hermético entre hojas corredizas',
      requirements: ['Copiadora vertical', 'Plantilla de referencia', 'Control de profundidad'],
      tolerance: '±0,2mm'
    }
  ];

  const workshopRequirements = [
    { item: 'Espacio mínimo', value: '30-40 m²', icon: Settings },
    { item: 'Humedad relativa', value: '40-60%', icon: AlertCircle },
    { item: 'Temperatura', value: '18-25°C', icon: Zap },
    { item: 'Ruido máximo', value: '85-90 dB', icon: Wrench }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-alu-dark to-alu-dark/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">Guía Técnica</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Mecanizados <span className="text-alu-green">Línea Gamma</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Procedimientos optimizados para obtener máxima precisión en el mecanizado de perfiles Gamma
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { id: 'herramientas', label: 'Herramientas', icon: Wrench },
              { id: 'operaciones', label: 'Operaciones', icon: Settings },
              { id: 'requisitos', label: 'Requisitos', icon: AlertCircle }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-alu-green text-white shadow-lg shadow-alu-green/20'
                    : 'bg-gray-100 text-alu-gray hover:bg-gray-200'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas */}
      {activeTab === 'herramientas' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-alu-dark mb-12">Herramientas de Taller</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool, i) => (
                <motion.div key={tool.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <div className="w-14 h-14 rounded-2xl bg-alu-green/10 flex items-center justify-center text-alu-green mb-6">
                    <Wrench size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-alu-dark mb-2">{tool.name}</h3>
                  <p className="text-alu-green font-bold mb-6">{tool.type}</p>
                  <div className="space-y-3 mb-6">
                    {tool.specs.map((spec, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-alu-green mt-1 shrink-0" />
                        <span className="text-gray-600 text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-xs font-bold text-alu-gray uppercase tracking-widest mb-3">Aplicaciones</p>
                    <div className="space-y-2">
                      {tool.applications.map((app, j) => (
                        <p key={j} className="text-sm text-alu-dark">• {app}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Operaciones */}
      {activeTab === 'operaciones' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-alu-dark mb-12">Operaciones Principales</h2>
            <div className="space-y-8">
              {operations.map((op, i) => (
                <motion.div key={op.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-black text-alu-dark mb-3">{op.title}</h3>
                      <p className="text-gray-600 mb-6">{op.description}</p>
                      <div>
                        <p className="text-xs font-bold text-alu-gray uppercase tracking-widest mb-3">Requisitos</p>
                        <ul className="space-y-2">
                          {op.requirements.map((req, j) => (
                            <li key={j} className="flex items-center gap-3 text-sm text-alu-dark">
                              <CheckCircle size={16} className="text-alu-green shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-alu-green/5 rounded-2xl p-6 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-xs font-bold text-alu-gray uppercase tracking-widest mb-2">Tolerancia</p>
                        <p className="text-3xl font-black text-alu-green">{op.tolerance}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Requisitos */}
      {activeTab === 'requisitos' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-alu-dark mb-12">Requisitos de Taller</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {workshopRequirements.map((req, i) => {
                const Icon = req.icon;
                return (
                  <motion.div key={req.item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-alu-green/10 flex items-center justify-center text-alu-green shrink-0">
                      <Icon size={32} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-alu-gray uppercase tracking-widest mb-1">{req.item}</p>
                      <p className="text-2xl font-black text-alu-dark">{req.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-alu-dark text-white rounded-3xl p-12">
              <h3 className="text-2xl font-black mb-6">Consideraciones Importantes</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <AlertCircle size={24} className="text-alu-green shrink-0 mt-1" />
                  <p>Verificar calibración de herramientas cada 50 piezas para mantener tolerancias</p>
                </li>
                <li className="flex gap-4 items-start">
                  <AlertCircle size={24} className="text-alu-green shrink-0 mt-1" />
                  <p>Usar lubricante de corte específico para aluminio Gamma (bajo residuo)</p>
                </li>
                <li className="flex gap-4 items-start">
                  <AlertCircle size={24} className="text-alu-green shrink-0 mt-1" />
                  <p>Limpiar virutas regularmente para evitar rayado en superficies</p>
                </li>
                <li className="flex gap-4 items-start">
                  <AlertCircle size={24} className="text-alu-green shrink-0 mt-1" />
                  <p>Mantener stock de repuestos de fresas y punzones disponibles</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}

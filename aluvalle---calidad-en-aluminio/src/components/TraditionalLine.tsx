import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, FileText, Settings, Layers, Wrench, Download, Filter, ArrowUpDown, Search } from 'lucide-react';

const profileData = [
  { code: '5', weight: '0,81', description: 'Zócalo Alto para Puerta Corrediza', category: 'Corrediza' },
  { code: '7', weight: '0,36', description: 'Encuentro Central para Ventana y Puerta Corrediza de 4 Hojas', category: 'Corrediza' },
  { code: '11', weight: '0,38', description: 'Marco para Ventana Corrediza', category: 'Corrediza' },
  { code: '13', weight: '0,64', description: 'Umbral para Ventana y Puerta Corrediza Línea Liviana', category: 'Corrediza' },
  { code: '16', weight: '0,31', description: 'Batiente para Puerta de Rebatir', category: 'Rebatir' },
  { code: '23', weight: '0,50', description: 'Zócalo para Ventana Corrediza - Línea Combinada', category: 'Corrediza' },
  { code: '34', weight: '0,14', description: 'Contravidrio', category: 'Accesorios' },
  { code: '43', weight: '1,17', description: 'Columna a 45º', category: 'Complementos' },
  { code: '60', weight: '0,25', description: 'Mosquitero para Ventana y Corrediza Línea Liviana', category: 'Mosquiteros' },
  { code: '101', weight: '0,66', description: 'Marco para Ventana y Puerta Corrediza - Línea Liviana', category: 'Corrediza' },
  { code: '103', weight: '0,46', description: 'Parante Lateral para Ventana y Puerta Corrediza - Línea Liviana y Línea 900', category: 'Corrediza' },
  { code: '104', weight: '0,42', description: 'Parante Central para Ventana y Puerta Corrediza - Línea Liviana y Línea 900', category: 'Corrediza' },
  { code: '271', weight: '0,54', description: 'Marco para Puerta de Rebatir - Línea Recta, sin Contravidrio', category: 'Rebatir' },
  { code: '273', weight: '0,96', description: 'Parante para Puerta de Rebatir - Línea Recta, sin Contravidrio', category: 'Rebatir' },
  { code: '289', weight: '0,59', description: 'Marco Postigón', category: 'Postigón' },
  { code: '290', weight: '0,44', description: 'Hoja de Raja', category: 'Rebatir' },
  { code: '427', weight: '0,58', description: 'Marco Puerta de Rebatir - Línea Tradicional', category: 'Rebatir' },
  { code: '428', weight: '0,98', description: 'Parante para Puerta de Rebatir - Línea Tradicional', category: 'Rebatir' },
  { code: '429', weight: '1,01', description: 'Travesaño para Puerta de Rebatir - Línea Tradicional', category: 'Rebatir' },
  { code: '648', weight: '0,50', description: 'Premarco de 55 mm', category: 'Premarcos' },
  { code: '709', weight: '0,19', description: 'Contramarco Curvo de 30 mm', category: 'Contramarcos' },
  { code: '901', weight: '0,75', description: 'Marco para Ventana y Puerta Corrediza - Línea 900', category: 'Corrediza' },
  { code: '902', weight: '0,40', description: 'Zócalo para Ventana Corrediza', category: 'Corrediza' },
  { code: '917', weight: '1,03', description: 'Marco para Ventana y Puerta Corrediza - Línea 900 y Línea Tradicional', category: 'Corrediza' },
];

const assemblyOptions = [
  {
    title: 'Opción de Armado "Mix - A"',
    description: 'Hoja con corte a 45º. Utiliza perfiles 481 y encuentro 026.',
    image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Opción de Armado "Mix - B"',
    description: 'Hoja con corte a 90º. Parante 481, Zócalo y Cabezal 023.',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Opción de Armado "Mix - C"',
    description: 'Hoja Combinada con corte a 90º. P.Lateral 481, P.Central 480.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800'
  }
];

export default function TraditionalLine() {
  const [activeTab, setActiveTab] = useState('perfiles');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  const categories = ['Todas', ...Array.from(new Set(profileData.map(p => p.category)))];

  const filteredAndSortedProfiles = [...profileData]
    .filter(p => selectedCategory === 'Todas' || p.category === selectedCategory)
    .filter(p => p.description.toLowerCase().includes(searchQuery.toLowerCase()) || p.code.includes(searchQuery))
    .sort((a, b) => {
      if (sortOrder === 'default') return 0;
      const weightA = parseFloat(a.weight.replace(',', '.'));
      const weightB = parseFloat(b.weight.replace(',', '.'));
      return sortOrder === 'asc' ? weightA - weightB : weightB - weightA;
    });

  return (
    <section id="linea-tradicional" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">Catálogo Técnico</span>
          <h2 className="text-4xl md:text-6xl font-black text-alu-dark mb-6 tracking-tighter">
            Línea <span className="text-alu-green">Tradicional</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Nuestra línea clásica de alta prestación. Versatilidad y eficiencia para todo tipo de aberturas residenciales y comerciales.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-2xl">
            {[
              { id: 'perfiles', label: 'Índice de Perfiles', icon: Layers },
              { id: 'armado', label: 'Detalles de Armado', icon: Settings },
              { id: 'especificaciones', label: 'Especificaciones Técnicas', icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-alu-green shadow-sm'
                    : 'text-alu-gray hover:text-alu-dark'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'perfiles' && (
            <motion.div
              key="perfiles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="overflow-hidden rounded-3xl border border-gray-100 shadow-xl bg-white"
            >
              {/* Filters */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                  <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Buscar perfil..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-white border border-gray-200 text-alu-dark text-sm rounded-xl focus:ring-alu-green focus:border-alu-green block w-full pl-10 p-2.5 outline-none shadow-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Filter size={18} className="text-alu-gray hidden sm:block" />
                    <select
                      title="Filtrar por categoría"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-white border border-gray-200 text-alu-dark text-sm rounded-xl focus:ring-alu-green focus:border-alu-green block w-full p-2.5 outline-none shadow-sm"
                    >
                      {categories.map(c => <option key={c} value={c}>{c === 'Todas' ? 'Todas las categorías' : c}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <ArrowUpDown size={18} className="text-alu-gray hidden sm:block" />
                  <select
                    title="Ordenar por peso"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="bg-white border border-gray-200 text-alu-dark text-sm rounded-xl focus:ring-alu-green focus:border-alu-green block w-full p-2.5 outline-none shadow-sm"
                  >
                    <option value="default">Orden por defecto</option>
                    <option value="asc">Peso: Menor a Mayor</option>
                    <option value="desc">Peso: Mayor a Menor</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-alu-dark text-white">
                      <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Código</th>
                      <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Descripción</th>
                      <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Peso (Kg/m)</th>
                      <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-right">Categoría</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredAndSortedProfiles.map((profile, i) => (
                      <tr key={profile.code} className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-4 font-mono font-bold text-alu-green">{profile.code}</td>
                        <td className="px-8 py-4 text-alu-dark font-medium">{profile.description}</td>
                        <td className="px-8 py-4 text-alu-gray">{profile.weight}</td>
                        <td className="px-8 py-4 text-right">
                          <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-alu-gray">
                            {profile.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'armado' && (
            <motion.div
              key="armado"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {assemblyOptions.map((option, i) => (
                <div key={option.title} className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-black text-alu-dark mb-4 group-hover:text-alu-green transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {option.description}
                    </p>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-alu-green group/btn">
                      Ver Plano Técnico
                      <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'especificaciones' && (
            <motion.div
              key="especificaciones"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="bg-alu-dark text-white p-12 rounded-[3rem] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-8">Notas Técnicas</h3>
                  <ul className="space-y-6">
                    {[
                      'Las medidas de corte son válidas únicamente para el armado de un prototipo.',
                      'El peso por metro de los perfiles es estimado con una tolerancia de +/- 10%.',
                      'Largo estándar de las barras: 6030 milímetros.',
                      'Se recomienda verificar el funcionamiento de todos los componentes antes de la producción en serie.',
                    ].map((note, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-alu-green flex items-center justify-center shrink-0 mt-1">
                          <span className="text-[10px] font-bold">{i + 1}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{note}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="relative mt-12">
                  <button 
                    onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                    className="w-full bg-alu-green text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-alu-green transition-all shadow-xl shadow-alu-green/20"
                  >
                    Descargar Ficha Técnica
                    <Download size={20} />
                  </button>
                  
                  <AnimatePresence>
                    {showDownloadMenu && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-0 w-full mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                      >
                        <div className="p-2">
                          <p className="px-4 py-2 text-xs font-bold text-alu-gray uppercase tracking-widest">Seleccionar Formato</p>
                          <a 
                            href="#" 
                            download="Catalogo_Tecnico_A4.pdf"
                            onClick={() => setShowDownloadMenu(false)}
                            className="block px-4 py-3 text-alu-dark hover:bg-gray-50 hover:text-alu-green rounded-xl transition-colors font-medium"
                          >
                            Formato A4
                          </a>
                          <a 
                            href="#" 
                            download="Catalogo_Tecnico_Legal.pdf"
                            onClick={() => setShowDownloadMenu(false)}
                            className="block px-4 py-3 text-alu-dark hover:bg-gray-50 hover:text-alu-green rounded-xl transition-colors font-medium"
                          >
                            Formato Legal
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="space-y-8">
                <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50">
                  <h4 className="font-bold text-alu-dark mb-4 uppercase tracking-widest text-xs">Dimensiones de Corte</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Las medidas de corte contenidas en el presente catálogo deben ser verificadas mediante el armado de un prototipo para asegurar el correcto funcionamiento de accesorios y vidrios.
                  </p>
                </div>
                <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50">
                  <h4 className="font-bold text-alu-dark mb-4 uppercase tracking-widest text-xs">Tratamientos Superficiales</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Disponible en acabados anodizados (Natural, Bronce, Negro) y pintura en polvo termoendurecible en amplia gama de colores RAL.
                  </p>
                </div>
                <div className="p-8 rounded-3xl border border-gray-100 bg-gray-50">
                  <h4 className="font-bold text-alu-dark mb-4 uppercase tracking-widest text-xs">Aleación y Tolerancias</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Perfiles extruidos en aleación de aluminio AA 6063. Tolerancia en peso de +/- 10% y tolerancia en largo de +10 mm / -0 mm.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

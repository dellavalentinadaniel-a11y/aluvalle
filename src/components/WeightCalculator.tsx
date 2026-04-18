import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProfiles, Profile } from '../data/profiles';
import { useCalculator } from '../context/CalculatorContext';

const WeightCalculator: React.FC = () => {
  const { items, addItem: globalAddItem, updateQuantity, removeItem, totalWeight } = useCalculator();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [length, setLength] = useState<string>('6');
  const [quantity, setQuantity] = useState<string>('1');

  // Filtrar perfiles por búsqueda
  const filteredProfiles = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return allProfiles.filter(p => 
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10);
  }, [searchTerm]);

  const handleAddItem = () => {
    if (!selectedProfile || !length || !quantity) return;
    
    globalAddItem(selectedProfile, parseFloat(length), parseInt(quantity));
    
    setSelectedProfile(null);
    setSearchTerm('');
    setLength('6');
    setQuantity('1');
  };

  const generateShareText = () => {
    let text = "*Cotización de Peso - Aluvalle*\n\n";
    text += "Detalle de la obra:\n";
    items.forEach((item) => {
      const weightPerMeter = parseFloat(item.profile.weight.replace(',', '.'));
      const subtotal = weightPerMeter * item.length * item.quantity;
      text += `• *${item.profile.code}*: ${item.profile.description}\n`;
      text += `  Largo: ${item.length}m | Cant: ${item.quantity} | Peso: ${subtotal.toFixed(2)}kg\n\n`;
    });
    text += `*PESO TOTAL ESTIMADO: ${totalWeight.toFixed(2)} kg*`;
    return text;
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(generateShareText());
    // Enviando directamente al número de Aluvalle: +54 9 299 608-7387
    window.open(`https://wa.me/5492996087387?text=${text}`, '_blank');
  };

  const shareEmail = () => {
    const subject = encodeURIComponent("Resumen de Pesos de Obra - Solicitud de Cotización");
    const body = encodeURIComponent(generateShareText().replace(/\*/g, ''));
    // Enviando directamente al mail de Aluvalle: aluvallesas@gmail.com
    window.location.href = `mailto:aluvallesas@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full bg-surface-container rounded-3xl overflow-hidden border border-outline/10 shadow-2xl">
      <div className="p-6 md:p-8 border-b border-outline/10 bg-primary/5">
        <h2 className="text-2xl font-bold text-on-surface mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">calculate</span>
          Calculador de Pesos de Obra
        </h2>
        <p className="text-on-surface-variant text-sm">
          Estime el peso total de aluminio necesario para su proyecto.
        </p>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Selector de Perfil */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-5 relative">
            <label className="block text-xs font-bold text-primary uppercase mb-2 ml-1">
              Buscar Perfil (Código o Descripción)
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ej: 6061, Marco, Zócalo..."
                className="w-full bg-surface p-4 rounded-xl border border-outline/30 focus:border-primary outline-none transition-all pr-12"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
            </div>

            {/* Resultados de búsqueda */}
            <AnimatePresence>
              {filteredProfiles.length > 0 && !selectedProfile && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-50 left-0 right-0 mt-2 bg-surface-container-high border border-outline/20 rounded-xl shadow-2xl max-h-64 overflow-y-auto"
                >
                  {filteredProfiles.map(p => (
                    <button
                      key={p.code}
                      onClick={() => {
                        setSelectedProfile(p);
                        setSearchTerm(`${p.code} - ${p.description}`);
                      }}
                      className="w-full text-left p-4 hover:bg-primary/10 border-b border-outline/5 last:border-0 transition-colors flex justify-between items-center"
                    >
                      <div>
                        <span className="font-bold text-primary">{p.code}</span>
                        <p className="text-xs text-on-surface-variant truncate max-w-[200px]">{p.description}</p>
                      </div>
                      <span className="text-xs font-mono bg-surface p-1 rounded border border-outline/10">
                        {p.weight} kg/m
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-primary uppercase mb-2 ml-1">
              Largo (m)
            </label>
            <input
              type="number"
              step="0.1"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full bg-surface p-4 rounded-xl border border-outline/30 focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-primary uppercase mb-2 ml-1">
              Cantidad
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full bg-surface p-4 rounded-xl border border-outline/30 focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="md:col-span-3">
            <button
              onClick={handleAddItem}
              disabled={!selectedProfile}
              className="w-full bg-primary text-on-primary p-4 rounded-xl font-bold hover:brightness-110 disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">add</span>
              Agregar
            </button>
          </div>
        </div>

        {/* Listado de Ítems */}
        <div className="bg-surface rounded-2xl border border-outline/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low text-xs uppercase text-on-surface-variant font-bold">
                <tr>
                  <th className="p-4">Código</th>
                  <th className="p-4">Descripción</th>
                  <th className="p-4 text-center">Largo</th>
                  <th className="p-4 text-center">Cant.</th>
                  <th className="p-4 text-right">Peso Unit.</th>
                  <th className="p-4 text-right">Subtotal</th>
                  <th className="p-4 text-center"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline/5">
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-on-surface-variant italic">
                      No hay perfiles agregados a la lista.
                    </td>
                  </tr>
                ) : (
                  items.map((item) => {
                    const weightPerMeter = parseFloat(item.profile.weight.replace(',', '.'));
                    const subtotal = weightPerMeter * item.length * item.quantity;
                    return (
                      <motion.tr
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={item.id}
                        className="group hover:bg-primary/5 transition-colors"
                      >
                        <td className="p-4 font-bold text-primary">{item.profile.code}</td>
                        <td className="p-4 text-sm text-on-surface-variant">{item.profile.description}</td>
                        <td className="p-4 text-center">{item.length}m</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-md border border-outline/20 flex items-center justify-center hover:bg-primary/10 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[14px]">remove</span>
                            </button>
                            <span className="w-8 text-center font-bold text-xs">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-md border border-outline/20 flex items-center justify-center hover:bg-primary/10 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[14px]">add</span>
                            </button>
                          </div>
                        </td>
                        <td className="p-4 text-right font-mono text-xs">{item.profile.weight} kg/m</td>
                        <td className="p-4 text-right font-bold text-on-surface">{subtotal.toFixed(3)} kg</td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-error hover:bg-error/10 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <div className="text-center md:text-left">
            <p className="text-sm text-on-surface-variant uppercase tracking-widest font-bold mb-1">
              Resumen de Carga
            </p>
            <p className="text-on-surface text-xs">
              Basado en {items.length} ítems registrados en el listado actual.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-primary font-bold uppercase">Peso Total Estimado</p>
              <p className="text-4xl font-black text-on-surface tracking-tighter">
                {totalWeight.toFixed(2)} <span className="text-xl">kg</span>
              </p>
            </div>
            <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-3xl">scale</span>
            </div>
          </div>
        </div>

        {/* Acciones de Envío */}
        <AnimatePresence>
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-wrap gap-4 justify-center md:justify-end"
            >
              <button
                onClick={shareWhatsApp}
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined">chat</span>
                Enviar por WhatsApp
              </button>
              <button
                onClick={shareEmail}
                className="flex items-center gap-2 bg-on-surface text-surface px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg active:scale-95"
              >
                <span className="material-symbols-outlined">mail</span>
                Enviar por Email
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WeightCalculator;

import { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { allProfiles, Profile } from '../data/profiles';
import { useCalculator } from '../context/CalculatorContext';

interface MiniWeightCalculatorProps {
  open: boolean;
  onClose: () => void;
}

export default function MiniWeightCalculator({ open, onClose }: MiniWeightCalculatorProps) {
  const { items, addItem, removeItem, totalWeight } = useCalculator();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [length, setLength] = useState('6');
  const [quantity, setQuantity] = useState('1');
  const popoverRef = useRef<HTMLDivElement>(null);

  // Cerrar al click fuera
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onClose]);

  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  const filteredProfiles = useMemo(() => {
    if (searchTerm.length < 2) return [];
    return allProfiles
      .filter(
        (p) =>
          p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 6);
  }, [searchTerm]);

  const handleAdd = () => {
    if (!selectedProfile || !length || !quantity) return;
    addItem(selectedProfile, parseFloat(length), parseInt(quantity));
    setSelectedProfile(null);
    setSearchTerm('');
    setLength('6');
    setQuantity('1');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={popoverRef}
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.96 }}
          transition={{ duration: 0.18 }}
          className="absolute right-0 top-full mt-3 w-[440px] bg-surface/98 backdrop-blur-2xl border border-outline/15 shadow-[0_25px_70px_rgba(0,0,0,0.45)] rounded-3xl overflow-hidden z-[80]"
          role="dialog"
          aria-label="Mini calculadora de pesos"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-outline/10 bg-primary/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[22px]">calculate</span>
              <div>
                <h3 className="text-on-surface font-bold text-sm tracking-tight">Calculadora rápida</h3>
                <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">Estimación de peso</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="material-symbols-outlined text-on-surface-variant hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors text-[18px]"
            >
              close
            </button>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4">
            {/* Search */}
            <div className="relative">
              <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5">
                Buscar perfil
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedProfile(null);
                  }}
                  placeholder="Código o descripción..."
                  className="w-full bg-surface-container border border-outline/20 px-4 py-2.5 pr-10 rounded-xl text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                  search
                </span>
              </div>

              {/* Dropdown */}
              {filteredProfiles.length > 0 && !selectedProfile && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-surface-container-high border border-outline/20 rounded-xl shadow-xl max-h-56 overflow-y-auto z-10">
                  {filteredProfiles.map((p) => (
                    <button
                      type="button"
                      key={p.code}
                      onClick={() => {
                        setSelectedProfile(p);
                        setSearchTerm(`${p.code} — ${p.description}`);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-primary/10 transition-colors border-b border-outline/5 last:border-0"
                    >
                      <div className="text-on-surface font-bold text-xs">{p.code}</div>
                      <div className="text-on-surface-variant text-[11px] truncate">{p.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Length + Quantity */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5">
                  Largo (m)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  min="0.1"
                  step="0.1"
                  className="w-full bg-surface-container border border-outline/20 px-4 py-2.5 rounded-xl text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5">
                  Cantidad
                </label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="1"
                  step="1"
                  className="w-full bg-surface-container border border-outline/20 px-4 py-2.5 rounded-xl text-on-surface text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Add button */}
            <button
              type="button"
              onClick={handleAdd}
              disabled={!selectedProfile}
              className="w-full btn-gradient py-3 rounded-xl font-bold text-xs tracking-widest uppercase disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Agregar al cálculo
            </button>

            {/* Items list */}
            {items.length > 0 && (
              <div className="border-t border-outline/10 pt-4 space-y-2 max-h-48 overflow-y-auto">
                {items.map((item) => {
                  const wpm = parseFloat(item.profile.weight.replace(',', '.'));
                  const sub = wpm * item.length * item.quantity;
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-2 bg-surface-container-low/60 border border-outline/10 rounded-xl px-3 py-2"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-on-surface font-bold text-xs truncate">{item.profile.code}</div>
                        <div className="text-on-surface-variant text-[10px]">
                          {item.length}m × {item.quantity} = <span className="text-primary font-bold">{sub.toFixed(2)} kg</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label="Eliminar"
                        className="material-symbols-outlined text-on-surface-variant hover:text-red-400 text-[16px] p-1 rounded transition-colors"
                      >
                        delete
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Total */}
            {items.length > 0 && (
              <div className="bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Peso total</span>
                <span className="text-on-surface font-black text-xl tracking-tight">{totalWeight.toFixed(2)} kg</span>
              </div>
            )}

            {/* Footer link */}
            <Link
              to="/oficina-tecnica#calculator"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-outline/15 text-on-surface-variant hover:text-primary hover:border-primary/40 transition-all text-xs font-bold uppercase tracking-widest"
            >
              <span className="material-symbols-outlined text-[16px]">open_in_full</span>
              Abrir calculadora completa
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

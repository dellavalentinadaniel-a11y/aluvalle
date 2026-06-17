import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useCalculator } from '../context/CalculatorContext';
import { Trash2, Plus, Minus, Send, ShoppingBag, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { items, removeItem, updateQuantity, updateNotes, clearCart, totalItems } = useCart();
  const { items: calcItems, totalWeight } = useCalculator();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '' });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = items.map(i =>
      `• ${i.productName} (${i.productCategory}) x${i.quantity}${i.notes ? ` — Notas: ${i.notes}` : ''}`
    ).join('%0A');
    
    const weightSection = calcItems.length > 0
      ? `%0A%0A📐 Peso calculado (calculadora de perfiles):%0A${calcItems.map(c => `• ${c.profile.code} ${c.length}m x${c.quantity} = ${(parseFloat(c.profile.weight.replace(',', '.')) * c.length * c.quantity).toFixed(2)} kg`).join('%0A')}%0APeso total: ${totalWeight.toFixed(2)} kg`
      : '';
      
    const msg = `Hola Aluvallé! Quisiera solicitar una cotización:%0A%0A${lines}${weightSection}%0A%0ANombre: ${form.nombre}%0AEmpresa: ${form.empresa}%0AEmail: ${form.email}%0ATeléfono: ${form.telefono}`;
    
    window.open(`https://wa.me/5492996087387?text=${msg}`, '_blank');
    setSubmitted(true);
    clearCart();
  };

  // Helper function to render shape SVGs inline as fallback if sketch is missing
  const getShapePath = (shape?: string) => {
    switch (shape) {
      case 'marco': return 'M 10,10 L 90,10 L 90,90 L 75,90 L 75,25 L 10,25 Z';
      case 'hoja': return 'M 20,10 L 80,10 L 80,30 L 60,30 L 60,70 L 80,70 L 80,90 L 20,90 Z';
      case 'zocalo': return 'M 10,30 L 90,30 L 90,70 L 10,70 Z M 20,40 L 80,40 L 80,60 L 20,60 Z';
      case 'contravidrio': return 'M 30,30 L 70,30 L 70,70 L 60,70 L 60,40 L 30,40 Z';
      case 'parante': return 'M 30,10 L 70,10 L 70,90 L 30,90 Z M 40,20 L 60,20 L 60,80 L 40,80 Z';
      case 'travesaño': return 'M 10,35 L 90,35 L 90,65 L 10,65 Z M 15,40 L 85,40 L 85,60 L 15,60 Z';
      case 'acople': return 'M 10,45 L 30,45 L 30,10 L 70,10 L 70,45 L 90,45 L 90,55 L 70,55 L 70,90 L 30,90 L 30,55 L 10,55 Z';
      case 'contramarco': return 'M 10,80 C 10,20 90,20 90,80 L 80,80 C 80,30 20,30 20,80 Z';
      case 'premarco': return 'M 10,10 L 90,10 L 90,30 L 25,30 L 25,90 L 10,90 Z';
      default: return 'M 20,20 L 80,20 L 80,80 L 20,80 Z';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background text-on-surface-variant font-body relative overflow-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Breadcrumbs link */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover mb-8 group transition-colors"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Volver atrás
        </button>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center bg-surface-container/30 backdrop-blur-xl border border-outline/10 p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-inner">
              <Check className="w-10 h-10 animate-in zoom-in duration-500" />
            </div>
            <h1 className="text-3xl font-headline font-black text-on-surface uppercase tracking-tight">
              ¡Solicitud Enviada con Éxito!
            </h1>
            <p className="text-sm leading-relaxed text-on-surface-variant max-w-sm">
              Hemos preparado tu lista de cotización y te redirigimos a WhatsApp para coordinar el presupuesto formal con nuestro departamento técnico.
            </p>
            <Link
              to="/productos"
              className="btn-gradient px-8 py-3.5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase text-on-primary shadow-lg mt-4 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Explorar más productos
            </Link>
          </motion.div>
        ) : items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto text-center bg-surface-container/20 backdrop-blur-lg border border-outline/10 p-16 rounded-[2.5rem] shadow-2xl flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-surface-container-high/40 flex items-center justify-center text-on-surface-variant/30">
              <ShoppingBag size={36} />
            </div>
            <h1 className="text-2xl font-headline font-black text-on-surface uppercase tracking-tight">
              Tu lista de cotización está vacía
            </h1>
            <p className="text-sm leading-relaxed text-on-surface-variant max-w-sm">
              Aún no has agregado perfiles o accesorios a tu lista. Visita el catálogo técnico de nuestros sistemas de carpintería y añade los elementos que necesitas para tu obra.
            </p>
            <Link
              to="/productos"
              className="btn-gradient px-8 py-3.5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase text-on-primary shadow-lg mt-4 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Ver Catálogo de Productos
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Left Col: Cart items list */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1 block">Tu Pedido</span>
                  <h1 className="text-3xl md:text-4xl font-headline font-black text-on-surface uppercase tracking-tight leading-none">
                    Carrito de <span className="text-gradient">Cotización</span>
                  </h1>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">
                  {totalItems} {totalItems === 1 ? 'Perfil' : 'Perfiles'}
                </span>
              </div>

              {/* Items Card List */}
              <div className="space-y-4">
                <AnimatePresence>
                  {items.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="bg-surface-container-low/30 border border-outline/10 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-start gap-6 hover:border-primary/20 transition-all duration-300 relative group shadow-sm"
                    >
                      {/* Image/Boceto */}
                      <div className="w-20 h-20 bg-surface-container/50 border border-outline/5 rounded-2xl flex items-center justify-center p-3 text-primary shrink-0">
                        {item.productImage ? (
                          <img src={item.productImage} alt={item.productName} className="w-full h-full object-contain" />
                        ) : (
                          <svg viewBox="0 0 100 100" className="w-12 h-12 fill-none stroke-current stroke-[2.5]">
                            <path d={getShapePath(item.productSlug)} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                        <div>
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="font-headline font-black text-on-surface text-base uppercase tracking-tight group-hover:text-primary transition-colors">
                                {item.productName}
                              </h3>
                              <p className="text-[10px] text-primary uppercase font-bold tracking-widest mt-0.5">
                                {item.productCategory}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label="Eliminar perfil"
                              className="text-on-surface-variant/40 hover:text-red-500 p-2 rounded-xl hover:bg-red-500/5 transition-all shrink-0"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>

                          <div className="flex items-center gap-4 mt-3">
                            <span className="text-xs text-on-surface-variant">
                              Peso: <span className="font-bold text-on-surface">{item.estimatedWeight ? `${item.estimatedWeight} Kg/m` : 'Consultar'}</span>
                            </span>
                            <span className="w-1 h-1 bg-outline/20 rounded-full" />
                            <span className="text-xs text-on-surface-variant">
                              Largo: <span className="font-bold text-on-surface">6.15 m</span>
                            </span>
                          </div>
                        </div>

                        {/* Notes Input Area */}
                        <div className="mt-4">
                          <textarea
                            value={item.notes}
                            onChange={(e) => updateNotes(item.id, e.target.value)}
                            placeholder="Agregar notas (medidas requeridas, color, tipología o detalles particulares)..."
                            rows={2}
                            className="w-full text-xs bg-surface-container-high/40 border border-outline/10 focus:border-primary/40 focus:outline-none rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/30 resize-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Quantity Selector Right aligned */}
                      <div className="md:self-center flex items-center bg-surface-container border border-outline/10 rounded-2xl overflow-hidden h-11 shrink-0">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                          className="px-3 h-full hover:text-primary transition-colors flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high"
                          title="Reducir"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <input 
                          type="number" 
                          value={item.quantity} 
                          onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))} 
                          className="w-10 bg-transparent text-center text-sm font-black focus:outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" 
                          min="1" 
                          aria-label="Cantidad"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                          className="px-3 h-full hover:text-primary transition-colors flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high"
                          title="Aumentar"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Calculator segment if items are loaded in WeightCalculator */}
              {calcItems.length > 0 && (
                <div className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 mt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">calculate</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-black text-on-surface text-sm uppercase tracking-wider">Cálculo de Carga Estimado</h4>
                      <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-widest mt-0.5">Basado en la calculadora de pesos</p>
                    </div>
                  </div>
                  <div className="divide-y divide-primary/10">
                    {calcItems.map(c => {
                      const wpm = parseFloat(c.profile.weight.replace(',', '.'));
                      const weightItem = isNaN(wpm) ? 0 : wpm * c.length * c.quantity;
                      return (
                        <div key={c.id} className="py-3 flex justify-between items-center text-xs text-on-surface-variant">
                          <span className="font-medium">Perfil {c.profile.code} · Largo: {c.length}m × {c.quantity} tiras</span>
                          <span className="font-bold text-on-surface">{weightItem.toFixed(2)} kg</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-primary/20">
                    <span className="text-xs font-headline font-black uppercase text-primary">Peso Total Estimado:</span>
                    <span className="text-xl font-headline font-black text-on-surface">{totalWeight.toFixed(2)} Kg</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Col: Quote form */}
            <div className="bg-surface-container-low/20 backdrop-blur-xl border border-outline/10 p-8 rounded-[2.5rem] shadow-xl flex flex-col gap-6 lg:mt-[60px]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1 block">Presupuestar</span>
                <h2 className="font-headline font-black text-2xl text-on-surface uppercase tracking-tight">Formulario de Contacto</h2>
                <p className="text-xs leading-relaxed text-on-surface-variant mt-2">
                  Completa tus datos comerciales y técnicos para enviar esta solicitud directamente a nuestro departamento de ventas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Nombre Input */}
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="nombre"
                    placeholder=" "
                    value={form.nombre}
                    onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                    onBlur={() => handleBlur('nombre')}
                    className={`peer w-full px-5 py-4 rounded-2xl bg-surface-container border text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder-shown:border-outline/20 ${
                      touched.nombre && !form.nombre ? 'border-red-500' : 'border-outline/15'
                    }`}
                  />
                  <label 
                    htmlFor="nombre" 
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wider text-on-surface-variant/50 transition-all pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-1/2 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[9px] peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 -top-2 left-4 text-[9px] bg-background px-2"
                  >
                    Nombre Completo *
                  </label>
                </div>

                {/* Empresa Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="empresa"
                    placeholder=" "
                    value={form.empresa}
                    onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))}
                    className="peer w-full px-5 py-4 rounded-2xl bg-surface-container border border-outline/15 text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder-shown:border-outline/20"
                  />
                  <label 
                    htmlFor="empresa" 
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wider text-on-surface-variant/50 transition-all pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-1/2 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[9px] peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 -top-2 left-4 text-[9px] bg-background px-2"
                  >
                    Empresa / Obra (Opcional)
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email"
                    placeholder=" "
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onBlur={() => handleBlur('email')}
                    className={`peer w-full px-5 py-4 rounded-2xl bg-surface-container border text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder-shown:border-outline/20 ${
                      touched.email && !form.email ? 'border-red-500' : 'border-outline/15'
                    }`}
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wider text-on-surface-variant/50 transition-all pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-1/2 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[9px] peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 -top-2 left-4 text-[9px] bg-background px-2"
                  >
                    Correo Electrónico *
                  </label>
                </div>

                {/* Teléfono Input */}
                <div className="relative">
                  <input
                    required
                    type="tel"
                    id="telefono"
                    placeholder=" "
                    value={form.telefono}
                    onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                    onBlur={() => handleBlur('telefono')}
                    className={`peer w-full px-5 py-4 rounded-2xl bg-surface-container border text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder-shown:border-outline/20 ${
                      touched.telefono && !form.telefono ? 'border-red-500' : 'border-outline/15'
                    }`}
                  />
                  <label 
                    htmlFor="telefono" 
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wider text-on-surface-variant/50 transition-all pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-1/2 peer-focus:-top-2 peer-focus:left-4 peer-focus:text-[9px] peer-focus:text-primary peer-focus:bg-background peer-focus:px-2 -top-2 left-4 text-[9px] bg-background px-2"
                  >
                    Teléfono de Contacto *
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn-gradient w-full flex items-center justify-center gap-2 py-4 rounded-full font-black text-[11px] tracking-[0.2em] uppercase text-on-primary shadow-[0_10px_20px_rgba(51,106,25,0.2)] hover:shadow-[0_15px_30px_rgba(51,106,25,0.3)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  <Send size={14} />
                  Enviar pedido por WhatsApp
                </button>
                
                <p className="text-center text-[10px] text-on-surface-variant/40 tracking-wider uppercase">
                  Te responderemos a la brevedad con la cotización.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

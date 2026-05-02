import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingCart, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, updateNotes, clearCart, totalItems } = useCart();
  const [expandedNotes, setExpandedNotes] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = items.map(i =>
      `• ${i.productName} (${i.productCategory}) x${i.quantity}${i.notes ? ` — Notas: ${i.notes}` : ''}`
    ).join('%0A');
    const msg = `Hola Aluvallé! Quisiera solicitar una cotización:%0A%0A${lines}%0A%0ANombre: ${form.nombre}%0AEmpresa: ${form.empresa}%0AEmail: ${form.email}%0ATeléfono: ${form.telefono}`;
    window.open(`https://wa.me/5492996087387?text=${msg}`, '_blank');
    setSubmitted(true);
    clearCart();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-full max-w-md z-[80] flex flex-col bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-outline/10">
              <div className="flex items-center gap-3">
                <ShoppingCart size={20} className="text-primary" />
                <span className="font-headline font-bold uppercase tracking-wider text-on-surface text-sm">
                  Solicitud de Cotización
                </span>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-black">
                    {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                aria-label="Cerrar carrito"
                className="p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 px-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                  </div>
                  <h3 className="font-headline font-bold text-on-surface text-xl uppercase tracking-tight">
                    ¡Solicitud enviada!
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Te redirigimos a WhatsApp. Nuestro equipo te responderá a la brevedad con la cotización.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); closeCart(); }}
                    className="btn-gradient px-6 py-3 rounded-full font-bold text-[11px] tracking-widest uppercase text-on-primary mt-2"
                  >
                    Cerrar
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 px-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
                    <ShoppingCart size={28} className="text-on-surface-variant/40" />
                  </div>
                  <p className="text-on-surface-variant text-sm">
                    Tu lista de cotización está vacía.
                  </p>
                  <p className="text-on-surface-variant/60 text-xs">
                    Explorá nuestros sistemas y agregá los productos que te interesan.
                  </p>
                  <button
                    onClick={closeCart}
                    className="btn-gradient px-6 py-3 rounded-full font-bold text-[11px] tracking-widest uppercase text-on-primary mt-2"
                  >
                    Ver Productos
                  </button>
                </div>
              ) : (
                <div className="flex flex-col">
                  {/* Items list */}
                  <ul className="divide-y divide-outline/10 px-4 pt-4">
                    {items.map((item) => (
                      <li key={item.id} className="py-4 flex flex-col gap-3">
                        <div className="flex items-start gap-4">
                          <img
                            src={item.productImage}
                            alt={item.productName}
                            className="w-16 h-16 object-cover rounded-xl flex-shrink-0 bg-surface-container"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-headline font-bold text-on-surface text-sm truncate">
                              {item.productName}
                            </p>
                            <p className="text-on-surface-variant text-[11px] uppercase tracking-wider mt-0.5">
                              {item.productCategory}
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="w-7 h-7 rounded-lg border border-outline/20 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                              >
                                <Minus size={13} />
                              </button>
                              <span className="w-8 text-center font-bold text-on-surface text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-7 h-7 rounded-lg border border-outline/20 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label="Eliminar producto"
                            className="p-1.5 rounded-lg text-on-surface-variant/40 hover:text-red-500 hover:bg-red-500/10 transition-all flex-shrink-0"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        {/* Notes toggle */}
                        <div className="pl-0">
                          <button
                            onClick={() => setExpandedNotes(expandedNotes === item.id ? null : item.id)}
                            className="text-[11px] text-primary hover:underline flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-[14px]">
                              {expandedNotes === item.id ? 'expand_less' : 'add_notes'}
                            </span>
                            {item.notes ? 'Ver / editar notas' : 'Agregar notas (medidas, tipología...)'}
                          </button>
                          <AnimatePresence>
                            {expandedNotes === item.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden mt-2"
                              >
                                <textarea
                                  value={item.notes}
                                  onChange={(e) => updateNotes(item.id, e.target.value)}
                                  placeholder="Ej: Ventana corrediza 1.20 x 1.00m, DVH, color natural..."
                                  rows={3}
                                  className="w-full text-xs bg-surface-container border border-outline/20 rounded-xl px-3 py-2.5 text-on-surface placeholder:text-on-surface-variant/40 resize-none focus:outline-none focus:border-primary/50 transition-colors"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Quote form */}
                  <form onSubmit={handleSubmit} className="px-4 py-6 border-t border-outline/10 flex flex-col gap-4">
                    <p className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider">
                      Tus datos de contacto
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        required
                        type="text"
                        placeholder="Nombre *"
                        value={form.nombre}
                        onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                        className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-surface-container border border-outline/20 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Empresa"
                        value={form.empresa}
                        onChange={e => setForm(f => ({ ...f, empresa: e.target.value }))}
                        className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-surface-container border border-outline/20 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email *"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-surface-container border border-outline/20 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Teléfono *"
                        value={form.telefono}
                        onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))}
                        className="col-span-2 sm:col-span-1 px-4 py-3 rounded-xl bg-surface-container border border-outline/20 text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-gradient w-full flex items-center justify-center gap-2 py-4 rounded-full font-black text-[11px] tracking-[0.2em] uppercase text-on-primary shadow-[0_10px_20px_rgba(51,106,25,0.2)] hover:shadow-[0_15px_30px_rgba(51,106,25,0.3)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                    >
                      <Send size={14} />
                      Enviar cotización por WhatsApp
                    </button>
                    <p className="text-center text-[10px] text-on-surface-variant/50 tracking-wider">
                      Te responderemos en menos de 24 horas hábiles.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

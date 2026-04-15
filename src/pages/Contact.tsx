import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  const contactPoints = [
    {
      title: 'Ventas y Proyectos',
      email: 'aluvallesas@gmail.com',
      desc: 'Asesoramiento comercial para obras y distribuidores.',
      icon: 'point_of_sale'
    }
  ];

  const locations = [
    {
      name: 'Planta Industrial & Ventas',
      address: 'Estado de Israel, R8324 Cipolletti, Río Negro',
      phone: '+54 9 299 608-7387',
      timings: 'Lun a Vie: 8:00 a 17:00 hs'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background transition-colors duration-500">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <section className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Contacto Directo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-on-surface mb-6 tracking-tight"
          >
            Hablemos de su próximo <br />
            <span className="text-primary">gran proyecto</span>
          </motion.h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container border border-outline/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState !== 'success' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h2 className="text-2xl font-bold text-on-surface mb-8">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Nombre</label>
                        <input id="nombre" placeholder="Tu nombre" required type="text" className="w-full bg-surface-container-low border border-outline/20 focus:border-primary text-on-surface p-4 rounded-xl outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Email</label>
                        <input id="email" placeholder="tu@email.com" required type="email" className="w-full bg-surface-container-low border border-outline/20 focus:border-primary text-on-surface p-4 rounded-xl outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="asunto" className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Asunto</label>
                      <select id="asunto" className="w-full bg-surface-container-low border border-outline/20 focus:border-primary text-on-surface p-4 rounded-xl outline-none transition-all appearance-none cursor-pointer">
                        <option>Presupuesto de Obra</option>
                        <option>Soporte Técnico</option>
                        <option>Asesoramiento Comercial</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Mensaje</label>
                      <textarea id="mensaje" required rows={4} className="w-full bg-surface-container-low border border-outline/20 focus:border-primary text-on-surface p-4 rounded-xl outline-none transition-all resize-none"></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold uppercase tracking-widest hover:brightness-110 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {formState === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : 'Enviar Mensaje'}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
                  </div>
                  <h2 className="text-3xl font-bold text-on-surface mb-4">¡Mensaje Recibido!</h2>
                  <p className="text-on-surface-variant mb-8 max-w-sm mx-auto">Hemos recibido su consulta correctamente. Un asesor técnico se pondrá en contacto con usted en las próximas 24 horas hábiles.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-primary border border-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Info Area */}
          <div className="space-y-12">
            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactPoints.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-surface-container-high border border-outline/10 p-6 rounded-2xl hover:bg-surface-container-highest transition-all"
                >
                  <span className="material-symbols-outlined text-primary mb-4">
                    {point.icon}
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-3">{point.desc}</p>
                  <a href={`mailto:${point.email}`} className="text-primary font-medium hover:underline text-sm">
                    {point.email}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Locations Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                Nuestras Sedes
              </h2>
              <div className="space-y-4">
                {locations.map((loc, idx) => (
                  <motion.div
                    key={loc.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#1a1d21] border-l-4 border-[#a0d87a] rounded-r-2xl gap-4 cursor-default hover:bg-[#212429] transition-colors"
                  >
                    <div>
                      <h4 className="text-on-surface font-bold mb-1">{loc.name}</h4>
                      <p className="text-on-surface-variant text-sm">{loc.address}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-primary font-bold text-sm mb-1">{loc.phone}</p>
                      <p className="text-gray-600 text-[11px] uppercase tracking-wider">{loc.timings}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder with visual polish */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Estado+de+Israel,+R8324+Cipolletti,+R%C3%ADo+Negro"
              target="_blank"
              rel="noopener noreferrer"
              className="h-48 bg-gray-900 rounded-3xl relative overflow-hidden group block"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Map Background"
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <span className="material-symbols-outlined text-primary text-4xl animate-bounce">location_on</span>
                <span className="text-on-surface font-bold text-sm tracking-widest uppercase">Ver mapa interactivo</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

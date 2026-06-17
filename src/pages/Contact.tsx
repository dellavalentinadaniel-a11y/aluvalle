import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: 'Presupuesto de Obra',
    mensaje: ''
  });

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = 'Este campo es requerido';
    } else if (name === 'email' && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors[name] = 'Email inválido';
    } else if (name === 'telefono' && !value.match(/^[+]?[0-9]{8,15}$/)) {
      newErrors[name] = 'Teléfono inválido (mínimo 8 dígitos numéricos)';
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos los campos antes de enviar
    const currentErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) currentErrors.nombre = 'Este campo es requerido';
    if (!formData.email.trim()) {
      currentErrors.email = 'Este campo es requerido';
    } else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      currentErrors.email = 'Email inválido';
    }
    if (!formData.telefono.trim()) {
      currentErrors.telefono = 'Este campo es requerido';
    } else if (!formData.telefono.match(/^[+]?[0-9]{8,15}$/)) {
      currentErrors.telefono = 'Teléfono inválido (mínimo 8 dígitos)';
    }
    if (!formData.mensaje.trim()) currentErrors.mensaje = 'Este campo es requerido';

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      setFormState('sending');
      setTimeout(() => setFormState('success'), 1500);
    }
  };

  const contactPoints = [
    {
      title: 'Ventas y Proyectos',
      email: 'aluvallesas@gmail.com',
      desc: 'Asesoramiento comercial para obras y distribuidores.',
      icon: 'point_of_sale',
    },
  ];

  const locations = [
    {
      name: 'Planta Industrial & Ventas',
      address: 'Estado de Israel, R8324 Cipolletti, Río Negro',
      phone: '+54 9 299 608-7387',
      timings: 'Lun a Vie: 8:00 a 17:00 hs',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background transition-colors duration-500">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <img
          src="/gallery/showroom.jpg"
          loading="lazy"
          className="bg-image-theme animate-slow-zoom"
          alt=""
        />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
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
            className="text-3xl md:text-5xl lg:text-7xl font-bold text-on-surface mb-6 tracking-tight"
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
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }}>
                  <h2 className="text-2xl font-bold text-on-surface mb-8">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <input
                        id="nombre"
                        name="nombre"
                        placeholder=" "
                        required
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`peer w-full bg-surface-container-low border text-on-surface pt-6 pb-2 px-4 rounded-xl outline-none transition-all text-base placeholder-transparent ${
                          errors.nombre
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-outline/10 focus:border-primary'
                        }`}
                        inputMode="text"
                      />
                      <label
                        htmlFor="nombre"
                        className="absolute left-4 top-4.5 text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold transition-all pointer-events-none
                          peer-placeholder-shown:text-xs peer-placeholder-shown:top-4.5
                          peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:text-primary
                          peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px]"
                      >
                        Nombre Completo
                      </label>
                      {errors.nombre && <p className="text-red-500 text-[10px] font-semibold mt-1 pl-1">{errors.nombre}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          placeholder=" "
                          required
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`peer w-full bg-surface-container-low border text-on-surface pt-6 pb-2 px-4 rounded-xl outline-none transition-all text-base placeholder-transparent ${
                            errors.email
                              ? 'border-red-500/50 focus:border-red-500'
                              : 'border-outline/10 focus:border-primary'
                          }`}
                          inputMode="email"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 top-4.5 text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold transition-all pointer-events-none
                            peer-placeholder-shown:text-xs peer-placeholder-shown:top-4.5
                            peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:text-primary
                            peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px]"
                        >
                          Email
                        </label>
                        {errors.email && <p className="text-red-500 text-[10px] font-semibold mt-1 pl-1">{errors.email}</p>}
                      </div>

                      <div className="relative">
                        <input
                          id="telefono"
                          name="telefono"
                          placeholder=" "
                          required
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`peer w-full bg-surface-container-low border text-on-surface pt-6 pb-2 px-4 rounded-xl outline-none transition-all text-base placeholder-transparent ${
                            errors.telefono
                              ? 'border-red-500/50 focus:border-red-500'
                              : 'border-outline/10 focus:border-primary'
                          }`}
                          inputMode="tel"
                        />
                        <label
                          htmlFor="telefono"
                          className="absolute left-4 top-4.5 text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold transition-all pointer-events-none
                            peer-placeholder-shown:text-xs peer-placeholder-shown:top-4.5
                            peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:text-primary
                            peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px]"
                        >
                          Teléfono
                        </label>
                        {errors.telefono && <p className="text-red-500 text-[10px] font-semibold mt-1 pl-1">{errors.telefono}</p>}
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        className="w-full bg-surface-container-low border border-outline/10 focus:border-primary text-on-surface pt-6 pb-2 px-4 rounded-xl outline-none transition-all appearance-none cursor-pointer text-base"
                      >
                        <option>Presupuesto de Obra</option>
                        <option>Soporte Técnico</option>
                        <option>Asesoramiento Comercial</option>
                        <option>Otro</option>
                      </select>
                      <label
                        htmlFor="asunto"
                        className="absolute left-4 top-1.5 text-[9px] uppercase tracking-widest text-primary font-bold pointer-events-none"
                      >
                        Asunto de Consulta
                      </label>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 pointer-events-none text-base">
                        unfold_more
                      </span>
                    </div>

                    <div className="relative">
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={4}
                        placeholder=" "
                        value={formData.mensaje}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`peer w-full bg-surface-container-low border text-on-surface pt-6 pb-2 px-4 rounded-xl outline-none transition-all resize-none text-base placeholder-transparent ${
                          errors.mensaje
                            ? 'border-red-500/50 focus:border-red-500'
                            : 'border-outline/10 focus:border-primary'
                        }`}
                      ></textarea>
                      <label
                        htmlFor="mensaje"
                        className="absolute left-4 top-4.5 text-xs uppercase tracking-widest text-on-surface-variant/60 font-bold transition-all pointer-events-none
                          peer-placeholder-shown:text-xs peer-placeholder-shown:top-4.5
                          peer-focus:top-1.5 peer-focus:text-[9px] peer-focus:text-primary
                          peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[9px]"
                      >
                        Mensaje
                      </label>
                      {errors.mensaje && <p className="text-red-500 text-[10px] font-semibold mt-1 pl-1">{errors.mensaje}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold uppercase tracking-widest hover:brightness-110 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-primary/10 hover:shadow-primary/20"
                    >
                      {formState === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar Mensaje'
                      )}
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
                    <span className="material-symbols-outlined text-primary text-4xl">
                      check_circle
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-on-surface mb-4">¡Mensaje Recibido!</h2>
                  <p className="text-on-surface-variant mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                    Hemos recibido su consulta correctamente. Un asesor técnico se pondrá en
                    contacto con usted en las próximas 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-primary border border-primary/20 hover:border-primary/50 px-8 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all font-bold uppercase tracking-wider text-xs cursor-pointer"
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
                  <span className="material-symbols-outlined text-primary mb-4">{point.icon}</span>
                  <h3 className="text-lg font-bold text-on-surface mb-2">{point.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-3">{point.desc}</p>
                  <a
                    href={`mailto:${point.email}`}
                    className="text-primary font-medium hover:underline text-sm"
                  >
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
                      className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container-high border-l-4 border-primary rounded-r-2xl gap-4 cursor-default hover:bg-surface-container-highest transition-colors"
                    >
                      <div>
                        <h4 className="text-on-surface font-bold mb-1">{loc.name}</h4>
                        <p className="text-on-surface-variant text-sm">{loc.address}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-primary font-bold text-sm mb-1">{loc.phone}</p>
                        <p className="text-on-surface-variant text-[11px] uppercase tracking-wider">
                          {loc.timings}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
  
              {/* Google Maps Real Iframe */}
              <div className="w-full h-80 bg-surface-container-low rounded-[2rem] overflow-hidden relative border border-outline/10 shadow-xl group">
                <iframe
                  src="https://maps.google.com/maps?q=Estado%20de%20Israel,%20Cipolletti,%20R%C3%ADo%20Negro,%20Argentina&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 dark:invert-[90%] dark:hue-rotate-[180deg]"
                  allowFullScreen={false}
                  loading="lazy"
                  title="Ubicación de Planta Industrial Aluvalle"
                  aria-label="Planta Industrial Aluvalle en Google Maps"
                ></iframe>
                {/* Overlay sutil en hover */}
                <div className="absolute top-4 right-4 bg-background/70 backdrop-blur-md border border-outline/10 px-3 py-1.5 rounded-xl text-[10px] font-bold text-on-surface uppercase tracking-wider opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none">
                  Planta Industrial
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



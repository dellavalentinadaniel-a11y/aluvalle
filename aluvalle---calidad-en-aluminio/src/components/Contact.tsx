import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Presupuesto para Obra',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validation logic
  useEffect(() => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    // Name validation
    if (formData.name.trim().length > 0 && formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
      isValid = false;
    } else if (formData.name.trim().length === 0) {
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim().length > 0 && !emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
      isValid = false;
    } else if (formData.email.trim().length === 0) {
      isValid = false;
    }

    // Message validation
    if (formData.message.trim().length > 0 && formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
      isValid = false;
    } else if (formData.message.trim().length === 0) {
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
      setFormData({ name: '', email: '', subject: 'Presupuesto para Obra', message: '' });
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-alu-dark rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 p-12 lg:p-20 bg-alu-green text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-8 leading-tight">
                ¿Tienes un proyecto <br /> en mente?
              </h2>
              <p className="text-white/80 mb-12 text-lg">
                Nuestro equipo de expertos está listo para asesorarte y brindarte 
                la mejor solución técnica para tu obra.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-white/60 mb-1">Llámanos</p>
                    <p className="text-xl font-bold">+54 11 4567-8900</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-white/60 mb-1">Escríbenos</p>
                    <p className="text-xl font-bold">info@aluvalle.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-white/60 mb-1">Visítanos</p>
                    <p className="text-xl font-bold">Parque Industrial, Valle Fértil</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-20 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-alu-gray">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez"
                    className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-100 focus:ring-alu-green/20 focus:border-alu-green'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-alu-gray">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@ejemplo.com"
                    className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-100 focus:ring-alu-green/20 focus:border-alu-green'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-alu-gray">Asunto</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-alu-green/20 focus:border-alu-green transition-all appearance-none"
                >
                  <option value="Presupuesto para Obra">Presupuesto para Obra</option>
                  <option value="Consulta Técnica">Consulta Técnica</option>
                  <option value="Ventas Mayoristas">Ventas Mayoristas</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-alu-gray">Mensaje</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className={`w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-100 focus:ring-alu-green/20 focus:border-alu-green'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs font-medium flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>
              <button 
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl ${
                  isFormValid 
                    ? 'bg-alu-dark text-white hover:bg-alu-green shadow-black/10 cursor-pointer' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                }`}
              >
                Enviar Mensaje
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

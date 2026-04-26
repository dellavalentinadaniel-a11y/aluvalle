import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Wind, ThermometerSun, Maximize } from 'lucide-react';

const features = [
  {
    icon: ThermometerSun,
    title: 'Ruptura de Puente Térmico (RPT)',
    description: 'Aislamiento superior que evita la condensación y reduce drásticamente el consumo energético.'
  },
  {
    icon: Wind,
    title: 'Hermeticidad Avanzada',
    description: 'Sistemas de triple contacto y burletes de EPDM que garantizan máxima estanqueidad al agua y viento.'
  },
  {
    icon: ShieldCheck,
    title: 'Aislamiento Acústico',
    description: 'Capacidad para recibir Doble Vidriado Hermético (DVH) de gran espesor para insonorización.'
  },
  {
    icon: Maximize,
    title: 'Grandes Luces',
    description: 'Perfiles reforzados que permiten aberturas de piso a techo maximizando la entrada de luz natural.'
  }
];

export default function CarpentrySystems() {
  return (
    <section id="sistemas-carpinteria" className="py-24 bg-alu-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">Alta Prestación</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
            Sistemas de <span className="text-alu-green">Carpintería</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Diseñados para proyectos arquitectónicos exigentes. Combinan estética minimalista con el máximo rendimiento térmico y acústico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-alu-green/20 flex items-center justify-center text-alu-green mb-6">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Windows"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-alu-green/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

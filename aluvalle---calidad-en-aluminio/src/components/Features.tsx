import React from 'react';
import { Shield, Zap, Award, Recycle } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Shield,
    title: 'Máxima Durabilidad',
    description: 'Nuestros perfiles están diseñados para resistir las condiciones climáticas más extremas sin perder sus propiedades.'
  },
  {
    icon: Zap,
    title: 'Eficiencia Energética',
    description: 'Sistemas con ruptura de puente térmico que garantizan un aislamiento superior y ahorro en climatización.'
  },
  {
    icon: Award,
    title: 'Calidad Certificada',
    description: 'Cumplimos con los más altos estándares internacionales en procesos de extrusión y tratamiento de superficies.'
  },
  {
    icon: Recycle,
    title: 'Sustentabilidad',
    description: 'El aluminio es 100% reciclable. Nuestro compromiso es con el medio ambiente y la economía circular.'
  }
];

export default function Features() {
  return (
    <section id="empresa" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">Trayectoria y Confianza</span>
            <h2 className="text-4xl md:text-5xl font-black text-alu-dark mb-8 tracking-tight leading-tight">
              Liderando la industria del <span className="text-alu-green">aluminio</span> con innovación constante.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Aluvalle, transformamos el aluminio en soluciones arquitectónicas de vanguardia. 
              Con años de experiencia en el mercado, nos hemos consolidado como el socio estratégico 
              para arquitectos y constructoras que buscan excelencia y diseño.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="group relative self-start">
                    <div className="w-12 h-12 rounded-2xl bg-alu-green/10 flex items-center justify-center text-alu-green transition-colors cursor-help">
                      <feature.icon size={24} />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-alu-dark text-white text-xs font-bold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl z-10 pointer-events-none">
                      {feature.title}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-alu-dark"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-alu-dark mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Aluminum Process"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-alu-green">25+</div>
                <div className="text-xs font-bold text-alu-gray uppercase tracking-widest leading-tight">
                  Años de <br /> Experiencia
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-alu-dark p-8 rounded-3xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-white">500+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                  Proyectos <br /> Completados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

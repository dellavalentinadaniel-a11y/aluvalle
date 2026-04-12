import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-[#0b0e12]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2 }}
            className="w-full h-full object-cover grayscale" 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Arquitectura de Vanguardia"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-[#0b0e12]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#a0d87a] font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
          >
            Sistemas de Aluminio de Alta Gama
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.9]"
          >
            PRECISIÓN <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a0d87a] to-[#d4f1c1]">SIN LÍMITES.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-12"
          >
            En Aluvalle, transformamos la extrusión de aluminio en una forma de arte técnico. Soluciones estructurales para la arquitectura moderna.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
             <Link to="/sistemas/ventanas-y-puertas" className="bg-[#a0d87a] text-[#111417] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#8bc565] transition-all transform hover:scale-105">
                Ver Catálogo
             </Link>
             <Link to="/proyectos" className="border border-[#a0d87a] text-[#a0d87a] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#a0d87a] hover:text-[#111417] transition-all transform hover:scale-105">
                Proyectos
             </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 bg-[#161a1f] rounded-[2.5rem] border border-gray-800"
          >
            <span className="material-symbols-outlined text-[#a0d87a] text-4xl mb-6">architecture</span>
            <h3 className="text-2xl font-bold text-white mb-4">Ingeniería Técnica</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Soporte especializado desde la concepción del proyecto hasta la instalación final en obra.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 bg-[#161a1f] rounded-[2.5rem] border border-gray-800"
          >
            <span className="material-symbols-outlined text-[#a0d87a] text-4xl mb-6">eco</span>
            <h3 className="text-2xl font-bold text-white mb-4">Eficiencia Térmica</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Sistemas RPT que garantizan el máximo confort climático y ahorro energético.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 bg-[#161a1f] rounded-[2.5rem] border border-gray-800"
          >
            <span className="material-symbols-outlined text-[#a0d87a] text-4xl mb-6">verified</span>
            <h3 className="text-2xl font-bold text-white mb-4">Calidad Certificada</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Ensayos rigurosos bajo normas internacionales de estanqueidad y resistencia.</p>
          </motion.div>
        </div>
      </section>

      {/* Visual Break / Call to Action */}
      <section className="py-40 bg-[#111417] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-[#a0d87a]/20 h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">El estándar de oro en perfiles arquitectónicos</h2>
          <p className="text-gray-400 text-lg mb-12">Socio estratégico oficial de Alcemar S.A. para el desarrollo de infraestructuras premium.</p>
          <Link to="/oficina-tecnica" className="text-[#a0d87a] font-bold uppercase tracking-widest border-b-2 border-[#a0d87a] pb-2 hover:opacity-70 transition-opacity">
            Acceso Oficina Técnica
          </Link>
        </div>
      </section>
    </div>
  );
}

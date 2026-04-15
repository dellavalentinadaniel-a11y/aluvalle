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

      {/* Infrastructure Gallery */}
      <section className="py-32 bg-[#0b0e12]/50 border-y border-[#323539]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#a0d87a] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block"
              >
                Nuestra Infraestructura
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Capacidad técnica <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">sin límites geográficos.</span>
              </h2>
            </div>
            <Link to="/contact" className="text-white font-bold flex items-center gap-3 group">
              Explorar instalaciones
              <span className="material-symbols-outlined text-[#a0d87a] group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main large image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden relative group cursor-crosshair"
            >
              <img 
                src="/gallery/warehouse.jpg" 
                alt="Almacén de perfiles" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10">
                <span className="bg-[#a0d87a] text-[#111417] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter mb-4 inline-block">Logística</span>
                <h4 className="text-3xl font-bold text-white mb-2">Stock Permanente Capaz</h4>
                <p className="text-gray-400 text-sm max-w-sm">Garantizamos la disponibilidad inmediata de toda nuestra gama de sistemas para proyectos de gran envergadura.</p>
              </div>
            </motion.div>

            {/* Side column */}
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-[287px] rounded-[2.5rem] overflow-hidden relative group cursor-crosshair"
              >
                <img 
                  src="/gallery/showroom.jpg" 
                  alt="Showroom Aluvallé" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold text-white">Showroom Técnico</h4>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Experiencia inmersiva</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-[287px] rounded-[2.5rem] overflow-hidden relative group cursor-crosshair"
              >
                <img 
                  src="/gallery/profiles.jpg" 
                  alt="Perfiles de aluminio" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold text-white">Matricería Propia</h4>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest mt-1">Diseño de vanguardia</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Lower row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-[400px] rounded-[2.5rem] overflow-hidden relative group cursor-crosshair"
              >
                <img 
                  src="/gallery/industrial.jpg" 
                  alt="Planta industrial" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-bold text-white">Extrusión de Precisión</h4>
                  <p className="text-gray-400 text-sm mt-2 max-w-xs">Procesos industriales certificados bajo los más altos estándares internacionales de calidad.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-[400px] rounded-[2.5rem] overflow-hidden relative group cursor-crosshair"
              >
                <img 
                  src="/gallery/office.jpg" 
                  alt="Divisiones de oficina" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e12] to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-bold text-white">Arquitectura Interior</h4>
                  <p className="text-gray-400 text-sm mt-2 max-w-xs">Sistemas modulares y perfiles para divisiones de alta gama en entornos corporativos.</p>
                </div>
              </motion.div>
          </div>
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

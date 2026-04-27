import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/gallery/herobanner/sistemas-arquitectonicos-aluvalle-cerramientos-modernos.webp"
            className="absolute inset-0 block w-full h-full object-cover"
          >
            <source src="/gallery/banner-video/aluvalle.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
          >
            Sistemas de Aluminio de Alta Gama
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-7xl md:text-9xl font-bold text-on-surface mb-8 tracking-tighter leading-[0.9]"
          >
            PRECISIÓN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              SIN LÍMITES.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-on-surface-variant text-xl max-w-2xl leading-relaxed mb-12"
          >
            En Aluvalle, transformamos la extrusión de aluminio en una forma de arte técnico.
            Soluciones estructurales para la arquitectura moderna.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            <Link
              to="/sistemas/ventanas-y-puertas"
              className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:brightness-110 transition-all transform hover:scale-105"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/proyectos"
              className="border border-primary text-primary px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all transform hover:scale-105"
            >
              Proyectos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="py-16 md:py-32 bg-surface-container-low/30 border-y border-outline/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block"
              >
                Nuestra Infraestructura
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold text-on-surface tracking-tight leading-tight">
                Capacidad técnica <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                  sin límites geográficos.
                </span>
              </h2>
            </div>
            <Link to="/contact" className="text-on-surface font-bold flex items-center gap-3 group">
              Explorar instalaciones
              <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 h-[300px] md:h-[600px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-outline/10 shadow-2xl"
            >
              <img
                src="/gallery/hero-sistemas-banner/sistemas-de-aluminio-para-la-construccion-alumed-aluminium-systems-alicante-showroom-7-perfiles-cristal-1-1024x645.jpg"
                alt="Almacén de perfiles"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="bg-primary text-on-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter mb-4 inline-block shadow-lg shadow-primary/40">
                  Logística
                </span>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">Stock Permanente Capaz</h4>
                <p className="text-white/80 text-sm max-w-md leading-relaxed">
                  Garantizamos la disponibilidad inmediata de toda nuestra gama de sistemas para
                  proyectos de gran envergadura.
                </p>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="material-symbols-outlined text-white text-lg">arrow_outward</span>
              </div>
            </motion.div>

            {/* Side column */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-[250px] md:h-[287px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-outline/10 shadow-xl"
              >
                <img
                  src="/gallery/herobanner/sistemas-arquitectonicos-aluvalle-cerramientos-modernos.webp"
                  alt="Showroom Aluvallé"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">
                    Experiencia inmersiva
                  </p>
                  <h4 className="text-xl font-bold text-white drop-shadow-md">Showroom Técnico</h4>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-[250px] md:h-[287px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-outline/10 shadow-xl"
              >
                <img
                  src="/gallery/herobanner/perfiles-aluminio-optimizacion-termica-acustica.webp"
                  alt="Perfiles de aluminio"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-1">
                    Diseño de vanguardia
                  </p>
                  <h4 className="text-xl font-bold text-white drop-shadow-md">Matricería Propia</h4>
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
              className="h-[250px] md:h-[400px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-outline/10 shadow-xl"
            >
              <img
                src="/gallery/hero-sistemas-banner/_T1A2631.jpg"
                alt="Planta industrial"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-white/10 backdrop-blur-md text-primary border border-primary/30 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                  Producción
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Extrusión de Precisión</h4>
                <p className="text-white/80 text-sm mt-2 max-w-sm leading-relaxed">
                  Procesos industriales certificados bajo los más altos estándares internacionales
                  de calidad.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-[250px] md:h-[400px] rounded-[2.5rem] overflow-hidden relative group cursor-pointer border border-outline/10 shadow-xl"
            >
              <img
                src="/gallery/hero-sistemas-banner/POPLE_(012).jpg"
                alt="Divisiones de oficina"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="bg-white/10 backdrop-blur-md text-primary border border-primary/30 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                  Corporativo
                </span>
                <h4 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">Arquitectura Interior</h4>
                <p className="text-white/80 text-sm mt-2 max-w-sm leading-relaxed">
                  Sistemas modulares y perfiles para divisiones de alta gama en entornos
                  corporativos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break / Call to Action */}
      <section className="py-16 md:py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-primary/20 h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 rounded-[2.5rem] overflow-hidden aspect-video border border-outline/10 shadow-2xl relative group"
          >
            <img
              src="/gallery/herobanner/aluvalle-aberturas-aluminio-linea-gamma-premium.webp"
              alt="Precisión Técnica"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-8 tracking-tight uppercase">
            El estándar de oro en perfiles arquitectónicos
          </h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Socio estratégico oficial de Alcemar S.A. para el desarrollo de infraestructuras
            premium.
          </p>
          <Link
            to="/oficina-tecnica"
            className="text-primary font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:opacity-70 transition-opacity"
          >
            Acceso Oficina Técnica
          </Link>
        </div>
      </section>
    </div>
  );
}



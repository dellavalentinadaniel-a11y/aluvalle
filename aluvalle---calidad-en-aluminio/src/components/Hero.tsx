import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-alu-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
          alt="Aluminum Architecture"
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-alu-dark via-alu-dark/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-alu-green/20 text-alu-green text-xs font-bold uppercase tracking-widest mb-6 border border-alu-green/30">
              Innovación en Aluminio
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
              Sistemas de <br />
              <span className="text-alu-green">Aluminio</span> de <br />
              Alta Prestación.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
              Diseñamos y fabricamos soluciones arquitectónicas que combinan estética, 
              durabilidad y eficiencia energética para los proyectos más exigentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-alu-green text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-alu-green transition-all flex items-center justify-center gap-2 shadow-xl shadow-alu-green/20">
                Nuestros Sistemas
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all">
                Ver Obras
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Descubrir</span>
        <ChevronDown size={20} />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-alu-green/5 blur-[120px] rounded-full"></div>
    </section>
  );
}

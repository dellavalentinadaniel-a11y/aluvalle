import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative min-h-screen md:h-screen flex items-center overflow-hidden bg-alu-dark sm:pt-20 pt-24">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 block w-full h-full object-cover"
        >
          <source src="/aluvalle.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 from-5% via-black/30 via-45% to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-alu-green/20 text-alu-green text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 border border-alu-green/30">
              Innovación en Aluminio
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6 tracking-tighter">
              Sistemas de <br />
              <span className="text-alu-green">Aluminio</span> de <br />
              Alta Prestación.
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed max-w-xl">
              Diseñamos y fabricamos soluciones arquitectónicas que combinan estética,
              durabilidad y eficiencia energética para los proyectos más exigentes.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button type="button" className="group bg-alu-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-alu-green transition-all flex items-center justify-center gap-2 shadow-xl shadow-alu-green/20">
                Nuestros Sistemas
                <ArrowRight className="group-hover:translate-x-1 transition-transform hidden sm:block" size={18} />
              </button>
              <button type="button" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/20 transition-all">
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
        className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-1 sm:gap-2"
      >
        <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">Descubrir</span>
        <ChevronDown size={16} className="sm:w-5 sm:h-5" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-alu-green/5 blur-[120px] rounded-full"></div>
    </section>
  );
}

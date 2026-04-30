import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function CarpinteriasPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-20">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-primary/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Ícono animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-28 h-28 rounded-full bg-surface-container border border-outline/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(0,0,0,0.2)]"
        >
          <span className="material-symbols-outlined text-primary text-6xl">
            handyman
          </span>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Próximamente
          </span>
          <span className="bg-surface-container border border-outline/10 text-on-surface-variant px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            En Desarrollo
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-headline text-4xl md:text-6xl font-black text-on-surface uppercase tracking-tight leading-none mb-6"
        >
          Red de<br />
          <span className="text-primary">Carpinterías</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-on-surface-variant text-base leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Estamos preparando un espacio dedicado a nuestros clientes. Muy pronto encontrarás aquí 
          un directorio completo con los contactos y talleres de las carpinterías de aluminio 
          de confianza que trabajan con los sistemas Aluvallé.
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12 max-w-sm mx-auto w-full"
        >
          <div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
            <span>Progreso del Directorio</span>
            <span>20%</span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '20%' }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
            />
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-surface-container border border-outline/20 hover:border-primary/40 text-on-surface hover:text-primary px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
          >
            <span className="material-symbols-outlined text-sm">home</span>
            Volver al Inicio
          </Link>
          <Link
            to="/contact"
            className="btn-gradient flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-on-primary transition-all"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            Quiero sumarme a la red
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

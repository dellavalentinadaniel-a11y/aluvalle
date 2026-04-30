import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-32 pb-20">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-primary/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Ícono animado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-28 h-28 rounded-full bg-surface-container border border-outline/20 flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(0,0,0,0.2)]"
        >
          <span className="material-symbols-outlined text-primary text-6xl">
            account_circle
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
          Portal de<br />
          <span className="text-primary">Clientes</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-on-surface-variant text-sm leading-relaxed mb-12 max-w-sm mx-auto"
        >
          Estamos construyendo un espacio exclusivo donde podrás gestionar tus pedidos,
          acceder a documentación técnica personalizada y hacer seguimiento de tus proyectos.
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">
            <span>Progreso</span>
            <span>35%</span>
          </div>
          <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '35%' }}
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
            Contactarnos
          </Link>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-24">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-wide mb-4">
            Beneficios Exclusivos
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Próximamente, al acceder con tu cuenta de cliente, podrás disfrutar de una serie de herramientas diseñadas para optimizar tus proyectos y simplificar tus gestiones operativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Beneficio 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-low border border-outline/10 p-8 rounded-2xl hover:border-primary/30 transition-all group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-3">Seguimiento de Pedidos</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Consulta en tiempo real el estado de tus compras, fechas de entrega estimadas y descarga remitos o facturas al instante.
            </p>
          </motion.div>

          {/* Beneficio 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-low border border-outline/10 p-8 rounded-2xl hover:border-primary/30 transition-all group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-3">Oficina Técnica Digital</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Accede a planos de armado detallados, calculadoras de peso exclusivas y manuales de usuario de todos nuestros sistemas.
            </p>
          </motion.div>

          {/* Beneficio 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-low border border-outline/10 p-8 rounded-2xl hover:border-primary/30 transition-all group"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-3">Atención Prioritaria</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Comunicación directa con nuestros asesores para consultas técnicas complejas, cotizaciones rápidas y soporte posventa garantizado.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

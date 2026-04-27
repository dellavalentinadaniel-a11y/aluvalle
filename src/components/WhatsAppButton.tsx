import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  const whatsappNumber = '5492996087387';
  const message =
    'Hola Aluvallé! Estaba navegando por su sitio web y me gustaría recibir asesoramiento sobre sus sistemas.';
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Aparece tras 2 segundos
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── DESKTOP: Banner moderno ── */}
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', damping: 20, stiffness: 200 }}
            whileHover={{ y: -4 }}
            className="hidden lg:flex fixed bottom-8 right-8 z-[100] items-center gap-4 bg-[#111714] border border-[#25D366]/30 hover:border-[#25D366] px-6 py-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.25)] transition-all duration-300 group cursor-pointer"
            aria-label="Contactar por WhatsApp"
          >
            {/* Pulso verde */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center text-white w-5 h-5 shadow-[0_0_12px_rgba(37,211,102,0.5)]">
                <div className="w-5 h-5">
                  <WhatsAppIcon />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full" />
            </div>

            {/* Texto */}
            <div className="flex flex-col leading-tight">
              <span className="text-[#25D366] font-bold text-[10px] uppercase tracking-[0.2em]">
                Asesoramiento directo
              </span>
              <span className="text-white font-bold text-sm group-hover:text-[#25D366] transition-colors">
                Consultanos por WhatsApp
              </span>
            </div>

            {/* Flecha */}
            <span className="material-symbols-outlined text-[#25D366] text-lg group-hover:translate-x-1 transition-transform ml-1">
              arrow_forward
            </span>
          </motion.a>

          {/* ── MOBILE: Ícono clásico flotante ── */}
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] text-white"
            aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp"
          >
            <div className="w-8 h-8">
              <WhatsAppIcon />
            </div>
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}

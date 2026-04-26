import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingCTAProps {
  showAfterSeconds?: number;
}

export function FloatingCTA({ showAfterSeconds = 5 }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, showAfterSeconds * 1000);

    return () => clearTimeout(timer);
  }, [showAfterSeconds]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 max-w-sm"
        >
          <div className="bg-gradient-to-r from-primary to-primary-dark text-on-primary rounded-2xl shadow-2xl shadow-primary/30 p-4 md:p-6 border border-primary-light/20 backdrop-blur-md">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-sm md:text-base leading-tight">
                    ¿Tienes dudas?
                  </h3>
                  <p className="text-xs md:text-sm opacity-95 mt-1">
                    Consultá con nuestro equipo técnico
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                aria-label="Cerrar mensaje"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-4 py-2 rounded-lg hover:bg-on-primary/90 transition-colors text-sm w-full justify-center"
            >
              <span>Contactar Ahora</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

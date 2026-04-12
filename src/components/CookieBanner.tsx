import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-[#1a1d21]/90 backdrop-blur-xl border border-gray-800 p-6 rounded-[2rem] shadow-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-[#a0d87a]/10 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#a0d87a] text-xl">cookie</span>
              </div>
              <div className="space-y-1">
                <h4 className="text-white font-bold text-sm">Privacidad y Cookies</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y ofrecer contenidos técnica y arquitectónicamente relevantes.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-[#a0d87a] text-[#111417] py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#8bc565] transition-all"
              >
                Aceptar Todo
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="px-6 py-3 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Configurar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;

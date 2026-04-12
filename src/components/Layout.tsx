import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CookieBanner from './CookieBanner';
import WhatsAppButton from './WhatsAppButton';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

  const navLinks = [
    { 
      name: 'Productos', 
      subLinks: [
        { name: 'Sistemas de ventanas y puertas', path: '/sistemas/ventanas-y-puertas' },
        { name: 'Sistemas de lamas y fachadas', path: '/sistemas/lamas-y-fachadas' },
        { name: 'Sistemas Complementarios', path: '/sistemas/complementarios' },
        { name: 'Catálogo de Accesorios', path: '/sistemas/accesorios' }
      ]
    },
    { name: 'Proyectos Arquitectónicos', path: '/proyectos' },
    { name: 'Oficina Técnica', path: '/oficina-tecnica' },
    { name: 'Sostenibilidad', path: '/sostenibilidad' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 bg-[#191c20]/60 backdrop-blur-xl bg-gradient-to-b from-[#111417] to-transparent">
        <nav className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="material-symbols-outlined text-[#a0d87a] lg:hidden"
            >
              menu
            </button>
            <Link to="/" className="text-xl font-black tracking-tighter text-[#e1e2e8] font-headline uppercase">
              ALUVALLE
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-headline tracking-tight font-bold uppercase text-sm">
            {navLinks.map((link) => (
              link.subLinks ? (
                <div key={link.name} className="relative group cursor-pointer">
                  <div className={`flex items-center gap-1 ${location.pathname.startsWith('/sistemas') ? 'text-[#a0d87a]' : 'text-[#e1e2e8] group-hover:text-[#a0d87a]'} transition-colors duration-300 py-4`}>
                    {link.name}
                    <span className="material-symbols-outlined text-[1rem]">expand_more</span>
                  </div>
                   <div className="absolute top-full left-0 mt-2 w-72 bg-[#111417]/95 backdrop-blur-xl border border-[#323539]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 flex flex-col z-50 rounded-xl overflow-hidden">
                     <div className="p-2 flex flex-col">
                       {link.subLinks.map(sub => (
                         <Link 
                           key={sub.name}
                           to={sub.path}
                           className="px-6 py-4 text-[10px] font-headline tracking-[0.2em] uppercase text-[#94979e] hover:text-[#a0d87a] hover:bg-[#a0d87a]/5 transition-all flex items-center justify-between group/item"
                         >
                           {sub.name}
                           <span className="material-symbols-outlined text-sm opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all">chevron_right</span>
                         </Link>
                       ))}
                     </div>
                   </div>
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path!}
                  className={`${location.pathname === link.path ? 'text-[#a0d87a]' : 'text-[#e1e2e8] hover:text-[#a0d87a]'} transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block material-symbols-outlined text-[#e1e2e8] hover:text-[#a0d87a] transition-all">search</button>
            <Link to="/oficina-tecnica" className="btn-gradient text-on-primary px-6 py-2 rounded-full font-bold text-xs tracking-widest uppercase active:opacity-70 transition-all">
              Portal
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 z-[60] flex flex-col bg-[#111417] shadow-2xl lg:hidden"
            >
              <div className="p-8 flex justify-between items-center">
                <span className="text-[#e1e2e8] font-bold font-headline tracking-tight uppercase">SOLUCIONES ARQUITECTÓNICAS</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="material-symbols-outlined text-[#e1e2e8]">close</button>
              </div>
              <div className="flex flex-col divide-y divide-[#323539]/10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  >
                    {link.subLinks ? (
                      <div className="flex flex-col">
                        <button 
                          onClick={() => setExpandedSubMenu(expandedSubMenu === link.name ? null : link.name)}
                          className="w-full py-4 px-8 flex items-center justify-between font-headline text-sm tracking-widest uppercase text-[#94979e] hover:bg-[#191c20]"
                        >
                          {link.name}
                          <motion.span 
                            animate={{ rotate: expandedSubMenu === link.name ? 180 : 0 }}
                            className="material-symbols-outlined text-[1rem]"
                          >
                            expand_more
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {expandedSubMenu === link.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden flex flex-col divide-y divide-[#323539]/10 bg-[#0b0e12]"
                            >
                              {link.subLinks.map(sub => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="py-4 px-12 flex items-center font-headline text-xs tracking-widest uppercase text-[#94979e] hover:text-[#a0d87a] hover:bg-[#191c20] transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path!}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`py-4 px-8 flex items-center gap-4 font-headline text-sm tracking-widest uppercase transition-all ${location.pathname === link.path ? 'bg-[#191c20] text-[#a0d87a] border-l-4 border-[#a0d87a]' : 'text-[#94979e] hover:bg-[#191c20]'}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
               </div>
               <div className="p-8 mt-auto border-t border-[#323539]/10">
                 <Link 
                   to="/oficina-tecnica" 
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="btn-gradient w-full flex items-center justify-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-white"
                 >
                   Portal Profesional
                 </Link>
               </div>
             </motion.aside>
          </>
        )}
      </AnimatePresence>

      <WhatsAppButton />
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="w-full py-12 px-6 flex flex-col md:flex-row justify-between items-start gap-8 bg-[#0b0e12] border-t border-[#323539]/20 font-body text-[10px] leading-relaxed tonal-shift-from-surface-to-lowest">
        <div className="flex flex-col gap-4 max-w-xs">
          <span className="text-lg font-headline font-bold text-[#e1e2e8] uppercase">ALUVALLE</span>
          <p className="text-[#94979e]">Ingeniería de precisión para paisajes arquitectónicos modernos. Una asociación oficial de Aluvalle.</p>
          <div className="flex gap-4 mt-2">
            <span className="material-symbols-outlined text-[#86bc61] cursor-pointer hover:text-white transition-colors">public</span>
            <span className="material-symbols-outlined text-[#86bc61] cursor-pointer hover:text-white transition-colors">share</span>
            <span className="material-symbols-outlined text-[#86bc61] cursor-pointer hover:text-white transition-colors">settings</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto">
          <div className="flex flex-col gap-3">
            <span className="text-[#86bc61] uppercase tracking-widest mb-2 font-bold font-headline">Soluciones</span>
            <Link to="/sistemas/ventanas-y-puertas" className="text-[#94979e] hover:text-white transition-colors">Sistemas Residenciales</Link>
            <Link to="/sistemas/lamas-y-fachadas" className="text-[#94979e] hover:text-white transition-colors">Fachadas Comerciales</Link>
            <Link to="/sistemas/accesorios" className="text-[#94979e] hover:text-white transition-colors">Accesorios y Herrajes</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#86bc61] uppercase tracking-widest mb-2 font-bold font-headline">Recursos</span>
            <Link to="/oficina-tecnica" className="text-[#94979e] hover:text-white transition-colors">Portal Técnico</Link>
            <Link to="/oficina-tecnica" className="text-[#94979e] hover:text-white transition-colors">Objetos BIM</Link>
            <Link to="/oficina-tecnica" className="text-[#94979e] hover:text-white transition-colors">Especificaciones</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#86bc61] uppercase tracking-widest mb-2 font-bold font-headline">Empresa</span>
            <Link to="/sostenibilidad" className="text-[#94979e] hover:text-white transition-colors">Sostenibilidad</Link>
            <Link to="/proyectos" className="text-[#94979e] hover:text-white transition-colors">Portafolio</Link>
            <Link to="/contact" className="text-[#94979e] hover:text-white transition-colors">Carreras</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[#86bc61] uppercase tracking-widest mb-2 font-bold font-headline">Legal</span>
            <Link to="/" className="text-[#94979e] hover:text-white transition-colors">Política de Privacidad</Link>
            <Link to="/" className="text-[#94979e] hover:text-white transition-colors">Términos de Servicio</Link>
          </div>
        </div>
        <div className="w-full md:w-auto mt-8 md:mt-0 pt-4 md:pt-0 border-t border-[#323539]/10 md:border-none">
            <span className="text-[#94979e] block md:inline">© 2024 SISTEMAS ARQUITECTÓNICOS ALUVALLE. TODOS LOS DERECHOS RESERVADOS.</span>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}

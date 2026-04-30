import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { advertisingProducts } from '../data/affiliateProducts';
import { AffiliateProductCard } from './AffiliateProductCard';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import CookieBanner from './CookieBanner';
import WhatsAppButton from './WhatsAppButton';
import { ScrollToTopButton } from './ScrollToTopButton';
import { SubHeader } from './SubHeader';
import logoAluvalle from './logo-aluvalle-new.png';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
  const { theme } = useTheme();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Lógica de Smart Header: ocultar si está detenido
  useEffect(() => {
    const handleInteraction = () => {
      setIsHeaderVisible(true);
      
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      
      // Si el usuario deja de interactuar por 3 segundos, se oculta el header principal
      idleTimerRef.current = setTimeout(() => {
        // Solo ocultar si no estamos en el tope de la página
        if (window.scrollY > 100) {
          setIsHeaderVisible(false);
        }
      }, 3000);
    };

    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const advertisingCarouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll para el carrusel de publicidad
  useEffect(() => {
    const interval = setInterval(() => {
      if (advertisingCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = advertisingCarouselRef.current;
        // Si llegó al final, vuelve al principio. Agregamos un margen de 10px por si hay decimales.
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          advertisingCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Desplazar el ancho de un elemento
          const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth > 640 ? clientWidth / 2 : clientWidth * 0.8;
          advertisingCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    {
      name: 'Productos',
      subLinks: [
        {
          name: 'Sistemas de ventanas y puertas',
          path: '/sistemas/ventanas-y-puertas',
          items: [
            { name: 'Línea Tradicional', path: '/productos/linea-tradicional' },
            { name: 'Línea Mediterránea', path: '/productos/linea-mediterranea' },
            { name: 'Línea Gamma', path: '/productos/linea-gamma' },
            { name: 'Línea Delta', path: '/productos/linea-delta' },
            { name: 'Línea Mónaco', path: '/productos/linea-monaco' },
            { name: 'Línea Atlántica', path: '/productos/linea-atlantica' },
            { name: 'Línea Niza', path: '/productos/linea-niza' },
          ],
        },
        {
          name: 'Sistemas de lamas y fachadas',
          path: '/sistemas/lamas-y-fachadas',
          items: [
            { name: 'Frente Integral', path: '/productos/frente-integral' },
            { name: 'Frente Vidriado', path: '/productos/frente-vidriado' },
            { name: 'Sistema Lama Parasol', path: '/productos/sistema-de-lama-parasol' },
            { name: 'Sistema Frame', path: '/productos/sistema-frame-de-junta-cerrada' },
          ],
        },
        { name: 'Sistemas Complementarios', path: '/sistemas/complementarios' },
        { name: 'Catálogo de Accesorios', path: '/sistemas/accesorios' },
      ],
    },
    { name: 'Proyectos Arquitectónicos', path: '/proyectos' },
    { name: 'Red de Carpinterías', path: '/carpinterias' },
    { name: 'Oficina Técnica', path: '/oficina-tecnica' },
    { name: 'Sostenibilidad', path: '/sostenibilidad' },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === 'light' ? 'light' : ''}`}
    >
      <header
        className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline/10 transition-transform duration-500 ${
          theme === 'light' ? 'bg-background/80' : 'bg-surface-container-low/60'
        } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <nav className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <img
                src={logoAluvalle}
                alt="ALUVALLE"
                className={`h-12 md:h-14 w-auto object-contain transition-all duration-500 ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-headline tracking-tight font-bold uppercase text-sm">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.name} className="relative group cursor-pointer">
                  <div
                    className={`flex items-center gap-1 ${location.pathname.startsWith('/sistemas') ? 'text-primary' : 'text-on-surface group-hover:text-primary'} transition-colors duration-300 py-4`}
                  >
                    {link.name}
                    <span className="material-symbols-outlined text-[1rem]">expand_more</span>
                  </div>
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-surface/95 backdrop-blur-xl border border-outline/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-500 flex flex-col z-50 rounded-[2rem] overflow-visible p-3"
                  >
                    <div className="flex flex-col gap-1">
                      {link.subLinks.map((sub) => (
                        <div key={sub.name} className="relative group/sub">
                          <Link
                            to={sub.path}
                            className={`w-full px-6 py-4 text-[10px] font-headline tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary hover:bg-primary/8 transition-all flex items-center justify-between rounded-2xl ${sub.items ? 'cursor-default' : ''}`}
                          >
                            {sub.name}
                            {sub.items && (
                              <span className="material-symbols-outlined text-[1rem] opacity-40 group-hover/sub:opacity-100 transition-opacity">
                                chevron_right
                              </span>
                            )}
                          </Link>

                          {sub.items && (
                            <div
                              className="absolute left-full top-0 ml-3 w-72 bg-surface/98 backdrop-blur-xl border border-outline/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] opacity-0 invisible group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 -translate-x-4 transition-all duration-500 flex flex-col z-[60] rounded-[2rem] p-3"
                            >
                              <div className="flex flex-col gap-1">
                                {sub.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    className="px-6 py-3 text-[10px] font-headline tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary hover:bg-primary/8 transition-all rounded-xl"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path!}
                  className={`${location.pathname === link.path ? 'text-primary' : 'text-on-surface hover:text-primary'} transition-all duration-300 relative py-2 group-hover:text-primary`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </Link>
              )
            )}
          </div>
          
          <div className="flex items-center gap-6 ml-auto lg:ml-8">
            <Link
              to="/contact"
              className="hidden lg:flex btn-gradient px-8 py-3 rounded-full font-black text-[10px] tracking-[0.2em] uppercase shadow-[0_10px_20px_rgba(51,106,25,0.2)] hover:shadow-[0_15px_30px_rgba(51,106,25,0.3)] transform hover:-translate-y-0.5 active:scale-95 transition-all duration-300 items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-on-primary animate-pulse" />
              <span className="text-on-primary">Contáctanos</span>
            </Link>

            {/* Hamburger button — solo en mobile */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-xl hover:bg-surface-container transition-colors group"
            >
              <span className="block w-5 h-[2px] bg-on-surface group-hover:bg-primary transition-colors rounded-full" />
              <span className="block w-5 h-[2px] bg-on-surface group-hover:bg-primary transition-colors rounded-full" />
              <span className="block w-3 h-[2px] bg-on-surface group-hover:bg-primary transition-colors rounded-full ml-auto" />
            </button>
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
              className="fixed inset-y-0 left-0 w-80 z-[60] flex flex-col bg-background shadow-2xl lg:hidden"
            >
              <div className="p-8 flex justify-between items-center">
                <span className="text-on-surface font-bold font-headline tracking-tight uppercase">
                  SOLUCIONES ARQUITECTÓNICAS
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="material-symbols-outlined text-on-surface p-3 -m-3"
                  aria-label="Cerrar menú"
                >
                  close
                </button>
              </div>
              <div className="flex flex-col divide-y divide-outline/10">
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
                          onClick={() =>
                            setExpandedSubMenu(expandedSubMenu === link.name ? null : link.name)
                          }
                          className="w-full py-5 px-8 flex items-center justify-between font-headline text-sm tracking-widest uppercase text-on-surface-variant hover:bg-surface-container"
                          aria-expanded={expandedSubMenu === link.name}
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
                              className="overflow-hidden flex flex-col divide-y divide-outline/10 bg-surface-container-low"
                            >
                              {link.subLinks.map((sub) => (
                                <div key={sub.name} className="flex flex-col">
                                  <Link
                                    to={sub.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="py-4 px-8 flex items-center font-headline font-bold text-xs tracking-widest uppercase text-on-surface hover:text-primary transition-colors bg-black/10"
                                  >
                                    {sub.name}
                                  </Link>
                                  {sub.items &&
                                    sub.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="py-4 px-12 flex items-center font-body text-xs tracking-wider text-on-surface-variant hover:text-primary transition-colors"
                                      >
                                        - {item.name}
                                      </Link>
                                    ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path!}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`py-4 px-8 flex items-center gap-4 font-headline text-sm tracking-widest uppercase transition-all ${location.pathname === link.path ? 'bg-surface-container-low text-primary border-l-4 border-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="p-8 mt-auto border-t border-[#323539]/10">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gradient w-full flex items-center justify-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-white"
                >
                  Contactar Ahora
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <WhatsAppButton />
      <SubHeader isMainHeaderVisible={isHeaderVisible} />
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>

      {/* Publicidad Recomendada */}
      <section className="bg-surface-variant/5 border-t border-outline/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface uppercase mb-8">
            Ofertas y Herramientas Destacadas
          </h2>
          <div ref={advertisingCarouselRef} className="grid grid-rows-1 md:grid-rows-2 grid-flow-col auto-cols-[calc(80%-0.5rem)] sm:auto-cols-[calc(50%-0.5rem)] md:auto-cols-[calc(33.333%-1rem)] gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar scroll-smooth">
            {advertisingProducts.map((p, i) => (
              <AffiliateProductCard key={i} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Partner logos band */}
      <footer className="w-full bg-surface-container-lowest font-body text-[10px] leading-relaxed">
        {/* Logos socios - banda blanca */}
        <div className="w-full bg-white py-5 px-6 flex items-center justify-center gap-10 md:gap-16">
          <a
            href="https://alcemar.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Visitar Alcemar"
          >
            <img
              src="/logo-alcemar.jpg"
              alt="Alcemar"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>
          <div className="w-px h-10 bg-gray-200" />
          <a
            href="https://aluar.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Visitar Aluar"
          >
            <img
              src="/csm_aluar-logo_daa5258d9f.webp"
              alt="Aluar"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Separador con glow adaptativo */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(79,142,247,0.2)] dark:shadow-[0_0_15px_rgba(79,142,247,0.4)]" />

        {/* Cuerpo principal del footer */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-12 items-start">
          {/* Logo + descripción */}
          <div className="flex flex-col gap-6 max-w-xs">
            <Link to="/" className="group">
              <img
                src={logoAluvalle}
                alt="ALUVALLE"
                className={`h-24 md:h-28 w-auto object-contain transition-all duration-500 ${theme === 'dark' ? 'brightness-0 invert' : ''}`}
              />
            </Link>
            <p className="text-on-surface-variant text-[11px] leading-relaxed">
              Ingeniería de precisión para paisajes arquitectónicos modernos. Socio estratégico
              oficial de Alcemar S.A.
            </p>
          </div>

          {/* Columnas de navegación */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:pl-16">
            <div className="flex flex-col gap-3">
              <span className="text-on-surface font-bold font-headline uppercase tracking-widest text-[11px] mb-1 md:underline-offset-4">
                Soluciones
              </span>
              <Link
                to="/sistemas/ventanas-y-puertas"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Sistemas Residenciales
              </Link>
              <Link
                to="/sistemas/lamas-y-fachadas"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Fachadas Comerciales
              </Link>
              <Link
                to="/sistemas/accesorios"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Accesorios y Herrajes
              </Link>
              <Link
                to="/proyectos"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Distribuidores
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-on-surface font-bold font-headline uppercase tracking-widest text-[11px] mb-1">
                Recursos
              </span>
              <Link
                to="/oficina-tecnica"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Portal Técnico
              </Link>
              <Link
                to="/oficina-tecnica"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Objetos BIM
              </Link>
              <Link
                to="/oficina-tecnica"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Especificaciones
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-on-surface font-bold font-headline uppercase tracking-widest text-[11px] mb-1">
                Empresa
              </span>
              <Link
                to="/sobre-nosotros"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link
                to="/sostenibilidad"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Sostenibilidad
              </Link>
              <Link
                to="/proyectos"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Portafolio
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-on-surface font-bold font-headline uppercase tracking-widest text-[11px] mb-1">
                Legal
              </span>
              <Link
                to="/privacidad"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/terminos"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Términos de Servicio
              </Link>
            </div>
          </div>

          {/* Contacto y redes sociales */}
          <div className="flex flex-col gap-5 min-w-[180px]">
            <span className="text-on-surface font-bold font-headline uppercase tracking-widest text-[11px]">
              Contacto
            </span>
            <a
              href="mailto:aluvallesas@gmail.com"
              className="text-on-surface-variant hover:text-primary transition-colors text-[11px]"
            >
              aluvallesas@gmail.com
            </a>
            <a
              href="https://wa.me/5492996087387"
              className="text-on-surface-variant hover:text-primary transition-colors text-[11px]"
            >
              +54 9 299 608-7387
            </a>
            <div className="flex gap-3 mt-1">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5492996087387?text=Hola%20Aluvall%C3%A9!%20Estaba%20navegando%20por%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20recibir%20asesoramiento%20sobre%20sus%20sistemas."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container border border-primary/30 hover:border-primary hover:shadow-[0_0_12px_rgba(79,142,247,0.4)] transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aluvalle.sas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container border border-primary/30 hover:border-primary hover:shadow-[0_0_12px_rgba(79,142,247,0.4)] transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/aluvalle-aluminio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container border border-primary/30 hover:border-primary hover:shadow-[0_0_12px_rgba(79,142,247,0.4)] transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.774-.773 1.774-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Barra de copyright */}
        <div className="border-t border-outline/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center">
            <span className="text-on-surface-variant text-[10px] tracking-widest uppercase text-center">
              © 2026 SISTEMAS ARQUITECTÓNICOS ALUVALLE. TODOS LOS DERECHOS RESERVADOS.
            </span>
          </div>
        </div>
      </footer>

      {/* SEOGROWTHERS PROMO SECTION */}
      <div className="w-full bg-surface-container-lowest py-12 px-6 border-t border-outline/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-headline text-[10px] md:text-xs font-black italic tracking-[0.4em] text-primary/80 uppercase">
              Innovación Táctica & Estrategia Digital
            </span>
            <p className="font-body text-[9px] text-[#94979e]/40 uppercase tracking-[0.2em] text-center md:text-left">
              Esta plataforma fue diseñada y desarrollada integralmente por nuestro equipo.
            </p>
          </div>

          <div className="flex items-center gap-12">
            <a
              href="https://seogrowthers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center md:items-end group cursor-pointer"
            >
              <span className="font-body text-[9px] text-[#94979e]/40 uppercase tracking-widest mb-1">
                Agencia de Crecimiento
              </span>
              <div className="flex items-center gap-3">
                <span className="font-headline font-black text-on-surface italic uppercase tracking-tighter text-xl group-hover:text-primary transition-colors">
                  SEOGROWTHERS
                </span>
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-primary/30">
                  <span className="material-symbols-outlined text-on-primary text-sm font-bold">
                    rocket_launch
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <CookieBanner />
      <ScrollToTopButton />
    </div>
  );
}

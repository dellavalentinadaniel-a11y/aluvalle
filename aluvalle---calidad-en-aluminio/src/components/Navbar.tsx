import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Empresa', href: '/#empresa' },
    { name: 'Productos', href: '/productos' },
    { name: 'Sistemas', href: '/productos#sistemas-carpinteria' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { 
      opacity: 1, 
      height: 'auto', 
      transition: { 
        duration: 0.3, 
        ease: 'easeInOut', 
        staggerChildren: 0.05, 
        delayChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-gray-200 shadow-sm' : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center">
               <span className="text-3xl font-black tracking-tighter flex items-baseline">
                <span className="text-alu-green">Alu</span>
                <span className={cn("transition-colors duration-300", scrolled ? "text-alu-dark" : "text-alu-dark")}>valle</span>
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-alu-green/30 rounded-full"></div>
            </div>
            <div className="hidden sm:block ml-4 pl-4 border-l border-gray-300">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-alu-gray block leading-tight">Calidad en</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-alu-gray block leading-tight">Aluminio</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "text-sm font-semibold tracking-wide uppercase transition-colors hover:text-alu-green",
                  scrolled ? "text-alu-dark" : "text-alu-dark"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto" className="bg-alu-green text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-alu-green/90 transition-all shadow-lg shadow-alu-green/20">
              Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Dropdown & Contact */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider border-2 border-yellow-400 bg-yellow-400/10 text-alu-dark hover:bg-yellow-400/20 transition-all"
              >
                Soluciones
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            handleLinkClick();
                          }}
                          className="block px-4 py-3 text-sm font-semibold text-alu-dark hover:bg-alu-green/10 hover:text-alu-green transition-colors border-b border-gray-50 last:border-0"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <Link
              to="/contacto"
              className="bg-alu-green text-white px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-alu-green/90 transition-all"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-4 text-base font-bold text-alu-dark hover:text-alu-green border-b border-gray-50 last:border-0"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-4 px-3">
                <Link to="/contacto" onClick={handleLinkClick} className="block text-center w-full bg-alu-green text-white px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wider">
                  Solicitar Presupuesto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

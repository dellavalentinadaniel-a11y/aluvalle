import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCalculator } from '../context/CalculatorContext';
import { useBreadcrumb } from '../context/BreadcrumbContext';
import { motion } from 'motion/react';
import MiniWeightCalculator from './MiniWeightCalculator';

interface SubHeaderProps {
  isMainHeaderVisible?: boolean;
}

/**
 * SubHeader Component
 * A consistent, reusable utility bar for navigation and global actions.
 * Positioned globally under the main Header in Layout.
 */
export function SubHeader({ isMainHeaderVisible = true }: SubHeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { items: calcItems } = useCalculator();
  const { items } = useBreadcrumb();
  const location = useLocation();
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <nav 
      className={`sticky z-30 w-full bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline/10 px-6 py-3 md:px-8 flex items-center transition-all duration-500 ease-in-out ${
        isMainHeaderVisible ? 'top-[72px]' : 'top-0'
      }`}
      id="global-sub-header"
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4">

        {/* Dynamic Navigation / Breadcrumbs Segment */}
        <div className="flex-1 flex items-center gap-2 overflow-hidden pr-4">
          {items.length > 0 ? (
            <div className="flex items-center gap-2 whitespace-nowrap overflow-x-auto no-scrollbar py-1">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <ChevronRight size={14} className="text-outline/30 flex-shrink-0" />
                  )}
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="text-on-surface/60 hover:text-primary text-[13px] transition-colors font-medium uppercase tracking-wider"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-on-surface text-[13px] font-bold uppercase tracking-wider">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
             <span className="text-on-surface/40 text-[11px] uppercase tracking-[0.3em] font-bold">
               Soluciones Arquitectónicas en Aluminio de Alta Gama
             </span>
          )}
        </div>

        {/* Global Utilities Segment */}
        <div className="flex items-center gap-1.5 pl-4 border-l border-outline/5">
          <UtilityButton 
            icon="search" 
            label="Buscar" 
            title="Buscar" 
          />
          
          <UtilityButton 
            icon={theme === 'light' ? 'dark_mode' : 'light_mode'} 
            label="Tema" 
            title={`Modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            onClick={toggleTheme}
          />

          {/* Desktop: mini calculadora popover */}
          <div className="hidden md:block relative">
            <button
              type="button"
              onClick={() => setCalcOpen((v: boolean) => !v)}
              aria-label="Calculadora de pesos"
              aria-expanded={calcOpen ? 'true' : 'false'}
              title="Calculadora rápida de pesos"
              className={`relative p-2.5 transition-all rounded-xl hover:bg-surface-container group ${
                calcOpen ? 'text-primary bg-primary/10' : 'text-on-surface hover:text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[22px] block">calculate</span>
              {calcItems.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary text-[9px] font-black rounded-full flex items-center justify-center shadow-lg border-2 border-surface-container-lowest"
                >
                  {calcItems.length}
                </motion.span>
              )}
            </button>
            <MiniWeightCalculator open={calcOpen} onClose={() => setCalcOpen(false)} />
          </div>

          {/* Mobile: link directo a calculadora completa */}
          <Link
            to="/oficina-tecnica"
            className="md:hidden relative p-2.5 text-on-surface hover:text-primary transition-all rounded-xl hover:bg-surface-container group"
            title="Calculadora de pesos"
          >
            <span className="material-symbols-outlined text-[22px] block">calculate</span>
            {calcItems.length > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary text-[9px] font-black rounded-full flex items-center justify-center shadow-lg border-2 border-surface-container-lowest"
              >
                {calcItems.length}
              </motion.span>
            )}
          </Link>

          <Link
            to="/perfil"
            className={`p-2.5 rounded-xl transition-all hover:bg-surface-container group ${
              location.pathname === '/perfil'
                ? 'text-primary bg-primary/10'
                : 'text-on-surface hover:text-primary'
            }`}
            title="Mi perfil"
          >
            <span className="material-symbols-outlined text-[22px] block font-variation-fill">account_circle</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

/**
 * Small helper for utility icons to keep main component clean
 */
function UtilityButton({ icon, onClick, title }: { icon: string, onClick?: () => void, label: string, title: string }) {
  return (
    <button
      onClick={onClick}
      className="material-symbols-outlined text-on-surface hover:text-primary transition-all p-2.5 rounded-xl hover:bg-surface-container text-[22px]"
      title={title}
    >
      {icon}
    </button>
  );
}

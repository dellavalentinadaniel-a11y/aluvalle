import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-alu-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black tracking-tighter">
                <span className="text-alu-green">Alu</span>
                <span className="text-white">valle</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soluciones integrales en aluminio para la arquitectura moderna. 
              Calidad, diseño y tecnología al servicio de tus proyectos.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-alu-green transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-alu-green">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Empresa', 'Productos', 'Sistemas', 'Obras', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-alu-green">Productos</h4>
            <ul className="space-y-4">
              {['Carpintería', 'Fachadas', 'Perfiles', 'Revestimientos', 'Accesorios'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-alu-green">Newsletter</h4>
            <p className="text-gray-400 mb-6 text-sm">Suscríbete para recibir novedades y lanzamientos.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Tu email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-alu-green transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-alu-green text-white px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest">
                Unirse
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
          <p>© 2026 ALUVALLE SAS. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

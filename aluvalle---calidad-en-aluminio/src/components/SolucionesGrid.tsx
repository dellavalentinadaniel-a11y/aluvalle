import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SolucionesGrid() {
  return (
    <section className="relative bg-alu-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ROJO - Sistemas de Ventanas y Puertas */}
          <motion.a
            href="#ventanas"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#ventanas-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border-4 border-red-600 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-red-900/30 to-red-700/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-red-700/40 group-hover:from-red-900/50 group-hover:to-red-700/50 transition-all z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-widest w-fit">
                Ventanas y Puertas
              </span>
              <div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Sistemas de Ventanas y Puertas
                </h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-2">
                  Soluciones completas en sistemas de aluminio para ventanas y puertas.
                </p>
              </div>
            </div>
          </motion.a>

          {/* VERDE - Sistemas de Lamas y Fachadas */}
          <motion.a
            href="#lamas"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#lamas-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border-4 border-green-600 hover:scale-105 transition-transform duration-300 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-green-900/30 to-green-700/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-green-700/40 group-hover:from-green-900/50 group-hover:to-green-700/50 transition-all z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-green-600 text-white text-xs font-bold uppercase tracking-widest w-fit">
                Lamas y Fachadas
              </span>
              <div>
                <h3 className="text-3xl font-black text-white leading-tight">
                  Showroom Técnico
                </h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-3">
                  Experiencia inmersiva de nuestros sistemas de lamas y fachadas ventiladas.
                </p>
              </div>
            </div>
          </motion.a>

          {/* AMARILLO - Sistemas Complementarios */}
          <motion.a
            href="#complementarios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#complementarios-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border-4 border-yellow-500 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-yellow-900/30 to-yellow-700/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-yellow-700/40 group-hover:from-yellow-900/50 group-hover:to-yellow-700/50 transition-all z-10"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest w-fit">
                Complementarios
              </span>
              <div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Matricería Propia
                </h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-2">
                  Diseño de vanguardia con soluciones personalizadas.
                </p>
              </div>
            </div>
          </motion.a>

          {/* AZUL - ALUAR */}
          <motion.a
            href="https://aluar.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border-4 border-blue-600 hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
            <img
              src="/aluar-azul.jpg"
              alt="Aluar - Aluminio de Calidad"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest w-fit">
                Materias Primas
              </span>
              <div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Aluminio Aluar
                </h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-2">
                  Utilizamos aluminio premium de Aluar, líder en calidad.
                </p>
                <div className="flex items-center gap-2 mt-3 text-white hover:text-alu-green transition-colors">
                  <span className="text-xs font-bold uppercase">Conoce más</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.a>

          {/* ROSA - ALCEMAR */}
          <motion.a
            href="https://alcemar.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border-4 border-pink-600 hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
            <img
              src="/alcemar-rosa.jpg"
              alt="Alcemar - Distribuidores Oficiales"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-600 text-white text-xs font-bold uppercase tracking-widest w-fit">
                Distribuidores
              </span>
              <div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Distribuidores Alcemar
                </h3>
                <p className="text-gray-200 text-sm mt-2 line-clamp-2">
                  Distribuidores oficiales de herrajes Alcemar.
                </p>
                <div className="flex items-center gap-2 mt-3 text-white hover:text-alu-green transition-colors">
                  <span className="text-xs font-bold uppercase">Visita su sitio</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

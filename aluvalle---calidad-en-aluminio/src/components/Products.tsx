import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Línea Tradicional',
    category: 'Clásico',
    image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800',
    description: 'Nuestra línea más versátil. Sistemas de carpintería liviana y mediana para todo tipo de obras.',
    slug: 'linea-tradicional'
  },
  {
    title: 'Línea Gamma',
    category: 'Sistemas Ligeros',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Diseño contemporáneo y perfiles esbeltos para aplicaciones residenciales de alta gama.',
    slug: 'linea-gamma'
  },
  {
    title: 'Sistemas de Carpintería',
    category: 'Arquitectura',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Líneas de alta prestación para aberturas de gran tamaño con aislamiento térmico.',
    slug: 'sistemas-carpinteria'
  },
  {
    title: 'Fachadas Vidriadas',
    category: 'Sistemas',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    description: 'Muro cortina y piel de vidrio para edificios corporativos y residenciales.',
    slug: 'fachadas-vidriadas'
  },
  {
    title: 'Perfiles Industriales',
    category: 'Industria',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    description: 'Soluciones a medida para diversas aplicaciones industriales y estructurales.',
    slug: 'perfiles-industriales'
  }
];

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">Nuestro Catálogo</span>
            <h2 className="text-4xl md:text-5xl font-black text-alu-dark tracking-tight">
              Sistemas que definen <br /> el <span className="text-alu-green">futuro</span> de la construcción.
            </h2>
          </div>
          <button className="text-alu-dark font-bold uppercase tracking-widest text-sm flex items-center gap-2 group">
            Ver todos los productos
            <div className="w-10 h-10 rounded-full border border-alu-dark flex items-center justify-center group-hover:bg-alu-dark group-hover:text-white transition-all">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>

        <div className="space-y-32">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-alu-dark text-xs font-bold uppercase tracking-widest shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-black text-alu-dark mb-6">
                    {product.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <Link
                    to={`/productos/${product.slug}`}
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-alu-green group"
                  >
                    Ver detalles técnicos
                    <div className="w-10 h-10 rounded-full border border-alu-green/30 flex items-center justify-center group-hover:bg-alu-green group-hover:text-white transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

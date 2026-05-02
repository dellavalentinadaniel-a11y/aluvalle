import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

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
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl md:text-4xl font-black text-alu-dark">
                      {product.title}
                    </h3>
                    <span className="text-2xl font-black text-alu-green">${product.price.toLocaleString()}</span>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={`/productos/${product.slug}`}
                      className="inline-flex items-center gap-3 bg-alu-dark text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-alu-dark/90 transition-all shadow-xl shadow-alu-dark/20 group"
                    >
                      Ver detalles
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                    <Link
                      to={`/productos/${product.slug}`}
                      className="inline-flex items-center gap-3 border-2 border-alu-green text-alu-green px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-alu-green hover:text-white transition-all group"
                    >
                      <ShoppingCart size={18} />
                      Comprar
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

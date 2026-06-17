import { Link } from 'react-router-dom';
import SystemsHeroBanner from '../components/SystemsHeroBanner';
import { useCart } from '../context/CartContext';

const heroImages = [
  { src: '/gallery/hero-sistemas-banner/b8229e173084125.6496fe7d0c235.png', alt: 'Detalle de accesorios y herrajes' },
  { src: '/gallery/hero-sistemas-banner/ventanas-aluminio-madrid.webp', alt: 'Sistema de cierre y manijas' },
  { src: '/gallery/hero-sistemas-banner/191199-18215397.jpg', alt: 'Carpintería con accesorios premium' },
  { src: '/gallery/hero-sistemas-banner/OIP (1).webp', alt: 'Componentes técnicos en aluminio' },
];

import { useState } from 'react';
import { accessoriesData } from '../data/accessories';

const categories = [
  {
    name: 'Cierres centrales',
    category: 'Accesorios',
    desc: 'Sistemas de cierres centrales para una máxima seguridad y ajuste perfecto en aberturas.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2021/06/Prueba-1-cerra-660x660.jpg',
  },
  {
    name: 'Cierres laterales',
    category: 'Accesorios',
    desc: 'Cierres laterales de alta resistencia y precisión para hojas corredizas y de rebatir.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2021/12/8877-300x300.jpg',
  },
  {
    name: 'Conjunto Oscilobatiente',
    category: 'Accesorios',
    desc: 'Mecanismos para aberturas con sistema de apertura oscilobatiente, garantizando hermeticidad.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2021/06/8865aa-660x660.jpg',
  },
  {
    name: 'Cuñas',
    category: 'Accesorios',
    desc: 'Elementos de fijación y ajuste para asegurar la rigidez y escuadra del marco estructural.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2022/01/9163.Bb_-660x660.jpg',
  },
  {
    name: 'Escuadras',
    category: 'Accesorios',
    desc: 'Escuadras de armado de aluminio de extrusión para uniones de alta resistencia a tracción.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2021/12/8415-300x300.jpg',
  },
  {
    name: 'Felpas y Burletes',
    category: 'Accesorios',
    desc: 'Aislación térmica y acústica extrema con felpas y burletes de caucho EPDM.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2021/06/8422cc-660x660.jpg',
  },
  {
    name: 'Llaves',
    category: 'Accesorios',
    desc: 'Variedad de llaves y bocallaves para complementar la seguridad y el accionamiento.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2021/06/95000-2-660x660.jpg',
  },
  {
    name: 'Mecanismo Multipunto',
    category: 'Accesorios',
    desc: 'Seguridad perimetral y cierres multipunto diseñados ergonómicamente.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2022/01/9615-660x660.jpg',
  },
  {
    name: 'Otros',
    category: 'Accesorios',
    desc: 'Tornillos especiales, tapones y complementos para el armado óptimo de las líneas.',
    img: 'https://alcemar.com.ar/wp-content/uploads/2021/06/9552-660x660.jpg',
  },
];

export default function Accesorios() {
  const { addItem, items: cartItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="pt-24 pb-20 bg-background relative min-h-screen">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/gallery/showroom.jpg"
          className="bg-image-theme animate-slow-zoom"
          alt=""
        />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <SystemsHeroBanner
          eyebrow="Catálogo de Productos"
          titleLine1="Catálogo de"
          titleLine2="Accesorios"
          description="Componentes y herrajes originales para el armado óptimo de las líneas de aluminio estructural."
          images={heroImages}
        >
          <div className="flex flex-wrap gap-2">
            <button type="button" className="px-5 py-2 bg-primary text-on-primary rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/30 flex-shrink-0">
              Ver Todos
            </button>
            <button type="button" className="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/20 text-white/80 rounded-full text-xs font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors flex-shrink-0">
              Seguridad
            </button>
            <button type="button" className="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/20 text-white/80 rounded-full text-xs font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors flex-shrink-0">
              Estanqueidad
            </button>
            <button type="button" className="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/20 text-white/80 rounded-full text-xs font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors flex-shrink-0">
              Armado
            </button>
          </div>
        </SystemsHeroBanner>

        {/* Product Grid / Category View */}
        <section className="max-w-7xl mx-auto px-6">
          {!selectedCategory ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="group flex flex-col bg-surface-variant/5 border border-outline/10 shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                    />
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-black/60 backdrop-blur-md text-on-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-outline/20">
                        Ver Productos
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="font-label text-primary text-[10px] uppercase tracking-widest mb-2 block">
                      {category.category}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="font-body text-on-surface-variant text-sm flex-grow leading-relaxed">
                      {category.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-20">
              <button 
                onClick={() => setSelectedCategory(null)}
                className="mb-8 flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Volver a Categorías
              </button>
              <h2 className="text-3xl font-headline font-bold text-on-surface uppercase mb-10 border-b border-outline/10 pb-4">
                {selectedCategory}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(accessoriesData[selectedCategory as keyof typeof accessoriesData] || []).map((product) => (
                  <div
                    key={product.name}
                    className="group flex flex-col bg-surface-variant/5 border border-outline/10 shadow-lg hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="font-label text-primary text-[10px] uppercase tracking-widest mb-2 block">
                        {selectedCategory}
                      </span>
                      <h3 className="font-headline text-lg font-bold text-on-surface mb-6 flex-grow">
                        {product.name}
                      </h3>

                      <div className="pt-4 border-t border-outline/10 flex justify-end">
                        <button
                          type="button"
                          onClick={() => addItem({ productSlug: product.name.toLowerCase().replace(/\s+/g, '-'), productName: product.name, productCategory: selectedCategory, productImage: product.image })}
                          title={cartItems.some(i => i.productSlug === product.name.toLowerCase().replace(/\s+/g, '-')) ? 'Ya en cotización' : 'Agregar a cotización'}
                          className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all w-full justify-center ${
                            cartItems.some(i => i.productSlug === product.name.toLowerCase().replace(/\s+/g, '-'))
                              ? 'bg-primary/10 text-primary border border-primary/30'
                              : 'border border-outline/20 text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            {cartItems.some(i => i.productSlug === product.name.toLowerCase().replace(/\s+/g, '-')) ? 'check' : 'add_shopping_cart'}
                          </span>
                          {cartItems.some(i => i.productSlug === product.name.toLowerCase().replace(/\s+/g, '-')) ? 'Agregado' : 'Cotizar'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="bg-surface-variant/10 border border-outline/10 p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <h2 className="font-headline text-4xl font-bold text-on-surface uppercase mb-6 leading-tight">
                Piezas Exactas
                <br />
                para cada línea
              </h2>
              <p className="font-body text-on-surface-variant mb-10 text-sm leading-relaxed">
                Trabajamos únicamente con herrajes certificados que avalan el correcto funcionamiento
                y la vida útil de los sistemas de aberturas.
              </p>
              <button className="bg-primary text-on-primary font-bold px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-3 hover:brightness-110 transition-all">
                Explorar Listado de Herrajes
                <span className="material-symbols-outlined text-sm">settings_suggest</span>
              </button>
            </div>
            {/* Abstract Design Element */}
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none hidden md:block">
              <div className="w-full h-full border-l-[100px] border-t-[100px] border-primary rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}



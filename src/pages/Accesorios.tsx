import { Link } from 'react-router-dom';

const productLines = [
  {
    name: 'Sistemas de Cierre',
    category: 'Seguridad',
    desc: 'Cerraduras, cierres laterales, cierres centrales, mecanismos multipunto y cerraderos de máxima precisión comercial.',
    img: 'https://images.unsplash.com/photo-1520697830682-840f90bdc69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Herrajes y Rodamientos',
    category: 'Movimiento',
    desc: 'Grupos de bisagras de alta resistencia, conjuntos oscilobatientes y sistemas de ruedas para un desplazamiento suave y seguro.',
    img: 'https://images.unsplash.com/photo-1585645362391-7f8e84a86477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Manijas y Aldabas',
    category: 'Accionamiento',
    desc: 'Amplia variedad de aldabas, manijas y bocallaves diseñados ergonómicamente para realzar el aspecto interior de la abertura.',
    img: 'https://images.unsplash.com/photo-1601004652250-97645d94bc02?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Estanqueidad y Burletes',
    category: 'Hermeticidad',
    desc: 'Felpas, burletes de caucho EPDM y perfiles de poliamida para garantizar aislación térmica y acústica extrema (RPT).',
    img: 'https://images.unsplash.com/photo-1616788289456-1cb7d5df2fbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Elements de Armado',
    category: 'Estructura',
    desc: 'Escuadras de armado, tornillos especiales y cuñas que aseguran la rigidez, escuadra y durabilidad del marco estructural.',
    img: 'https://images.unsplash.com/photo-1533090369800-41bf37bd2a44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Accesorios() {
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

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-16 pt-12">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-4 block">
                Catálogo de Productos
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-none uppercase">
                Catálogo de <br />
                <span className="text-on-surface-variant">Accesorios</span>
              </h1>
            </div>
            <div className="hidden md:block pb-2">
              <p className="font-body text-on-surface-variant max-w-xs text-sm leading-relaxed border-l border-outline/10 pl-6">
                Todos los componentes y herrajes originales necesarios para el armado óptimo de las
                líneas de aluminio estructural.
              </p>
            </div>
          </div>

          {/* Filter / Categorization */}
          <div className="flex flex-wrap gap-4 mb-20 border-b border-outline/20 pb-4">
            <button className="px-5 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider">
              Ver Todos
            </button>
            <button className="px-5 py-2 bg-surface-variant/50 border border-outline/30 text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/20 hover:text-primary transition-all">
              Seguridad
            </button>
            <button className="px-5 py-2 bg-surface-variant/50 border border-outline/30 text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/20 hover:text-primary transition-all">
              Estanqueidad
            </button>
            <button className="px-5 py-2 bg-surface-variant/50 border border-outline/30 text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/20 hover:text-primary transition-all">
              Armado
            </button>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productLines.map((product) => (
              <div
                key={product.name}
                className="group flex flex-col bg-surface-variant/5 border border-outline/10 shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                  />
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/60 backdrop-blur-md text-on-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-outline/20">
                      + Info
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="font-label text-primary text-[10px] uppercase tracking-widest mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-on-surface uppercase mb-4 tracking-tight">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-sm mb-8 flex-grow leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="pt-6 border-t border-outline/10 flex justify-between items-center">
                    <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group/btn hover:brightness-125 transition-all">
                      Despiece y Ficha
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
                      add_circle
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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



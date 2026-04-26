import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

const productLines = [
  {
    name: 'Línea Tradicional',
    slug: 'linea-tradicional',
    category: 'Sistemas Básicos',
    desc: 'Sistema de carpintería tradicional con excelente relación costo-beneficio.',
    img: '/gallery/warehouse.jpg',
    type: 'batiente'
  },
  {
    name: 'Línea Mediterránea',
    slug: 'linea-mediterranea',
    category: 'Sistemas Premium',
    desc: 'La máxima expresión del diseño en aluminio para residencias de lujo.',
    img: '/gallery/residential.jpg',
    type: 'premium'
  },
  {
    name: 'Línea Gamma',
    slug: 'linea-gamma',
    category: 'Sistemas Ligeros',
    desc: 'Diseño contemporáneo y perfiles esbeltos para aplicaciones residenciales.',
    img: '/gallery/office.jpg',
    type: 'corrediza'
  },
  {
    name: 'Línea Delta',
    slug: 'linea-delta',
    category: 'Deslizamiento Suave',
    desc: 'Máxima apertura y fluidez visual con diseño estructural resistente.',
    img: '/gallery/residential.jpg',
    type: 'corrediza'
  },
  {
    name: 'Línea Mónaco',
    slug: 'linea-monaco',
    category: 'Alta Gama',
    desc: 'Sistema avanzado de estanqueidad y cierre para grandes dimensiones.',
    img: '/gallery/showroom.jpg',
    type: 'premium'
  },
  {
    name: 'Línea Atlántica',
    slug: 'linea-atlantica',
    category: 'Robustez Extra',
    desc: 'Especialmente diseñada para frentes marítimos y presiones extremas de viento.',
    img: '/gallery/warehouse.jpg',
    type: 'batiente'
  },
  {
    name: 'Línea Niza',
    slug: 'linea-niza',
    category: 'Estilo Europeo',
    desc: 'Detalles europeos y precisión milimétrica en cada encuentro.',
    img: '/gallery/residential.jpg',
    type: 'premium'
  },
  {
    name: 'Línea Mónaco RPT',
    slug: 'linea-monaco-rpt',
    category: 'Ruptura Puente Térmico',
    desc: 'Eficiencia energética superior manteniendo la estética de la Línea Mónaco.',
    img: '/gallery/office.jpg',
    type: 'rpt'
  },
  {
    name: 'Línea Mediterránea RPT',
    slug: 'linea-mediterranea-rpt',
    category: 'Ruptura Puente Térmico',
    desc: 'El tope de gama en rendimiento acústico, térmico y sofisticación de diseño.',
    img: '/gallery/office.jpg',
    type: 'rpt'
  },
];

export default function Systems() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    return productLines.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'all' || 
                           (activeFilter === 'corrediza' && product.type === 'corrediza') ||
                           (activeFilter === 'batiente' && product.type === 'batiente') ||
                           (activeFilter === 'rpt' && product.type === 'rpt');
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="pt-24 pb-20 bg-background relative min-h-screen">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/gallery/showroom.jpg"
          loading="lazy"
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
              <h1 className="font-headline text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-none uppercase">
                Sistemas de <br />
                <span className="text-on-surface-variant">Ventanas y Puertas</span>
              </h1>
            </div>
            <div className="w-full md:w-auto pb-2">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-72 bg-surface-container border border-outline/20 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-on-surface focus:outline-none focus:border-primary transition-all group-hover:border-primary/50 shadow-xl text-sm"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-hover:text-primary transition-colors">
                  search
                </span>
              </div>
            </div>
          </div>

        {/* Filter / Categorization */}
        <div className="flex gap-3 mb-20 border-b border-outline/10 pb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent flex-shrink-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'all' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container border border-outline/10 text-on-surface-variant hover:text-on-surface'}`}
          >
            Ver Todos
          </button>
          <button
            onClick={() => setActiveFilter('corrediza')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'corrediza' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container border border-outline/10 text-on-surface-variant hover:text-on-surface'}`}
          >
            Correderas
          </button>
          <button
            onClick={() => setActiveFilter('batiente')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'batiente' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container border border-outline/10 text-on-surface-variant hover:text-on-surface'}`}
          >
            Batientes
          </button>
          <button
            onClick={() => setActiveFilter('rpt')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'rpt' ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container border border-outline/10 text-on-surface-variant hover:text-on-surface'}`}
          >
            Con RPT
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col bg-surface-container border border-outline/10 shadow-xl hover:shadow-2xl rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-high">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 img-filter-theme"
                />
                <div className="absolute top-6 left-6">
                  {product.name.includes('RPT') && (
                    <span className="bg-primary text-on-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md rounded-full">
                      Aislante Térmico
                    </span>
                  )}
                </div>
                <div className="absolute bottom-6 right-6">
                  <span className="bg-background/80 backdrop-blur-md text-on-surface px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border border-outline/20 rounded-full">
                    + Info
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-8 flex flex-col flex-grow">
                <span className="font-label text-primary text-[10px] uppercase tracking-widest mb-2 block font-bold">
                  {product.category}
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface uppercase mb-4 tracking-tight">
                  {product.name}
                </h3>
                <p className="font-body text-on-surface-variant text-sm mb-8 flex-grow leading-relaxed">
                  {product.desc}
                </p>

                <div className="pt-6 border-t border-outline/10 flex justify-between items-center">
                  <Link
                    to={`/productos/${product.slug}`}
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group/btn hover:opacity-70 transition-colors"
                  >
                    Ver Detalles
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                  <span className="material-symbols-outlined text-outline/30 group-hover:text-primary transition-colors">
                    add_circle
                  </span>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-outline/20 mb-4 block">
                search_off
              </span>
              <p className="text-on-surface-variant font-body">No se encontraron sistemas que coincidan con su búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-surface-container border border-outline/10 p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline text-4xl font-bold text-on-surface uppercase mb-6 leading-tight">
              Múltiples opciones
              <br />
              Calidad Garantizada
            </h2>
            <p className="font-body text-on-surface-variant mb-10 text-sm leading-relaxed">
              Consulta especificaciones de armado, catálogos en PDF y perfiles CAD de todos nuestros
              sistemas.
            </p>
            <button className="btn-gradient px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-3">
              Descargar Listado en PDF
              <span className="material-symbols-outlined text-sm">download</span>
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

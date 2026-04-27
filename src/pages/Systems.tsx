import { Link } from 'react-router-dom';
import { useState, useMemo, type ChangeEvent } from 'react';
import SystemsHeroBanner from '../components/SystemsHeroBanner';

const heroImages = [
  { src: '/gallery/hero-sistemas-banner/ventanas-aluminio-madrid.webp', alt: 'Ventanas de aluminio modernas' },
  { src: '/gallery/hero-sistemas-banner/_T1A2631.jpg', alt: 'Sistemas de aluminio premium' },
  { src: '/gallery/hero-sistemas-banner/ViviendasUnifamiliares_CasaS_Alcemar_07-1024x683.jpg', alt: 'Vivienda unifamiliar con sistemas Alcemar' },
  { src: '/gallery/hero-sistemas-banner/sistemas-de-aluminio-para-la-construccion-alumed-aluminium-systems-alicante-showroom-7-perfiles-cristal-1-1024x645.jpg', alt: 'Showroom de perfiles de aluminio' },
];

const productLines = [
  {
    name: 'Línea Tradicional',
    slug: 'linea-tradicional',
    category: 'Sistemas Básicos',
    desc: 'Sistema de carpintería tradicional con excelente relación costo-beneficio.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/TRADICIONAL (1).jpg',
    type: 'batiente'
  },
  {
    name: 'Línea Mediterránea',
    slug: 'linea-mediterranea',
    category: 'Sistemas Premium',
    desc: 'La máxima expresión del diseño en aluminio para residencias de lujo.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MEDITERRANEA.jpg',
    type: 'premium'
  },
  {
    name: 'Línea Gamma',
    slug: 'linea-gamma',
    category: 'Sistemas Ligeros',
    desc: 'Diseño contemporáneo y perfiles esbeltos para aplicaciones residenciales.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/GAMMA.jpg',
    type: 'corrediza'
  },
  {
    name: 'Línea Delta',
    slug: 'linea-delta',
    category: 'Deslizamiento Suave',
    desc: 'Máxima apertura y fluidez visual con diseño estructural resistente.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/DELTA.jpg',
    type: 'corrediza'
  },
  {
    name: 'Línea Mónaco',
    slug: 'linea-monaco',
    category: 'Alta Gama',
    desc: 'Sistema avanzado de estanqueidad y cierre para grandes dimensiones.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MONACO.jpg',
    type: 'premium'
  },
  {
    name: 'Línea Atlántica',
    slug: 'linea-atlantica',
    category: 'Robustez Extra',
    desc: 'Especialmente diseñada para frentes marítimos y presiones extremas de viento.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/ATLANTICA-1.jpg',
    type: 'batiente'
  },
  {
    name: 'Línea Niza',
    slug: 'linea-niza',
    category: 'Estilo Europeo',
    desc: 'Detalles europeos y precisión milimétrica en cada encuentro.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/NIZA.jpg',
    type: 'premium'
  },
  {
    name: 'Línea Mónaco RPT',
    slug: 'linea-monaco-rpt',
    category: 'Ruptura Puente Térmico',
    desc: 'Eficiencia energética superior manteniendo la estética de la Línea Mónaco.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MONACO-RPT-660x660.jpg',
    type: 'rpt'
  },
  {
    name: 'Línea Mediterránea RPT',
    slug: 'linea-mediterranea-rpt',
    category: 'Ruptura Puente Térmico',
    desc: 'El tope de gama en rendimiento acústico, térmico y sofisticación de diseño.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MEDITERRANEO-RPT.jpg',
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <SystemsHeroBanner
          eyebrow="Catálogo de Productos"
          titleLine1="Sistemas de"
          titleLine2="Ventanas y Puertas"
          description="Líneas de carpintería de aluminio para residencias, comercios y proyectos arquitectónicos de alta exigencia."
          images={heroImages}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search */}
            <div className="relative group flex-1 max-w-md">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-primary transition-all shadow-xl text-sm"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/60 group-hover:text-primary transition-colors">
                search
              </span>
            </div>
            {/* Filter buttons */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'all' ? 'bg-primary text-on-primary shadow-lg shadow-primary/30' : 'bg-black/40 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-white/40'}`}
              >
                Ver Todos
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('corrediza')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'corrediza' ? 'bg-primary text-on-primary shadow-lg shadow-primary/30' : 'bg-black/40 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-white/40'}`}
              >
                Correderas
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('batiente')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'batiente' ? 'bg-primary text-on-primary shadow-lg shadow-primary/30' : 'bg-black/40 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-white/40'}`}
              >
                Batientes
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('rpt')}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${activeFilter === 'rpt' ? 'bg-primary text-on-primary shadow-lg shadow-primary/30' : 'bg-black/40 backdrop-blur-md border border-white/20 text-white/80 hover:text-white hover:border-white/40'}`}
              >
                Con RPT
              </button>
            </div>
          </div>
        </SystemsHeroBanner>

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

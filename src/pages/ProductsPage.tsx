import { useState, useMemo, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

// Combined product catalog
const allProducts = [
  // Ventanas y Puertas
  {
    name: 'Línea Tradicional',
    slug: 'linea-tradicional',
    category: 'Ventanas y Puertas',
    subCategory: 'Sistemas Básicos',
    desc: 'Sistema de carpintería tradicional con excelente relación costo-beneficio.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/TRADICIONAL (1).jpg',
    tags: ['Económico', 'Clásico', 'Corte 45°']
  },
  {
    name: 'Línea Mediterránea',
    slug: 'linea-mediterranea',
    category: 'Ventanas y Puertas',
    subCategory: 'Sistemas Premium',
    desc: 'La máxima expresión del diseño en aluminio para residencias de lujo.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MEDITERRANEA.jpg',
    tags: ['Alta Gama', 'Premium', 'Aislante']
  },
  {
    name: 'Línea Gamma',
    slug: 'linea-gamma',
    category: 'Ventanas y Puertas',
    subCategory: 'Sistemas Ligeros',
    desc: 'Diseño contemporáneo y perfiles esbeltos para aplicaciones residenciales.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/GAMMA.jpg',
    tags: ['Corredizo', 'Liviano', 'Moderno']
  },
  {
    name: 'Línea Delta',
    slug: 'linea-delta',
    category: 'Ventanas y Puertas',
    subCategory: 'Deslizamiento Suave',
    desc: 'Máxima apertura y fluidez visual con diseño estructural resistente.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/DELTA.jpg',
    tags: ['Corredizo', 'Robusto', 'Gran Estilo']
  },
  {
    name: 'Línea Mónaco',
    slug: 'linea-monaco',
    category: 'Ventanas y Puertas',
    subCategory: 'Alta Gama',
    desc: 'Sistema avanzado de estanqueidad y cierre para grandes dimensiones.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MONACO.jpg',
    tags: ['Premium', 'Grandes Luces', 'Corte 45°']
  },
  {
    name: 'Línea Atlántica',
    slug: 'linea-atlantica',
    category: 'Ventanas y Puertas',
    subCategory: 'Robustez Extra',
    desc: 'Especialmente diseñada para frentes marítimos y presiones extremas de viento.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/ATLANTICA-1.jpg',
    tags: ['Pesado', 'Fachadas', 'Hermético']
  },
  {
    name: 'Línea Niza',
    slug: 'linea-niza',
    category: 'Ventanas y Puertas',
    subCategory: 'Estilo Europeo',
    desc: 'Detalles europeos y precisión milimétrica en cada encuentro.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/NIZA.jpg',
    tags: ['Europeo', 'Diseño', 'Premium']
  },
  {
    name: 'Línea Mónaco RPT',
    slug: 'linea-monaco-rpt',
    category: 'Ventanas y Puertas',
    subCategory: 'Ruptura Puente Térmico',
    desc: 'Eficiencia energética superior manteniendo la estética de la Línea Mónaco.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MONACO-RPT-660x660.jpg',
    tags: ['RPT', 'Ahorro Energía', 'Térmico']
  },
  {
    name: 'Línea Mediterránea RPT',
    slug: 'linea-mediterranea-rpt',
    category: 'Ventanas y Puertas',
    subCategory: 'Ruptura Puente Térmico',
    desc: 'El tope de gama en rendimiento acústico, térmico y sofisticación de diseño.',
    img: '/SISTEMA DE VENTANAS Y PUERTAS/MEDITERRANEO-RPT.jpg',
    tags: ['Tope de Gama', 'RPT', 'Acústico']
  },
  // Lamas y Fachadas
  {
    name: 'Frente Integral',
    slug: 'frente-integral',
    category: 'Lamas y Fachadas',
    subCategory: 'Fachadas',
    desc: 'Sistema tradicional de frente continuo para edificios comerciales y corporativos, garantizando robustez.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Comercial', 'Estructural', 'Frente Continuo']
  },
  {
    name: 'Frente Vidriado',
    slug: 'frente-vidriado',
    category: 'Lamas y Fachadas',
    subCategory: 'Fachadas Piel de Vidrio',
    desc: 'Sistema de Piel de Vidrio para fachadas ligeras y de alto estándar estético en envolventes estructurales.',
    img: 'https://images.unsplash.com/photo-1574880575306-1262dced0765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Piel de Vidrio', 'Edificios', 'Luminosidad']
  },
  {
    name: 'Sistema de Lama Parasol',
    slug: 'sistema-de-lama-parasol',
    category: 'Lamas y Fachadas',
    subCategory: 'Control Solar',
    desc: 'Sistema de lamas de aluminio para una óptima gestión térmica y protección solar eficiente.',
    img: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Parasol', 'Eficiencia', 'Terminación']
  },
  {
    name: 'Sistema Frame de Junta Cerrada',
    slug: 'sistema-frame-de-junta-cerrada',
    category: 'Lamas y Fachadas',
    subCategory: 'Sistemas Modulares',
    desc: 'Fachada modular estructural conformada por paneles prearmados, brindando la máxima rapidez de instalación.',
    img: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Modular', 'Rápido', 'Precisión']
  },
  // Sistemas Complementarios
  {
    name: 'Sistemas de Barandas',
    slug: 'sistemas-de-barandas',
    category: 'Sistemas Complementarios',
    subCategory: 'Balcones y Terrazas',
    desc: 'Línea completa de barandas en aluminio para cristal de seguridad o perfilería, garantizando protección y diseño.',
    img: 'https://images.unsplash.com/photo-1579725942555-ea819e99ee2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Seguridad', 'Vidrio', 'Exterior']
  },
  {
    name: 'Cortinas de Enrollar',
    slug: 'cortinas-de-enrollar',
    category: 'Sistemas Complementarios',
    subCategory: 'Oscurecimiento',
    desc: 'Sistemas de oscurecimiento exterior fabricados en aluminio, brindando aislamiento térmico y acústico.',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Privacidad', 'Aislante', 'Protección']
  },
  {
    name: 'Frentes de Placard',
    slug: 'frentes-de-placard',
    category: 'Sistemas Complementarios',
    subCategory: 'Mobiliario Interior',
    desc: 'Perfilería diseñada para el armado de frentes de placard corredizos con deslizamiento suave y silencioso.',
    img: 'https://images.unsplash.com/photo-1595514535415-eb1025ca4e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Muebles', 'Corredizo', 'Diseño Interior']
  },
  {
    name: 'Sistemas de Mamparas',
    slug: 'sistemas-de-mamparas',
    category: 'Sistemas Complementarios',
    subCategory: 'Baños y Duchas',
    desc: 'Diseños minimalistas para mamparas de baño de vidrio templado. Incluye sistemas corredizos y rebatibles.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Baños', 'Vidrio Templado', 'Elegante']
  }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { addItem, items: cartItems } = useCart();

  const categories = ['Todos', 'Ventanas y Puertas', 'Lamas y Fachadas', 'Sistemas Complementarios'];

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-24 pb-20 bg-background relative min-h-screen">
      {/* Fondo estético con glow */}
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
        {/* Cabecera Premium */}
        <div className="mb-12 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-outline/10 pb-12">
          <div>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-2 block">
              Catálogo Completo
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-black text-on-surface uppercase tracking-tight leading-none">
              Sistemas de <span className="text-gradient">Aluminio</span>
            </h1>
            <p className="font-body text-on-surface-variant text-sm mt-4 max-w-xl leading-relaxed">
              Explora nuestra gama de soluciones arquitectónicas en aluminio de alta gama para carpinterías, fachadas e interiores.
            </p>
          </div>

          {/* Buscador Dinámico */}
          <div className="relative group w-full max-w-md">
            <input
              type="text"
              placeholder="Buscar sistema, característica o etiqueta..."
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-low/40 backdrop-blur-xl border border-outline/10 px-5 py-4 rounded-full text-on-surface placeholder-on-surface/40 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_20px_rgba(160,216,122,0.15)] transition-all shadow-lg text-sm"
            />
            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-on-surface/40 group-hover:text-primary transition-colors">
              search
            </span>
          </div>
        </div>

        {/* Barra de Filtros de Categorías */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-[10px] font-headline font-black uppercase tracking-widest transition-all duration-300 flex-shrink-0 border ${
                selectedCategory === category
                  ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20'
                  : 'bg-surface-container-lowest/50 backdrop-blur-md border-outline/10 text-on-surface-variant hover:text-on-surface hover:border-outline/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.name}
                className="group flex flex-col bg-surface-container/30 backdrop-blur-lg border border-outline/10 hover:border-primary/40 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-[2rem] overflow-hidden transition-all duration-500"
              >
                {/* Contenedor de Imagen de Miniatura */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high/40">
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 img-filter-theme"
                  />
                  <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                    <span className="bg-surface-container-lowest/80 backdrop-blur-md text-on-surface border border-outline/10 px-3 py-1 text-[8px] font-headline font-black uppercase tracking-wider rounded-full">
                      {product.category}
                    </span>
                  </div>
                  {product.name.includes('RPT') && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary/90 text-on-primary backdrop-blur-md px-3 py-1 text-[8px] font-headline font-black uppercase tracking-wider rounded-full">
                        RPT
                      </span>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="font-label text-primary text-[9px] font-black uppercase tracking-[0.2em] mb-1.5 block">
                    {product.subCategory}
                  </span>
                  <h3 className="font-headline text-xl font-bold text-on-surface uppercase mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-body text-on-surface-variant text-xs mb-6 flex-grow leading-relaxed">
                    {product.desc}
                  </p>

                  {/* Etiquetas Técnicas */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-black uppercase tracking-wider px-2 py-0.5 bg-surface-container-highest/20 text-on-surface-variant/80 rounded border border-outline/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Acciones */}
                  <div className="pt-5 border-t border-outline/10 flex justify-between items-center mt-auto">
                    <Link
                      to={`/productos/${product.slug}`}
                      className="flex items-center gap-1.5 text-primary font-bold text-[10px] uppercase tracking-[0.2em] group/btn hover:text-on-surface transition-colors"
                    >
                      Detalles
                      <span className="material-symbols-outlined text-[13px] group-hover/btn:translate-x-0.5 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => addItem({ productSlug: product.slug, productName: product.name, productCategory: product.category, productImage: product.img })}
                      title={cartItems.some(i => i.productSlug === product.slug) ? 'Ya agregado' : 'Agregar a cotización'}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[9px] font-headline font-black uppercase tracking-widest transition-all ${
                        cartItems.some(i => i.productSlug === product.slug)
                          ? 'bg-primary/20 text-primary border border-primary/40'
                          : 'border border-outline/10 text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[13px]">
                        {cartItems.some(i => i.productSlug === product.slug) ? 'check' : 'add_shopping_cart'}
                      </span>
                      {cartItems.some(i => i.productSlug === product.slug) ? 'Agregado' : 'Cotizar'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="col-span-full py-24 text-center bg-surface-container/10 border border-outline/5 rounded-[2.5rem] backdrop-blur-md">
              <span className="material-symbols-outlined text-5xl text-outline/30 mb-3 block">
                search_off
              </span>
              <h3 className="font-headline text-lg font-bold uppercase text-on-surface">No se encontraron sistemas</h3>
              <p className="text-on-surface-variant font-body text-xs mt-1">Prueba refinando la búsqueda o el filtro de categoría.</p>
            </div>
          )}
        </motion.div>

        {/* Catálogo Técnico Banner */}
        <section className="mt-28">
          <div className="bg-surface-container-low/40 backdrop-blur-xl border border-outline/10 p-12 md:p-20 relative overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="relative z-10 max-w-xl">
              <span className="text-[9px] font-headline font-black uppercase tracking-[0.3em] text-primary mb-3 block">
                Área Profesional
              </span>
              <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface uppercase mb-4 leading-none">
                ¿Sos carpintero <br />o instalador?
              </h2>
              <p className="font-body text-on-surface-variant text-xs md:text-sm max-w-md leading-relaxed">
                Accedé a la Oficina Técnica para descargar planos DWG de armado, planillas de corte de perfiles y manuales de mecanizado de todos los sistemas.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                to="/oficina-tecnica" 
                className="btn-gradient px-8 py-4 rounded-xl text-center text-[10px] font-headline font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                Oficina Técnica
              </Link>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-[40%] h-[140%] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
          </div>
        </section>
      </div>
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import { useEffect, useState } from 'react';
import ProfileTable from '../components/ProfileTable';
import { useBreadcrumb } from '../context/BreadcrumbContext';
import { TechTabs } from '../components/TechTabs';
import {
  traditionalProfiles,
  gammaProfiles,
  deltaProfiles,
  monacoProfiles,
  monacoTopProfiles,
  atlanticaProfiles,
  nizaProfiles,
  mediterraneaProfiles,
  mediterraneaRPTProfiles,
  monacoRPTProfiles,
  frenteIntegralProfiles,
  frenteVidriadoProfiles,
  barandasProfiles,
  mamparasProfiles,
  placardProfiles,
  cortinasProfiles,
  complementariosProfiles,
  lamaParasolProfiles,
  frameJuntaCerradaProfiles,
} from '../data/profiles';
import { ChevronDown, Beaker, PenTool, FileText } from 'lucide-react';


export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    slug === 'linea-monaco' ? 'monaco-standard' : null
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardSlide, setCardSlide] = useState(0);

  const productLines = [
    { name: 'Línea Tradicional', slug: 'linea-tradicional', category: 'Sistemas Básicos', img: '/SISTEMA DE VENTANAS Y PUERTAS/TRADICIONAL (1).jpg' },
    { name: 'Línea Mediterránea', slug: 'linea-mediterranea', category: 'Sistemas Premium', img: '/SISTEMA DE VENTANAS Y PUERTAS/MEDITERRANEA.jpg' },
    { name: 'Línea Gamma', slug: 'linea-gamma', category: 'Sistemas Ligeros', img: '/SISTEMA DE VENTANAS Y PUERTAS/GAMMA.jpg' },
    { name: 'Línea Delta', slug: 'linea-delta', category: 'Deslizamiento Suave', img: '/SISTEMA DE VENTANAS Y PUERTAS/DELTA.jpg' },
    { name: 'Línea Mónaco', slug: 'linea-monaco', category: 'Alta Gama', img: '/SISTEMA DE VENTANAS Y PUERTAS/MONACO.jpg' },
    { name: 'Línea Atlántica', slug: 'linea-atlantica', category: 'Robustez Extra', img: '/SISTEMA DE VENTANAS Y PUERTAS/ATLANTICA-1.jpg' },
    { name: 'Línea Niza', slug: 'linea-niza', category: 'Estilo Europeo', img: '/SISTEMA DE VENTANAS Y PUERTAS/NIZA.jpg' },
    { name: 'Línea Mónaco RPT', slug: 'linea-monaco-rpt', category: 'Ruptura Puente Térmico', img: '/SISTEMA DE VENTANAS Y PUERTAS/MONACO-RPT-660x660.jpg' },
    { name: 'Línea Mediterránea RPT', slug: 'linea-mediterranea-rpt', category: 'Ruptura Puente Térmico', img: '/SISTEMA DE VENTANAS Y PUERTAS/MEDITERRANEO-RPT.jpg' },
  ];
  const CARDS_PER_PAGE = 3;
  const totalPages = Math.ceil(productLines.length / CARDS_PER_PAGE);

  const heroImages = [
    { src: '/gallery/herobanner/sistemas-arquitectonicos-aluvalle-cerramientos-modernos.webp', alt: 'Sistemas arquitectónicos Aluvalle, cerramientos modernos y eficientes' },
    { src: '/gallery/herobanner/carpinteria-aluminio-alta-prestacion-ventanas-corredizas.webp', alt: 'Carpintería de aluminio de alta prestación, ventanas corredizas Premium' },
    { src: '/gallery/herobanner/aluvalle-aberturas-aluminio-linea-gamma-premium.webp', alt: 'Aberturas de aluminio Línea Gamma Premium por Aluvalle' },
    { src: '/gallery/herobanner/perfiles-aluminio-optimizacion-termica-acustica.webp', alt: 'Perfiles de aluminio con optimización térmica y acústica superior' },
    { src: '/gallery/herobanner/diseno-innovador-aberturas-aluminio-linea-gamma.webp', alt: 'Diseño innovador en aberturas de aluminio, Línea Gamma' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const cardTimer = setInterval(() => {
      setCardSlide((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(cardTimer);
  }, [totalPages]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center min-h-screen bg-background">
        <h1 className="text-primary text-9xl font-black opacity-10 font-headline leading-none">
          404
        </h1>
        <h2 className="text-on-surface text-4xl font-headline font-bold uppercase -mt-12 mb-8 tracking-tighter">
          Producto no encontrado
        </h2>
        <Link
          to="/sistemas/ventanas-y-puertas"
          className="bg-primary text-on-primary px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-on-background hover:text-background transition-colors"
        >
          Volver al Catálogo
        </Link>
      </div>
    );
  }

  const { setItems: setBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    setBreadcrumb([
      { label: 'Sistemas', path: '/sistemas/ventanas-y-puertas' },
      { label: product.category, path: `/sistemas/${product.categorySlug}` },
      { label: product.name },
    ]);
    return () => setBreadcrumb([]);
  }, [product, setBreadcrumb]);

  return (
    <div className="bg-background min-h-screen relative">

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
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-black">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentSlide}
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              title={heroImages[currentSlide].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute w-full h-full object-cover"
              fetchPriority="high"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
          <div className="flex flex-col items-start gap-6">
            <Link
              to={`/sistemas/${product.categorySlug}`}
              className="font-label text-primary uppercase tracking-[0.3em] text-xs font-bold flex items-center gap-3 hover:text-on-background transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              {product.category}
            </Link>
            <div className="flex flex-col">
              <h1 className="font-headline text-4xl sm:text-6xl md:text-[8rem] font-bold text-on-background leading-none uppercase tracking-tighter">
                {product.name.split(' ')[0]}
                <br />
                <span className="text-on-surface-variant pl-0 sm:pl-20 md:pl-20 block sm:inline">
                  {product.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </div>
            {product.isRPT && (
              <span className="bg-primary text-on-primary px-6 py-2 text-xs font-bold uppercase tracking-widest mt-8">
                Ruptura de Puente Térmico (RPT)
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Overview & Specs */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col">
            <h2 className="font-label text-primary uppercase tracking-widest text-[10px] mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/50"></span>
              Presentación
            </h2>
            <p className="font-headline text-2xl sm:text-3xl md:text-5xl text-on-surface font-bold leading-tight mb-8 uppercase tracking-tight">
              {product.description}
            </p>
            <p className="font-body text-on-surface-variant text-base md:text-lg leading-relaxed mb-12 border-l border-primary/20 pl-6 md:pl-8">
              {product.introText}
            </p>

            {/* Spec Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-px bg-outline/20 border border-outline/20 p-px">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-surface-container-low p-4 sm:p-8 flex flex-col items-center text-center hover:bg-surface-container transition-colors group"
                >
                  <span className="material-symbols-outlined text-primary/40 mb-2 sm:mb-4 group-hover:text-primary transition-colors">
                    {spec.icon}
                  </span>
                  <span className="text-on-surface-variant text-[9px] sm:text-[10px] uppercase tracking-widest mb-1">
                    {spec.label}
                  </span>
                  <span className="text-on-surface font-bold text-xs sm:text-sm tracking-tight">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Detail / Features */}
          <div className="flex flex-col gap-8 bg-surface-container-low/40 backdrop-blur-md border border-outline/20 p-8 sm:p-12 lg:p-16">
            <h3 className="font-headline text-2xl font-bold text-on-surface uppercase mb-4">
              Características Técnicas
            </h3>
            <div className="space-y-10">
              {product.features.map((feature) => (
                <div key={feature.title} className="flex gap-6 group">
                  <span className="material-symbols-outlined text-primary h-12 w-12 flex items-center justify-center rounded-full bg-primary/5 border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all">
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-2 tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons Container */}
            <div className="flex flex-col gap-4 mt-8">
              {(product.slug === 'linea-atlantica' ||
                product.slug === 'linea-niza' ||
                product.slug === 'linea-mediterranea' ||
                product.slug === 'linea-mediterranea-rpt') && (
                <Link
                  to={
                    product.slug === 'linea-atlantica'
                      ? '/mecanizados/linea-atlantica'
                      : product.slug === 'linea-niza'
                        ? '/mecanizados/linea-niza'
                        : product.slug === 'linea-mediterranea'
                          ? '/mecanizados/linea-mediterranea'
                          : '/mecanizados/linea-mediterranea-rpt'
                  }
                  className="group flex items-center gap-4 bg-orange-500/10 border border-orange-500/20 px-6 py-4 hover:bg-orange-500 transition-all rounded-xl w-full"
                >
                  <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-[#0b0e12] transition-colors">
                    <PenTool className="w-5 h-5 text-[#0b0e12] group-hover:text-orange-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-orange-500 group-hover:text-on-primary font-bold">
                      Producción Técnica
                    </p>
                    <p className="text-on-surface text-sm font-bold group-hover:text-on-primary transition-colors">
                      Ver Manual de Mecanizado
                    </p>
                  </div>
                </Link>
              )}
              {product.slug === 'linea-tradicional' && (
                <>
                  <Link
                    to="/mecanizados/linea-tradicional"
                    className="group flex items-center gap-4 bg-orange-500/10 border border-orange-500/20 px-6 py-4 hover:bg-orange-500 transition-all rounded-xl w-full"
                  >
                    <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-[#0b0e12] transition-colors">
                      <PenTool className="w-5 h-5 text-[#0b0e12] group-hover:text-orange-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-orange-500 group-hover:text-on-primary font-bold">
                        Producción Técnica
                      </p>
                      <p className="text-on-surface text-sm font-bold group-hover:text-on-primary transition-colors">
                        Ver Manual de Mecanizado
                      </p>
                    </div>
                  </Link>
                  <Link
                    to={`/catalogo-tecnico/${product.slug}`}
                    className="group flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-4 hover:bg-primary transition-all rounded-xl w-full"
                  >
                    <div className="bg-primary p-2 rounded-lg group-hover:bg-background transition-colors">
                      <FileText className="w-5 h-5 text-on-primary group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-primary group-hover:text-on-primary font-bold">
                        Documentación Técnica
                      </p>
                      <p className="text-on-surface text-sm font-bold group-hover:text-on-primary transition-colors">
                        Ver Catálogo de Cortes
                      </p>
                    </div>
                  </Link>
                </>
              )}
              {product.slug === 'linea-gamma' && (
                <>
                  <Link
                    to="/mecanizados/linea-gamma"
                    className="group flex items-center gap-4 bg-orange-500/10 border border-orange-500/20 px-6 py-4 hover:bg-orange-500 transition-all rounded-xl w-full"
                  >
                    <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-[#0b0e12] transition-colors">
                      <PenTool className="w-5 h-5 text-[#0b0e12] group-hover:text-orange-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-orange-500 group-hover:text-on-primary font-bold">
                        Producción Técnica
                      </p>
                      <p className="text-on-surface text-sm font-bold group-hover:text-on-primary transition-colors">
                        Ver Manual de Mecanizado
                      </p>
                    </div>
                  </Link>
                  <a
                    href="/docs/Línea Gamma/Catalogo_Linea_Gamma.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-4 hover:bg-primary transition-all rounded-xl w-full"
                  >
                    <div className="bg-primary p-2 rounded-lg group-hover:bg-background transition-colors">
                      <FileText className="w-5 h-5 text-on-primary group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] uppercase tracking-widest text-primary group-hover:text-on-primary font-bold">
                        Catálogo Completo
                      </p>
                      <p className="text-on-surface text-sm font-bold group-hover:text-on-primary transition-colors">
                        Descargar PDF Gamma
                      </p>
                    </div>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Table */}
      {/* Profiles Table / Accordions for Monaco and others */}
      {product.slug === 'linea-monaco' ? (
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-surface uppercase mb-4">
                Catálogo de Perfiles
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                Explore las diferentes variantes y componentes de la Línea Mónaco. Seleccione una
                categoría para ver el detalle de pesos y formas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/testeos/linea-monaco"
                className="group flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-4 hover:bg-primary transition-all rounded-xl"
              >
                <div className="bg-primary p-2 rounded-lg group-hover:bg-background transition-colors">
                  <Beaker className="w-5 h-5 text-on-primary group-hover:text-primary transition-colors" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-primary group-hover:text-on-primary font-bold">
                    Ensayos Técnicos
                  </p>
                  <p className="text-on-surface text-sm font-bold group-hover:text-on-primary transition-colors">
                    Ver Reporte de Desempeño
                  </p>
                </div>
              </Link>

              <Link
                to="/mecanizados/linea-monaco"
                className="group flex items-center gap-4 bg-orange-500/10 border border-orange-500/20 px-6 py-4 hover:bg-orange-500 transition-all rounded-xl"
              >
                <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-[#0b0e12] transition-colors">
                  <PenTool className="w-5 h-5 text-[#0b0e12] group-hover:text-orange-500" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-orange-500 group-hover:text-[#0b0e12] font-bold">
                    Producción Técnica
                  </p>
                  <p className="text-white text-sm font-bold group-hover:text-[#0b0e12]">
                    Ver Manual de Mecanizado
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-outline/30 bg-surface-container-low/50 overflow-hidden rounded-2xl">
              <button
                onClick={() =>
                  setActiveAccordion(
                    activeAccordion === 'monaco-standard' ? null : 'monaco-standard'
                  )
                }
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-surface-container transition-colors"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface uppercase">
                    Mónaco Estándar
                  </h3>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">
                    Perfiles base para tipologías corredizas y batientes
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${activeAccordion === 'monaco-standard' ? 'rotate-180' : ''}`}
                />
              </button>
              {activeAccordion === 'monaco-standard' && (
                <div className="p-1 sm:p-4 border-t border-[#323539]/20 animate-in fade-in slide-in-from-top-4 duration-300">
                  <ProfileTable systemName="Mónaco Estándar" profiles={monacoProfiles} />
                </div>
              )}
            </div>

            <div className="border border-outline/30 bg-surface-container-low/50 overflow-hidden rounded-2xl">
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === 'monaco-top' ? null : 'monaco-top')
                }
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-surface-container transition-colors"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface uppercase">
                    Mónaco Top
                  </h3>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-1">
                    Sistemas de alta prestación reforzados
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${activeAccordion === 'monaco-top' ? 'rotate-180' : ''}`}
                />
              </button>
              {activeAccordion === 'monaco-top' && (
                <div className="p-1 sm:p-4 border-t border-outline/20 animate-in fade-in slide-in-from-top-4 duration-300">
                  <ProfileTable systemName="Mónaco Top" profiles={monacoTopProfiles} />
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        (product.slug === 'linea-tradicional' ||
          product.slug === 'linea-gamma' ||
          product.slug === 'linea-delta' ||
          product.slug === 'linea-atlantica' ||
          product.slug === 'linea-niza' ||
          product.slug === 'linea-mediterranea' ||
          product.slug === 'linea-mediterranea-rpt' ||
          product.slug === 'linea-monaco-rpt' ||
          product.slug === 'frente-integral' ||
          product.slug === 'frente-vidriado' ||
          product.slug === 'sistemas-de-barandas' ||
          product.slug === 'sistemas-de-mamparas' ||
          product.slug === 'frentes-de-placard' ||
          product.slug === 'cortinas-de-enrollar' ||
          product.slug === 'sistema-de-lama-parasol' ||
          product.slug === 'sistema-frame-de-junta-cerrada') && (
          <section className="max-w-7xl mx-auto px-6 pb-24">
            <ProfileTable
              systemName={product.name}
              title="Catálogo de Perfiles"
              subtitle="Detalle técnico exhaustivo para especificación arquitectónica."
              profiles={
                product.slug === 'linea-tradicional'
                  ? traditionalProfiles
                  : product.slug === 'linea-gamma'
                    ? gammaProfiles
                    : product.slug === 'linea-delta'
                      ? deltaProfiles
                      : product.slug === 'linea-atlantica'
                        ? atlanticaProfiles
                        : product.slug === 'linea-niza'
                          ? nizaProfiles
                          : product.slug === 'linea-mediterranea'
                            ? mediterraneaProfiles
                            : product.slug === 'linea-mediterranea-rpt'
                              ? mediterraneaRPTProfiles
                              : product.slug === 'linea-monaco-rpt'
                                ? monacoRPTProfiles
                                : product.slug === 'frente-integral'
                                  ? frenteIntegralProfiles
                                  : product.slug === 'frente-vidriado'
                                    ? frenteVidriadoProfiles
                                    : product.slug === 'sistemas-de-barandas'
                                      ? barandasProfiles
                                      : product.slug === 'sistemas-de-mamparas'
                                        ? mamparasProfiles
                                        : product.slug === 'frentes-de-placard'
                                          ? placardProfiles
                                          : product.slug === 'cortinas-de-enrollar'
                                            ? cortinasProfiles
                                            : product.slug === 'sistema-de-lama-parasol'
                                              ? lamaParasolProfiles
                                              : product.slug === 'sistema-frame-de-junta-cerrada'
                                                ? frameJuntaCerradaProfiles
                                                : complementariosProfiles
              }
            />
          </section>
        )
      )}

      {/* Lines Carousel Section */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-label text-primary uppercase tracking-widest text-[10px] mb-12 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-primary/50"></span>
            Otras Líneas del Sistema
            <span className="w-12 h-[1px] bg-primary/50"></span>
          </h2>

          <div className="relative overflow-hidden">
            <motion.div
              key={cardSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {productLines
                .slice(cardSlide * CARDS_PER_PAGE, cardSlide * CARDS_PER_PAGE + CARDS_PER_PAGE)
                .map((pl) => (
                  <Link
                    key={pl.slug}
                    to={`/productos/${pl.slug}`}
                    className="group flex flex-col bg-surface-container border border-outline/10 shadow-xl hover:shadow-2xl rounded-[2.5rem] overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-high">
                      <img
                        src={pl.img}
                        alt={pl.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100 img-filter-theme"
                      />
                      <div className="absolute bottom-6 right-6">
                        <span className="bg-background/80 backdrop-blur-md text-on-surface px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest border border-outline/20 rounded-full">
                          + Info
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="font-label text-primary text-[10px] uppercase tracking-widest mb-2 block font-bold">
                        {pl.category}
                      </span>
                      <h3 className="font-headline text-xl font-bold text-on-surface uppercase mb-4 tracking-tight">
                        {pl.name}
                      </h3>
                      <div className="pt-4 border-t border-outline/10 flex justify-between items-center mt-auto">
                        <span className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group-hover:opacity-70 transition-colors">
                          Ver Detalles
                          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCardSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === cardSlide ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-outline/30 hover:bg-primary/50'
                }`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Downloads Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-outline/20">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center max-w-2xl">
            <h2 className="font-headline text-4xl font-black text-on-surface uppercase mb-4">
              Documentación Especializada
            </h2>
            <p className="font-body text-on-surface-variant text-sm">
              Contamos con todos los recursos necesarios para integrarnos en su flujo de trabajo
              arquitectónico.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full">
            {product.downloads.map((dl) => {
              const isInternal = dl.url.startsWith('/');
              const isMecanizado = dl.type === 'MECANIZADO';
              
              const content = (
                <>
                  <div className="h-16 w-16 bg-surface-container border border-outline/30 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {dl.type}
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-xs tracking-widest mb-1">
                      {dl.label}
                    </h4>
                    <span className="text-on-surface-variant text-[10px] flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">
                        {isMecanizado ? 'engineering' : 'download'}
                      </span>
                      {isMecanizado ? 'Ver Guía Técnica' : 'Descargar Archivo'}
                    </span>
                  </div>
                </>
              );

              const className = "w-full sm:flex-1 min-w-[280px] bg-surface-container-low border border-outline/20 p-6 md:p-8 flex items-center gap-6 hover:border-primary/30 hover:bg-surface-container transition-all group";

              if (isMecanizado && isInternal) {
                return (
                  <Link key={dl.label} to={dl.url} className={className}>
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  key={dl.label}
                  href={dl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-on-primary py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-4xl font-headline font-black uppercase leading-tight mb-2">
              ¿Necesita Asesoramiento Técnico?
            </h2>
            <p className="font-bold uppercase tracking-wider text-xs">
              Personal calificado para asistir su proyecto desde la ingeniería hasta la instalación.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-background text-on-background px-12 py-5 font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl"
          >
            Consultar Ahora
          </Link>
        </div>
      </section>


    </div>
  </div>
);
}



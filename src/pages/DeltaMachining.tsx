import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { technicalTools, consumables as affiliateConsumables } from '../data/affiliateProducts';
import { AffiliateProductCard } from '../components/AffiliateProductCard';

export default function DeltaMachining() {
  const techCarouselRef = useRef<HTMLDivElement>(null);
  const consCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth > 1024 ? ref.current.clientWidth / 3 : ref.current.clientWidth > 768 ? ref.current.clientWidth / 2 : ref.current.clientWidth * 0.85;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const operations = [
    {
      title: 'Corte de Marcos y Hojas',
      desc: 'Corte a 90° para marcos perimetrales (D-10) y hojas corredizas (D-20) de la serie Delta.',
      details: 'Asegure un corte preciso de 90° ±0.5mm para permitir el correcto ensamble con tornillos Parker 8x17z T-15/F. Perfil D-10 requiere 2 marcos (A y H), con 45°-45° en los encuentros superiores. Las hojas (D-20) requieren 4 cortes (A/2-23 y H-39) también a 45°-45°.',
      specs: 'Código D-10: 0.66 kg/m | Código D-20: 0.86-0.90 kg/m',
    },
    {
      title: 'Mecanizado de Umbrales y Desagües',
      desc: 'Fresado de ranuras de descarga en el umbral (D-50) para evacuación de agua.',
      details: 'El zócalo Delta (D-50: 0.78 kg/m) debe maquinarse con desagüe tipo ranura para prevenir acumulación de agua. Utilice tapa de desagüe T-69 (2 unidades por ventana). Aplique sellador de silicona elástico en todos los encuentros entre marco y jamba para garantizar estanqueidad.',
      specs: 'Ancho de ranura: 8-10mm | Profundidad: 5-6mm | Material: Aluminio 6063 T5',
    },
    {
      title: 'Instalación de Rodamientos Tándem',
      desc: 'Calado preciso en la base de las hojas (D-20) para inserción de rodillos tándem (D-80) de alta capacidad.',
      details: 'El sistema de rodamientos tándem Delta soporta hasta 150kg por hoja en modo corredizo. Calados deben medir exactamente 25mm de profundidad x 12mm de ancho. Inserte rodillos (D-80: 0.68 kg/m) con alineación perfecta. Verifique el giro libre de las ruedas con llave Allen 4mm antes del armado final.',
      specs: 'Capacidad: 150kg/hoja | Rodillos: configuración dual | Blindaje: anticorrosión',
    },
    {
      title: 'Encuentro Central de Hojas',
      desc: 'Montaje del encuentro central (D-40) con precisión milimétrica para cierre hermético.',
      details: 'El Encuentro Central Delta (D-40: 0.65 kg/m) conecta las dos hojas en el centro. Requiere 6 tornillos de fijación Parker distribuidos a 150mm. Instale burlete de hermeticidad B-67 (2A + 3H unidades) en la cara interna del encuentro. Ajuste la junta con presión uniforme para garantizar sello hermético sin comprimir excesivamente.',
      specs: 'Código D-40 | Peso: 0.65 kg/m | Tornillos: 6 unidades (T-15/F)',
    },
    {
      title: 'Cierres Laterales Ciegos',
      desc: 'Mecanizado de jambas para instalación de cierres laterales de embutición (cierre ciego coplanar).',
      details: 'Los cierres laterales Delta se embutren en la jamba sin resaltes visibles, logrando líneas coplanares. Calados: 40mm x 20mm de profundidad. Instale tornillos de embutir ocultos (8 por lado). El cierre lateral ciego (D-95: 0.18 kg/m - Tapacabeza) proporciona acabado sin tornillos visibles, manteniendo la estética minimalista contemporánea.',
      specs: 'Calado: 40 x 20mm | Tornillos embutidos: 16 totales | Sistema: coplanar',
    },
    {
      title: 'Contravidrio y Junquillo',
      desc: 'Instalación del sistema de contravidrio (D-70) con junquillo y burletes de sellado.',
      details: 'El Junquillo/Contravidrio Delta (D-70: 0.42 kg/m) se fija con clips T-96 distribuidos cada 150mm. Instale burlete de acristalamiento B-68 (2A + 4H unidades) antes de insertar el vidrio. Para vidrio máximo DVH 24mm, verifique espesor del marco (80mm x 50mm) antes de proceder. Selle con silicona de calidad automotriz.',
      specs: 'Vidrio máx.: DVH 24mm | Clips: T-96 c/150mm | Burlete: B-68',
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Navigation */}
        <Link
          to="/productos/linea-delta"
          className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-[10px] font-bold mb-12 hover:brightness-125 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea Delta
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface uppercase leading-none tracking-tighter mb-4">
              Mecanizados
              <br />
              <span className="text-primary">Delta</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg">
              Optimización y armado para la Línea Delta. Sistemas corredizos de alta prestación con ingeniería Aluvallé.
            </p>
          </div>
          <a
            href="/docs/Línea Delta/Catalogo_Linea_Delta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-primary text-on-primary px-8 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all shadow-2xl"
          >
            <Download className="w-4 h-4" />
            Descargar Catálogo Técnico
          </a>
        </div>

        {/* Tools Carousels */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
            <h2 className="font-headline text-3xl font-bold text-on-surface uppercase">
              Herramientas Técnicas Recomendadas
            </h2>
            <div className="flex gap-2">
              <button onClick={() => scrollCarousel(techCarouselRef, 'left')} className="p-2 bg-surface-variant/10 hover:bg-primary/20 rounded-full border border-outline/10 text-on-surface transition-colors" aria-label="Desplazar a la izquierda">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollCarousel(techCarouselRef, 'right')} className="p-2 bg-surface-variant/10 hover:bg-primary/20 rounded-full border border-outline/10 text-on-surface transition-colors" aria-label="Desplazar a la derecha">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div ref={techCarouselRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 hide-scrollbar scroll-smooth">
            {technicalTools.map((t, i) => (
              <AffiliateProductCard 
                key={i} 
                product={t} 
                className="w-[calc(85%-0.5rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0" 
              />
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 mt-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface uppercase">
              Consumibles y Accesorios
            </h2>
            <div className="flex gap-2">
              <button onClick={() => scrollCarousel(consCarouselRef, 'left')} className="p-2 bg-surface-variant/10 hover:bg-primary/20 rounded-full border border-outline/10 text-on-surface transition-colors" aria-label="Desplazar a la izquierda">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollCarousel(consCarouselRef, 'right')} className="p-2 bg-surface-variant/10 hover:bg-primary/20 rounded-full border border-outline/10 text-on-surface transition-colors" aria-label="Desplazar a la derecha">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div ref={consCarouselRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 hide-scrollbar scroll-smooth">
            {affiliateConsumables.map((t, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-[85%] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-surface-variant/5 border border-outline/10 p-6 group hover:border-primary/50 transition-all backdrop-blur-sm flex flex-col"
              >
                <div className="w-full h-40 bg-white rounded-lg mb-5 overflow-hidden flex items-center justify-center p-2 shadow-inner border border-outline/5">
                  <img src={t.imageUrl} alt={t.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                </div>
                <h3 className="text-on-surface font-bold uppercase text-sm mb-2 tracking-wide leading-snug line-clamp-2" title={t.title}>
                  {t.title}
                </h3>
                <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 flex-grow line-clamp-3" title={t.description}>
                  {t.description}
                </p>
                {t.buyLink && (
                  <a
                    href={t.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-primary font-bold text-[10px] uppercase tracking-wider hover:bg-primary hover:text-on-primary px-4 py-3 border border-primary/30 transition-all mt-auto self-start w-full"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Ver en MercadoLibre
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Main Operations */}
          <div>
            <h2 className="font-label text-on-surface uppercase tracking-widest text-xs mb-10 flex items-center gap-4">
              <Scissors className="w-5 h-5 text-primary" />
              Operaciones Principales
            </h2>
            <div className="space-y-12">
              {operations.map((op, i) => (
                <div
                  key={i}
                  className="relative pl-12 border-l border-outline/20 hover:border-primary/50 transition-colors py-2"
                >
                  <div className="absolute left-[-5px] top-6 w-[9px] h-[9px] bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                  <h4 className="text-on-surface font-bold uppercase mb-2 tracking-tight">
                    {op.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{op.desc}</p>
                  <div className="bg-surface-variant/10 p-4 flex items-start gap-3 border border-outline/10 backdrop-blur-sm mb-3">
                    <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-on-surface-variant text-[11px] leading-relaxed italic">
                      {op.details}
                    </p>
                  </div>
                  {op.specs && (
                    <div className="bg-primary/5 p-3 border border-primary/20 text-[11px]">
                      <p className="text-primary font-bold uppercase tracking-wider mb-1">Especificaciones:</p>
                      <p className="text-on-surface-variant">{op.specs}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Requirements */}
          <div>
            <div className="bg-surface-variant/5 border border-outline/10 p-12 sticky top-40 backdrop-blur-sm">
              <h2 className="font-headline text-3xl font-bold text-on-surface uppercase mb-8">
                Requisitos Técnicos
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Ruler className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Espacio de Trabajo
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Bancos de armado mínimo 3x2m para hojas corredizas de gran porte. Mesa de corte dedicada con escuadra de referencia. Estaciones de mecanizado: punzonadora, fresadora, taladro de precisión.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Herramientas Requeridas
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Llave Allen 4mm para rodamientos. Escuadras de verifica 90°. Calibrador digital ±0.5mm. Taladro de columna con broca para aluminio. Fresadora con fresas de 8-10mm. Destornilladores de precisión.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Especificaciones Generales
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Material base: Aluminio 6063 T5. Marcos: 80mm. Sistema: Corredizo 2 hojas. Capacidad máxima: 150kg/hoja. Vidrio máximo: DVH 24mm. Tolerancia: ±0.5mm en cortes, ±10% en peso. Espesor marco: 80x50mm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-outline/10">
                <h3 className="text-on-surface font-bold uppercase text-sm mb-6 tracking-wider">
                  Materiales de Consumo por Ventana
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Tornillos Parker 8x17z:</span>
                    <span className="font-bold text-on-surface">12 unidades</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Burlete B-68 (Acristalamiento):</span>
                    <span className="font-bold text-on-surface">2A + 4H</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Burlete B-67 (Hermeticidad):</span>
                    <span className="font-bold text-on-surface">2A + 3H</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Clips Contravidrio T-96:</span>
                    <span className="font-bold text-on-surface">8-12 unidades</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Silicona elastómera:</span>
                    <span className="font-bold text-on-surface">2-3 cartuchos</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-outline/10">
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 uppercase tracking-widest font-bold">
                  Soporte Técnico Aluvallé
                </p>
                <button className="w-full bg-surface-variant/20 hover:bg-primary hover:text-on-primary text-on-surface font-bold py-4 uppercase text-[10px] tracking-[0.2em] transition-all">
                  Contactar Asistencia Técnica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench, ChevronLeft, ChevronRight, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { technicalTools, consumables as affiliateConsumables } from '../data/affiliateProducts';
import { AffiliateProductCard } from '../components/AffiliateProductCard';

export default function AtlanticaMachining() {
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
      title: 'Corte de Marcos Perimetrales',
      desc: 'Corte a 90° para jambas (161) y umbrales/dinteles (162) de 130mm.',
      details: 'Dada la gran sección del perfil (130mm), se requiere disco de corte de 450mm mínimo. Verifique la escuadría perfecta en el ensamble para garantizar la estanqueidad en los encuentros. Utilice tornillos Parker 8x1 1/4" para la fijación mecánica.',
      specs: 'Código 161: 0,90 kg/m | Código 162: 1,66 kg/m | Ancho: 130mm',
    },
    {
      title: 'Mecanizado de Drenajes en Cascada',
      desc: 'Calado escalonado en el umbral (162) para evacuación de agua bajo presiones extremas.',
      details: 'Atlántica utiliza un sistema de drenaje en cascada. Las ranuras exteriores deben estar desplazadas respecto a las interiores. Ranuras de 25x5mm cada 600mm. Instale deflectores de viento en las salidas exteriores para evitar el retorno de agua.',
      specs: 'Ranura: 25mm x 5mm | Tapa Desagüe: T-69 | Sellado: Silicona Neutra',
    },
    {
      title: 'Armado de Hojas Reforzadas',
      desc: 'Ensamble de parantes (165) con zócalos altos (168) mediante escuadras de tracción.',
      details: 'El zócalo alto (168: 1,47 kg/m) permite alojar vidrios pesados. Requiere doble escuadra de armado por esquina. Verifique el calado para rodamientos en la base del zócalo antes de cerrar el cuadro de la hoja.',
      specs: 'Código 168: 1,47 kg/m | Escuadras: E-168 (Doble) | Tolerancia: ±0.5mm',
    },
    {
      title: 'Encuentro Central de Gran Inercia',
      desc: 'Montaje del parante central reforzado (171) para resistencia a cargas de viento.',
      details: 'En vanos de gran altura, utilice el parante 171 (2,22 kg/m). Instale felpa de polipropileno doble con fin-seal (lámina central) para hermeticidad acústica y térmica. Asegure el tapón de encuentro en los extremos para evitar filtraciones.',
      specs: 'Código 171: 2,22 kg/m | Felpa: 7x7 Fin-Seal | Refuerzo: Tubular integrado',
    },
    {
      title: 'Cierre Multipunto de Seguridad',
      desc: 'Mecanizado de parante lateral para fallebas multipunto y puntos de cierre en marco.',
      details: 'Realice el fresado para la caja de la falleba central. Los puntos de cierre en el marco (161) deben estar perfectamente alineados con los bulones de la hoja para garantizar la presión de los burletes.',
      specs: 'Calado: Según herraje | Puntos de cierre: Mínimo 3 por hoja | Tornillería: Inox',
    },
    {
      title: 'Acristalamiento y Sellado',
      desc: 'Instalación de vidrios DVH con contravidrios (380) y burletes de EPDM.',
      details: 'Atlántica permite DVH de hasta 32mm. Utilice calzos de apoyo de alta densidad para distribuir el peso del vidrio hacia los rodamientos. El sellado exterior debe ser continuo y sin interrupciones.',
      specs: 'Contravidrio: 380 | Burlete: B-68 | Capacidad: Hasta 32mm DVH',
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
          to="/productos/linea-atlantica"
          className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-[10px] font-bold mb-12 hover:brightness-125 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea Atlántica
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface uppercase leading-none tracking-tighter mb-4">
              Mecanizados
              <br />
              <span className="text-primary">Atlántica</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg">
              Manual técnico para sistemas de alta prestación. Soluciones robustas para frentes costeros y edificios en altura.
            </p>
          </div>
          <a
            href="/docs/Línea Atlántica/Catalogo_Linea_Atlantica.pdf"
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
              <AffiliateProductCard 
                key={i} 
                product={t} 
                className="w-[calc(85%-0.5rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0" 
              />
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
                      Corte Industrial
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Requiere tronzadora con disco de 450mm mínimo para cortes a 90° y 45° en perfiles de 130mm de ancho. Velocidad de corte controlada para evitar calentamiento del material.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Punzonado Atlántica
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Uso obligatorio de la matriz Atlántica Alcemar para calados de escuadras, drenajes y cierres. Garantiza la precisión milimétrica necesaria para el sistema.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Sellado Estructural
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Dada su aplicación en frentes marítimos, el sellado de los encuentros mecánicos con silicona neutra de alta calidad es obligatorio para prevenir ingresos de humedad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-outline/10">
                <h3 className="text-on-surface font-bold uppercase text-sm mb-6 tracking-wider">
                  Configuración Estándar
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Espesor del Marco:</span>
                    <span className="font-bold text-on-surface">130 mm</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Aleación base:</span>
                    <span className="font-bold text-on-surface">6063 T6</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Transmitancia Térmica:</span>
                    <span className="font-bold text-on-surface">U=3.2 W/m²K</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Hermeticidad:</span>
                    <span className="font-bold text-on-surface">Clase A3</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-outline/10">
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 uppercase tracking-widest font-bold">
                  Soporte de Ingeniería Aluvallé
                </p>
                <button className="w-full bg-surface-variant/20 hover:bg-primary hover:text-on-primary text-on-surface font-bold py-4 uppercase text-[10px] tracking-[0.2em] transition-all">
                  Consultar Oficina Técnica
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

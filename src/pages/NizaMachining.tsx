import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { technicalTools, consumables as affiliateConsumables } from '../data/affiliateProducts';
import { AffiliateProductCard } from '../components/AffiliateProductCard';

export default function NizaMachining() {
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
      title: 'Corte Mixto a 45° y 90°',
      desc: 'Preparación de perfiles para marcos (90°) y hojas (45° o 90°) según tipología.',
      details: 'La línea Niza permite una modularidad única. Los marcos se cortan preferentemente a 90° con tornillo de armado. Las hojas pueden armarse a 45° para estética europea (N-5) o a 90° para mayor rapidez (N-3/N-1). Utilice discos de 96 dientes para acabado espejo.',
      specs: 'Ángulos: 45° / 90° | Disco recomendado: Widia 96D | Tolerancia: ±0.2mm',
    },
    {
      title: 'Mecanizado de Jamba Niza',
      desc: 'Perforación para tornillo de armado y alojamiento de clips de fijación.',
      details: 'Utilice la plantilla de perforación Niza para asegurar la alineación entre la jamba (865) y el umbral/dintel (864). El agujero de pasaje debe ser de 8mm con avellanado para que la cabeza del tornillo quede oculta bajo el tapajuntas.',
      specs: 'Broca: 5mm (guía) / 8mm (pasaje) | Código Jamba: 865 | Fijación: Tornillo 8x1 1/2"',
    },
    {
      title: 'Drenajes Invisibles',
      desc: 'Calado de ranuras de desagüe ocultas en el canal del marco.',
      details: 'Para mantener la estética minimalista, los drenajes se realizan en la parte interna del marco, evacuando hacia la cámara exterior. Realice ranuras de 20x4mm cada 500mm. Es vital colocar las válvulas anti-retorno para evitar silbidos por viento.',
      specs: 'Ranura: 20mm x 4mm | Válvula: V-Niza | Sellado: Silicona Neutra',
    },
    {
      title: 'Alojamiento de Rodamientos N-5',
      desc: 'Mecanizado de la base de la hoja para ruedas de alta carga.',
      details: 'En hojas reforzadas N-5 (410), el calado debe ser preciso para permitir el ajuste de altura del rodamiento una vez instalada la hoja. Utilice rodamientos con pista de nylon para funcionamiento silencioso o acero para hojas de gran peso.',
      specs: 'Rodamiento: R-410 (Doble) | Ajuste: Tornillo micrométrico | Carga máx: 120kg/hoja',
    },
    {
      title: 'Encuentro Central y Traslapo',
      desc: 'Montaje de perfiles de cruce y laberinto de hermeticidad.',
      details: 'El parante central (816/817) requiere un sellado perimetral con burlete de cruce. El traslapo debe encastrar perfectamente para activar el sistema de laberinto que impide el paso del aire. Verifique la posición de las felpas Fin-Seal.',
      specs: 'Parante: 817 (Reforzado) | Felpa: 7x6 Fin-Seal | Hermeticidad: Triple contacto',
    },
    {
      title: 'Instalación de Herrajes Multipunto',
      desc: 'Fresado para fallebas y puntos de cierre de seguridad.',
      details: 'Niza es compatible con sistemas multipunto europeos. El fresado en la hoja debe seguir las cotas del fabricante del herraje. Asegure que los recibidores en el marco estén centrados para una compresión uniforme del burlete.',
      specs: 'Herraje: Cámara Europea | Puntos: 2 a 4 según altura | Tornillería: Inoxidable',
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
          to="/productos/linea-niza"
          className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-[10px] font-bold mb-12 hover:brightness-125 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea Niza
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface uppercase leading-none tracking-tighter mb-4">
              Mecanizados
              <br />
              <span className="text-primary">Línea Niza</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg">
              Manual técnico avanzado para carpintería modular. Estética minimalista con precisión europea.
            </p>
          </div>
          <a
            href="/docs/Línea Niza/Catalogo_Linea_Niza.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-primary text-on-primary px-8 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all shadow-2xl"
          >
            <Download className="w-5 h-5" />
            Descargar Manual PDF
          </a>
        </div>

        {/* Technical Tools Section */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-on-surface uppercase tracking-tight">Herramental Recomendado</h2>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => scrollCarousel(techCarouselRef, 'left')}
                className="p-3 rounded-xl border border-outline/10 hover:bg-surface-container transition-all text-on-surface"
                title="Desplazar a la izquierda"
                aria-label="Desplazar a la izquierda"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollCarousel(techCarouselRef, 'right')}
                className="p-3 rounded-xl border border-outline/10 hover:bg-surface-container transition-all text-on-surface"
                title="Desplazar a la derecha"
                aria-label="Desplazar a la derecha"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div 
            ref={techCarouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
          >
            {technicalTools.map((tool) => (
              <div key={tool.id} className="min-w-[300px] md:min-w-[380px]">
                <AffiliateProductCard product={tool} />
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Operations Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Cpu className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-on-surface uppercase tracking-tight">Operaciones Críticas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operations.map((op, idx) => (
              <div key={idx} className="group bg-surface-container-low border border-outline/10 p-8 rounded-[2.5rem] hover:bg-surface-container-high transition-all">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-4 uppercase tracking-tight leading-tight">{op.title}</h3>
                <p className="text-primary text-sm font-bold mb-4 italic">{op.desc}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {op.details}
                </p>
                <div className="pt-6 border-t border-outline/5 flex items-start gap-3">
                  <Info className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                    {op.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consumables Section */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Scissors className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-on-surface uppercase tracking-tight">Consumibles y Cuidado</h2>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => scrollCarousel(consCarouselRef, 'left')}
                className="p-3 rounded-xl border border-outline/10 hover:bg-surface-container transition-all text-on-surface"
                title="Desplazar a la izquierda"
                aria-label="Desplazar a la izquierda"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollCarousel(consCarouselRef, 'right')}
                className="p-3 rounded-xl border border-outline/10 hover:bg-surface-container transition-all text-on-surface"
                title="Desplazar a la derecha"
                aria-label="Desplazar a la derecha"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div 
            ref={consCarouselRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
          >
            {affiliateConsumables.map((item) => (
              <div key={item.id} className="min-w-[300px] md:min-w-[380px]">
                <AffiliateProductCard product={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-surface-container-highest/50 border border-outline/10 p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-xl">
          <div className="flex gap-8">
            <div className="bg-primary/20 p-6 rounded-[2rem] h-fit">
              <Wrench className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-on-surface mb-4 uppercase tracking-tighter">¿Necesita asistencia técnica?</h4>
              <p className="text-on-surface-variant max-w-md leading-relaxed text-lg">
                Nuestro departamento de ingeniería está a su disposición para resolver dudas sobre mecanizados complejos o tipologías especiales de la Línea Niza.
              </p>
            </div>
          </div>
          <Link
            to="/contacto"
            className="bg-on-surface text-surface px-10 py-6 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all shadow-2xl"
          >
            Contactar Ingeniería
          </Link>
        </div>
      </div>
    </div>
  );
}

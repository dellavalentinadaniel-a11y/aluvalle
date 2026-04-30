import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { technicalTools, consumables as affiliateConsumables } from '../data/affiliateProducts';

export default function TradicionalMachining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const operations = [
    {
      title: 'Corte de Perfiles',
      desc: 'Corte a 45° para el armado de cuadros y 90° para travesaños.',
      details: 'El sistema permite un armado rápido mediante tornillos autorroscantes en los encuentros.',
    },
    {
      title: 'Caja de Cerradura',
      desc: 'Mecanizado central en el perfil de hoja para la inserción de cerraduras de seguridad.',
      details: 'Utilice brocas de acero rápido y lubricación constante para un acabado limpio.',
    },
    {
      title: 'Mecanizado de Escuadras',
      desc: 'Calado para la inserción de escuadras de tracción o de embutir.',
      details: 'Asegure la limpieza interna de la cámara del perfil antes de insertar la escuadra.',
    },
    {
      title: 'Desagües de Condensación',
      desc: 'Calados en el umbral inferior para permitir la salida de agua acumulada.',
      details: 'Realice las perforaciones de adentro hacia afuera para facilitar la fluidez.',
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
          to="/productos/linea-tradicional"
          className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-[10px] font-bold mb-12 hover:brightness-125 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea Tradicional
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface uppercase leading-none tracking-tighter mb-4">
              Mecanizados
              <br />
              <span className="text-primary">Tradicional</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg">
              Manual de armado para sistemas clásicos. Eficiencia y simplicidad en la carpintería de aluminio tradicional.
            </p>
          </div>
          <a
            href="/docs/Línea Tradicional/Catalogo_Linea_Tradicional (1).pdf"
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
          <h2 className="font-headline text-3xl font-bold text-on-surface uppercase mb-8">
            Herramientas Técnicas Recomendadas
          </h2>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 hide-scrollbar">
            {technicalTools.map((t, i) => (
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

          <h2 className="font-headline text-3xl font-bold text-on-surface uppercase mb-8 mt-16">
            Consumibles y Accesorios
          </h2>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 hide-scrollbar">
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
                  <div className="bg-surface-variant/10 p-4 flex items-start gap-3 border border-outline/10 backdrop-blur-sm">
                    <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-on-surface-variant text-[11px] leading-relaxed italic">
                      {op.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Requirements */}
          <div>
            <div className="bg-surface-variant/5 border border-outline/10 p-12 sticky top-40 backdrop-blur-sm">
              <h2 className="font-headline text-3xl font-bold text-on-surface uppercase mb-8">
                Instalación
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Ruler className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Montaje en Vano
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Utilice tornillos de fijación con tarugos de Nylon de 8mm cada 500mm de distancia.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Sellado Perimetral
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Es fundamental el uso de sellador poliuretánico o silicona neutra en todo el perímetro exterior.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-outline/10">
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 uppercase tracking-widest font-bold">
                  Soporte Aluvallé
                </p>
                <button className="w-full bg-surface-variant/20 hover:bg-primary hover:text-on-primary text-on-surface font-bold py-4 uppercase text-[10px] tracking-[0.2em] transition-all">
                  Consultar Departamento Técnico
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

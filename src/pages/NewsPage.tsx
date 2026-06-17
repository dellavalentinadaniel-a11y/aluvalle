import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  img: string;
}

const newsList: NewsItem[] = [
  {
    id: 1,
    title: 'Nueva Línea Mediterránea RPT: Aislamiento Térmico Definitivo',
    date: '15 de Junio, 2026',
    category: 'Lanzamientos',
    summary: 'Lanzamos oficialmente en la Patagonia el sistema de Ruptura de Puente Térmico (RPT) de Alcemar. Ahorro energético y confort acústico sin precedentes.',
    content: 'La nueva Línea Mediterránea RPT representa un salto cuántico en eficiencia energética para la construcción en zonas frías. Al incorporar una varilla de poliamida reforzada con fibra de vidrio entre los perfiles de aluminio exterior e interior, se rompe la conductividad del metal. Esto reduce las pérdidas de calefacción hasta en un 40% y evita el fenómeno de condensación en vidrios y perfiles durante las rigurosas heladas patagónicas. Ya se encuentra disponible para cotización en nuestro catálogo digital.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Optimizamos la Red de Repartos a Bariloche y Zona Cordillerana',
    date: '10 de Junio, 2026',
    category: 'Logística',
    summary: 'Implementamos una frecuencia de entrega quincenal fija para la zona de la cordillera, garantizando embalajes reforzados y transporte de perfiles de gran longitud.',
    content: 'Con el objetivo de brindar un mejor soporte a los talleres y obras en San Carlos de Bariloche, Villa La Angostura, San Martín y Junín de los Andes, hemos optimizado nuestra ruta sur. A partir de este mes, los despachos saldrán de manera quincenal fija cada jueves con vehículos propios de gran longitud acondicionados. Además, incorporamos un protocolo de triple embalaje de protección contra la abrasión para asegurar que los perfiles anodizados y pintados lleguen en perfectas condiciones.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Aluvalle consolida su alianza con Alcemar en el Alto Valle',
    date: '02 de Junio, 2026',
    category: 'Institucional',
    summary: 'Renovamos nuestro acuerdo de distribución oficial de matrices homologadas Alcemar, asegurando la máxima trazabilidad del aluminio en Neuquén y Río Negro.',
    content: 'En un encuentro formal en las oficinas centrales de Buenos Aires, renovamos nuestro contrato de distribución para todo el Alto Valle y Neuquén. Esta alianza certifica que toda la perfilería provista por Aluvallé cuenta con el temple (T5/T6), dureza y espesores aprobados por normas internacionales. Esto garantiza a los instaladores que no habrá problemas de fatiga de materiales al mecanizar o ensamblar las escuadras en obra.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Sistemas de Piel de Vidrio para la Arquitectura Comercial Moderna',
    date: '28 de Mayo, 2026',
    category: 'Tendencias',
    summary: 'Analizamos las ventajas del Frente Vidriado y Frente Integral en las nuevas envolventes de edificios del sector corporativo y de servicios en Neuquén.',
    content: 'La tendencia en el desarrollo inmobiliario corporativo de Neuquén Capital apunta al uso de frentes vidriados continuos. Estos sistemas no solo brindan una vista panorámica inmejorable del valle, sino que maximizan la entrada de luz diurna, disminuyendo el gasto eléctrico. Mediante el uso de DVH con control solar, se logra un equilibrio óptimo entre luminosidad y carga térmica, un estándar indispensable para las certificaciones ambientales modernas.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <div className="pt-24 pb-20 bg-background relative min-h-screen text-on-surface-variant font-body">
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-2 block">
            Actualidad & Innovación
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-black text-on-surface uppercase tracking-tight leading-none">
            Noticias & <span className="text-gradient">Novedades</span>
          </h1>
          <p className="font-body text-on-surface-variant text-sm mt-4 leading-relaxed">
            Mantente al tanto de los últimos lanzamientos de sistemas, optimizaciones de nuestra logística de repartos e innovaciones en carpintería de aluminio.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsList.map((news) => (
            <div
              key={news.id}
              onClick={() => setSelectedNews(news)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedNews(news)}
              className="group flex flex-col bg-surface-container/30 backdrop-blur-lg border border-outline/10 hover:border-primary/35 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Leer noticia: ${news.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high/40">
                <img
                  src={news.img}
                  alt={news.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 img-filter-theme"
                />
                <span className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md text-on-surface border border-outline/10 px-3.5 py-1 text-[8px] font-headline font-black uppercase tracking-widest rounded-full">
                  {news.category}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] text-primary font-bold tracking-wider mb-2">
                  {news.date}
                </span>
                <h3 className="font-headline text-xl font-bold text-on-surface uppercase tracking-tight mb-4 group-hover:text-primary transition-colors leading-snug">
                  {news.title}
                </h3>
                <p className="text-xs text-on-surface-variant/80 leading-relaxed mb-6 flex-grow">
                  {news.summary}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-primary font-bold text-[10px] uppercase tracking-[0.2em] group-hover:text-on-surface transition-colors mt-auto self-start"
                >
                  Leer Artículo
                  <span className="material-symbols-outlined text-[13px]">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Reading Full Article */}
      <AnimatePresence>
        {selectedNews && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-4 bottom-4 top-20 md:top-24 md:bottom-24 md:max-w-2xl md:mx-auto bg-[#111417]/95 backdrop-blur-2xl border border-outline/15 z-[210] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 w-9 h-9 bg-background/50 backdrop-blur-md border border-outline/10 text-on-surface hover:bg-surface-container rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all z-10"
              >
                <span className="material-symbols-outlined text-sm font-bold">close</span>
              </button>

              {/* Scrollable Container */}
              <div className="flex-grow overflow-y-auto no-scrollbar">
                <img
                  src={selectedNews.img}
                  alt={selectedNews.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-8 md:p-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary/20 border border-primary/30 text-primary px-3 py-1 text-[8px] font-headline font-black uppercase tracking-wider rounded-full">
                      {selectedNews.category}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-bold">
                      {selectedNews.date}
                    </span>
                  </div>
                  <h2 className="font-headline text-2xl md:text-3xl font-black text-on-surface uppercase tracking-tight leading-tight">
                    {selectedNews.title}
                  </h2>
                  <p className="text-sm md:text-base text-on-surface leading-relaxed whitespace-pre-line font-light">
                    {selectedNews.content}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

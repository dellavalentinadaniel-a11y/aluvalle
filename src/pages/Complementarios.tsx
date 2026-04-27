import { Link } from 'react-router-dom';
import SystemsHeroBanner from '../components/SystemsHeroBanner';

const heroImages = [
  { src: '/gallery/hero-sistemas-banner/sistemas-de-aluminio-para-la-construccion-alumed-aluminium-systems-alicante-showroom-7-perfiles-cristal-1-1024x645.jpg', alt: 'Showroom de sistemas complementarios' },
  { src: '/gallery/hero-sistemas-banner/_T1A2631.jpg', alt: 'Sistema complementario en aluminio' },
  { src: '/gallery/hero-sistemas-banner/ViviendasUnifamiliares_CasaS_Alcemar_07-1024x683.jpg', alt: 'Aplicación residencial' },
  { src: '/gallery/hero-sistemas-banner/POPLE_(012).jpg', alt: 'Detalle de carpintería interior' },
];

const productLines = [
  {
    name: 'Sistemas de Barandas',
    slug: 'sistemas-de-barandas',
    category: 'Balcones y Terrazas',
    desc: 'Línea completa de barandas en aluminio (BBA, Clásica, SP, SPL, SPU) para cristal de seguridad o perfilería, garantizando protección y diseño.',
    img: 'https://images.unsplash.com/photo-1579725942555-ea819e99ee2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cortinas de Enrollar',
    slug: 'cortinas-de-enrollar',
    category: 'Oscurecimiento',
    desc: 'Sistemas de oscurecimiento y protección exterior fabricados en aluminio, brindando aislamiento térmico, acústico y seguridad.',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Frentes de Placard',
    slug: 'frentes-de-placard',
    category: 'Mobiliario Interior',
    desc: 'Perfilería diseñada para el armado de frentes de placard corredizos con deslizamiento suave, silencioso y de elegante terminación.',
    img: 'https://images.unsplash.com/photo-1595514535415-eb1025ca4e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sistemas de Mamparas',
    slug: 'sistemas-de-mamparas',
    category: 'Baños y Duchas',
    desc: 'Diseños minimalistas para mamparas de baño de vidrio templado. Incluye sistemas corredizos (F-1, F-3), rebatibles y esquineros.',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Complementarios() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <SystemsHeroBanner
          eyebrow="Catálogo de Productos"
          titleLine1="Sistemas"
          titleLine2="Complementarios"
          description="Soluciones en aluminio para terminaciones de obra: barandas, mamparas, cortinas y frentes de placard."
          images={heroImages}
        >
          <div className="flex flex-wrap gap-2">
            <button type="button" className="px-5 py-2 bg-primary text-on-primary rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/30 flex-shrink-0">
              Ver Todos
            </button>
            <button type="button" className="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/20 text-white/80 rounded-full text-xs font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors flex-shrink-0">
              Interiores
            </button>
            <button type="button" className="px-5 py-2 bg-black/40 backdrop-blur-md border border-white/20 text-white/80 rounded-full text-xs font-bold uppercase tracking-wider hover:text-white hover:border-white/40 transition-colors flex-shrink-0">
              Exteriores
            </button>
          </div>
        </SystemsHeroBanner>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {productLines.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col glass-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-background/60 backdrop-blur-md text-on-background px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-outline/20">
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
                  <Link
                    to={`/productos/${product.slug}`}
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group/btn hover:text-on-surface transition-colors"
                  >
                    Ver Detalles
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
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
        <div className="bg-surface-container border border-outline/20 p-12 md:p-20 relative overflow-hidden shadow-2xl rounded-3xl">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline text-4xl font-bold text-on-surface uppercase mb-6 leading-tight">
              Terminaciones
              <br />
              Profesionales
            </h2>
            <p className="font-body text-on-surface-variant mb-10 text-sm leading-relaxed">
              Consulta especificaciones y manuales de perfiles para mamparas, barandas, frentes de
              placard y cortinas de aluminio.
            </p>
            <button className="bg-primary text-on-primary font-bold px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-3 hover:brightness-110 transition-all shadow-xl">
              Descargar Catálogo Adicional
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



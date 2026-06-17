import { motion } from 'motion/react';
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const coreValues = [
  {
    icon: 'diamond',
    title: 'Excelencia Técnica',
    description: 'Buscamos la perfección milimétrica en cada matriz de perfilado y acople del sistema.'
  },
  {
    icon: 'engineering',
    title: 'Ingeniería & RPT',
    description: 'Lideramos en aislamiento térmico con sistemas de Ruptura de Puente Térmico de estándar mundial.'
  },
  {
    icon: 'handshake',
    title: 'Alianzas Estratégicas',
    description: 'Socios oficiales de Alcemar S.A. y Aluar S.A., garantizando materia prima y matrices certificadas.'
  },
  {
    icon: 'eco',
    title: 'Sostenibilidad',
    description: 'Promovemos perfiles de aluminio 100% reciclables y eficiencia de climatización habitacional.'
  }
];

export default function AboutUs() {
  const videos = [
    '/videos/reel1.mp4',
    '/videos/reel2.mp4',
    '/videos/reel3.mp4'
  ];
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background text-on-surface-variant font-body relative overflow-hidden">
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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-3 block">
            Nuestra Trayectoria
          </span>
          <h1 className="text-4xl md:text-7xl font-headline font-black text-on-surface mb-6 uppercase tracking-tight leading-none">
            ALUVALLE <span className="text-gradient">SAS</span>
          </h1>
          <p className="font-body text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed">
            Ingeniería de precisión y diseño arquitectónico en aluminio de alta gama para toda la Patagonia Argentina.
          </p>
        </motion.div>

        {/* History Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-sm md:text-base leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-headline font-black text-on-surface uppercase tracking-tight">
              Precisión que <br />Construye el Futuro
            </h2>
            <p>
              Establecidos en Neuquén, en **Aluvallé** nos dedicamos al asesoramiento, desarrollo e integración de sistemas de carpintería de aluminio. Creemos que la envolvente de un edificio es crucial para su confort térmico, acústico y estético.
            </p>
            <p>
              Nuestra alianza estratégica con **Alcemar S.A.** e **Aluar S.A.** (las extrusoras líderes del país) nos permite disponer de matrices homologadas y tecnología de punta en Ruptura de Puente Térmico (RPT), brindando soluciones definitivas tanto para obras residenciales como comerciales de gran envergadura.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="aspect-[9/16] lg:aspect-[4/5] w-full max-w-md mx-auto bg-surface-container/20 backdrop-blur-xl border border-primary/40 flex flex-col items-center justify-center rounded-[2.5rem] shadow-[0_0_40px_rgba(51,106,25,0.15)] hover:shadow-[0_0_60px_rgba(51,106,25,0.3)] hover:border-primary/80 relative overflow-hidden group transition-all duration-500 p-1.5"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-black">
              <video
                key={currentVideo}
                src={videos[currentVideo]}
                autoPlay
                muted={isMuted}
                playsInline
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover"
              />
              {/* Botón de control de volumen */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/10"
                aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              {/* Controles indicadores de progreso */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-10">
                {videos.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === currentVideo ? 'w-8 bg-primary shadow-[0_0_12px_rgba(51,106,25,1)]' : 'w-2 bg-white/50 backdrop-blur-md'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Core Values Section */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">
              Pilares Organizacionales
            </span>
            <h2 className="text-2xl md:text-4xl font-headline font-black text-on-surface uppercase">
              Nuestros Valores Core
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((val, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                key={val.title}
                className="bg-surface-container-low/30 backdrop-blur-lg p-8 md:p-10 border border-outline/10 hover:border-primary/30 rounded-3xl transition-all duration-300 group flex gap-6 items-start shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {val.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-on-surface font-headline font-black uppercase text-sm mb-2 group-hover:text-primary transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-on-surface-variant">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partner Band / Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container/40 backdrop-blur-xl p-12 border border-outline/10 text-center rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <h2 className="font-headline font-black text-2xl md:text-3xl text-on-surface uppercase mb-4">
            Alianza de Extrusión Certificada
          </h2>
          <p className="max-w-2xl mx-auto text-xs md:text-sm leading-relaxed text-on-surface-variant mb-8">
            Garantizamos la originalidad y trazabilidad de todos nuestros perfiles de aluminio. Cada barra cuenta con temple certificado (T6/T5) y aleación 6063.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 border-t border-outline/5 pt-8">
            <div className="flex flex-col items-center">
              <span className="font-headline font-black text-lg tracking-tighter text-on-surface/80">ALCEMAR</span>
              <span className="text-[8px] uppercase tracking-widest text-primary font-bold">Distribuidor Oficial</span>
            </div>
            <div className="w-px h-8 bg-outline/20 hidden sm:block" />
            <div className="flex flex-col items-center">
              <span className="font-headline font-black text-lg tracking-tighter text-on-surface/80">ALUAR</span>
              <span className="text-[8px] uppercase tracking-widest text-primary font-bold">Socio Técnico</span>
            </div>
          </div>
          <div className="absolute left-[-10%] top-[-20%] w-[35%] h-[140%] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
        </motion.div>

        {/* Google Business Reviews Section */}
        <section className="mt-28 mb-16">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">
              Opiniones de Clientes
            </span>
            <h2 className="text-2xl md:text-4xl font-headline font-black text-on-surface uppercase">
              Google Business
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-2xl font-black text-on-surface">5.0</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-current text-[20px] text-amber-500 [font-variation-settings:'FILL'_1]">star</span>
                ))}
              </div>
              <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider ml-1">Calificación de Excelencia</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Review 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-surface-container-low/30 backdrop-blur-lg p-8 border border-outline/10 hover:border-primary/30 rounded-3xl transition-all duration-300 group flex flex-col justify-between shadow-lg relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-on-surface font-headline font-black uppercase text-sm">
                      Daniel Alejandro Della Valentina
                    </h4>
                    <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Cliente Oficial</span>
                  </div>
                  <div className="flex text-amber-500 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined fill-current text-[16px] text-amber-500 [font-variation-settings:'FILL'_1]">star</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs leading-relaxed italic text-on-surface-variant font-medium">
                  "10 puntos! excelente los muchachos! PD: Tienen que poner a dieta al que sale a repartir!!"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 border-t border-outline/5 pt-4">
                <span className="text-[9px] uppercase tracking-wider text-on-surface-variant/40">Reseña Verificada vía Google</span>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-surface-container-low/30 backdrop-blur-lg p-8 border border-outline/10 hover:border-primary/30 rounded-3xl transition-all duration-300 group flex flex-col justify-between shadow-lg relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className="text-on-surface font-headline font-black uppercase text-sm">
                      Daniel Della Valentina
                    </h4>
                    <span className="text-[9px] uppercase tracking-widest text-primary font-bold">Cliente Oficial</span>
                  </div>
                  <div className="flex text-amber-500 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined fill-current text-[16px] text-amber-500 [font-variation-settings:'FILL'_1]">star</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs leading-relaxed italic text-on-surface-variant font-medium">
                  "Un placer fue trabajar con ustedes! Excelente atención!"
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 border-t border-outline/5 pt-4">
                <span className="text-[9px] uppercase tracking-wider text-on-surface-variant/40">Reseña Verificada vía Google</span>
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <a
              href="https://share.google/KvPIdr3HGfGvdGYBs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase text-on-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-[16px] block">reviews</span>
              Ver todas las opiniones en Google
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

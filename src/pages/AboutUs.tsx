import { motion } from 'motion/react';

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
            className="aspect-video lg:aspect-square bg-surface-container/20 backdrop-blur-xl border border-outline/10 flex flex-col items-center justify-center p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <span className="material-symbols-outlined text-7xl md:text-9xl text-primary animate-pulse mb-4">
              architecture
            </span>
            <span className="font-headline font-black text-xs uppercase tracking-widest text-on-surface">
              Sistemas de Alta Gama
            </span>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">
              Homologados Alcemar S.A.
            </span>
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
      </div>
    </div>
  );
}

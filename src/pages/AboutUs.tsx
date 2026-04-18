import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0b0e12] text-[#94979e] font-body">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-[#e1e2e8] mb-6 uppercase tracking-tighter">
            Sobre Nosotros
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-[#a0d87a] font-bold">
            Ingeniería en Aluminio
          </p>
        </motion.div>

        <section className="space-y-16 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">
                Nuestra Historia
              </h2>
              <p className="mb-4">
                Aluvallé nace de la pasión por la arquitectura moderna y la ingeniería de precisión.
                Nuestra misión es proporcionar soluciones innovadoras de carpintería de aluminio que
                eleven el estándar de diseño y funcionalidad en cada proyecto.
              </p>
              <p>
                Somos una asociación estratégica oficial de **Alcemar S.A.**, permitiéndonos ofrecer
                la gama más completa de sistemas de carpintería de alta gama en Argentina.
              </p>
            </div>
            <div className="aspect-square bg-[#191c20] border border-[#323539] flex items-center justify-center p-8 rounded-[2rem]">
              <span className="material-symbols-outlined text-8xl text-[#a0d87a]">
                architecture
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-8 uppercase text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-[#191c20]/40 p-10 border border-[#323539]/20 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-[#a0d87a] text-4xl mb-4">
                  diamond
                </span>
                <h3 className="text-[#e1e2e8] font-bold mb-2">Excelencia</h3>
                <p className="text-xs">
                  Comprometidos con la más alta calidad en cada detalle técnico.
                </p>
              </div>
              <div className="bg-[#191c20]/40 p-10 border border-[#323539]/20 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-[#a0d87a] text-4xl mb-4">bolt</span>
                <h3 className="text-[#e1e2e8] font-bold mb-2">Innovación</h3>
                <p className="text-xs">
                  Búsqueda constante de las últimas tecnologías en RPT y fachadas.
                </p>
              </div>
              <div className="bg-[#191c20]/40 p-10 border border-[#323539]/20 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-[#a0d87a] text-4xl mb-4">eco</span>
                <h3 className="text-[#e1e2e8] font-bold mb-2">Sostenibilidad</h3>
                <p className="text-xs">
                  Fomentamos el uso de materiales 100% reciclables y eficiencia energética.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111417] p-12 border border-[#323539]/30 text-center">
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase inline-block border-b-2 border-[#a0d87a] pb-2">
              Nuestra Alianza
            </h2>
            <p className="max-w-2xl mx-auto mt-6 text-lg">
              Trabajamos estrechamente con Alcemar para asegurar que cada perfilado cumpla con los
              estándares internacionales más exigentes, garantizando durabilidad y confort para el
              usuario final.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

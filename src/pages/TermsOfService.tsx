import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0b0e12] text-[#94979e] font-body">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-[#e1e2e8] mb-6 uppercase tracking-tighter">
            Términos del Servicio
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-[#a0d87a] font-bold">
            Última actualización: Abril 2026
          </p>
        </motion.div>

        <section className="space-y-12 leading-relaxed">
          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">
              1. Términos Generales
            </h2>
            <p>
              Al acceder y utilizar este sitio web aluvalle.vercel.app, usted acepta cumplir con
              estos términos y condiciones. Si no está de acuerdo con alguno de estos términos, por
              favor no utilice este sitio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">
              2. Propiedad Intelectual
            </h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, iconos,
              imágenes, clips de audio y software, es propiedad de Alcemar S.A. o de sus
              licenciantes y está protegido por las leyes de derechos de autor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">
              3. Uso del Contenido
            </h2>
            <p>
              Usted puede visualizar, descargar e imprimir el contenido de este sitio web únicamente
              para su uso personal y no comercial. Cualquier otro uso está estrictamente prohibido
              sin el consentimiento previo por escrito de Alcemar S.A.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">
              4. Exención de Responsabilidad
            </h2>
            <p>
              La información técnica y catálogos en este sitio web se proporcionan "tal cual".
              Aluvallé y Alcemar S.A. no garantizan la precisión absoluta de los datos. Se
              recomienda verificar cualquier dato técnico directamente con un asesor oficial antes
              de su implementación en obra.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">
              5. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso
              continuado del sitio web después de dichos cambios constituye la aceptación de los
              nuevos términos.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}



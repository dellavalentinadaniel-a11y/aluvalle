import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0b0e12] text-[#94979e] font-body">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-[#e1e2e8] mb-6 uppercase tracking-tighter">Política de Privacidad y Cookies</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-[#a0d87a] font-bold">Última actualización: Abril 2026</p>
        </motion.div>

        <section className="space-y-12 leading-relaxed">
          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">1. Introducción</h2>
            <p>En Aluvallé, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política describe cómo recopilamos, utilizamos y protegemos su información personal cuando utiliza nuestro sitio web aluvalle.vercel.app.</p>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">2. Información que Recopilamos</h2>
            <p>Recopilamos información que usted nos proporciona directamente a través de nuestros formularios de contacto, incluyendo su nombre, dirección de correo electrónico y número de teléfono. También recopilamos datos técnicos automáticamente, como su dirección IP y datos de navegación a través de cookies.</p>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">3. Uso de Cookies</h2>
            <p>Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Usted puede configurar su navegador para rechazar todas las cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Cookies Técnicas: Necesarias para el funcionamiento del sitio.</li>
              <li>Cookies de Análisis: Para entender cómo los usuarios interactúan con la web.</li>
              <li>Cookies de Preferencias: Para recordar sus ajustes de visualización.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">4. Protección de Datos</h2>
            <p>Limitamos el acceso a su información personal a aquellos empleados y contratistas que tienen una necesidad comercial de conocerla. Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado.</p>
          </div>

          <div>
            <h2 className="text-2xl font-headline font-bold text-[#e1e2e8] mb-4 uppercase">5. Sus Derechos</h2>
            <p>Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, por favor contáctenos a través de nuestra sección de contacto o al correo electrónico oficial de Alcemar S.A.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

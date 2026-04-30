import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench, Wind, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function GammaMachining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      title: 'Cortadora Ingletadora Angular 550mm',
      description:
        'Ingletadora manual con ángulo regulable y hoja de 550mm. Incluye base de madera y sistema de ángulos de fácil regulación para cortes precisos a 45°.',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_778616-MLA92441326748_092025-O.webp',
      buyLink: 'https://meli.la/2q5bF9j',
    },
    {
      title: 'Sierra Circular 1100W Corte 45° DCK',
      description:
        'Sierra circular profesional de 1100W con motor de 5600 RPM. Ofrece una capacidad de corte de 66mm y bisel ajustable de 0° a 45° para perfiles.',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_918524-MLA99147645672_112025-O.webp',
      buyLink: 'https://meli.la/32HYwA1',
    },
    {
      title: 'Sierra Circular de Mesa Lusqtoff 2000W',
      description:
        'Sierra de mesa industrial con motor robusto de 2000W y disco de 315mm. Ideal para cortes limpios y escuadrados en grandes volúmenes.',
      imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_916608-MLA108654325809_032026-O.webp',
      buyLink: 'https://meli.la/1qyAXcE',
    },
    {
      title: 'Sopladora de Limpieza',
      description:
        'Limpieza de virutas de aluminio en el canal de las felpas G-72 antes del armado. Fundamental para garantizar el deslizamiento correcto de las hojas.',
      icon: Wind,
      buyLink: 'https://listado.mercadolibre.com.ar/sopladora',
    },
  ];

  const operations = [
    {
      title: 'Corte de Marco Perimetral (G-10 / G-11)',
      desc: 'El marco G-10 (2 guías, 62mm) y G-11 (3 guías, 93mm) se cortan a 90° para cabezal y zócalo, y a 45° en los parantes laterales.',
      details:
        'Ancho = A (ancho de vano), Alto = H (alto de vano). Marco G-10: 2 piezas de A y 2 de H. Marco G-11: igual con 3 guías internas. Tolerancia de corte: ±0.5mm. Verifique escuadra con mínimo de 2 puntos de referencia.',
      specs: 'G-10: 0,85 kg/m | G-11: 1,25 kg/m | Sección: 62×32mm / 93×32mm',
    },
    {
      title: 'Corte y Armado de Hoja (G-20 / G-21)',
      desc: 'Las hojas corredizas G-20 (estándar) y G-21 (reforzada para DVH) se arman con corte a 45° en todos sus encuentros.',
      details:
        'Hoja G-20: A/2 − 23mm (ancho) × H − 39mm (alto). Hoja G-21: mismas fórmulas con mayor sección para DVH 24mm. Atornillar con Parker 4×16mm T-15. La hoja debe deslizarse sin fricción dentro del marco G-10.',
      specs: 'G-20: 0,95 kg/m – Vidrio simple 4mm y DVH 20mm | G-21: 1,15 kg/m – DVH 24mm',
    },
    {
      title: 'Instalación de Rodamientos en Hoja',
      desc: 'Calado en la base de las hojas G-20/G-21 para insertar los rodillos deslizantes en la guía inferior del marco G-10.',
      details:
        'Calado: 20mm de profundidad × 10mm de ancho. Inserte el rodillo con presión uniforme asegurando que el pivote de ajuste quede hacia afuera. Verifique el giro libre con presión manual antes del armado final. Aplique una gota de aceite mineral liviano en los ejes del rodillo.',
      specs: 'Capacidad: hasta 80 kg/hoja | Material rodillo: nylon reforzado con acero',
    },
    {
      title: 'Traslapo Central de Encuentro (G-30)',
      desc: 'El traslapo G-30 conecta las dos hojas en el centro. Incorpora canal doble para las felpas G-72 de hermeticidad.',
      details:
        'Corte a 90° exacto. Instale las felpas G-72 antes de montar el traslapo en la hoja. Ajuste sin comprimir excesivamente la felpa para permitir deslizamiento suave. Fijación: 4 tornillos ocultos en la cara interna de la hoja.',
      specs: 'G-30: 0,75 kg/m | Canal felpa: 7×6mm | Felpas G-72: 2 unidades de H+50mm',
    },
    {
      title: 'Desagüe en Zócalo-Cabezal (G-40)',
      desc: 'Calado de ranura de desagüe en el zócalo inferior G-40 para evacuación del agua de condensación y lluvia.',
      details:
        'Ranura: 8mm de ancho × 5mm de profundidad en el extremo exterior del canal inferior. Realizar de afuera hacia adentro. Cantidad: 2 ranuras por ventana a 1/4 del ancho. Sellar extremos cortados con silicona neutra.',
      specs: 'G-40: 0,88 kg/m | Canal de desagüe: 62mm ancho | Sellador: silicona neutra',
    },
    {
      title: 'Contravidrio y Junquillo (G-71)',
      desc: 'Retención del vidrio en la hoja mediante el junquillo G-71 que se inserta por presión sin tornillos visibles.',
      details:
        'Cortar G-71 a 45° en los 4 encuentros de la hoja. Insertar vidrio con calzas de nivelación a 1/3 del ancho desde cada lateral. Presionar el junquillo desde un extremo con mazo de goma a lo largo. Para DVH, verificar que la hoja sea G-21.',
      specs: 'G-71: 0,25 kg/m | Vidrio máx. simple: 6mm | DVH máx.: 24mm',
    },
    {
      title: 'Mosquitero Integrado (G-60 / G-61)',
      desc: 'El marco mosquitero G-60 se desliza en la tercera guía del marco G-11. La hoja G-61 es independiente y liviana.',
      details:
        'Compatible únicamente con marco G-11 de 3 guías. Corte marco G-60 igual que el marco principal. Tela de fibra de vidrio 1.2×1.2mm. Instale la tela antes de cerrar el marco con ángulos plásticos. El mosquitero se retira hacia afuera sin herramientas.',
      specs: 'G-60: 0,70 kg/m – Marco | G-61: 0,55 kg/m – Hoja | Requiere marco G-11',
    },
  ];

  const consumables = [
    { label: 'Tornillos Parker 4×16mm T-15', qty: '16 unidades' },
    { label: 'Felpa G-72 (Hermeticidad)', qty: '2×H + 2×A' },
    { label: 'Contravidrio G-71', qty: '2×A + 2×H por hoja' },
    { label: 'Silicona neutra', qty: '1 cartucho' },
    { label: 'Calzas de vidrio 5mm', qty: '4 por hoja' },
    { label: 'Aceite mineral para rodillos', qty: 'gotas' },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative">
      {/* Background */}
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
        {/* Back nav */}
        <Link
          to="/productos/linea-gamma"
          className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-[10px] font-bold mb-12 hover:brightness-125 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea Gamma
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
              Guía interactiva de mecanizado
            </p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface uppercase leading-none tracking-tighter mb-4">
              Mecanizados
              <br />
              <span className="text-primary">Gamma</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg">
              Sistema corredizo liviano con armado a 45°. Marco 62mm, vidrio simple y DVH hasta 24mm.
              Máxima superficie vidriada con estética minimalista.
            </p>
          </div>
          <a
            href="/docs/Línea Gamma/Catalogo_Linea_Gamma.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-primary text-on-primary px-8 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all shadow-2xl flex-shrink-0"
          >
            <Download className="w-4 h-4" />
            Descargar Catálogo Gamma
          </a>
        </div>

        {/* Specs strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Ancho de Marco', value: '62 mm' },
            { label: 'Sistema', value: 'Corredizo 2–3 guías' },
            { label: 'Vidrio Máximo', value: 'DVH 24 mm' },
            { label: 'Material', value: 'Aluminio 6063 T5' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-surface-variant/5 border border-outline/10 p-6 text-center backdrop-blur-sm"
            >
              <p className="text-primary font-black text-2xl mb-1">{s.value}</p>
              <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {tools.map((t, i) => (
            <div
              key={i}
              className="bg-surface-variant/5 border border-outline/10 p-6 group hover:border-primary/50 transition-all backdrop-blur-sm flex flex-col"
            >
              {t.imageUrl ? (
                <div className="w-full h-40 bg-white rounded-lg mb-5 overflow-hidden flex items-center justify-center p-2 shadow-inner border border-outline/5">
                  <img src={t.imageUrl} alt={t.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" />
                </div>
              ) : (
                t.icon && <t.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              )}
              <h3 className="text-on-surface font-bold uppercase text-sm mb-2 tracking-wide leading-snug">
                {t.title}
              </h3>
              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 flex-grow">{t.description}</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Operations */}
          <div>
            <h2 className="font-label text-on-surface uppercase tracking-widest text-xs mb-10 flex items-center gap-4">
              <Scissors className="w-5 h-5 text-primary" />
              Operaciones de Armado
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
                      <p className="text-primary font-bold uppercase tracking-wider mb-1">
                        Especificaciones:
                      </p>
                      <p className="text-on-surface-variant">{op.specs}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Panel */}
          <div>
            <div className="bg-surface-variant/5 border border-outline/10 p-10 sticky top-40 backdrop-blur-sm">
              <h2 className="font-headline text-3xl font-bold text-on-surface uppercase mb-8">
                Requisitos Técnicos
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Herramientas Requeridas
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Sierra ingletadora con escuadra 45°/90°. Calibrador digital ±0.1mm. Destornillador
                      T-15. Mazo de goma para junquillos. Sopladora de limpieza. Pistola de silicona.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0">
                    <Ruler className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Espacio de Armado
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Banco de armado mínimo 2×1.5m, plano y nivelado. Estaciones: corte a 45°, perforación
                      y ensamble. Buena iluminación para verificar escuadra.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl flex-shrink-0">
                    <Info className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Tolerancias Críticas
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Escuadra 45°: ±0.5°. Longitud de corte: ±0.5mm. Calado de rodillos: 20mm ±0.2mm.
                      Ranura de desagüe: 8mm ±1mm. Verificar vidrio vs. hoja seleccionada (G-20 o G-21).
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-outline/10 mb-10">
                <h3 className="text-on-surface font-bold uppercase text-sm mb-6 tracking-wider">
                  Consumibles por Ventana
                </h3>
                <div className="space-y-3 text-sm">
                  {consumables.map((c) => (
                    <div key={c.label} className="flex justify-between text-on-surface-variant">
                      <span>{c.label}</span>
                      <span className="font-bold text-on-surface">{c.qty}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-outline/10">
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 uppercase tracking-widest font-bold">
                  Soporte Técnico Aluvallé
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-surface-variant/20 hover:bg-primary hover:text-on-primary text-on-surface font-bold py-4 uppercase text-[10px] tracking-[0.2em] transition-all block text-center"
                >
                  Consultar Asistencia Técnica
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

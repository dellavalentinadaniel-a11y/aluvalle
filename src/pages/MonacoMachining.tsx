import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function MonacoMachining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      title: 'Punzonadora Mónaco',
      description:
        'Realiza todos los calados necesarios para la línea (desagües, cierres, encuadres).',
      icon: Wrench,
    },
    {
      title: 'Fresadora Frontal',
      description: 'Para el mecanizado de los travesaños y encuentros de marco.',
      icon: Settings,
    },
    {
      title: 'Matríz Neumática',
      description: 'Accionamiento por pedal para alta producción en serie.',
      icon: Wrench,
    },
  ];

  const operations = [
    {
      title: 'Cortes a 45° y 90°',
      desc: 'Marcos y hojas con corte a 45°. Travesaños y complementos con corte a 90°.',
      details:
        'Utilice siempre discos de tungsteno con refrigeración para asegurar cortes limpios.',
    },
    {
      title: 'Desagües de Marco',
      desc: 'Mecanizado en la cámara exterior del marco para evacuación de agua.',
      details: 'Dimensiones sugeridas: 25mm x 5mm, con una separación máxima de 600mm.',
    },
    {
      title: 'Cierre Multipunto',
      desc: 'Calado para la caja del mecanismo y puntos de cierre en el marco.',
      details: 'Requiere fresado específico según la marca del herraje (Giesse, Fapim, Roto).',
    },
    {
      title: 'Mecanizado de Felpas',
      desc: 'Corte y fijación de felpas de polipropileno para hermeticidad.',
      details: 'Asegure el solape correcto en los encuentros de hoja y marco.',
    },
  ];

  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/gallery/profiles.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.03] grayscale animate-slow-zoom"
          alt=""
        />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Navigation */}
        <Link
          to="/productos/linea-monaco"
          className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-[10px] font-bold mb-12 hover:brightness-125 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea Mónaco
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface uppercase leading-none tracking-tighter mb-4">
              Mecanizados
              <br />
              <span className="text-primary">Mónaco</span>
            </h1>
            <p className="text-on-surface-variant max-w-xl text-lg">
              Guía técnica para el armado de la Línea Mónaco. Optimización de procesos y herramental
              necesario para centros de producción.
            </p>
          </div>
          <a
            href="https://alcemar.com.ar/of_tecnica/Mecanizados_Linea_Monaco.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-primary text-on-primary px-8 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition-all shadow-2xl"
          >
            <Download className="w-4 h-4" />
            Descargar Manual PDF
          </a>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tools.map((t, i) => (
            <div
              key={i}
              className="bg-surface-variant/5 border border-outline/10 p-10 group hover:border-primary/50 transition-all backdrop-blur-sm"
            >
              <t.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-on-surface font-bold uppercase text-lg mb-3 tracking-wide">
                {t.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
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
                Requisitos de Planta
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Ruler className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Espacio Recomendado
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Área mínima de 40m² para manipulación de perfiles de hasta 6 metros de largo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-on-surface font-bold uppercase text-sm mb-1 tracking-wider">
                      Planillas de Corte
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      Disponibles en formato XLS para software de optimización (Cortamás, Softal,
                      etc).
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-outline/10">
                <p className="text-xs text-on-surface-variant leading-relaxed mb-6 uppercase tracking-widest font-bold">
                  Consulte por Capacitación
                </p>
                <button className="w-full bg-surface-variant/20 hover:bg-primary hover:text-on-primary text-on-surface font-bold py-4 uppercase text-[10px] tracking-[0.2em] transition-all">
                  Solicitar Instructor en Taller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

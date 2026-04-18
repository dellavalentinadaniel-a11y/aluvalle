import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function GammaMachining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      title: 'Punzonadora Gamma',
      description: 'Realiza calados de desagües, cierres y encuentros de hoja.',
      icon: Wrench,
    },
    {
      title: 'Fresadora Frontal',
      description: 'Para el mecanizado de travesaños y encuentros de marco.',
      icon: Settings,
    },
    {
      title: 'Copiadora',
      description: 'Fresados de cajas de cerradura y picaportes.',
      icon: Settings,
    },
  ];

  const operations = [
    {
      title: 'Cortes a 45°',
      desc: 'Toda la serie Gamma requiere cortes a 45° tanto en marcos como en hojas.',
      details:
        'Utilice siempre discos de tungsteno con refrigeración para asegurar cortes limpios.',
    },
    {
      title: 'Desagües de Marco',
      desc: 'Mecanizado en la cámara exterior del marco para evacuación de agua.',
      details: 'Dimensiones sugeridas: 25mm x 5mm, con una separación máxima de 600mm.',
    },
    {
      title: 'Mecanizado de Cerraduras',
      desc: 'Calado para la caja del mecanismo en puertas de abrir Gamma.',
      details: 'Requiere fresado específico según la marca del herraje (Giesse, Fapim, Roto).',
    },
  ];

  return (
    <div className="bg-[#0b0e12] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          to="/productos/linea-gamma"
          className="inline-flex items-center gap-2 text-[#a0d87a] uppercase tracking-widest text-[10px] font-bold mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea Gamma
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-[#e1e2e8] uppercase leading-none tracking-tighter mb-4">
              Mecanizados
              <br />
              <span className="text-[#a0d87a]">Gamma</span>
            </h1>
            <p className="text-[#94979e] max-w-xl text-lg">
              Guía técnica oficial de Aluvalle para el armado de la nueva Línea Gamma (Ventanas y
              Puertas).
            </p>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#a0d87a] text-[#0b0e12] px-8 py-5 font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-2xl"
          >
            <Download className="w-4 h-4" />
            Descargar Manual PDF
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tools.map((t, i) => (
            <div
              key={i}
              className="bg-[#111417] border border-[#323539]/30 p-10 group hover:border-[#a0d87a]/50 transition-all"
            >
              <t.icon className="w-12 h-12 text-[#a0d87a] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-[#e1e2e8] font-bold uppercase text-lg mb-3 tracking-wide">
                {t.title}
              </h3>
              <p className="text-[#94979e] text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-label text-white uppercase tracking-widest text-xs mb-10 flex items-center gap-4">
              <Scissors className="w-5 h-5 text-[#a0d87a]" />
              Operaciones Principales
            </h2>
            <div className="space-y-12">
              {operations.map((op, i) => (
                <div
                  key={i}
                  className="relative pl-12 border-l border-[#323539]/30 hover:border-[#a0d87a]/50 transition-colors py-2"
                >
                  <div className="absolute left-[-5px] top-6 w-[9px] h-[9px] bg-[#a0d87a] rounded-full shadow-[0_0_10px_rgba(160,216,122,0.5)]" />
                  <h4 className="text-[#e1e2e8] font-bold uppercase mb-2 tracking-tight">
                    {op.title}
                  </h4>
                  <p className="text-[#94979e] text-sm mb-4 leading-relaxed">{op.desc}</p>
                  <div className="bg-[#191c20] p-4 flex items-start gap-3 border border-[#323539]/20">
                    <Info className="w-4 h-4 text-[#a0d87a] mt-0.5 flex-shrink-0" />
                    <p className="text-[#94979e] text-[11px] leading-relaxed italic">
                      {op.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-[#111417] border border-[#323539]/30 p-12 sticky top-40">
              <h2 className="font-headline text-3xl font-bold text-white uppercase mb-8">
                Requisitos Técnicos
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-[#191c20] p-4 rounded-xl">
                    <Ruler className="w-6 h-6 text-[#a0d87a]" />
                  </div>
                  <div>
                    <h4 className="text-[#e1e2e8] font-bold uppercase text-sm mb-1 tracking-wider">
                      Espacio Recomendado
                    </h4>
                    <p className="text-[#94979e] text-sm leading-relaxed">
                      Mínimo 30m² para manipulación de perfiles de la serie Gamma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Settings, Scissors, Info, Download, ArrowLeft, Ruler, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Plantilla Maestra para Páginas de Mecanizado de Aluvalle
 * Colores: Bg #0b0e12, Accent #a0d87a, Text #e1e2e8
 */
export default function [SERIE]Machining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    { title: 'Punzonadora [SERIE]', description: 'Herramental específico para la línea.', icon: Wrench },
    { title: 'Fresadora Frontal', description: 'Para mecanizado de travesaños.', icon: Settings },
    { title: 'Matríz Neumática', description: 'Alta producción.', icon: Wrench },
  ];

  const operations = [
    { 
      title: 'Cortes Técnicos', 
      desc: 'Detalles de los ángulos de corte.',
      details: 'Refrigerar siempre el disco.'
    }
  ];

  return (
    <div className="bg-[#0b0e12] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/productos/linea-[SLUG]" 
          className="inline-flex items-center gap-2 text-[#a0d87a] uppercase tracking-widest text-[10px] font-bold mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Línea [SERIE]
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-[#e1e2e8] uppercase leading-none tracking-tighter mb-4">
              Mecanizados<br/>
              <span className="text-[#a0d87a]">[SERIE]</span>
            </h1>
            <p className="text-[#94979e] max-w-xl text-lg">
              Guía técnica oficial de Aluvalle para el armado de la línea [SERIE].
            </p>
          </div>
          <a 
            href="https://alcemar.com.ar/manuales/Mecanizados_[SERIE].pdf" 
            target="_blank" 
            className="flex items-center gap-4 bg-[#a0d87a] text-[#0b0e12] px-8 py-5 font-bold uppercase text-xs tracking-[0.2em]"
          >
            <Download className="w-4 h-4" />
            Manual PDF
          </a>
        </div>
        {/* Resto de la estructura similar a MonacoMachining */}
      </div>
    </div>
  );
}

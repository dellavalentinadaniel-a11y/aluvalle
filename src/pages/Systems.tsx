import { Link } from 'react-router-dom';

const productLines = [
  { name: 'Línea Tradicional', slug: 'linea-tradicional', category: 'Sistemas Básicos', desc: 'Sistema de carpintería tradicional con excelente relación costo-beneficio.', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Mediterránea', slug: 'linea-mediterranea', category: 'Sistemas Premium', desc: 'La máxima expresión del diseño en aluminio para residencias de lujo.', img: 'https://images.unsplash.com/photo-1600566753376-12c8be740e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Gamma', slug: 'linea-gamma', category: 'Sistemas Ligeros', desc: 'Diseño contemporáneo y perfiles esbeltos para aplicaciones residenciales.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Delta', slug: 'linea-delta', category: 'Deslizamiento Suave', desc: 'Máxima apertura y fluidez visual con diseño estructural resistente.', img: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Mónaco', slug: 'linea-monaco', category: 'Alta Gama', desc: 'Sistema avanzado de estanqueidad y cierre para grandes dimensiones.', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Atlántica', slug: 'linea-atlantica', category: 'Robustez Extra', desc: 'Especialmente diseñada para frentes marítimos y presiones extremas de viento.', img: 'https://images.unsplash.com/photo-1600585154526-990dced4e569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Niza', slug: 'linea-niza', category: 'Estilo Europeo', desc: 'Detalles europeos y precisión milimétrica en cada encuentro.', img: 'https://images.unsplash.com/photo-1600607686027-6f8c622c81da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Mónaco RPT', slug: 'linea-monaco-rpt', category: 'Ruptura Puente Térmico', desc: 'Eficiencia energética superior manteniendo la estética de la Línea Mónaco.', img: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Línea Mediterránea RPT', slug: 'linea-mediterranea-rpt', category: 'Ruptura Puente Térmico', desc: 'El tope de gama en rendimiento acústico, térmico y sofisticación de diseño.', img: 'https://images.unsplash.com/photo-1600607686151-54b9f29d4d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

export default function Systems() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 pt-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="font-label text-[#a0d87a] uppercase tracking-[0.2em] text-xs mb-4 block">Catálogo de Productos</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-[#e1e2e8] leading-none uppercase">
              Sistemas de <br/>
              <span className="text-[#94979e]">Ventanas y Puertas</span>
            </h1>
          </div>
          <div className="hidden md:block pb-2">
            <p className="font-body text-[#94979e] max-w-xs text-sm leading-relaxed border-l border-[#323539]/50 pl-6">
              Descubra nuestra línea completa de soluciones en carpintería de aluminio. Ingeniería de precisión diseñada para todo tipo de proyectos.
            </p>
          </div>
        </div>

        {/* Filter / Categorization (Simplified logic for visual presence) */}
        <div className="flex flex-wrap gap-4 mb-20 border-b border-[#323539]/20 pb-4">
          <button className="px-5 py-2 bg-[#191c20] text-[#a0d87a] border border-[#a0d87a]/30 rounded-full text-xs font-bold uppercase tracking-wider">Ver Todos</button>
          <button className="px-5 py-2 bg-[#111417] border border-[#323539]/30 text-[#94979e] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#191c20] hover:text-[#e1e2e8] transition-colors">Correderas</button>
          <button className="px-5 py-2 bg-[#111417] border border-[#323539]/30 text-[#94979e] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#191c20] hover:text-[#e1e2e8] transition-colors">Batientes</button>
          <button className="px-5 py-2 bg-[#111417] border border-[#323539]/30 text-[#94979e] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#191c20] hover:text-[#e1e2e8] transition-colors">Con RPT</button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productLines.map((product) => (
            <div key={product.name} className="group flex flex-col bg-[#111417] border border-[#323539]/20 shadow-lg hover:border-[#a0d87a]/50 transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#191c20]">
                <img 
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  {product.name.includes('RPT') && (
                    <span className="bg-[#a0d87a]/90 text-[#0b0e12] px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                      Aislante Térmico
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/60 backdrop-blur-md text-[#e1e2e8] px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-[#323539]/50">
                    + Info
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-label text-[#a0d87a] text-[10px] uppercase tracking-widest mb-2 block">{product.category}</span>
                <h3 className="font-headline text-2xl font-bold text-[#e1e2e8] uppercase mb-4 tracking-tight">{product.name}</h3>
                <p className="font-body text-[#94979e] text-sm mb-8 flex-grow leading-relaxed">
                  {product.desc}
                </p>
                
                <div className="pt-6 border-t border-[#323539]/20 flex justify-between items-center">
                  <Link 
                    to={`/productos/${product.slug}`}
                    className="flex items-center gap-2 text-[#a0d87a] font-bold text-xs uppercase tracking-[0.2em] group/btn hover:text-white transition-colors"
                  >
                    Ver Detalles
                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <span className="material-symbols-outlined text-[#323539] group-hover:text-[#a0d87a] transition-colors">
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
        <div className="bg-[#191c20] border border-[#323539]/20 p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-headline text-4xl font-bold text-[#e1e2e8] uppercase mb-6 leading-tight">Múltiples opciones<br/>Calidad Garantizada</h2>
            <p className="font-body text-[#94979e] mb-10 text-sm leading-relaxed">
              Consulta especificaciones de armado, catálogos en PDF y perfiles CAD de todos nuestros sistemas.
            </p>
            <button className="bg-[#a0d87a] text-[#0b0e12] font-bold px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-colors">
              Descargar Listado en PDF
              <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>
          {/* Abstract Design Element */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none hidden md:block">
            <div className="w-full h-full border-l-[100px] border-t-[100px] border-[#a0d87a] rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';

const catalogImages = [
  { id: 1, url: '/assets/catalog/tradicional/page_7_top_1776516071744.png', title: 'Página 7 - Superior', description: 'Ventana y Puerta Corrediza Liviana' },
  { id: 2, url: '/assets/catalog/tradicional/page_7_bottom_8_top_1776516073045.png', title: 'Página 7-8', description: 'Esquemas de perfiles 101-105' },
  { id: 3, url: '/assets/catalog/tradicional/page_8_1776516080054.png', title: 'Página 8', description: 'Marcos y hojas corredizas' },
  { id: 4, url: '/assets/catalog/tradicional/page_9_1776516089997.png', title: 'Página 9', description: 'Ventana de Abrir y Paño Fijo' },
  { id: 5, url: '/assets/catalog/tradicional/page_10_1776516091252.png', title: 'Página 10', description: 'Contravidrios y perfiles de terminación' },
  { id: 6, url: '/assets/catalog/tradicional/page_11_1776516097985.png', title: 'Página 11', description: 'Cámara de 20 mm - Sistemas de Abrir' },
  { id: 7, url: '/assets/catalog/tradicional/page_12_1776516099242.png', title: 'Página 12', description: 'Celosía de Abrir' },
  { id: 8, url: '/assets/catalog/tradicional/page_13_1776516105388.png', title: 'Página 13', description: 'Ventana Guillotina' },
  { id: 9, url: '/assets/catalog/tradicional/page_14_1776516106635.png', title: 'Página 14', description: 'Ventana Banderola y Ventiluz' },
  { id: 10, url: '/assets/catalog/tradicional/page_15_1776516113651.png', title: 'Página 15', description: 'Puerta de Rebatir' },
  { id: 11, url: '/assets/catalog/tradicional/page_16_1776516114910.png', title: 'Página 16', description: 'Postigos y Celosías - Marcos' },
  { id: 12, url: '/assets/catalog/tradicional/page_17_1776516129686.png', title: 'Página 17', description: 'Postigos y Celosías - Hojas' },
  { id: 13, url: '/assets/catalog/tradicional/page_18_1776516130926.png', title: 'Página 18', description: 'Tablillas y Porta Tablillas' },
  { id: 14, url: '/assets/catalog/tradicional/page_19_1776516136902.png', title: 'Página 19', description: 'Complementos de Postigo' },
  { id: 15, url: '/assets/catalog/tradicional/page_20_1776516138176.png', title: 'Página 20', description: 'Sistemas Diferenciales' },
  { id: 16, url: '/assets/catalog/tradicional/page_21_1776516145186.png', title: 'Página 21', description: 'Cortes Transversales' },
  { id: 17, url: '/assets/catalog/tradicional/page_22_1776516146428.png', title: 'Página 22', description: 'Frentes de Placard' },
  { id: 18, url: '/assets/catalog/tradicional/page_23_1776516153669.png', title: 'Página 23', description: 'Cortinas de Enrollar' },
  { id: 19, url: '/assets/catalog/tradicional/page_24_1776516154925.png', title: 'Página 24', description: 'Accesorios de Cortina' },
  { id: 20, url: '/assets/catalog/tradicional/page_25_26_1776516162059.png', title: 'Página 25-26', description: 'Tubos y Ángulos' },
  { id: 21, url: '/assets/catalog/tradicional/page_27_1776516168805.png', title: 'Página 27', description: 'Perfiles Varios de Terminación' },
  { id: 22, url: '/assets/catalog/tradicional/page_28_1776516170064.png', title: 'Página 28', description: 'Complementarios Generales' },
  { id: 23, url: '/assets/catalog/tradicional/page_29_30_1776516171333.png', title: 'Página 29-30', description: 'Esquemas de Armado - Puertas Corredizas' },
  { id: 24, url: '/assets/catalog/tradicional/page_31_41_start_1776516178277.png', title: 'Sección Técnica', description: 'Detalles de Mecanizado y Ensamblaje' },
  { id: 25, url: '/assets/catalog/tradicional/page_41_end_1776516179564.png', title: 'Página Final', description: 'Tabla de Pesos y Medidas' },
];

export default function TechnicalCatalog() {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen pt-32 pb-20 relative">
      {/* Background patterns */}
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
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <Link 
              to={`/productos/${slug}`}
              className="inline-flex items-center gap-2 text-primary hover:brightness-125 transition-all mb-6 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Volver al Producto</span>
            </Link>
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-on-surface uppercase leading-none mb-4">
              Catálogo <span className="text-primary">Técnico</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Explora las especificaciones técnicas completas, esquemas de perfiles y detalles de armado para la {slug?.replace(/-/g, ' ')}.
            </p>
          </div>

          <a 
            href="/Catalogo_Linea_Tradicional.pdf" 
            target="_blank"
            download
            className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all transform hover:scale-105 animate-in fade-in slide-in-from-right-4 duration-700 shadow-lg shadow-primary/20"
          >
            <Download className="w-5 h-5" />
            Descargar PDF Completo
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="group relative bg-surface-variant/5 border border-outline/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-on-surface">
                    <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{image.title}</p>
                    <p className="text-sm font-medium">{image.description}</p>
                  </div>
                </div>

                {/* Technical Badge */}
                <div className="absolute top-4 right-4 bg-surface-variant/80 backdrop-blur-md border border-outline/10 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="p-5 flex justify-between items-center bg-surface-variant/10 backdrop-blur-md">
                <div>
                  <h3 className="text-on-surface font-bold text-sm uppercase tracking-wide">{image.title}</h3>
                  <p className="text-on-surface-variant text-[10px] uppercase tracking-wider">{image.description}</p>
                </div>
                <div className="bg-primary/10 p-2 rounded-lg">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer Info */}
        <div className="mt-20 p-12 bg-surface-variant/5 backdrop-blur-sm rounded-3xl border border-outline/10 text-center">
            <h2 className="text-2xl font-bold text-on-surface uppercase mb-4">¿Necesitas soporte técnico adicional?</h2>
            <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">Nuestro equipo técnico está a su disposición para consultas sobre aplicaciones específicas o desarrollos a medida.</p>
            <Link 
              to="/contact"
              className="inline-block bg-primary text-on-primary px-10 py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:brightness-110 transition-colors shadow-lg shadow-primary/20"
            >
              Contactar Oficina Técnica
            </Link>
        </div>
      </div>
    </div>
  );
}



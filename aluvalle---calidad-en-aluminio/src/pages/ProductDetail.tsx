import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Download, ArrowLeft } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { gammaProfiles, traditionalProfiles } from '../data/profiles';
import ProfileTable from '../components/ProfileTable';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : null;

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-black text-alu-dark mb-4">Producto no encontrado</h1>
          <Link to="/productos" className="text-alu-green font-bold hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const getProfiles = () => {
    if (slug === 'linea-gamma') return gammaProfiles;
    if (slug === 'linea-tradicional') return traditionalProfiles;
    return [];
  };

  const profiles = getProfiles();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-alu-dark to-alu-dark/80 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-alu-green rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-alu-green rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/productos" className="inline-flex items-center gap-2 text-alu-green mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} />
            Volver al catálogo
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span className="text-alu-green font-bold uppercase tracking-widest text-sm mb-4 block">{product.category}</span>
              <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
                {product.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {product.longDescription}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-alu-dark via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications & Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Specifications */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-black text-alu-dark mb-8">Especificaciones</h3>
              <div className="space-y-4">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                    <div className="w-2 h-2 rounded-full bg-alu-green mt-2 shrink-0"></div>
                    <p className="text-alu-dark font-medium">{spec}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-3xl font-black text-alu-dark mb-8">Características</h3>
              <div className="space-y-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="border-l-4 border-alu-green pl-6">
                    <h4 className="text-lg font-bold text-alu-dark mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Catalog */}
      {profiles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProfileTable profiles={profiles} title="Catálogo de Perfiles Técnicos" />
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-black text-alu-dark mb-12 text-center">Galería de Aplicaciones</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {product.gallery.map((image, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <img src={image} alt={`Aplicación ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-alu-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-black mb-12 text-center">Documentación Técnica</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {product.downloads.map((doc, i) => (
              <motion.a key={i} href={doc.url} download initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold">{doc.title}</h4>
                  <Download size={24} className="text-alu-green group-hover:translate-y-1 transition-transform" />
                </div>
                <p className="text-gray-300 text-sm">Haz clic para descargar el documento en formato PDF</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

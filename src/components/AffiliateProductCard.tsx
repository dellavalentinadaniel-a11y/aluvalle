import React, { useState } from 'react';
import { ShoppingCart, ExternalLink, Sparkles } from 'lucide-react';
import { AffiliateProduct } from '../data/affiliateProducts';
import { motion } from 'motion/react';

interface Props {
  product: AffiliateProduct;
  className?: string;
}

export const AffiliateProductCard: React.FC<Props> = ({ product, className = "" }) => {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setImgSrc('/assets/images/tool-placeholder.png');
      setHasError(true);
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative flex flex-col bg-surface-container-lowest border border-outline/10 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 ${className}`}
    >
      {/* Mercado Libre Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div className="bg-[#FFE600] text-black px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-tighter flex items-center gap-1 shadow-sm border border-black/5">
          <Sparkles className="w-2.5 h-2.5" />
          Meli
        </div>
      </div>

      <div className="w-full h-40 md:h-48 bg-white p-6 overflow-hidden flex items-center justify-center relative">
        <motion.img 
          src={imgSrc} 
          alt={product.title} 
          onError={handleError}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-contain mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-on-surface font-bold uppercase text-xs md:text-sm mb-2 tracking-wide leading-tight line-clamp-2 min-h-[2.5rem]" title={product.title}>
            {product.title}
          </h3>
          <p className="text-on-surface-variant text-[11px] md:text-xs leading-relaxed line-clamp-2" title={product.description}>
            {product.description}
          </p>
        </div>

        {product.buyLink && (
          <a
            href={product.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-center gap-2 bg-[#FFE600] hover:bg-[#D4C000] text-black py-2.5 md:py-3 px-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-black/5 active:scale-95 group/btn shadow-sm"
          >
            <ShoppingCart className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
            Ver Oferta
            <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

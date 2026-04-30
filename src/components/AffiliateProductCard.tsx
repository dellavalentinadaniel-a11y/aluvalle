import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { AffiliateProduct } from '../data/affiliateProducts';

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
    <div className={`snap-start flex flex-col bg-surface border border-outline/10 p-4 md:p-6 group hover:border-primary/50 transition-all backdrop-blur-sm shadow-sm ${className}`}>
      <div className="w-full h-32 md:h-40 bg-white rounded-lg mb-4 md:mb-5 overflow-hidden flex items-center justify-center p-2 shadow-inner border border-outline/5">
        <img 
          src={imgSrc} 
          alt={product.title} 
          onError={handleError}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" 
        />
      </div>
      <h3 className="text-on-surface font-bold uppercase text-[11px] md:text-sm mb-1 md:mb-2 tracking-wide leading-snug line-clamp-2" title={product.title}>
        {product.title}
      </h3>
      <p className="text-on-surface-variant text-[10px] md:text-[13px] leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-2 md:line-clamp-3" title={product.description}>
        {product.description}
      </p>
      {product.buyLink && (
        <a
          href={product.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-on-primary py-2 md:py-3 px-4 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-primary/20 hover:border-primary active:scale-95 group/btn shadow-sm hover:shadow-primary/20"
        >
          <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:rotate-12 transition-transform" />
          Ver en MercadoLibre
        </a>
      )}
    </div>
  );
};

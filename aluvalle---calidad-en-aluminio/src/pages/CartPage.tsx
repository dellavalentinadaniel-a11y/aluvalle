import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    const phone = '34600000000'; // Replace with real phone number
    const cartSummary = cart
      .map(item => `- ${item.title} (x${item.quantity}): $${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');
    const total = totalPrice.toLocaleString();
    const message = encodeURIComponent(
      `Hola Aluvalle, me interesa realizar un pedido:\n\n${cartSummary}\n\n*Total estimado: $${total}*\n\n¿Podrían darme más detalles sobre el proceso de compra?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="bg-gray-50 p-12 rounded-[3rem] text-center max-w-lg border border-gray-100 shadow-xl">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingCart size={40} className="text-gray-400" />
          </div>
          <h1 className="text-3xl font-black text-alu-dark mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Parece que aún no has añadido productos a tu selección. Explora nuestro catálogo y elige las mejores soluciones en aluminio.
          </p>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 bg-alu-green text-white px-8 py-4 rounded-2xl font-black hover:bg-alu-green/90 transition-all shadow-lg shadow-alu-green/20 group"
          >
            VER PRODUCTOS
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-black text-alu-dark tracking-tight">Tu Selección</h1>
            <button
              onClick={clearCart}
              className="text-red-500 font-bold text-sm hover:underline flex items-center gap-2"
            >
              <Trash2 size={16} />
              VACIAR CARRITO
            </button>
          </div>

          <div className="space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <span className="text-xs font-bold text-alu-green uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-xl font-black text-alu-dark mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-2 line-clamp-1">{item.description}</p>
                    <span className="text-lg font-bold text-alu-dark">${item.price.toLocaleString()} / ud.</span>
                  </div>

                  <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-alu-dark hover:bg-alu-green hover:text-white transition-all shadow-sm"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="text-lg font-bold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-alu-dark hover:bg-alu-green hover:text-white transition-all shadow-sm"
                    >
                      <Plus size={18} />
                    </button>
                  </div>

                  <div className="text-right hidden sm:block">
                    <span className="text-xs text-gray-400 block uppercase tracking-wider mb-1">Subtotal</span>
                    <span className="text-xl font-black text-alu-dark">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Link to="/productos" className="inline-flex items-center gap-2 text-alu-green font-bold mt-8 hover:gap-3 transition-all">
            <ArrowLeft size={18} />
            Seguir comprando
          </Link>
        </div>

        {/* Summary Card */}
        <div className="w-full md:w-96 shrink-0">
          <div className="bg-alu-dark text-white p-8 rounded-[3rem] sticky top-32 shadow-2xl">
            <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">Resumen de Pedido</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-gray-400 uppercase tracking-widest text-xs">
                <span>Productos ({cart.length})</span>
                <span>Unidades ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
              </div>
              <div className="flex justify-between items-center text-lg font-medium">
                <span>Total Estimado</span>
                <span className="text-2xl font-black text-alu-green">${totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs mb-8 leading-relaxed">
              * El precio total es una estimación. Una vez enviado el pedido por WhatsApp, nuestro equipo técnico se pondrá en contacto para validar stock y condiciones finales.
            </p>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-alu-green hover:bg-alu-green/90 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-alu-green/30 group mb-4"
            >
              FINALIZAR POR WHATSAPP
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-tighter">
              <span className="w-1.5 h-1.5 rounded-full bg-alu-green animate-pulse"></span>
              Atención personalizada inmediata
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

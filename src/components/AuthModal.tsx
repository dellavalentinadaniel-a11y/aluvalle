import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'motion/react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onClose();
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Revisa tu bandeja de entrada para verificar tu cuenta.');
      }
    } catch (err: any) {
      setError(err.message || 'Ha ocurrido un error inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-surface w-full max-w-md rounded-3xl p-8 shadow-2xl border border-outline/10 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-on-surface mb-2">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
          <p className="text-on-surface-variant text-sm mb-6">
            {isLogin
              ? 'Ingresa tus credenciales para acceder a tu cuenta.'
              : 'Regístrate para acceder a funciones exclusivas para profesionales.'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container-low border border-outline/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-1">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-container-low border border-outline/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-bold bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                {error}
              </p>
            )}
            
            {message && (
              <p className="text-green-500 text-xs font-bold bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-on-primary font-bold uppercase tracking-widest text-xs py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? 'Cargando...' : isLogin ? 'Entrar' : 'Registrarse'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
                setMessage(null);
              }}
              className="text-primary text-sm hover:underline"
            >
              {isLogin
                ? '¿No tienes cuenta? Regístrate aquí'
                : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

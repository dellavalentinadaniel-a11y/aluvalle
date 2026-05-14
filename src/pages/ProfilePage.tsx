import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { 
  LogOut, Settings, Package, ShieldCheck, FileText, Download, 
  Clock, ChevronRight, Bookmark, Star, MapPin, Edit3, Camera, 
  Building2, Briefcase, Globe, Share2, Linkedin, Twitter, Instagram,
  Users, Sparkles, Send, CheckCircle2
} from 'lucide-react';

export default function ProfilePage() {
  const { user, signOut, loading } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados para datos personales y de empresa
  const [profileData, setProfileData] = useState({
    empresa: 'Carpintería Metálica Aluvallé',
    puesto: 'Director de Obra',
    direccionEmpresa: 'Parque Industrial Sur, Lote 45, Córdoba',
    sitioWeb: 'www.carpinteriavalle.com',
    redes: {
      linkedin: 'linkedin.com/in/aluvalle',
      instagram: '@aluvalle_carpinteria'
    },
    fotoPerfil: null as string | null
  });

  // Estado para la Red de Carpinterías
  const [showNetworkForm, setShowNetworkForm] = useState(false);
  const [presentationText, setPresentationText] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  // Datos de prueba para demostrar la interfaz
  const mockOrders = [
    { id: 'ORD-2026-089', date: '12 May 2026', total: '$1,240.00', status: 'En Producción', items: 12 },
    { id: 'ORD-2026-088', date: '05 May 2026', total: '$850.50', status: 'Enviado', items: 5 },
    { id: 'ORD-2026-085', date: '22 Abr 2026', total: '$3,100.00', status: 'Entregado', items: 24 },
  ];

  const mockInvoices = [
    { id: 'INV-2026-041', orderId: 'ORD-2026-085', date: '22 Abr 2026', amount: '$3,100.00', status: 'Pagada' },
    { id: 'INV-2026-038', orderId: 'ORD-2026-079', date: '10 Abr 2026', amount: '$420.00', status: 'Pagada' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData(prev => ({ ...prev, fotoPerfil: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    setIsPublishing(true);
    // Simulamos una carga
    setTimeout(() => {
      setIsPublishing(false);
      setIsPublished(true);
      setShowNetworkForm(false);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden pt-32 pb-20 flex flex-col items-center justify-center text-center px-6">
        <ShieldCheck className="w-20 h-20 text-primary mb-6" />
        <h2 className="text-3xl font-bold font-headline uppercase mb-4 text-on-surface">Acceso Restringido</h2>
        <p className="text-on-surface-variant mb-8 max-w-sm mx-auto">
          Debes iniciar sesión con tu cuenta profesional para poder visualizar tu perfil y gestionar tus pedidos.
        </p>
        <Link 
          to="/" 
          className="bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors shadow-xl shadow-primary/20"
        >
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-32 pb-20">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-primary/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Perfil con Foto */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-container border border-outline/10 rounded-3xl p-8 mb-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/20">
              Cuenta Profesional
            </span>
          </div>

          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-surface-container-high border-4 border-primary/20 flex items-center justify-center flex-shrink-0 shadow-inner overflow-hidden">
              {profileData.fotoPerfil ? (
                <img src={profileData.fotoPerfil} alt="Perfil" className="w-full h-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-primary text-6xl">person</span>
              )}
            </div>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
              aria-label="Cambiar foto de perfil"
              title="Cambiar foto de perfil"
            >
              <Camera className="w-5 h-5" />
            </button>
            <input 
              type="file" 
              id="profile-image-upload"
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*"
              aria-label="Subir foto de perfil"
            />
          </div>

          <div className="flex-1 text-center md:text-left w-full mt-4 md:mt-0">
            <h1 className="font-headline text-4xl font-black text-on-surface uppercase tracking-tight mb-1">
              {profileData.empresa}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
              <p className="text-on-surface-variant text-base font-medium">
                {user.email}
              </p>
              <span className="hidden md:block text-on-surface-variant/30">•</span>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">
                {profileData.puesto}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Edit3 className="w-4 h-4" />
                {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
              </button>
              <button
                onClick={() => signOut()}
                className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Izquierda */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Red de Carpinterías - Invitación Única */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-primary/10 border border-primary/20 rounded-3xl p-8 shadow-sm relative overflow-hidden group"
            >
              {/* Decoración */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <Users className="w-32 h-32 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/20 rounded-xl">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold font-headline uppercase tracking-tight text-on-surface">
                    Red de Carpinterías
                  </h2>
                </div>

                {!isPublished ? (
                  <>
                    {!showNetworkForm ? (
                      <div className="max-w-2xl">
                        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                          ¡Tu empresa puede ser parte de nuestra red oficial! Crea una presentación única de tu carpintería, muestra tus especialidades y conecta con otros profesionales y clientes finales de la región.
                        </p>
                        <button 
                          onClick={() => setShowNetworkForm(true)}
                          className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
                        >
                          Crear Presentación
                        </button>
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                            Presentación de tu Empresa / Proyecto
                          </label>
                          <textarea 
                            rows={5}
                            value={presentationText}
                            onChange={(e) => setPresentationText(e.target.value)}
                            placeholder="Describe qué hace especial a tu carpintería, tus años de experiencia, tipos de obras que realizas..."
                            className="w-full bg-surface-container-high border border-outline/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-on-surface-variant/50"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={handlePublish}
                            disabled={isPublishing || !presentationText.trim()}
                            className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 disabled:opacity-50"
                          >
                            {isPublishing ? (
                              <div className="w-4 h-4 border-2 border-on-primary/20 border-t-on-primary rounded-full animate-spin" />
                            ) : (
                              <Send className="w-4 h-4" />
                            )}
                            Publicar Presentación
                          </button>
                          <button 
                            onClick={() => setShowNetworkForm(false)}
                            className="px-6 py-3 text-on-surface-variant font-bold uppercase tracking-widest text-xs"
                          >
                            Cancelar
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-6"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-headline font-bold text-lg uppercase mb-2">¡Empresa Publicada!</h3>
                    <p className="text-on-surface-variant text-sm max-w-md">
                      Tu presentación ya es visible en la Red de Carpinterías de Aluvallé. Gracias por ser parte de nuestra comunidad profesional.
                    </p>
                    <div className="mt-6 p-6 bg-surface-container-high/50 rounded-2xl border border-outline/5 text-left w-full italic text-on-surface-variant/80 text-sm">
                      "{presentationText}"
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Información Profesional Detallada */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container border border-outline/10 rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold font-headline uppercase tracking-tight text-on-surface">
                  Información Profesional
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="empresa" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      <Building2 className="w-3 h-3" /> Empresa
                    </label>
                    <input 
                      id="empresa"
                      type="text" 
                      value={profileData.empresa} 
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, empresa: e.target.value})}
                      className="w-full bg-surface-container-high border border-outline/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-60"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="puesto" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      <Briefcase className="w-3 h-3" /> Puesto / Cargo
                    </label>
                    <input 
                      id="puesto"
                      type="text" 
                      value={profileData.puesto} 
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, puesto: e.target.value})}
                      className="w-full bg-surface-container-high border border-outline/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-60"
                      placeholder="Tu cargo"
                    />
                  </div>
                  <div>
                    <label htmlFor="direccionEmpresa" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      <MapPin className="w-3 h-3" /> Dirección de la Empresa
                    </label>
                    <input 
                      id="direccionEmpresa"
                      type="text" 
                      value={profileData.direccionEmpresa} 
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, direccionEmpresa: e.target.value})}
                      className="w-full bg-surface-container-high border border-outline/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-60"
                      placeholder="Dirección comercial"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="sitioWeb" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      <Globe className="w-3 h-3" /> Sitio Web
                    </label>
                    <input 
                      id="sitioWeb"
                      type="text" 
                      value={profileData.sitioWeb} 
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, sitioWeb: e.target.value})}
                      className="w-full bg-surface-container-high border border-outline/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-60"
                      placeholder="https://tuempresa.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      <Linkedin className="w-3 h-3" /> LinkedIn
                    </label>
                    <input 
                      id="linkedin"
                      type="text" 
                      value={profileData.redes.linkedin} 
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, redes: {...profileData.redes, linkedin: e.target.value}})}
                      className="w-full bg-surface-container-high border border-outline/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-60"
                      placeholder="URL de LinkedIn"
                    />
                  </div>
                  <div>
                    <label htmlFor="instagram" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                      <Instagram className="w-3 h-3" /> Instagram
                    </label>
                    <input 
                      id="instagram"
                      type="text" 
                      value={profileData.redes.instagram} 
                      disabled={!isEditing}
                      onChange={(e) => setProfileData({...profileData, redes: {...profileData.redes, instagram: e.target.value}})}
                      className="w-full bg-surface-container-high border border-outline/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-60"
                      placeholder="Usuario de Instagram"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pedidos Recientes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container border border-outline/10 rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold font-headline uppercase tracking-tight text-on-surface">
                    Pedidos Recientes
                  </h2>
                </div>
                <Link to="/sistemas/ventanas-y-puertas" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline hidden sm:block">
                  Nuevo Pedido
                </Link>
              </div>
              
              <div className="space-y-3">
                {mockOrders.map((order) => (
                  <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border border-outline/5 hover:border-primary/20 transition-colors group cursor-pointer">
                    <div className="flex items-center gap-4 mb-3 sm:mb-0">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                        <Package className="w-4 h-4 text-on-surface-variant" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold font-mono text-sm">{order.id}</span>
                          <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${
                            order.status === 'Entregado' ? 'bg-green-500/10 text-green-500' :
                            order.status === 'En Producción' ? 'bg-blue-500/10 text-blue-500' :
                            'bg-orange-500/10 text-orange-500'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="text-xs text-on-surface-variant mt-1 flex items-center gap-2">
                          <Clock className="w-3 h-3" /> {order.date} • {order.items} perfiles
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-outline/10 pt-3 sm:pt-0">
                      <span className="font-bold text-lg">{order.total}</span>
                      <ChevronRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columna Derecha */}
          <div className="space-y-8">
            {/* Libreta de Direcciones */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-surface-container border border-outline/10 rounded-3xl p-8 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight">
                  Direcciones de Obra
                </h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="bg-surface-container-lowest border border-outline/10 p-4 rounded-xl flex items-center justify-between group">
                  <div>
                    <h4 className="font-bold text-sm mb-1">Edificio Las Acacias</h4>
                    <p className="text-xs text-on-surface-variant">Av. San Martín 1542, CABA</p>
                  </div>
                  <button 
                    className="p-2 text-on-surface-variant group-hover:text-primary transition-colors"
                    aria-label="Editar dirección"
                    title="Editar dirección"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-surface-container-lowest border border-outline/10 p-4 rounded-xl flex items-center justify-between group">
                  <div>
                    <h4 className="font-bold text-sm mb-1">Casa Lote 14</h4>
                    <p className="text-xs text-on-surface-variant">Barrio Privado El Encuentro, Tigre</p>
                  </div>
                  <button 
                    className="p-2 text-on-surface-variant group-hover:text-primary transition-colors"
                    aria-label="Editar dirección"
                    title="Editar dirección"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button className="w-full py-3 bg-primary/5 border border-primary/20 text-primary hover:bg-primary/10 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors mt-auto">
                + Nueva Dirección
              </button>
            </motion.div>

            {/* Perfiles Favoritos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-surface-container border border-outline/10 rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight">
                  Favoritos
                </h3>
              </div>
              
              <div className="space-y-2">
                <Link to="/productos/linea-monaco" className="flex items-center justify-between p-3 bg-surface-container-lowest border border-outline/5 hover:border-primary/20 rounded-xl group transition-all">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <div>
                      <h4 className="font-bold text-xs">Perfil 108</h4>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Línea Mónaco</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
                </Link>
                <Link to="/productos/linea-niza" className="flex items-center justify-between p-3 bg-surface-container-lowest border border-outline/5 hover:border-primary/20 rounded-xl group transition-all">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <div>
                      <h4 className="font-bold text-xs">Perfil 051</h4>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Línea Niza</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
                </Link>
              </div>
            </motion.div>

            {/* Ficha de Soporte Técnico */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-primary/5 border border-primary/20 rounded-3xl p-8 shadow-sm"
            >
              <h3 className="font-headline font-bold text-primary text-lg uppercase tracking-tight mb-2">
                Soporte Profesional
              </h3>
              <p className="text-xs text-on-surface-variant mb-4">
                Línea directa con soporte técnico.
              </p>
              <Link to="/contact" className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-on-primary rounded-xl text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-primary/20">
                Contactar Ejecutivo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

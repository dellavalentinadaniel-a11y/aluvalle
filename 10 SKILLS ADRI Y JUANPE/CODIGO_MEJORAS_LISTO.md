# 💻 Código Listo para Implementar - EDV Remolques

Este documento tiene código copy-paste para implementar las mejoras urgentes.

---

## 🔧 1. HACER FUNCIONAL EL FORMULARIO

### Paso 1: Instalar dependencias

```bash
npm install react-hook-form zod @hookform/resolvers emailjs-com
```

### Paso 2: Crear archivo de configuración

**`src/config/contactConfig.ts`**
```typescript
// Opción A: EmailJS (MÁS FÁCIL - Gratuito)
export const EMAILJS_CONFIG = {
  serviceId: 'service_xxxxxxx',      // Obtén en emailjs.com
  templateId: 'template_xxxxxxx',
  publicKey: 'xxxxxxx_xxxxx'
};

// Opción B: Formspree (ALTERNATIVA)
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// Opción C: Tu backend
export const API_ENDPOINT = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/contact';
```

### Paso 3: Actualizar ContactForm.tsx

**`src/components/ContactForm.tsx`** (VERSIÓN MEJORADA)

```tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageSquare, ClipboardCheck, AlertCircle, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { CONTACT_NUMBER, WHATSAPP_LINK } from '../constants';

// Validación de datos
const contactFormSchema = z.object({
  fullName: z.string().min(3, 'Ingresa tu nombre completo'),
  phone: z.string().regex(/^\+?[0-9\s\-()]{10,}$/, 'Teléfono inválido'),
  location: z.string().min(5, 'Ubicación requerida'),
  serviceDetails: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, 'Debes aceptar los términos')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus('loading');
      setErrorMessage('');

      // Inicializar EmailJS (solo una vez)
      emailjs.init('YOUR_PUBLIC_KEY_FROM_EMAILJS');

      // Enviar email
      await emailjs.send(
        'service_YOUR_SERVICE',
        'template_YOUR_TEMPLATE',
        {
          from_name: data.fullName,
          from_phone: data.phone,
          from_location: data.location,
          service_details: data.serviceDetails,
          to_email: 'contacto@edvremolques.com',
          reply_to: data.phone,
        }
      );

      setSubmitStatus('success');
      reset();
      
      // Auto-limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('Error enviando formulario:', error);
      setSubmitStatus('error');
      setErrorMessage('Error al enviar. Intenta por WhatsApp o llama.');
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacto" className="bg-surface py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-4">
              <span className="label-md text-primary italic">Atención de Crisis</span>
              <h2 className="headline-md text-white">
                CENTRO DE <span className="text-primary italic">ASISTENCIA</span>
              </h2>
              <p className="font-body text-on-surface-variant text-xl leading-relaxed max-w-xl">
                Nuestro equipo está listo para el despliegue inmediato. <span className="text-white font-black italic">Operaciones activas 24/7.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-low p-8 rounded-2xl border border-white/5 group hover:bg-surface-high transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Phone className="text-primary h-8 w-8" />
                  <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <h4 className="font-display font-black italic uppercase text-white tracking-tighter text-lg mb-2">Central de Llamados</h4>
                <p className="font-body text-on-surface-variant text-sm mb-4">Línea directa para emergencias</p>
                <a href={`tel:${CONTACT_NUMBER.replace(/\s/g, '')}`} className="text-white font-black italic uppercase text-lg hover:text-primary transition-colors">
                  {CONTACT_NUMBER}
                </a>
                <p className="font-body text-[10px] text-on-surface-variant mt-2">Respuesta en &lt; 2 minutos</p>
              </div>

              <div className="bg-surface-low p-8 rounded-2xl border border-white/5 group hover:bg-surface-high transition-all">
                <div className="flex items-center justify-between mb-4">
                  <MessageSquare className="text-primary h-8 w-8" />
                  <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <h4 className="font-display font-black italic uppercase text-white tracking-tighter text-lg mb-2">Canal Digital</h4>
                <p className="font-body text-on-surface-variant text-sm mb-4">Chat directo con logística</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white font-black italic uppercase text-lg hover:text-primary transition-colors">
                  WHATSAPP ACTIVO
                </a>
                <p className="font-body text-[10px] text-on-surface-variant mt-2">Respuesta en &lt; 5 minutos</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-surface-high p-10 rounded-[40px] border border-white/5 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-10">
              <ClipboardCheck className="text-primary" />
              <h3 className="font-display font-black italic uppercase text-white tracking-tighter text-2xl">Formulario de Pedido</h3>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-start gap-3"
              >
                <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-black uppercase text-green-300 text-sm">✅ Solicitud Recibida</p>
                  <p className="font-body text-green-200/80 text-sm mt-1">Te contactaremos en menos de 5 minutos.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl flex items-start gap-3"
              >
                <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-black uppercase text-red-300 text-sm">Error</p>
                  <p className="font-body text-red-200/80 text-sm mt-1">{errorMessage}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nombre */}
              <div className="space-y-2">
                <label className="label-md text-on-surface-variant italic">NOMBRE COMPLETO *</label>
                <input 
                  type="text"
                  placeholder="Tu nombre y apellido..."
                  className={`w-full bg-surface-low border rounded-xl px-5 py-4 font-body text-white focus:outline-none focus:ring-1 transition-all placeholder:text-surface-highest
                    ${errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'}
                  `}
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs font-body">{errors.fullName.message}</p>
                )}
              </div>

              {/* Teléfono */}
              <div className="space-y-2">
                <label className="label-md text-on-surface-variant italic">TELÉFONO DE CONTACTO *</label>
                <input 
                  type="tel"
                  placeholder="+54 299 XXX-XXXX"
                  className={`w-full bg-surface-low border rounded-xl px-5 py-4 font-body text-white focus:outline-none focus:ring-1 transition-all placeholder:text-surface-highest
                    ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'}
                  `}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs font-body">{errors.phone.message}</p>
                )}
              </div>

              {/* Ubicación */}
              <div className="space-y-2">
                <label className="label-md text-on-surface-variant italic">UBICACIÓN DEL VEHÍCULO *</label>
                <input 
                  type="text"
                  placeholder="Calle, Ciudad o Coordenadas..."
                  className={`w-full bg-surface-low border rounded-xl px-5 py-4 font-body text-white focus:outline-none focus:ring-1 transition-all placeholder:text-surface-highest
                    ${errors.location ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-primary focus:ring-primary'}
                  `}
                  {...register('location')}
                />
                {errors.location && (
                  <p className="text-red-400 text-xs font-body">{errors.location.message}</p>
                )}
              </div>

              {/* Detalles Opcionales */}
              <div className="space-y-2">
                <label className="label-md text-on-surface-variant italic">DETALLES DEL SERVICIO (OPCIONAL)</label>
                <textarea 
                  rows={3}
                  placeholder="Modelo del vehículo, falla mecánica, carga especial..."
                  className="w-full bg-surface-low border border-white/10 rounded-xl px-5 py-4 font-body text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-surface-highest resize-none"
                  {...register('serviceDetails')}
                />
              </div>

              {/* Checkbox de términos */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox"
                  id="acceptTerms"
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-surface-low focus:ring-primary accent-primary cursor-pointer"
                  {...register('acceptTerms')}
                />
                <label htmlFor="acceptTerms" className="font-body text-[11px] text-on-surface-variant italic cursor-pointer">
                  Acepto que EDV Remolques me contacte por teléfono o WhatsApp
                  {errors.acceptTerms && (
                    <p className="text-red-400 block mt-1">{errors.acceptTerms.message}</p>
                  )}
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || submitStatus === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-on-primary py-5 rounded-2xl font-display font-black italic uppercase tracking-tighter text-lg shadow-xl tactical-glow flex items-center justify-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-on-primary border-t-transparent rounded-full" />
                    ENVIANDO...
                  </>
                ) : (
                  <>
                    ENVIAR SOLICITUD
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </motion.button>
              
              <p className="text-center font-body text-[10px] text-on-surface-variant italic uppercase tracking-widest pt-4">
                * El equipo de despacho responderá en menos de 5 minutos
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
```

---

## 🔑 2. CONFIGURAR EMAILJS (OPCIÓN MÁS FÁCIL)

### Pasos en EmailJS:

1. Ir a https://www.emailjs.com
2. Crear cuenta gratuita
3. Conectar Gmail o Outlook
4. Crear template:
```
Subject: Nueva Solicitud de Auxilio - {{from_name}}

Nombre: {{from_name}}
Teléfono: {{from_phone}}
Ubicación: {{from_location}}
Detalles: {{service_details}}
```

5. Copiar `Service ID`, `Template ID` y `Public Key`
6. Actualizar `src/config/contactConfig.ts` con esos valores

---

## 🟢 3. AGREGAR CHAT EN VIVO (CRISP.IM)

### Paso 1: Crear cuenta en https://crisp.chat

### Paso 2: Instalar librería

```bash
npm install crisp-sdk-web
```

### Paso 3: Crear componente de Chat

**`src/components/CrispChat.tsx`**

```tsx
import React, { useEffect } from 'react';

const CrispChat = () => {
  useEffect(() => {
    // Cargar Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = 'YOUR_WEBSITE_ID_FROM_CRISP';
    
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup si es necesario
    };
  }, []);

  return null; // Crisp se inyecta automáticamente
};

export default CrispChat;
```

### Paso 4: Importar en App.tsx

```tsx
import CrispChat from './components/CrispChat';

export default function App() {
  return (
    <div className="min-h-screen...">
      <CrispChat />
      {/* resto del código */}
    </div>
  );
}
```

---

## 📸 4. MEJORAR GALERÍA CON LIGHTBOX

### Instalar librería

```bash
npm install react-medium-image-zoom
```

### Actualizar Gallery.tsx

```tsx
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/lib/styles.css'

// En tu renderizado de imágenes:
<Zoom>
  <img 
    src="/ruta/imagen.jpg" 
    alt="Descripción"
    className="w-full h-64 object-cover rounded-xl"
  />
</Zoom>
```

---

## 🎯 5. INDICADOR DE DISPONIBILIDAD EN TIEMPO REAL

**`src/components/StatusBadge.tsx`**

```tsx
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const StatusBadge = () => {
  const [isActive, setIsActive] = useState(true);
  const [estimatedTime, setEstimatedTime] = useState('8-12');

  // Simular cambio de disponibilidad (reemplazar con API real)
  useEffect(() => {
    const timer = setInterval(() => {
      // Aquí iría una llamada a tu backend
      const now = new Date().getHours();
      setIsActive(now >= 0 && now < 24); // 24/7 simulado
      
      // Calcular tiempo según hora
      if (now >= 9 && now <= 17) {
        setEstimatedTime('5-8');
      } else if (now >= 18 && now <= 22) {
        setEstimatedTime('8-12');
      } else {
        setEstimatedTime('10-15');
      }
    }, 30000); // Actualizar cada 30 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 px-4 py-3 rounded-full">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-display font-black uppercase text-xs text-green-400">
          DISPONIBLES AHORA
        </span>
      </div>
      <div className="h-4 w-px bg-white/20" />
      <span className="font-body font-black text-xs text-green-300">
        Llegada en {estimatedTime} min
      </span>
    </div>
  );
};

export default StatusBadge;
```

### Usarlo en Hero.tsx

```tsx
<StatusBadge />
```

---

## 📊 6. ANALYTICS BÁSICO CON VERCEL

**Ya estás en Vercel, así que añade esto:**

```bash
npm install @vercel/analytics
```

En **`src/main.tsx`**:

```tsx
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Instalar dependencias de formulario
- [ ] Crear EmailJS account y obtener credenciales
- [ ] Actualizar ContactForm.tsx con validación
- [ ] Configurar Crisp.im para chat
- [ ] Agregar indicador de disponibilidad
- [ ] Implementar Analytics
- [ ] Probar en móvil
- [ ] Hacer deploy a Vercel

---

## 🚨 CONFIGURACIÓN RECOMENDADA PARA PRODUCCIÓN

### .env.local

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxx
VITE_CRISP_WEBSITE_ID=xxxxx
VITE_API_URL=https://api.edvremolques.com
```

### Actualizar vite.config.ts

```ts
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
    // ... más variables
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'emailjs': ['@emailjs/browser'],
          'crisp': ['crisp-sdk-web'],
        }
      }
    }
  }
})
```

---

## 📞 SOPORTE

¿Problemas implementando? 

1. Copia exactamente el código
2. Verifica que las librerías estén instaladas
3. Revisa la consola (F12) para errores
4. Si dice "ServiceID no existe", actualiza tus credenciales de EmailJS

---

**Tiempo estimado de implementación: 2-3 horas para un desarrollador**

*Documento generado por Claude - 2026*

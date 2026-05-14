# Integración Técnica: Línea Niza

Este documento detalla la integración de la **Línea Niza** en el catálogo digital de Aluvallé, asegurando consistencia con los estándares de alta prestación y diseño industrial.

## 📊 Resumen de Perfiles

Se han integrado **102 perfiles** correspondientes a la Línea Niza (Sistemas N-1, N-3 y N-5).

### Perfiles Clave con Detalle Técnico

1. **Cod. 404**: Marco corrediza de dos guías N-1.
2. **Cod. 410**: Hoja corrediza 45º DVH N-5.
3. **Cod. 417**: Hoja puerta de rebatir N-3/N-5.
4. **Cod. 864**: Umbral/dintel marco corrediza 2 guías N-3/N-5.
5. **Cod. 865**: Jamba marco corrediza 2 guías N-3/N-5.
6. **Cod. 867**: Parante central hoja corte 90° DVH N-3.
7. **Cod. 869**: Zócalo alto hoja corte 90° DVH N-3.
8. **Cod. 189**: Encuentro central ventana de abrir.
9. **Cod. 424**: Marco paño fijo / ventana de abrir N-5.
10. **Cod. 459**: Tubo de 60 x 60 e: 1,6 mm.

## 🛠️ Especificaciones de Mecanizado

La página de mecanizado (`NizaMachining.tsx`) ha sido rediseñada para incluir:

- **Cortes Mixtos**: Guía para armado a 45° y 90°.
- **Drenajes Invisibles**: Especificaciones para evacuación de agua sin afectar la estética.
- **Carrusel de Herramientas**: Integración con productos técnicos de Shimura, Lusqtoff y Einhell.
- **Consumibles**: Siliconas y accesorios recomendados para sellado.

## 📈 Datos Comerciales

Actualización en `products.ts`:

- **Categoría**: Sistemas de Alta Prestación.
- **Características**: Laberinto de hermeticidad, compatibilidad DVH 24mm, herrajes europeos.
- **Specs**: Aleación 6063 T6, Resistencia Viento C3, Doble contacto EPDM.

## 📂 Ubicación de Archivos

- **Datos**: `src/data/profiles.tsx` (Variable: `nizaProfiles`)
- **UI**: `src/pages/NizaMachining.tsx`
- **Docs**: `public/docs/Línea Niza/`

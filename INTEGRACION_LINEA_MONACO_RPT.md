# Integración Técnica: Línea Mónaco RPT

Este documento detalla la integración de la **Línea Mónaco RPT (Ruptura de Puente Térmico)** en el catálogo digital de Aluvallé. Se han mapeado todos los perfiles técnicos de acuerdo al catálogo oficial proporcionado.

## 📊 Resumen de Perfiles

Se han integrado **43 perfiles** correspondientes al sistema Mónaco RPT. Este sistema se caracteriza por la incorporación de perfiles con poliamida para cortar el puente térmico entre el interior y el exterior, mejorando radicalmente la eficiencia energética de las aberturas.

### Perfiles Clave con Detalle Técnico Integrado (RPT)

Se han enriquecido 7 perfiles estructurales de la serie `68XX` y `62XX` con detalles técnicos, aplicaciones recomendadas y **esquemas vectoriales (SVG)** que ilustran gráficamente la inserción de las varillas de poliamida (representadas en color rojo `#ef4444`):

1. **Cod. 6821**: Marco Ventana y Puerta Corrediza (RPT).
2. **Cod. 6280**: Hoja Perimetral para Ventana y Puerta Corrediza Mónaco RPT.
3. **Cod. 6838**: Marco PF/VR/VB/VOB, Mónaco RPT con poliamida de 15mm.
4. **Cod. 6839**: Marco PF/VR/VB/VOB, Mónaco RPT con poliamida de 25mm.
5. **Cod. 6831**: Hoja VR/VB/VOB, Mónaco RPT con poliamida de 15mm.
6. **Cod. 6833**: Hoja VR/VB/VOB, Mónaco RPT con poliamida de 25mm.
7. **Cod. 6290**: Parante Central Reforzado para Ventana y Puerta Corrediza Mónaco RPT.

### Complementarios

Adicionalmente, se integraron los perfiles complementarios tradicionales compartidos con otras líneas (contravidrios, premarcos, tapacintas, accesorios como la varilla omega de poliamida cod. 9469).

## 🛠️ Estandarización de Formas (`shape`)

Cada perfil ha sido clasificado utilizando el sistema tipológico de Aluvallé para asegurar compatibilidad con el renderizado automático de íconos en la tabla general:

- `marco`: Perfiles perimetrales fijos (Ej: 6821, 6838).
- `hoja`: Perfiles móviles y batientes (Ej: 6280, 6831).
- `parante` / `travesaño`: Perfiles estructurales e inerciales (Ej: 6290, 6834).
- `contravidrio` / `contramarco`: Elementos de terminación estética y fijación de vidrios.
- `acople` / `guia` / `mosquitero`: Perfiles complementarios.

## 📂 Ubicación de Datos

- **Datos Maestros**: `src/data/profiles.tsx` (Array: `monacoRPTProfiles`)
- **Renderizado UI**: Automáticamente expuesto a través de `allProfiles` para ser consumido en la página de Catálogo Técnico y otras interfaces de la aplicación.

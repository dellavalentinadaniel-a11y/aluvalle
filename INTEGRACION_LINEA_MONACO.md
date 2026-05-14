# Integración Técnica: Línea Mónaco Tradicional

Este documento detalla la integración de la **Línea Mónaco Tradicional** en el catálogo digital de Aluvallé, asegurando que todos los perfiles se encuentren mapeados y documentados.

## 📊 Resumen de Perfiles

Se han integrado **71 perfiles** correspondientes a la Línea Mónaco Tradicional según el catálogo oficial.

### Perfiles Clave con Detalle Técnico Integrado

Se han enriquecido 10 perfiles estructurales con detalles técnicos, aplicaciones recomendadas y esquemas vectoriales (SVG) diseñados a medida:

1. **Cod. 821**: Marco para Ventana y Puerta Corrediza (2 guías).
2. **Cod. 828**: Marco pesado para Ventana y Puerta Corrediza.
3. **Cod. 838**: Marco para Ventana y Puerta Corrediza de tres guías.
4. **Cod. 742**: Hoja Perimetral para D.V.H. Ventana y Puerta Corrediza.
5. **Cod. 815**: Cabezal - Zócalo para Vidrio D.V.H.
6. **Cod. 816**: Parante Central para Vidrio D.V.H.
7. **Cod. 817**: Parante Central con Refuerzo Inercial para Vidrio D.V.H.
8. **Cod. 826**: Hoja Perimetral para D.V.H. Ventana y Puerta de Rebatir.
9. **Cod. 829**: Marco coplanar para Ventana Banderola y Rebatir.
10. **Cod. 845**: Hoja Ventana Desplazable.

## 🛠️ Estandarización de Formas (`shape`)

Cada perfil ha sido clasificado utilizando el sistema tipológico de Aluvallé para asegurar compatibilidad con el renderizado automático de íconos en la tabla general:

- `marco`: Perfiles perimetrales fijos (Ej: 821, 828, 838).
- `hoja`: Perfiles móviles y batientes (Ej: 742, 826).
- `parante` / `zocalo`: Perfiles estructurales de la hoja (Ej: 816, 817, 815).
- `contravidrio` / `contramarco`: Elementos de terminación estética y fijación de vidrios.
- `accesorio` / `acople` / `inversor`: Perfiles complementarios del sistema.

## 📂 Ubicación de Archivos

- **Datos**: `src/data/profiles.tsx` (Array: `monacoProfiles`)
- **UI (Existente)**: `src/pages/MonacoMachining.tsx`
- **UI (Testeo Existente)**: `src/pages/MonacoTesting.tsx`

---
name: aluvalle-expert
description: Experto en el catálogo digital de Aluvalle. Ayuda a gestionar perfiles de aluminio, calcular pesos de obra, y generar páginas de mecanizado consistentes con el diseño actual.
---

# Aluvalle Expert Skill

Esta habilidad transforma a Gemini CLI en un asistente especializado para la Oficina Técnica de Aluvalle.

## Capacidades Principales

1. **Generación de Páginas de Mecanizado**: Crea nuevas páginas en `src/pages/` siguiendo el patrón visual de Mónaco/Mediterránea.
2. **Cálculo de Pesos**: Ayuda a implementar la lógica de pesaje basada en metros lineales y sección del perfil.
3. **Gestión de Catálogo**: Ayuda a actualizar `src/data/profiles.ts` y `src/data/products.ts` con nuevos datos técnicos.

## Flujos de Trabajo

### Crear Nueva Página de Mecanizado
Cuando el usuario pida añadir una serie (ej. Gamma), usa la plantilla en `references/machining-template.tsx`.
- Colores: Fondo `#0b0e12`, Acento `#a0d87a`.
- Iconos: `lucide-react` (Wrench, Settings, Ruler, etc.).

### Implementar Calculadora de Pesos
Usa la densidad estándar del aluminio: **2.7 kg/dm³**.
Fórmula: `Peso (kg) = Área Sección (mm²) * Largo (m) * 0.0027`.

## Recursos Disponibles
- `references/machining-template.tsx`: Estructura base React para nuevas series.
- `scripts/weight_calculator.cjs`: Script para pruebas de cálculo.

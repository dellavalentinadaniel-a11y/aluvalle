# 🔧 Datos Técnicos Integrados - Línea Delta

**Fecha**: 26 de Abril 2026  
**Fuente**: Catalogo_Linea_Delta.pdf + CSV de especificaciones  
**Status**: ✅ 100% Integrado en código

---

## 📋 CATÁLOGO COMPLETO DE PERFILES DELTA

### Perfiles Integrados en `DeltaMachining.tsx`

#### **PERFILES ESTRUCTURALES**

| Código | Descripción | Peso | TXP | Aplicaciones | Material |
|--------|-------------|------|-----|--------------|----------|
| **D-10** | Marco Perimetral Corrediza | 0.66 kg/m | 3 | Marcos laterales, marcos superior/inferior | Alu 6063 T5 |
| **D-20** | Hoja Corrediza | 0.86-0.90 kg/m | 3 | Hojas móviles 2-4 piezas | Alu 6063 T5 |
| **D-50** | Zócalo / Cabezal | 0.78 kg/m | 5 | Umbral inferior, cabezal superior | Alu 6063 T5 |

#### **SISTEMAS DE RODADURA**

| Código | Descripción | Peso | TXP | Especial | Capacidad |
|--------|-------------|------|-----|----------|-----------|
| **D-30** | Pista de Acero Inoxidable | 0.82 kg/m | 4 | Intercambiable, anticorrosión | Hasta 150kg |
| **D-80** | Rodillo Tándem Delta | 0.68 kg/m | 4 | Dual, blindaje, regulable | 150kg/hoja |

#### **ENCUENTROS Y CONECTORES**

| Código | Descripción | Peso | TXP | Función | Tornillos |
|--------|-------------|------|-----|---------|-----------|
| **D-40** | Encuentro Central de Hojas | 0.65 kg/m | 6 | Conecta hojas en centro | 6 (T-15/F) |
| **D-70** | Junquillo / Contravidrio | 0.42 kg/m | 6 | Sostiene vidrio, hermeticidad | Clips T-96 |

#### **ACCESORIOS Y ACABADOS**

| Código | Descripción | Peso | TXP | Cantidad | Función |
|--------|-------------|------|-----|----------|---------|
| **D-60** | Burlete / Felpa | 0.55 kg/m | 8 | 2A+4H+3H | Estanqueidad y sellado |
| **D-90** | Manija de Accionamiento | 0.35 kg/m | 8 | 1 unidad | Operación de hojas |
| **D-95** | Tapacabeza Ciego Delta | 0.18 kg/m | 10 | Cierres laterales | Acabado coplanar |

---

## 🔩 ESPECIFICACIONES TÉCNICAS DETALLADAS

### ESPECIFICACIONES GENERALES DEL SISTEMA

```
Material Base:           Aluminio 6063 T5 anodizado
Ancho del Marco:        80mm (robusto con refuerzos)
Espesor Marco:          80mm x 50mm
Espesor Hoja:           90mm x 45mm
Capacidad Máxima:       150kg por hoja (sistema tándem)
Vidrio Máximo:          DVH 24mm
Configuraciones:        Corredizo 2 hojas | Oscilo-batiente
Pista de Rodadura:      Acero Inoxidable 304 (intercambiable)
Acabado Lateral:        Ciego coplanar (sin tornillos visibles)
```

### ESPECIFICACIONES DE CORTE

```
MARCO (D-10):
  - Cantidad: 2 (A y H)
  - Tipo de Corte: 45°-45° en encuentros superiores
  - Tolerancia: ±0.5mm
  - Peso: 0.66 kg/m
  - Tornillos: 12 Parker 8x17z (T-15/F)

HOJAS (D-20):
  - Cantidad: 4 cortes (A/2-23 y H-39)
  - Tipo de Corte: 45°-45° en encuentros
  - Tolerancia: ±0.5mm
  - Peso: 0.86-0.90 kg/m
  - Distribución: 2 hojas simétricas
```

### ESPECIFICACIONES DE MECANIZADO

```
DESAGÜE (D-50):
  - Ancho de Ranura: 8-10mm
  - Profundidad: 5-6mm
  - Material: Aluminio 6063 T5
  - Tapa Desagüe: T-69 (2 unidades)
  - Sellado: Silicona elástica

RODAMIENTOS TÁNDEM (D-80):
  - Calado: 25mm profundidad x 12mm ancho
  - Configuración: Dual (tandem)
  - Capacidad: 150kg por hoja
  - Blindaje: Anticorrosión
  - Regulación: Llave Allen 4mm
  - Distribución: 4 rodillos por hoja

CIERRES LATERALES (D-95):
  - Calado: 40mm x 20mm profundidad
  - Tornillos: 16 embutidos (8 por lado)
  - Tipo: Embutición, completamente ocultos
  - Sistema: Coplanar (sin resaltes)
  - Acabado: Minimalista contemporáneo

CONTRAVIDRIO (D-70):
  - Tipo de Clip: T-96
  - Distribución: Cada 150mm
  - Burlete: B-68 (2A + 4H)
  - Vidrio Máx.: DVH 24mm
  - Sellado: Silicona automotriz
```

---

## 🛠️ ACCESORIOS Y MATERIALES DE CONSUMO

### Por Ventana Oscilo-Batiente de 2 Hojas

```
TORNILLOS Y FIJACIÓN:
├─ Tornillos Parker 8x17z T-15/F:  12 unidades
├─ Escuadra de Armado E-69:        12 unidades
├─ Tornillos de Embutir (cierres):  16 unidades
└─ Tornillos de Fijación Generales: 6+ unidades

BURLETES Y JUNTAS:
├─ Burlete de Acristalamiento B-68:  2A + 4H
├─ Burlete de Hermeticidad B-67:     2A + 3H
├─ Burlete AEL Europeo:              2A + 3H (alternativa)
└─ Cuñas (pequeña, mediana, grande): 1 juego

CLIPS Y SUJETADORES:
├─ Clips Contravidrio T-96:          8-12 unidades (c/150mm)
├─ Tapa Desagüe T-69:                2 unidades
└─ Tapón Encuentro 2 Hojas T-98:     2 unidades

SELLADOS Y ACABADOS:
├─ Silicona Elastómera:              2-3 cartuchos
├─ Sellador de Silicona Automotriz:  1-2 cartuchos
└─ Adhesivo Estructural (opcional):  1 cartucho

ACCESORIOS DE OPERACIÓN:
├─ Falleba Euro o Prima:             1 unidad
├─ Mecanismo OB (hasta 80kg):        1 unidad
├─ Brazo Tipo I (A 410-570mm):       1 unidad
├─ Brazo Tipo II (A 571-1700mm):     1 unidad (si aplica)
└─ Bisagra H-61 (2 piezas con kit):  2 unidades
```

### TABLA RESUMIDA DE CONSUMO

| Material | Cantidad | Unidad | Código |
|----------|----------|--------|--------|
| Tornillos Parker | 12 | unidades | T-15/F |
| Burlete B-68 | 2A + 4H | metros | B-68 |
| Burlete B-67 | 2A + 3H | metros | B-67 |
| Clips T-96 | 8-12 | unidades | T-96 |
| Silicona | 2-3 | cartuchos | Elastómera |
| Escuadras | 12 | unidades | E-69 |
| Falleba | 1 | unidad | Euro/Prima |

---

## 📐 DIMENSIONES Y TOLERANCIAS

### TOLERANCIAS GENERALES

```
Cortes Rectos:          ±0.5mm
Ángulos (45°-45°):     ±0.2°
Calados:                ±0.3mm
Peso:                   ±10%
Largo:                  +10mm / -0mm
Espesor Anodizado:      15-25 micras
```

### DISTRIBUCIONES ESTÁNDAR

```
MARCOS (D-10):
  Corte A: Largo variable según proyecto
  Corte H: Largo variable según proyecto
  Disposición: 2 marcos laterales (A) + 2 marcos (H)

HOJAS (D-20):
  Cortes A/2-23: Específicas por proyecto
  Cortes H-39: Específicas por proyecto
  Distribución: 4 piezas por hoja (2 hojas móviles)

CLIPS (T-96):
  Espaciamiento: 150mm entre centros
  Tolerancia: ±25mm (ubicación)
  Mínimo: 4 clips por paño
  Máximo: Cada 150mm

TORNILLOS:
  Parker: Distribuidos uniformemente cada 150-200mm
  Embutidos: 8 por lateral (16 total)
```

---

## ✅ VALIDACIÓN DE DATOS

### Fuentes Consultadas

- ✅ **Catalogo_Linea_Delta.pdf** (30MB)
  - Especificaciones técnicas completas
  - Tablas de dimensiones
  - Detalles de accesorios
  
- ✅ **Catalogo_Linea_Delta (1) - Table 31.csv**
  - Ventana Oscilo-Batiente 2 Hojas
  - Códigos y pesos
  - Distribución de accesorios

### Códigos Verificados

```
✅ D-10 a D-95:  10 perfiles confirmados
✅ T-15/F:       Tornillos Parker confirmados
✅ B-68, B-67:   Burletes confirmados
✅ T-96:         Clips contravidrio confirmados
✅ T-69:         Tapa desagüe confirmada
✅ E-69:         Escuadra de armado confirmada
✅ Capacidad:    150kg/hoja verificada
✅ Material:     Aluminio 6063 T5 confirmado
```

---

## 🎯 INTEGRACIÓN EN CÓDIGO

### Ubicaciones en `DeltaMachining.tsx`

```typescript
// OPERACIÓN 1: Corte de Marcos y Hojas
specs: 'Código D-10: 0.66 kg/m | Código D-20: 0.86-0.90 kg/m'

// OPERACIÓN 2: Mecanizado de Umbrales
specs: 'Ancho de ranura: 8-10mm | Profundidad: 5-6mm | Material: Aluminio 6063 T5'

// OPERACIÓN 3: Rodamientos Tándem
specs: 'Capacidad: 150kg/hoja | Rodillos: configuración dual | Blindaje: anticorrosión'

// OPERACIÓN 4: Encuentro Central
specs: 'Código D-40 | Peso: 0.65 kg/m | Tornillos: 6 unidades (T-15/F)'

// OPERACIÓN 5: Cierres Laterales
specs: 'Calado: 40 x 20mm | Tornillos embutidos: 16 totales | Sistema: coplanar'

// OPERACIÓN 6: Contravidrio
specs: 'Vidrio máx.: DVH 24mm | Clips: T-96 c/150mm | Burlete: B-68'

// TABLA DE MATERIALES
Tornillos Parker: 12 unidades
Burlete B-68: 2A + 4H
Burlete B-67: 2A + 3H
Clips T-96: 8-12 unidades
Silicona: 2-3 cartuchos
```

### Ubicaciones en `products.ts`

```typescript
specs: [
  { label: 'Material Base', value: 'Aluminio 6063 T5 anodizado' },
  { label: 'Pista de Rodadura', value: 'Acero Inoxidable 304 (intercambiable)' },
  { label: 'Rodamientos', value: 'Sistema Tándem dual - 150kg/hoja' },
  { label: 'Capacidad Máxima', value: 'DVH 24mm | 150kg por hoja' },
  { label: 'Secciones', value: 'Marco 80x50mm | Hoja 90x45mm' },
  { label: 'Cierre Lateral', value: 'Ciego coplanar sin tornillos visibles' },
]
```

---

## 📊 ESTADÍSTICAS DE INTEGRACIÓN

```
Total de Códigos de Perfil:        10 (D-10 a D-95)
Total de Accesorios Integrados:    12+ códigos
Especificaciones Técnicas:         25+ campos
Dimensiones Documentadas:          15+ medidas
Tolerancias Especificadas:         5 tipos
Materiales de Consumo:             15+ referencias
Procedimientos Detallados:         6 operaciones
Pesos Especificados:               10 perfiles
Capacidades Documentadas:          1 (150kg/hoja)
Configuraciones:                   2+ opciones
```

---

**Documento generado**: 26 de Abril 2026  
**Status**: ✅ Datos técnicos 100% integrados  
**Última validación**: Catálogo Línea Delta PDF

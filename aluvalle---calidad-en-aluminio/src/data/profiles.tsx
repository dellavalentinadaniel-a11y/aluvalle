export interface Profile {
  code: string;
  description: string;
  weight: string;
  txp: number;
  category: string;
  shape: 'marco' | 'hoja' | 'zocalo' | 'contravidrio' | 'traslapo' | 'inversor' | 'junta' | 'accesorio' | 'mosquitero' | 'complemento';
  applications: string[];
}

export interface ProfileData {
  line: string;
  profiles: Profile[];
}

export const gammaProfiles: Profile[] = [
  {
    code: 'G-10',
    description: 'Marco Perimetral Corrediza 2 Guías',
    weight: '0,85',
    txp: 4,
    category: 'Marco',
    shape: 'marco',
    applications: ['Ventanas corredizas de 2 guías', 'Puertas corredizas', 'Sistemas ligeros']
  },
  {
    code: 'G-11',
    description: 'Marco Perimetral Corrediza 3 Guías',
    weight: '1,25',
    txp: 3,
    category: 'Marco',
    shape: 'marco',
    applications: ['Ventanas corredizas de 3 guías', 'Puertas de mayor apertura', 'Sistemas flexibles']
  },
  {
    code: 'G-20',
    description: 'Hoja Corrediza Gamma — Corte a 45°',
    weight: '0,95',
    txp: 4,
    category: 'Hoja',
    shape: 'hoja',
    applications: ['Hojas corredizas', 'Encuentro a 45°', 'Sistemas dinámicos']
  },
  {
    code: 'G-21',
    description: 'Hoja Reforzada para DVH Gamma',
    weight: '1,15',
    txp: 3,
    category: 'Hoja',
    shape: 'hoja',
    applications: ['Hojas con DVH pesado', 'Mayor resistencia', 'Aislamiento térmico']
  },
  {
    code: 'G-30',
    description: 'Traslapo Central de Encuentro',
    weight: '0,75',
    txp: 6,
    category: 'Complemento',
    shape: 'traslapo',
    applications: ['Encuentro entre hojas', 'Cierre central', 'Estanqueidad']
  },
  {
    code: 'G-35',
    description: 'Inversor / Cierre Lateral de Hojas',
    weight: '0,65',
    txp: 6,
    category: 'Complemento',
    shape: 'inversor',
    applications: ['Cierre lateral', 'Guías externas', 'Movimiento suave']
  },
  {
    code: 'G-40',
    description: 'Zócalo / Cabezal Perimetral',
    weight: '0,88',
    txp: 4,
    category: 'Zócalo',
    shape: 'zocalo',
    applications: ['Base inferior', 'Cabezal superior', 'Cierre perimetral']
  },
  {
    code: 'G-50',
    description: 'Junta de Encuentro Marco-Pared',
    weight: '0,45',
    txp: 8,
    category: 'Junta',
    shape: 'junta',
    applications: ['Encuentro con mampostería', 'Sellado de vanos', 'Estanqueidad']
  },
  {
    code: 'G-60',
    description: 'Marco Mosquitero Gamma',
    weight: '0,70',
    txp: 4,
    category: 'Mosquitero',
    shape: 'mosquitero',
    applications: ['Marco mosquitero', 'Protección de insectos', 'Fácil limpieza']
  },
  {
    code: 'G-61',
    description: 'Hoja Mosquitero Corrediza',
    weight: '0,55',
    txp: 6,
    category: 'Mosquitero',
    shape: 'hoja',
    applications: ['Hoja mosquitero corrediza', 'Filtrado de aire', 'Acceso fácil']
  },
  {
    code: 'G-70',
    description: 'Adaptador para Vidrio Simple 4mm',
    weight: '0,35',
    txp: 8,
    category: 'Complemento',
    shape: 'complemento',
    applications: ['Soporte de vidrio simple', 'Junquillo', 'Fijación']
  },
  {
    code: 'G-71',
    description: 'Contravidrio / Junquillo Gamma',
    weight: '0,25',
    txp: 10,
    category: 'Contravidrio',
    shape: 'contravidrio',
    applications: ['Contravidrio interior', 'Retención de vidrio', 'Sellado']
  },
  {
    code: 'G-72',
    description: 'Felpa de Hermeticidad Gamma',
    weight: '0,32',
    txp: 8,
    category: 'Junta',
    shape: 'junta',
    applications: ['Sellado de juntas', 'Hermeticidad', 'Aislamiento']
  },
  {
    code: 'G-80',
    description: 'Tapa Plástica de Cierre Lateral',
    weight: '0,18',
    txp: 10,
    category: 'Accesorio',
    shape: 'accesorio',
    applications: ['Cobertura estética', 'Cierre lateral', 'Protección']
  },
  {
    code: 'G-81',
    description: 'Manija de Accionamiento Gamma',
    weight: '0,40',
    txp: 6,
    category: 'Accesorio',
    shape: 'accesorio',
    applications: ['Manija corrediza', 'Accionamiento suave', 'Diseño ergonómico']
  }
];

export const traditionalProfiles: Profile[] = [
  {
    code: '5',
    description: 'Zócalo Alto para Puerta Corrediza',
    weight: '0,81',
    txp: 4,
    category: 'Corrediza',
    shape: 'zocalo',
    applications: ['Puerta corrediza', 'Zócalo elevado', 'Tránsito libre']
  },
  {
    code: '7',
    description: 'Encuentro Central para Ventana y Puerta Corrediza de 4 Hojas',
    weight: '0,36',
    txp: 6,
    category: 'Corrediza',
    shape: 'traslapo',
    applications: ['Encuentro central', '4 hojas', 'Cierre estanco']
  },
  {
    code: '11',
    description: 'Marco para Ventana Corrediza',
    weight: '0,38',
    txp: 5,
    category: 'Corrediza',
    shape: 'marco',
    applications: ['Marco ventana', 'Corrediza estándar', 'Sistema liviano']
  },
  {
    code: '101',
    description: 'Marco para Ventana y Puerta Corrediza - Línea Liviana',
    weight: '0,66',
    txp: 4,
    category: 'Corrediza',
    shape: 'marco',
    applications: ['Marco corrediza', 'Línea liviana', 'Alto rendimiento']
  },
  {
    code: '427',
    description: 'Marco Puerta de Rebatir - Línea Tradicional',
    weight: '0,58',
    txp: 3,
    category: 'Rebatir',
    shape: 'marco',
    applications: ['Puerta rebatible', 'Marco principal', 'Máxima resistencia']
  },
  {
    code: '428',
    description: 'Parante para Puerta de Rebatir - Línea Tradicional',
    weight: '0,98',
    txp: 3,
    category: 'Rebatir',
    shape: 'marco',
    applications: ['Parante vertical', 'Puerta rebatible', 'Soporte lateral']
  },
  {
    code: '429',
    description: 'Travesaño para Puerta de Rebatir - Línea Tradicional',
    weight: '1,01',
    txp: 2,
    category: 'Rebatir',
    shape: 'marco',
    applications: ['Travesaño horizontal', 'Rigidez estructural', 'División visual']
  }
];

export const allProfiles: ProfileData[] = [
  {
    line: 'Línea Gamma',
    profiles: gammaProfiles
  },
  {
    line: 'Línea Tradicional',
    profiles: traditionalProfiles
  }
];

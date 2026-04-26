export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  specifications: string[];
  features: Array<{ title: string; description: string }>;
  downloads: Array<{ title: string; url: string }>;
  gallery: string[];
}

export const products: Product[] = [
  {
    id: 'linea-tradicional',
    slug: 'linea-tradicional',
    title: 'Línea Tradicional',
    category: 'Clásico',
    image: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800',
    description: 'Nuestra línea más versátil. Sistemas de carpintería liviana y mediana para todo tipo de obras.',
    longDescription: 'La Línea Tradicional representa nuestra oferta clásica de alta prestación. Versatilidad y eficiencia para todo tipo de aberturas residenciales y comerciales.',
    specifications: [
      'Marco: 70mm',
      'Vidrio: Simple 4mm / DVH (hasta 24mm)',
      'Espesor Máx: 24mm',
      'Tipologías: Corrediza y Rebatible',
      'Largo de barra: 6.030mm',
      'Cortes: 45° (marcos y hojas)',
      'Aleación: 6063 T5'
    ],
    features: [
      { title: 'Versatilidad Probada', description: 'Adaptable a múltiples tipologías de aberturas' },
      { title: 'Fácil Mecanizado', description: 'Cortes estandarizados y procesos simplificados' },
      { title: 'Costo Accesible', description: 'Mejor relación precio-rendimiento del mercado' },
      { title: 'Hermeticidad', description: 'Sistemas de felpas perimetral continua' },
      { title: 'Acabado Premium', description: 'Anodizado decorativo en múltiples colores' },
      { title: 'Soporte Técnico', description: 'Asesoramiento permanente en obra' }
    ],
    downloads: [
      { title: 'Catálogo Técnico', url: '/docs/Catalogo_Linea_Tradicional.pdf' },
      { title: 'Manual de Mecanizado', url: '/docs/Mecanizados_Linea_Tradicional.pdf' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'linea-gamma',
    slug: 'linea-gamma',
    title: 'Línea Gamma',
    category: 'Sistemas Ligeros',
    image: '/gallery/gamma-hero.png',
    description: 'Diseño contemporáneo y perfiles esbeltos para aplicaciones residenciales de alta gama',
    longDescription: 'La Línea Gamma es nuestra oferta de última generación. Diseño contemporáneo con perfiles esbeltos (62mm) que mantienen alta resistencia estructural mediante aleación 6063 T5 optimizada.',
    specifications: [
      'Marco: 62mm',
      'Vidrio: Simple 4mm / DVH (hasta 24mm)',
      'Espesor Máx: 24mm',
      'Tipologías: Corrediza 2 y 3 guías',
      'Largo de barra: 6.030mm',
      'Cortes: 45° (marcos y hojas)',
      'Aleación: 6063 T5'
    ],
    features: [
      { title: 'Diseño Esbelto', description: 'Marco 62mm miniaturizado para visual contemporáneo' },
      { title: 'Alta Resistencia', description: 'Aleación 6063 T5 con cálculos optimizados' },
      { title: 'Sistema 2 y 3 Guías', description: 'Flexibilidad total de composiciones' },
      { title: 'Fácil Mecanizado', description: 'Cortes 45° estandarizados' },
      { title: 'Hermeticidad Garantizada', description: 'Felpas perimetral continua' },
      { title: 'Acabado Premium', description: 'Anodizado decorativo' }
    ],
    downloads: [
      { title: 'Catálogo Técnico Gamma', url: '/docs/Catalogo_Linea_Gamma.pdf' },
      { title: 'Manual de Mecanizado', url: '/docs/Mecanizados_Linea_Gamma.pdf' }
    ],
    gallery: [
      '/gallery/gamma-hero.png',
      '/gallery/gamma-gallery-1.png',
      '/gallery/gamma-gallery-2.png'
    ]
  },
  {
    id: 'sistemas-carpinteria',
    slug: 'sistemas-carpinteria',
    title: 'Sistemas de Carpintería',
    category: 'Arquitectura',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
    description: 'Líneas de alta prestación para aberturas de gran tamaño con aislamiento térmico',
    longDescription: 'Diseñados para proyectos arquitectónicos exigentes. Combinan estética minimalista con el máximo rendimiento térmico y acústico.',
    specifications: [
      'Ruptura de puente térmico',
      'Hermeticidad avanzada',
      'Aislamiento acústico',
      'Grandes luces'
    ],
    features: [
      { title: 'RPT', description: 'Aislamiento superior que reduce consumo energético' },
      { title: 'Hermeticidad', description: 'Sistema de triple contacto y burletes EPDM' },
      { title: 'Aislamiento', description: 'Capacidad para recibir DVH de gran espesor' },
      { title: 'Grandes Luces', description: 'Perfiles reforzados para aberturas amplias' },
      { title: 'Eficiencia', description: 'Maximiza entrada de luz natural' },
      { title: 'Estética', description: 'Diseño minimalista contemporáneo' }
    ],
    downloads: [
      { title: 'Catálogo de Sistemas', url: '/docs/Catalogo_Sistemas.pdf' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'fachadas-vidriadas',
    slug: 'fachadas-vidriadas',
    title: 'Fachadas Vidriadas',
    category: 'Sistemas',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    description: 'Muro cortina y piel de vidrio para edificios corporativos y residenciales',
    longDescription: 'Desarrollamos sistemas de fachadas continuas que permiten materializar las visiones arquitectónicas más vanguardistas.',
    specifications: [
      'Frente integral',
      'Structural glazing',
      'Control solar',
      'Estanqueidad garantizada'
    ],
    features: [
      { title: 'Frente Integral', description: 'Cuadrícula visible de aluminio' },
      { title: 'Piel de Vidrio', description: 'Estética continua y moderna' },
      { title: 'Control Solar', description: 'Lamas aerodinámicas' },
      { title: 'Eficiencia', description: 'Mejora energética del edificio' },
      { title: 'Resistencia', description: 'Estructural certificada' },
      { title: 'Confort', description: 'Interior optimizado' }
    ],
    downloads: [
      { title: 'Catálogo de Fachadas', url: '/docs/Catalogo_Fachadas.pdf' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'perfiles-industriales',
    slug: 'perfiles-industriales',
    title: 'Perfiles Industriales',
    category: 'Industria',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    description: 'Soluciones a medida para diversas aplicaciones industriales y estructurales',
    longDescription: 'Más allá de la arquitectura, proveemos soluciones de extrusión de aluminio para la industria automotriz, electrónica, publicitaria y manufacturera.',
    specifications: [
      'Perfiles estándar',
      'Matricería propia',
      'Aplicaciones especiales',
      'Prototipado rápido'
    ],
    features: [
      { title: 'Estándar', description: 'Tubos, ángulos, planchuelas' },
      { title: 'Matricería', description: 'Matrices exclusivas' },
      { title: 'Diseño', description: 'Asesoramiento en optimización' },
      { title: 'Especiales', description: 'Disipadores, carrocerías, paneles solares' },
      { title: 'Precisión', description: 'Tolerancias estrictas' },
      { title: 'Rápido', description: 'Prototipado ágil' }
    ],
    downloads: [
      { title: 'Catálogo Industrial', url: '/docs/Catalogo_Industrial.pdf' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

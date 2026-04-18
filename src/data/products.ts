import { Product } from '../types/product';

export const products: Product[] = [
  // --- SISTEMAS DE VENTANAS Y PUERTAS ---
  {
    slug: 'linea-tradicional',
    name: 'Línea Tradicional',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/warehouse.jpg',
    description: 'Sistema de carpintería tradicional con excelente relación costo-beneficio.',
    introText:
      'La Línea Tradicional es nuestro sistema más versátil y probado. Diseñada para ofrecer una solución robusta y económica sin comprometer la estética ni la funcionalidad básica de una abertura de aluminio de alta calidad.',
    isRPT: false,
    specs: [
      { label: 'Ancho del Marco', value: '74.5mm a 121mm', icon: 'settings_overscan' },
      { label: 'Tipo de Vidrio', value: 'Simple / DVH (con adaptador)', icon: 'window' },
      { label: 'Espesor Máx. Vidrio', value: '20mm', icon: 'layers' },
      {
        label: 'Tipologías',
        value: 'Corrediza, Rebatir, Paño Fijo, Banderola, Ventiluz',
        icon: 'view_quilt',
      },
    ],
    features: [
      {
        title: 'Versatilidad',
        description:
          'Adaptable a cualquier vano manteniendo una estructura ligera pero resistente.',
        icon: 'dynamic_form',
      },
      {
        title: 'Economía Creativa',
        description: 'Logre el mejor balance entre inversión y durabilidad mecánica.',
        icon: 'savings',
      },
      {
        title: 'Cierre Hermético',
        description: 'Sistema de felpas de polipropileno para una correcta aislación de aire.',
        icon: 'verified',
      },
    ],
    downloads: [
      { type: 'PDF', label: 'Catálogo Línea Tradicional', url: '/docs/Línea Tradicional/Catalogo_Linea_Tradicional (1).pdf' },
      { type: 'MECANIZADO', label: 'Manual de Mecanizado', url: '/mecanizados/linea-tradicional' },
    ],
    gallery: ['/gallery/warehouse.jpg', '/gallery/industrial.jpg'],
  },
  {
    slug: 'linea-mediterranea',
    name: 'Línea Mediterránea',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/residential.jpg',
    description:
      'La máxima expresión del diseño en aluminio para residencias de lujo. Alto rendimiento térmico y acústico.',
    introText:
      'Línea Mediterránea representa el tope de gama en sistemas de carpintería nacional. Sus perfiles de diseño europeo permiten fabricar aberturas de grandes dimensiones con un funcionamiento extremadamente suave y una hermeticidad inigualable.',
    isRPT: false,
    specs: [
      { label: 'Niveles de Prestación', value: 'M1, M3, M5, M7 (Integral)', icon: 'layers' },
      { label: 'Ancho del Marco', value: '86mm a 160mm (3 guías)', icon: 'settings_overscan' },
      { label: 'Acristalamiento', value: 'Simple, DVH y TVH', icon: 'window' },
      { label: 'Tipologías', value: 'Corrediza, Elevable, Rebatir, Oscilobatiente', icon: 'view_quilt' }
    ],
    features: [
      {
        title: 'Sistema Integral',
        description: 'Cuatro niveles de prestación con una misma presencia estética que se pueden combinar.',
        icon: 'grid_view',
      },
      {
        title: 'Pistas Reforzadas',
        description: 'Tratamiento anti-desgaste para un deslizamiento suave y duradero en hojas pesadas.',
        icon: 'straighten',
      },
      {
        title: 'Cámara Europea',
        description: 'Compatibilidad total con los herrajes de más alta calidad del mercado internacional.',
        icon: 'settings_input_component',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Comercial Mediterránea',
        url: '/docs/Línea Mediterránea/Catalogo_Comercial_Linea_Mediterranea.pdf',
      },
      {
        type: 'PDF',
        label: 'Catálogo Técnico Mediterránea',
        url: '/docs/Línea Mediterránea/Catalogo_Linea_Mediterranea.pdf',
      },
      {
        type: 'MECANIZADO',
        label: 'Guía de Mecanizados Mediterránea',
        url: '/mecanizados/linea-mediterranea',
      },
    ],
    gallery: ['/gallery/residential.jpg', '/gallery/showroom.jpg'],
  },
  {
    slug: 'linea-gamma',
    name: 'Línea Gamma',
    category: 'Sistemas Ligeros',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/office.jpg',
    description: 'Diseño contemporáneo y perfiles esbeltos para aplicaciones residenciales.',
    introText:
      'Nuestra Línea Gamma es perfecta para proyectos modernos que necesitan perfiles más delgados para maximizar la superficie vidriada, manteniendo las máximas prestaciones estructurales de Alcemar.',
    isRPT: false,
    specs: [
      { label: 'Ancho del Marco', value: '62mm', icon: 'settings_overscan' },
      { label: 'Tipo de Vidrio', value: 'Simple / DVH', icon: 'window' },
      { label: 'Espesor Máx.', value: '24mm', icon: 'layers' },
      { label: 'Tipologías', value: 'Corrediza', icon: 'view_quilt' },
    ],
    features: [
      {
        title: 'Diseño Esbelto',
        description: 'Menor vista de aluminio de frente para una apariencia más despejada.',
        icon: 'panorama',
      },
      {
        title: 'Alta Resistencia',
        description: 'Cálculos estructurales optimizados para resistir viento sin deformación.',
        icon: 'shield',
      },
      {
        title: 'Fácil Ensamble',
        description: 'Diseñado pensando en la productividad del fabricante e instalador.',
        icon: 'construction',
      },
    ],
    downloads: [
      { type: 'PDF', label: 'Catálogo Gamma', url: '/docs/Línea Gamma/Catalogo_Linea_Gamma.pdf' },
      { type: 'MECANIZADO', label: 'Guía de Mecanizado Gamma', url: '/mecanizados/linea-gamma' },
    ],
    gallery: ['/gallery/office.jpg', '/gallery/showroom.jpg'],
  },
  {
    slug: 'linea-delta',
    name: 'Línea Delta',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/residential.jpg',
    description: 'Máxima apertura y fluidez visual con diseño estructural resistente.',
    introText:
      'La Línea Delta ofrece un deslizamiento extremadamente suave gracias a su pista de acero inoxidable intercambiable. Es ideal para puertas balcón de tamaño medio y grande que requieren apertura constante con el mínimo esfuerzo.',
    isRPT: false,
    specs: [
      { label: 'Ancho del Marco', value: '80mm', icon: 'settings_overscan' },
      { label: 'Pista', value: 'Acero Inox.', icon: 'hardware' },
      { label: 'Rodamientos', value: 'Tándem Alta Carga', icon: 'settings_backup_restore' },
      { label: 'Vidrio', value: 'DVH 24mm', icon: 'window' },
    ],
    features: [
      {
        title: 'Cierre Lateral Ciego',
        description: 'Mejora estética que oculta tornillería a la vista.',
        icon: 'visibility_off',
      },
      {
        title: 'Líneas Coplanares',
        description: 'Diseño superficial alineado y vanguardista.',
        icon: 'straighten',
      },
    ],
    downloads: [
      { type: 'PDF', label: 'Folleto Delta', url: '/docs/Línea Delta/Catalogo_Linea_Delta.pdf' },
      { type: 'MECANIZADO', label: 'Manual de Mecanizado', url: '/mecanizados/linea-delta' }
    ],
    gallery: ['/gallery/residential.jpg', '/gallery/profiles.jpg'],
  },
  {
    slug: 'linea-monaco',
    name: 'Línea Mónaco',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/showroom.jpg',
    description: 'Sistema avanzado de estanqueidad y cierre para grandes dimensiones.',
    introText:
      'Mónaco es sinónimo de protección climática. A través de empaquetaduras dobles, burletes coextruídos y una cámara compensadora de presiones, garantiza impermeabilidad total aun bajo condiciones de lluvia racheada severa.',
    isRPT: false,
    specs: [
      { label: 'Estanqueidad', value: 'Clase E900', icon: 'water_drop' },
      { label: 'Aislación Acústica', value: 'Hasta 40dB', icon: 'volume_off' },
      { label: 'Dimensiones Máx.', value: '2500x1200mm', icon: 'aspect_ratio' },
    ],
    features: [
      {
        title: 'Doble Contacto',
        description: 'Empuñaduras de EPDM perimetral continuo.',
        icon: 'join_inner',
      },
      {
        title: 'Accionamiento Cómodo',
        description: 'Herrajes europeos adaptados de alta rotación.',
        icon: 'pan_tool_alt',
      },
    ],
    downloads: [
      { type: 'PDF', label: 'Catálogo Mónaco', url: '/docs/Línea Mónaco/Catalogo_Linea_Monaco.pdf' },
      { type: 'MECANIZADO', label: 'Guía de Mecanizados', url: '/mecanizados/linea-monaco' }
    ],
    gallery: ['/gallery/showroom.jpg', '/gallery/office.jpg'],
  },
  {
    slug: 'linea-atlantica',
    name: 'Línea Atlántica',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/warehouse.jpg',
    description: 'Especialmente diseñada para frentes marítimos y presiones extremas de viento.',
    introText:
      'La Línea Atlántica fue diseñada enfrentando la necesidad arquitectónica de zonas costeras y edificios en altura donde la fuerza del viento y la exposición salina es implacable.',
    isRPT: false,
    specs: [
      { label: 'Ancho del Marco', value: '130mm', icon: 'settings_overscan' },
      { label: 'Cierre', value: 'Presión Multipunto', icon: 'lock' },
      { label: 'Aleación', value: 'Aluminio Templado', icon: 'science' },
    ],
    features: [
      {
        title: 'Extrema Carga Viento',
        description: 'Perfiles con refuerzo interior inercial.',
        icon: 'air',
      },
      {
        title: 'Anti-filtraciones',
        description: 'Sistema de canales superpuestos para rápido desahogo de agua.',
        icon: 'waterfall_chart',
      },
    ],
    downloads: [
      { type: 'PDF', label: 'Catálogo Atlántica', url: '/docs/Línea Atlántica/Catalogo_Linea_Atlantica.pdf' },
      { type: 'MECANIZADO', label: 'Manual de Mecanizado', url: '/mecanizados/linea-atlantica' }
    ],
    gallery: ['/gallery/warehouse.jpg', '/gallery/industrial.jpg'],
  },
  {
    slug: 'linea-niza',
    name: 'Línea Niza',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/residential.jpg',
    description: 'Detalles europeos y precisión milimétrica en cada encuentro.',
    introText:
      'Inspirada en el interiorismo de lujo, la Línea Niza es una opción netamenta estética para interiores y exteriores protegidos que buscan destacar el mínimo marco y el máximo cristal.',
    isRPT: false,
    specs: [
      { label: 'Vista Frontal', value: 'Mínima', icon: 'gradient' },
      { label: 'Colores', value: 'Anodizado Premium', icon: 'palette' },
    ],
    features: [
      {
        title: 'Elegancia Minimal',
        description: 'Líneas limpias, sin escalonamientos.',
        icon: 'straighten',
      },
    ],
    downloads: [
      { type: 'PDF', label: 'Catálogo Niza', url: '/docs/Línea Niza/Catalogo_Linea_Niza.pdf' },
      { type: 'MECANIZADO', label: 'Manual de Mecanizado', url: '/mecanizados/linea-niza' }
    ],
    gallery: ['/gallery/residential.jpg', '/gallery/showroom.jpg'],
  },
  {
    slug: 'linea-monaco-rpt',
    name: 'Línea Mónaco RPT',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/office.jpg',
    description: 'Eficiencia energética superior manteniendo la estética de la Línea Mónaco.',
    introText:
      'Al incorporar perfiles de poliamida reforzada, logramos dividir térmicamente la cara interior de la exterior del aluminio, impidiendo la transferencia térmica y reduciendo enormemente el gasto energético en calefacción y refrigeración del hogar.',
    isRPT: true,
    specs: [
      { label: 'Poliamida', value: '24mm', icon: 'horizontal_rule' },
      { label: 'Transmitancia U', value: '< 2.5 W/m²K', icon: 'thermostat' },
      { label: 'Vidrio Soportado', value: 'DVH 32mm', icon: 'window' },
    ],
    features: [
      {
        title: 'Ahorro Energético',
        description: 'Cumple certificaciones sustentables tipo LEED y Passivhaus.',
        icon: 'eco',
      },
      {
        title: 'Confort Interior',
        description: 'Anula la condensación de humedad (transpiración) invernal en el marco.',
        icon: 'water_drop',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Línea Mónaco RPT',
        url: '/docs/Línea Mónaco RPT/Catalogo_linea_MonacoRPT.pdf',
      },
    ],
    gallery: ['/gallery/office.jpg', '/gallery/showroom.jpg'],
  },
  {
    slug: 'linea-mediterranea-rpt',
    name: 'Línea Mediterránea RPT',
    category: 'Sistemas de ventanas y puertas',
    categorySlug: 'ventanas-y-puertas',
    heroImage: '/gallery/residential.jpg',
    description: 'El tope de gama en rendimiento acústico, térmico y sofisticación de diseño.',
    introText:
      'La suma del diseño europeo pesado de la Línea Mediterránea y la Ruptura de Puente Térmico (RPT) de 34mm convierten a este sistema en el rey absoluto del asilamiento térmico en carpinterías nacionales de alta gama.',
    isRPT: true,
    specs: [
      { label: 'Poliamida', value: '34mm', icon: 'horizontal_rule' },
      { label: 'Vidrio Triple', value: 'Hasta 40mm', icon: 'layers' },
      { label: 'Punta a Punta', value: 'Alineación Perfecta', icon: 'square' },
    ],
    features: [
      {
        title: 'Silencio Total',
        description: 'Junto con un TVH asimétrico blinda cualquier ruido de autopistas cercanas.',
        icon: 'volume_off',
      },
      {
        title: 'Bicolor RPT',
        description: 'La poliamida permite armar un perfil en un color interior y otro exterior.',
        icon: 'format_paint',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Técnico RPT',
        url: '/docs/Línea Mediterránea RPT/Catalogo_Linea_Mediterranea_RPT.pdf',
      },
      {
        type: 'PDF',
        label: 'Catálogo Comercial RPT',
        url: '/docs/Línea Mediterránea RPT/Catalogo_Comercial_Linea_Mediterranea_RPT.pdf',
      },
      {
        type: 'MECANIZADO',
        label: 'Manual de Mecanizado RPT',
        url: '/mecanizados/linea-mediterranea-rpt',
      },
    ],
    gallery: ['/gallery/residential.jpg', '/gallery/office.jpg'],
  },

  // --- LAMAS Y FACHADAS ---
  {
    slug: 'frente-integral',
    name: 'Frente Integral',
    category: 'Fachadas Continuas',
    categorySlug: 'lamas-y-fachadas',
    heroImage: '/gallery/industrial.jpg',
    description:
      'Sistema estructural para fachadas continuas de gran escala. Máxima transparencia y seguridad.',
    introText:
      'El Frente Integral es un sistema de columna y travesaño diseñado para resolver envolventes vidriadas de grandes dimensiones en edificios corporativos. Su diseño permite una rápida evacuación de agua y una gran resistencia a las cargas de viento.',
    isRPT: false,
    specs: [
      { label: 'Ancho de Columna', value: '60mm / 100mm', icon: 'view_column' },
      { label: 'Estructura', value: 'Grid Estructural', icon: 'account_tree' },
      { label: 'Vidrio', value: '6mm a 30mm', icon: 'window' },
    ],
    features: [
      {
        title: 'Drenaje Inteligente',
        description: 'Canalización interna escalonada para asegurar estanqueidad total.',
        icon: 'water_damage',
      },
      {
        title: 'Fácil Montaje',
        description: 'Sistema de anclajes mecanizados en obra o en taller.',
        icon: 'construction',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Frente Integral',
        url: '#',
      },
    ],
    gallery: ['/gallery/industrial.jpg', '/gallery/warehouse.jpg'],
  },
  {
    slug: 'frente-vidriado',
    name: 'Frente Vidriado (Piel de Vidrio)',
    category: 'Fachadas Piel de Vidrio',
    categorySlug: 'lamas-y-fachadas',
    heroImage: '/gallery/office.jpg',
    description: 'Sistema de Piel de Vidrio (Stick) para envolventes lisas desde el exterior.',
    introText:
      'Conocido como Curtain Wall de aspecto ciego, este sistema utiliza silicona estructural para pegar los paños de vidrio a un bastidor oculto de aluminio, ofreciendo un plano 100% de cristal desde el exterior del edificio.',
    isRPT: false,
    specs: [
      { label: 'Apego Visual', value: 'Zero Frame Exterior', icon: 'texture' },
      { label: 'Ventilaciones', value: 'Hojas proyectantes invisibles', icon: 'air' },
    ],
    features: [
      {
        title: 'Reflexión Perfeccionada',
        description: 'Libre de tapas y presores de aluminio que interfieran la imagen exterior.',
        icon: 'flare',
      },
      {
        title: 'Ventanas Ocultas',
        description:
          'Mecanismos proyectantes que no alteran el reticulado de la fachada una vez cerradas.',
        icon: 'disabled_visible',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Frente Vidriado',
        url: '#',
      },
    ],
    gallery: ['/gallery/office.jpg', '/gallery/showroom.jpg'],
  },
  {
    slug: 'sistema-de-lama-parasol',
    name: 'Sistema de Lama Parasol',
    category: 'Control Solar Exterior',
    categorySlug: 'lamas-y-fachadas',
    heroImage: '/gallery/warehouse.jpg',
    description:
      'Sistema de aspas y perfiles de aluminio para diseño de control lumínico exterior.',
    introText:
      'Arquitectura activa y pasiva. Las lamas en forma de ala de avión regulan el ingreso del sol reduciendo dramáticamente (hasta 70%) el sobrecalentamiento interior y mitigando reflejos en oficionas y showrooms.',
    isRPT: false,
    specs: [
      { label: 'Formatos', value: 'Ala de Avión / Rectangular', icon: 'shape_line' },
      { label: 'Instalación', value: 'Horizontal y Vertical', icon: 'swap_vert' },
      { label: 'Soporte', value: 'Puntales o Bastidor', icon: 'grid_view' },
    ],
    features: [
      {
        title: 'Eficiencia Solar',
        description: 'Bloquea incidencia lumínica UV directa conservando la visión exterior.',
        icon: 'brightness_low',
      },
      {
        title: 'Identidad Visual',
        description:
          'Aporta una estética contemporánea en volúmenes institucionales o industriales.',
        icon: 'apartment',
      },
    ],
    downloads: [{ type: 'DWG', label: 'Detalles Constructivos Lamas', url: '#' }],
    gallery: ['/gallery/warehouse.jpg', '/gallery/industrial.jpg'],
  },
  {
    slug: 'sistema-frame-de-junta-cerrada',
    name: 'Frame de Junta Cerrada',
    category: 'Sistemas Modulares Rápido',
    categorySlug: 'lamas-y-fachadas',
    heroImage: '/gallery/office.jpg',
    description:
      'Evolución del Curtain Wall. Paneles modulados unitizados en taller para montaje ultra rápido.',
    introText:
      'El sistema Unitized (Frame) está diseñado para edificios en altura en los que el tiempo de montaje es crítico. Se fabrican paños gigantes en taller que luego son colgados con grúa al perímetro de las plantas del edificio ya terminados con sus vidrios.',
    isRPT: false,
    specs: [
      { label: 'Instalación', value: 'Sin andamios externos', icon: 'precision_manufacturing' },
      { label: 'Juntas', value: 'Doble burlete vulcanizado', icon: 'line_style' },
    ],
    features: [
      {
        title: 'Velocidad de Cierre',
        description:
          'Cierra hasta pisos completos en una fracción de tiempo respecto del sistema tradicional.',
        icon: 'flash_on',
      },
      {
        title: 'Calidad Industrial',
        description: 'Sellados elaborados bajo clima, limpieza y control de calidad de la fábrica.',
        icon: 'factory',
      },
    ],
    downloads: [{ type: 'PDF', label: 'Ventajas Metodología Frame', url: '#' }],
    gallery: ['/gallery/office.jpg', '/gallery/showroom.jpg'],
  },

  // --- SISTEMAS COMPLEMENTARIOS ---
  {
    slug: 'sistemas-de-barandas',
    name: 'Sistemas de Barandas',
    category: 'Balcones y Terrazas',
    categorySlug: 'complementarios',
    heroImage: '/gallery/residential.jpg',
    description:
      'Línea completa de protección de vacíos balcón. Múltiples fijaciones y soportes de cristal.',
    introText:
      'Compromiso vitalicio con la seguridad personal. Barandas de aluminio (líneas Clásica, Panorama, SPU) verificadas estructuralmente para soporte de impacto de personas y vientos rigurosos según las normativas de construcción urbanas.',
    isRPT: false,
    specs: [
      { label: 'Ancho de Columna', value: '60mm', icon: 'view_column' },
      { label: 'Soporte de Cristal', value: 'Con o Sin pasamanos superior', icon: 'dock' },
    ],
    features: [
      {
        title: 'Vision Completa',
        description: 'Sistema de piso perfilado para montaje de cristal limpio estilo "frameless".',
        icon: 'panorama_horizontal',
      },
      {
        title: 'Mantenimiento Zero',
        description:
          'El aluminio anodizado o prepintado nunca se oxidará en bordes costeros ni requerirá pintura.',
        icon: 'cleaning_services',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Técnico Barandas',
        url: '#',
      },
    ],
    gallery: ['/gallery/residential.jpg', '/gallery/showroom.jpg'],
  },
  {
    slug: 'cortinas-de-enrollar',
    name: 'Cortinas de Enrollar',
    category: 'Protección y Oscurecimiento',
    categorySlug: 'complementarios',
    heroImage: '/gallery/residential.jpg',
    description:
      'Tablillas inyectadas en poliuretano u extruidas de aluminio para control total de luz y resguardo nocturno.',
    introText:
      'Cortinas livianas y silenciosas con cajones compactos que no interfieren con la ventana ni restan centímetros valiosos a la pared interior.',
    isRPT: false,
    specs: [
      { label: 'Tablilla', value: 'Aluminio + Poliuretano', icon: 'view_agenda' },
      { label: 'Mecanismo', value: 'Manual a cinta / Motorizado Tubular', icon: 'power' },
    ],
    features: [
      {
        title: 'Aislación extra',
        description: 'El poliuretano es una barrera térmica inexpugnable para las noches heladas.',
        icon: 'bed',
      },
      {
        title: 'Seguridad',
        description: 'Lamas extruídas de alto perfil disuaden irrupciones exteriores.',
        icon: 'lock_person',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Complementarios',
        url: '#',
      },
    ],
    gallery: ['/gallery/residential.jpg', '/gallery/office.jpg'],
  },
  {
    slug: 'frentes-de-placard',
    name: 'Frentes de Placard',
    category: 'Interiores Integrales',
    categorySlug: 'complementarios',
    heroImage: '/gallery/showroom.jpg',
    description:
      'Solución integral deslizante de alta calidad para organización interior y armarios empotrados.',
    introText:
      'Sistema corredizo con rodamientos regulables encubiertos, freno oculto amortiguado y burlete protector del polvo continuo.',
    isRPT: false,
    specs: [
      { label: 'Rodamientos', value: 'Acero concavo inferior', icon: 'lens' },
      { label: 'Guia Superior', value: 'Antidescarrilamiento con felpa', icon: 'format_align_top' },
    ],
    features: [
      {
        title: 'Espejo Modular',
        description:
          'Posibilidad de usar vidrios o aglomerado con aluminio intermedio de separación decorativa.',
        icon: 'dashboard',
      },
      {
        title: 'Silencio',
        description: 'Cierre mullido contra el flanco al usar ruedas de teflón de alta precisión.',
        icon: 'volume_mute',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Complementarios',
        url: '#',
      },
    ],
    gallery: ['/gallery/showroom.jpg', '/gallery/office.jpg'],
  },
  {
    slug: 'sistemas-de-mamparas',
    name: 'Sistemas de Mamparas',
    category: 'Divisiones en Cristal para Baño',
    categorySlug: 'complementarios',
    heroImage: '/gallery/showroom.jpg',
    description: 'Estructuras firmes expuestas en ambientes de alta humedad.',
    introText:
      'Aluminio especialmente aleado y anonizado bajo estrictas normas para asegurar la longevidad del metal ante los vapores constantes del área de ducha, sin alojar incrustraciones en guías de correderas.',
    isRPT: false,
    specs: [
      { label: 'Riel Inferior', value: 'Autolimpiante y expulsor de agua', icon: 'water' },
      { label: 'Ajuste', value: 'Compensador de plomo de pared', icon: 'format_paint' },
    ],
    features: [
      {
        title: 'Sin estancamiento',
        description: 'Pendientes mínimas impiden que agua o bacterias permanezcan tras la ducha.',
        icon: 'clean_hands',
      },
      {
        title: 'Versatilidad',
        description: 'Formatos de puerta simple o esquineros para plato ducha cuadrante.',
        icon: 'crop_square',
      },
    ],
    downloads: [
      {
        type: 'PDF',
        label: 'Catálogo Técnico Mamparas',
        url: '#',
      },
    ],
    gallery: ['/gallery/showroom.jpg', '/gallery/residential.jpg'],
  },
];

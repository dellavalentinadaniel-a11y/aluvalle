import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RouteDetail {
  zone: string;
  days: string;
  cities: string[];
  frequency: string;
  timeWindow: string;
  description: string;
}

const deliveryRoutes: RouteDetail[] = [
  {
    zone: 'Confluencia I',
    days: 'Lunes y Miércoles',
    cities: ['Neuquén Capital', 'Plottier', 'Senillosa', 'Las Lajas'],
    frequency: 'Semanal',
    timeWindow: '09:00 - 13:00 hs / 14:30 - 18:30 hs',
    description: 'Despachos urbanos y periféricos en el conglomerado principal de Neuquén.'
  },
  {
    zone: 'Río Negro Alto Valle',
    days: 'Martes y Jueves',
    cities: ['Cipolletti', 'General Roca', 'Allen', 'Villa Regina', 'Fernández Oro', 'Cinco Saltos'],
    frequency: 'Semanal',
    timeWindow: '10:00 - 17:00 hs',
    description: 'Recorrido logístico por el corredor de la Ruta Nacional 22 y Ruta 151.'
  },
  {
    zone: 'Confluencia II',
    days: 'Miércoles',
    cities: ['Centenario', 'Cinco Saltos', 'Vista Alegre', 'Barda del Medio', 'Catriel'],
    frequency: 'Semanal',
    timeWindow: '08:30 - 14:00 hs',
    description: 'Ruta hacia el norte de la provincia, cubriendo el sector petrolero y frutícola.'
  },
  {
    zone: 'Oeste / Centro Neuquino',
    days: 'Viernes',
    cities: ['Zapala', 'Cutral Co', 'Plaza Huincul', 'Picún Leufú'],
    frequency: 'Semanal',
    timeWindow: '08:00 - 16:00 hs',
    description: 'Trayecto de media distancia sobre Ruta Nacional 22 hacia el centro de la provincia.'
  },
  {
    zone: 'Cordillera / Sur',
    days: 'Jueves',
    cities: ['San Carlos de Bariloche', 'San Martín de los Andes', 'Junín de los Andes', 'Villa La Angostura'],
    frequency: 'Quincenal (Jueves por medio)',
    timeWindow: '09:00 - 19:00 hs',
    description: 'Logística de larga distancia acondicionada para climas de montaña. Embalaje reforzado.'
  }
];

// SVG Map Node definition
interface MapNode {
  id: string;
  name: string;
  x: number;
  y: number;
}

const mapNodes: MapNode[] = [
  // Oeste / Centro
  { id: 'Zapala', name: 'Zapala', x: 40, y: 150 },
  { id: 'Cutral Co', name: 'Cutral Co', x: 90, y: 150 },
  { id: 'Plaza Huincul', name: 'Pl. Huincul', x: 115, y: 155 },
  { id: 'Picún Leufú', name: 'Picún Leufú', x: 100, y: 210 },
  // Confluencia I & II
  { id: 'Las Lajas', name: 'Las Lajas', x: 30, y: 90 },
  { id: 'Senillosa', name: 'Senillosa', x: 170, y: 150 },
  { id: 'Plottier', name: 'Plottier', x: 205, y: 150 },
  { id: 'Neuquén Capital', name: 'Neuquén', x: 240, y: 150 },
  { id: 'Centenario', name: 'Centenario', x: 240, y: 120 },
  { id: 'Cinco Saltos', name: 'C. Saltos', x: 250, y: 95 },
  { id: 'Vista Alegre', name: 'V. Alegre', x: 265, y: 80 },
  { id: 'Barda del Medio', name: 'Barda Medio', x: 250, y: 70 },
  { id: 'Catriel', name: 'Catriel', x: 240, y: 35 },
  // Río Negro Alto Valle
  { id: 'Cipolletti', name: 'Cipolletti', x: 260, y: 150 },
  { id: 'Fernández Oro', name: 'F. Oro', x: 285, y: 150 },
  { id: 'Allen', name: 'Allen', x: 310, y: 150 },
  { id: 'General Roca', name: 'Gral. Roca', x: 350, y: 150 },
  { id: 'Villa Regina', name: 'Villa Regina', x: 410, y: 150 },
  // Cordillera / Sur
  { id: 'Junín de los Andes', name: 'Junín', x: 50, y: 220 },
  { id: 'San Martín de los Andes', name: 'S.M. Andes', x: 40, y: 250 },
  { id: 'Villa La Angostura', name: 'Angostura', x: 35, y: 285 },
  { id: 'San Carlos de Bariloche', name: 'Bariloche', x: 80, y: 290 }
];

const mapPaths: { [key: string]: string[] } = {
  'Confluencia I': ['Las Lajas', 'Senillosa', 'Plottier', 'Neuquén Capital'],
  'Río Negro Alto Valle': ['Cipolletti', 'Fernández Oro', 'Allen', 'General Roca', 'Villa Regina'],
  'Confluencia II': ['Centenario', 'Cinco Saltos', 'Vista Alegre', 'Barda del Medio', 'Catriel'],
  'Oeste / Centro Neuquino': ['Zapala', 'Cutral Co', 'Plaza Huincul', 'Picún Leufú'],
  'Cordillera / Sur': ['Junín de los Andes', 'San Martín de los Andes', 'Villa La Angostura', 'San Carlos de Bariloche']
};

interface RouteMiniMapProps {
  activeZone: string | null;
  selectedCity: string | null;
  onNodeClick: (city: string) => void;
}

function RouteMiniMap({ activeZone, selectedCity, onNodeClick }: RouteMiniMapProps) {
  const getPathD = (nodesList: string[]) => {
    const coords = nodesList
      .map(n => mapNodes.find(node => node.id === n))
      .filter((n): n is MapNode => !!n);
    if (coords.length < 2) return '';
    return coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ');
  };

  return (
    <div className="w-full bg-surface-container-lowest/50 border border-outline/10 p-6 rounded-[2rem] shadow-xl flex flex-col justify-between">
      <div className="mb-4">
        <span className="text-[9px] font-headline font-black uppercase text-primary tracking-widest block mb-1">
          Mapa de Recorridos
        </span>
        <h4 className="font-headline font-black text-xs text-on-surface uppercase tracking-wide">
          Patagonia & Alto Valle Logístico
        </h4>
      </div>

      <div className="relative aspect-[4/3] w-full border border-outline/5 rounded-2xl bg-black/40 overflow-hidden">
        {/* CSS Animations inside SVG */}
        <svg viewBox="0 0 450 320" className="w-full h-full">
          <defs>
            <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a0d87a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#a0d87a" stopOpacity="0" />
            </radialGradient>
          </defs>

          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: -20;
              }
            }
            @keyframes pulse {
              0% {
                transform: scale(1);
                opacity: 0.9;
              }
              100% {
                transform: scale(2.2);
                opacity: 0;
              }
            }
            .inactive-path {
              stroke: #323539;
              stroke-width: 2;
              fill: none;
              stroke-dasharray: 4 4;
              opacity: 0.4;
            }
            .active-route-path {
              stroke: #a0d87a;
              stroke-width: 3.5;
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dasharray: 8 4;
              animation: dash 1.2s linear infinite;
              filter: drop-shadow(0 0 4px rgba(160, 216, 122, 0.6));
            }
            .node-pulse {
              transform-origin: center;
              animation: pulse 1.8s cubic-bezier(0.24, 0, 0.38, 1) infinite;
            }
          `}</style>

          {/* Grid lines background */}
          <g opacity="0.05" stroke="#ffffff" strokeWidth="0.5">
            <line x1="50" y1="0" x2="50" y2="320" />
            <line x1="100" y1="0" x2="100" y2="320" />
            <line x1="150" y1="0" x2="150" y2="320" />
            <line x1="200" y1="0" x2="200" y2="320" />
            <line x1="250" y1="0" x2="250" y2="320" />
            <line x1="300" y1="0" x2="300" y2="320" />
            <line x1="350" y1="0" x2="350" y2="320" />
            <line x1="400" y1="0" x2="400" y2="320" />
            
            <line x1="0" y1="50" x2="450" y2="50" />
            <line x1="0" y1="100" x2="450" y2="100" />
            <line x1="0" y1="150" x2="450" y2="150" />
            <line x1="0" y1="200" x2="450" y2="200" />
            <line x1="0" y1="250" x2="450" y2="250" />
            <line x1="0" y1="300" x2="450" y2="300" />
          </g>

          {/* Render paths */}
          {Object.entries(mapPaths).map(([zoneName, nodesList]) => {
            const isActive = activeZone === zoneName;
            return (
              <path
                key={zoneName}
                d={getPathD(nodesList)}
                className={isActive ? 'active-route-path' : 'inactive-path'}
                transition="all 0.5s ease"
              />
            );
          })}

          {/* Render city nodes */}
          {mapNodes.map((node) => {
            const isSelected = selectedCity === node.id;
            const isInActiveZone = activeZone && mapPaths[activeZone]?.includes(node.id);
            
            return (
              <g 
                key={node.id} 
                className="cursor-pointer group"
                onClick={() => onNodeClick(node.id)}
              >
                {/* Glow ring around selected node */}
                {isSelected && (
                  <>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="12"
                      fill="url(#glowGrad)"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="10"
                      fill="none"
                      stroke="#a0d87a"
                      strokeWidth="1.5"
                      className="node-pulse"
                      style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                    />
                  </>
                )}

                {/* Node Dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? "6" : "4.5"}
                  fill={isSelected ? "#a0d87a" : isInActiveZone ? "#86bc61" : "#42493c"}
                  stroke="#111417"
                  strokeWidth="1.5"
                  className="transition-all duration-300 group-hover:fill-primary group-hover:scale-125"
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                />

                {/* City Label */}
                <text
                  x={node.x}
                  y={node.y - 10}
                  textAnchor="middle"
                  fill={isSelected ? "#a0d87a" : isInActiveZone ? "#e1e2e8" : "#8c9383"}
                  fontSize={isSelected ? "9" : "8"}
                  fontWeight={isSelected || isInActiveZone ? "bold" : "normal"}
                  className="pointer-events-none select-none tracking-tight font-sans transition-colors duration-300 group-hover:fill-white"
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 text-[10px] text-on-surface-variant/60 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Ruta Activa
        </span>
        <span className="italic">Haz clic en los nodos para buscar</span>
      </div>
    </div>
  );
}

export default function DeliveryCalendar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    orderNum: '',
    preferredDate: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Flattened list of all cities for search auto-suggestions
  const allCitiesList = useMemo(() => {
    const list: string[] = [];
    deliveryRoutes.forEach(r => {
      r.cities.forEach(c => {
        if (!list.includes(c)) list.push(c);
      });
    });
    return list.sort();
  }, []);

  const suggestions = useMemo(() => {
    if (!searchQuery) return [];
    return allCitiesList.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, allCitiesList]);

  const activeRoute = useMemo(() => {
    if (!selectedCity) return null;
    return deliveryRoutes.find(r => r.cities.includes(selectedCity)) || null;
  }, [selectedCity]);

  // Helper to check if route has delivery scheduled for today
  const isRouteActiveToday = (daysString: string) => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const dayMap: { [key: number]: string } = {
      1: 'lunes',
      2: 'martes',
      3: 'miércoles',
      4: 'jueves',
      5: 'viernes',
      6: 'sábado',
      0: 'domingo'
    };
    const todayName = dayMap[today];
    return daysString.toLowerCase().includes(todayName);
  };

  const calculateNextDeliveryDate = (daysString: string) => {
    const today = new Date();
    const resultDate = new Date();
    
    // Map Spanish days to week numbers (0 = Sunday, 1 = Monday, etc.)
    const dayMap: { [key: string]: number } = {
      'lunes': 1,
      'martes': 2,
      'miércoles': 3,
      'jueves': 4,
      'viernes': 5,
      'sábado': 6,
      'domingo': 0
    };

    const targetDays = daysString.toLowerCase().replace(' y ', ',').split(',').map(d => d.trim());
    const targetNumbers = targetDays.map(d => dayMap[d]).filter(n => n !== undefined);
    
    if (targetNumbers.length === 0) return 'A coordinar';

    let minDiff = 100;
    let targetNum = today.getDay();

    targetNumbers.forEach(num => {
      let diff = num - today.getDay();
      if (diff <= 0) diff += 7; // Next week
      if (diff < minDiff) {
        minDiff = diff;
        targetNum = num;
      }
    });

    resultDate.setDate(today.getDate() + minDiff);
    
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return resultDate.toLocaleDateString('es-AR', options);
  };

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    setSearchQuery(city);
    setFormData(prev => ({ ...prev, city }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // WhatsApp click handler
  const triggerWhatsApp = () => {
    const text = `Hola Aluvallé! Quisiera coordinar un reparto para mi obra.%0A%0A*Detalles:*%0A- *Nombre:* ${formData.name}%0A- *Teléfono:* ${formData.phone}%0A- *Localidad:* ${formData.city}%0A- *Nº Pedido/Obra:* ${formData.orderNum || 'No indicado'}%0A- *Fecha Preferida:* ${formData.preferredDate || 'Próximo disponible'}`;
    const waUrl = `https://wa.me/5492996087387?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-background relative min-h-screen text-on-surface-variant font-body">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <img
          src="/gallery/showroom.jpg"
          loading="lazy"
          className="bg-image-theme animate-slow-zoom"
          alt=""
        />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary mb-2 block">
            Logística & Distribución
          </span>
          <h1 className="font-headline text-4xl md:text-6xl font-black text-on-surface uppercase tracking-tight leading-none">
            Calendario de <span className="text-gradient">Repartos</span>
          </h1>
          <p className="font-body text-on-surface-variant text-sm mt-4 leading-relaxed">
            Coordinamos entregas semanales programadas a talleres, obras y distribuidores de carpinterías en todo el Alto Valle de Río Negro y Neuquén, zona centro y cordillera.
          </p>
        </div>

        {/* 2-Column Search & Map Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Search & Details */}
          <div className="lg:col-span-6 bg-surface-container-low/40 backdrop-blur-xl border border-outline/10 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="font-headline font-black text-sm uppercase text-on-surface mb-6 tracking-wider">
                ¿Cuándo entregamos en tu localidad?
              </h3>
              
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Ingresa tu ciudad (Ej: General Roca, Bariloche, Zapala...)"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedCity(null);
                  }}
                  className="w-full bg-surface-container-lowest/50 border border-outline/10 px-5 py-4 rounded-xl text-on-surface placeholder-on-surface/40 focus:outline-none focus:border-primary/50 transition-all text-sm"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface/40">
                  location_on
                </span>

                {/* Suggestions list */}
                <AnimatePresence>
                  {suggestions.length > 0 && !selectedCity && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 left-0 right-0 mt-2 bg-surface border border-outline/15 shadow-2xl max-h-56 overflow-y-auto rounded-xl overflow-hidden divide-y divide-outline/5"
                    >
                      {suggestions.map(city => (
                        <li
                          key={city}
                          onClick={() => handleSelectCity(city)}
                          className="px-5 py-3 hover:bg-primary/10 hover:text-primary text-xs uppercase tracking-wider font-bold cursor-pointer transition-colors"
                        >
                          {city}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Active Route Details Output */}
            <div className="mt-8 flex-grow">
              <AnimatePresence mode="wait">
                {activeRoute && selectedCity ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-6 border-t border-outline/10"
                  >
                    <span className="text-[9px] font-headline font-black uppercase text-primary tracking-widest block mb-2">
                      Ruta Encontrada: Zona {activeRoute.zone}
                    </span>
                    <div className="grid grid-cols-1 gap-4 text-xs">
                      <div className="bg-surface-container-lowest/50 p-4 rounded-xl border border-outline/5">
                        <span className="text-on-surface-variant/60 block mb-1">Días de Reparto</span>
                        <span className="text-on-surface font-headline font-black text-sm uppercase tracking-wide">
                          {activeRoute.days}
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest/50 p-4 rounded-xl border border-outline/5">
                        <span className="text-on-surface-variant/60 block mb-1">Próxima entrega estimada</span>
                        <span className="text-primary font-headline font-black text-sm uppercase tracking-wide">
                          {calculateNextDeliveryDate(activeRoute.days)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-surface-container-lowest/50 p-4 rounded-xl border border-outline/5">
                          <span className="text-on-surface-variant/60 block mb-1">Frecuencia</span>
                          <span className="text-on-surface font-bold">{activeRoute.frequency}</span>
                        </div>
                        <div className="bg-surface-container-lowest/50 p-4 rounded-xl border border-outline/5">
                          <span className="text-on-surface-variant/60 block mb-1">Ventana Horaria</span>
                          <span className="text-on-surface font-bold">{activeRoute.timeWindow}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] text-on-surface-variant/70 italic mt-4 leading-relaxed">
                      * {activeRoute.description} Los repartos se efectúan con vehículos propios acondicionados para perfiles de hasta 6.5 metros de largo.
                    </p>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col justify-center items-center text-center text-on-surface-variant/40 py-12">
                    <span className="material-symbols-outlined text-4xl mb-2">info</span>
                    <p className="text-xs max-w-xs">Selecciona tu localidad arriba o haz clic en los nodos del mapa de la derecha para ver los detalles de tu próximo reparto.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Mini-Map */}
          <div className="lg:col-span-6 flex">
            <RouteMiniMap 
              activeZone={activeRoute ? activeRoute.zone : null}
              selectedCity={selectedCity}
              onNodeClick={handleSelectCity}
            />
          </div>
        </section>

        {/* Weekly Timeline Schedule Grid */}
        <section className="mb-28">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2 block">
              Esquema Organizativo
            </span>
            <h2 className="text-2xl md:text-3xl font-headline font-black text-on-surface uppercase">
              Agenda de Repartos de la Semana
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {deliveryRoutes.map((route) => {
              const isToday = isRouteActiveToday(route.days);
              return (
                <div
                  key={route.zone}
                  className={`bg-surface-container-low/20 backdrop-blur-md p-6 border rounded-3xl flex flex-col justify-between shadow-lg hover:shadow-xl transition-all relative overflow-hidden ${
                    isToday 
                      ? 'border-primary/50 bg-primary/5 shadow-[0_0_25px_rgba(160,216,122,0.15)] ring-1 ring-primary/30' 
                      : 'border-outline/10 hover:border-primary/20'
                  }`}
                >
                  {/* Today Badge */}
                  {isToday && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary/20 border border-primary/30 text-primary px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                      <span className="text-[8px] font-headline font-black uppercase tracking-wider">Hoy</span>
                    </div>
                  )}

                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      isToday ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <span className={`material-symbols-outlined text-xl ${isToday ? 'text-primary' : 'text-primary'}`}>
                        local_shipping
                      </span>
                    </div>
                    <span className="text-[8px] font-headline font-black uppercase tracking-wider text-primary block mb-1">
                      Zona {route.zone}
                    </span>
                    <h3 className="font-headline font-black uppercase text-xs text-on-surface mb-3 tracking-wide">
                      {route.days}
                    </h3>
                    <p className="text-[10px] text-on-surface-variant leading-relaxed mb-4">
                      {route.description}
                    </p>
                  </div>

                  <div className="border-t border-outline/5 pt-4 mt-4">
                    <span className="text-[8px] font-headline font-black uppercase tracking-widest text-on-surface/40 block mb-2">
                      Localidades que cubre:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {route.cities.map(city => (
                        <span key={city} className="text-[8px] px-2 py-0.5 bg-surface-container-highest/20 text-on-surface-variant rounded">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Request Slot Form */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-surface-container-low/30 backdrop-blur-xl border border-outline/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
            <div className="text-center mb-10">
              <span className="text-[9px] font-headline font-black uppercase text-primary tracking-widest mb-2 block">
                Logística Integrada
              </span>
              <h2 className="font-headline text-2xl md:text-3xl font-black text-on-surface uppercase">
                Coordinar Entrega
              </h2>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                Completa el formulario para reservar tu lugar en el próximo camión de reparto.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[9px] font-headline font-black uppercase tracking-wider text-on-surface">Nombre Completo / Empresa *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-surface-container-lowest/50 border border-outline/10 px-4 py-3 rounded-lg text-on-surface placeholder-on-surface/30 focus:outline-none focus:border-primary/50"
                    placeholder="Tu nombre o Razón Social"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[9px] font-headline font-black uppercase tracking-wider text-on-surface">Teléfono de Contacto *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-surface-container-lowest/50 border border-outline/10 px-4 py-3 rounded-lg text-on-surface placeholder-on-surface/30 focus:outline-none focus:border-primary/50"
                    placeholder="Ej: +54 9 299 1234567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="city-form" className="text-[9px] font-headline font-black uppercase tracking-wider text-on-surface">Localidad de Obra / Taller *</label>
                  <input
                    type="text"
                    id="city-form"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="bg-surface-container-lowest/50 border border-outline/10 px-4 py-3 rounded-lg text-on-surface placeholder-on-surface/30 focus:outline-none focus:border-primary/50"
                    placeholder="Ciudad a despachar"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="orderNum" className="text-[9px] font-headline font-black uppercase tracking-wider text-on-surface">Nº Pedido / Obra</label>
                  <input
                    type="text"
                    id="orderNum"
                    name="orderNum"
                    value={formData.orderNum}
                    onChange={handleInputChange}
                    className="bg-surface-container-lowest/50 border border-outline/10 px-4 py-3 rounded-lg text-on-surface placeholder-on-surface/30 focus:outline-none focus:border-primary/50"
                    placeholder="Opcional"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="preferredDate" className="text-[9px] font-headline font-black uppercase tracking-wider text-on-surface">Fecha o Rango de Reparto Preferido</label>
                <input
                  type="text"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="bg-surface-container-lowest/50 border border-outline/10 px-4 py-3 rounded-lg text-on-surface placeholder-on-surface/30 focus:outline-none focus:border-primary/50"
                  placeholder="Ej: Próxima semana / Primera quincena de Julio"
                />
              </div>

              <div className="pt-4">
                {!formSubmitted ? (
                  <button
                    type="submit"
                    className="btn-gradient w-full py-4 rounded-xl text-center text-[10px] font-headline font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                  >
                    Confirmar Datos y Enviar
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-center text-primary font-bold">
                      ¡Formulario completado correctamente!
                    </div>
                    <button
                      type="button"
                      onClick={triggerWhatsApp}
                      className="bg-green-600 hover:bg-green-700 text-white w-full py-4 rounded-xl text-center text-[10px] font-headline font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Enviar WhatsApp para Coordinar
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

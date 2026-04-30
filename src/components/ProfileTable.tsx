import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Info, Calculator, Check } from 'lucide-react';
import { useCalculator } from '../context/CalculatorContext';

interface Profile {
  code: string;
  weight: string;
  txp?: string;
  description: string;
  page?: string;
  shape?: string;
  technicalDetails?: {
    dimensions: string;
    applications: string[];
    sketch: React.ReactNode;
  };
}

interface ProfileTableProps {
  systemName: string;
  profiles: Profile[];
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}

const ShapeIcon: React.FC<{ shape?: string }> = ({ shape }) => {
  const getPath = () => {
    switch (shape) {
      case 'marco': return 'M 10,10 L 90,10 L 90,90 L 75,90 L 75,25 L 10,25 Z';
      case 'hoja': return 'M 20,10 L 80,10 L 80,30 L 60,30 L 60,70 L 80,70 L 80,90 L 20,90 Z';
      case 'zocalo': return 'M 10,30 L 90,30 L 90,70 L 10,70 Z M 20,40 L 80,40 L 80,60 L 20,60 Z';
      case 'contravidrio': return 'M 30,30 L 70,30 L 70,70 L 60,70 L 60,40 L 30,40 Z';
      case 'parante': return 'M 30,10 L 70,10 L 70,90 L 30,90 Z M 40,20 L 60,20 L 60,80 L 40,80 Z';
      case 'travesaño': return 'M 10,35 L 90,35 L 90,65 L 10,65 Z M 15,40 L 85,40 L 85,60 L 15,60 Z';
      case 'acople': return 'M 10,45 L 30,45 L 30,10 L 70,10 L 70,45 L 90,45 L 90,55 L 70,55 L 70,90 L 30,90 L 30,55 L 10,55 Z';
      case 'contramarco': return 'M 10,80 C 10,20 90,20 90,80 L 80,80 C 80,30 20,30 20,80 Z';
      case 'premarco': return 'M 10,10 L 90,10 L 90,30 L 25,30 L 25,90 L 10,90 Z';
      case 'bisagra': return 'M 40,10 L 60,10 L 60,40 L 90,40 L 90,60 L 60,60 L 60,90 L 40,90 L 40,60 L 10,60 L 10,40 L 40,40 Z';
      case 'tubo': return 'M 10,10 L 90,10 L 90,90 L 10,90 Z M 20,20 L 80,20 L 80,80 L 20,80 Z';
      case 'guia': return 'M 10,20 L 30,20 L 30,80 L 70,80 L 70,20 L 90,20 L 90,90 L 10,90 Z';
      case 'mosquitero': return 'M 20,20 L 80,20 L 80,80 L 20,80 Z M 30,30 L 70,30 L 70,70 L 30,70 Z';
      case 'accesorio': return 'M 40,40 L 60,40 L 60,60 L 40,60 Z';
      case 'botaagua': return 'M 10,80 L 90,80 L 70,20 L 50,20 L 10,80 Z';
      case 'umbral': return 'M 10,90 L 90,90 L 90,70 L 70,70 L 70,80 L 30,80 L 30,70 L 10,70 Z';
      case 'goteron': return 'M 20,20 L 20,80 L 80,80 L 50,20 Z';
      case 'varilla': return 'M 10,45 L 90,45 L 90,55 L 10,55 Z';
      case 'inversor': return 'M 10,30 L 30,30 L 30,10 L 70,10 L 70,30 L 90,30 L 90,90 L 70,90 L 70,70 L 30,70 L 30,90 L 10,90 Z';
      case 'traslapo': return 'M 30,10 L 30,90 L 45,90 L 45,50 L 55,50 L 55,90 L 70,90 L 70,10 Z';
      case 'junta': return 'M 20,10 L 20,80 L 50,80 L 50,40 L 80,40 L 80,10 L 70,10 L 70,30 L 50,30 L 50,10 Z';
      case 'complemento': return 'M 20,20 L 80,20 L 80,50 L 60,50 L 60,35 L 40,35 L 40,50 L 20,50 Z';
      case 'encuentro-4-hojas': return 'M 10,40 L 40,40 L 40,10 L 60,10 L 60,40 L 90,40 L 90,60 L 60,60 L 60,90 L 40,90 L 40,60 L 10,60 Z M 45,45 L 55,45 L 55,55 L 45,55 Z';
      case 'encuentro': return 'M 20,10 L 40,10 L 40,90 L 20,90 Z M 60,10 L 80,10 L 80,90 L 60,90 Z M 40,45 L 60,45 L 60,55 L 40,55 Z';
      default: return 'M 20,20 L 80,20 L 80,80 L 20,80 Z';
    }
  };


  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-[#a0d87a] stroke-[2] opacity-80 group-hover:opacity-100 transition-all">
      <path d={getPath()} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const ProfileDetailDrawer: React.FC<{ profile: Profile | null; onClose: () => void }> = ({ profile, onClose }) => {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md bg-surface h-full shadow-2xl border-l border-outline/10 p-8 overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
          title="Cerrar detalles"
          aria-label="Cerrar detalles del perfil"
        >
          <ChevronUp className="w-6 h-6 rotate-90" />
        </button>

        <div className="mb-10 pt-10">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Ficha Técnica de Perfil</span>
          <h2 className="text-4xl font-bold text-on-surface uppercase tracking-tighter mb-2">Cod. {profile.code}</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">{profile.description}</p>
        </div>

        <div className="bg-surface-container/30 border border-outline/10 p-8 flex items-center justify-center mb-8 rounded-2xl">
          <div className="w-full aspect-square text-primary">
            {profile.technicalDetails?.sketch || (
              <div className="flex flex-col items-center gap-4 opacity-40">
                <ShapeIcon shape={profile.shape} />
                <span className="text-[10px] uppercase tracking-widest text-center">Boceto no disponible<br/>para este código</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 border border-outline/5 rounded-xl">
              <p className="text-on-surface-variant text-[10px] uppercase font-bold mb-1">Peso Nominal</p>
              <p className="text-on-surface font-bold">{profile.weight} Kg/m</p>
            </div>
            <div className="bg-surface-container-low p-4 border border-outline/5 rounded-xl">
              <p className="text-on-surface-variant text-[10px] uppercase font-bold mb-1">Dimensiones</p>
              <p className="text-on-surface font-bold">{profile.technicalDetails?.dimensions || 'Consultar'}</p>
            </div>
          </div>

          <div>
            <h4 className="text-on-surface text-xs uppercase font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary" />
              Aplicaciones Técnicas
            </h4>
            <ul className="space-y-3">
              {(profile.technicalDetails?.applications || ['Uso general en sistemas de carpintería tradicional.']).map((app, i) => (
                <li key={i} className="text-on-surface-variant text-xs flex items-start gap-3">
                  <span className="text-primary mt-0.5">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileTable: React.FC<ProfileTableProps> = ({ systemName, profiles, title, subtitle, actions }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const { items, addItem } = useCalculator();
  
  // Create a Set of added codes for quick lookup
  const addedCodes = useMemo(() => new Set(items.map(item => item.profile.code)), [items]);

  return (
    <div className="relative">
      <ProfileDetailDrawer profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
      
      <div className="w-full bg-surface border border-outline/10 shadow-xl overflow-hidden mt-16 rounded-[2rem]">
        <div className="bg-surface-container-low px-8 py-8 border-b border-outline/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="max-w-2xl">
            <h3 className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tight">{title || 'Catálogo de Perfiles'}</h3>
            {subtitle ? (
               <p className="text-on-surface-variant text-sm leading-relaxed mt-2">{subtitle}</p>
            ) : (
               <p className="font-label text-primary text-[10px] uppercase tracking-widest mt-1">
                 {systemName} — {profiles.length} perfiles
               </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {actions && (
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {actions}
              </div>
            )}
            <div className="flex items-center justify-center sm:justify-start gap-4 text-on-surface-variant text-[10px] uppercase tracking-widest bg-surface-container-high/50 px-6 py-3 rounded-full border border-outline/5 w-full sm:w-auto">
              <span className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/40"></span> T.xP.: Tiras por Paquete
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span> Largo: 6150mm
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-auto max-h-[60vh] md:max-h-[70vh]">
          <table className="w-full text-left border-collapse relative">
            <thead className="sticky top-0 bg-surface-container-high z-10">
              <tr className="bg-surface-container-highest/30 text-primary text-[11px] uppercase tracking-widest font-bold">
                <th className="px-8 py-5 border-b border-outline/5">Código</th>
                <th className="px-6 py-5 border-b border-outline/5">Peso</th>
                <th className="px-6 py-5 border-b border-outline/5">T.xP.</th>
                <th className="px-6 py-5 border-b border-outline/5">Descripción</th>
                <th className="px-6 py-5 border-b border-outline/5 text-center">Forma</th>
                <th className="px-6 py-5 border-b border-outline/5 text-center">Acciones</th>
              </tr>
            </thead>
            {isExpanded && (
              <tbody className="font-body text-sm">
                {profiles.map((profile, index) => {
                  const isAdded = addedCodes.has(profile.code);
                  return (
                    <tr
                      key={profile.code + index}
                      className={`group transition-colors border-b border-outline/5 last:border-0 ${isAdded ? 'bg-primary/5' : 'hover:bg-primary/5'}`}
                    >
                      <td className={`px-8 py-6 font-bold transition-all duration-300 ${isAdded ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>{profile.code}</td>
                      <td className="px-6 py-6 text-on-surface-variant">{profile.weight}</td>
                      <td className="px-6 py-6 text-on-surface-variant">
                        <span className="bg-surface-container px-2.5 py-1.5 rounded-lg text-[10px] border border-outline/5 font-bold uppercase">{profile.txp}</span>
                      </td>
                      <td className="px-6 py-6 text-on-surface font-medium leading-relaxed max-w-xs">{profile.description}</td>
                      <td className="px-6 py-6 text-center">
                        <div className={`bg-surface-container-high/40 p-1.5 inline-block border transition-all rounded-xl ${isAdded ? 'border-primary/50' : 'border-outline/5 group-hover:border-primary/30'}`}>
                          <ShapeIcon shape={profile.shape} />
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => setSelectedProfile(profile)}
                            className="bg-surface-container-high/60 p-2.5 text-primary border border-outline/10 hover:bg-primary hover:text-on-primary transition-all rounded-xl shadow-sm"
                            title="Ver ficha técnica"
                            aria-label={`Ver ficha técnica del perfil ${profile.code}`}
                          >
                            <Info className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => !isAdded && addItem(profile)}
                            className={`p-2.5 border transition-all rounded-xl shadow-sm flex items-center justify-center ${
                              isAdded
                                ? 'bg-primary text-on-primary border-primary cursor-default'
                                : 'bg-surface-container-high/60 text-on-surface-variant border-outline/10 hover:border-primary hover:text-primary'
                            }`}
                            title={isAdded ? "Ya añadido a la calculadora" : "Añadir a calculadora de peso"}
                            aria-label={isAdded ? `Perfil ${profile.code} ya añadido` : `Añadir perfil ${profile.code} a calculadora`}
                          >
                            {isAdded ? (
                              <Check className="w-5 h-5 animate-in zoom-in duration-300" />
                            ) : (
                              <Calculator className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>

        {profiles.length > 0 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 py-8 bg-surface-container-low hover:bg-primary text-primary hover:text-on-primary font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-500 border-t border-outline/5"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                OCULTAR CATÁLOGO
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                VER CATÁLOGO DESGLOSADO
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileTable;

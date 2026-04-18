import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#0b0e12] h-full shadow-2xl border-l border-[#323539] p-8 overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 text-[#94979e] hover:text-white transition-colors">
          <ChevronUp className="w-6 h-6 rotate-90" />
        </button>

        <div className="mb-10 pt-10">
          <span className="text-[#a0d87a] font-bold text-xs uppercase tracking-[0.2em] mb-2 block">Ficha Técnica de Perfil</span>
          <h2 className="text-4xl font-bold text-white uppercase tracking-tighter mb-2">Cod. {profile.code}</h2>
          <p className="text-[#94979e] text-sm leading-relaxed">{profile.description}</p>
        </div>

        <div className="bg-[#111417] border border-[#323539]/30 p-8 flex items-center justify-center mb-8 rounded-lg">
          <div className="w-full aspect-square text-[#a0d87a]">
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
            <div className="bg-[#191c20] p-4 border border-[#323539]/20 rounded">
              <p className="text-[#5c6166] text-[10px] uppercase font-bold mb-1">Peso Nominal</p>
              <p className="text-[#e1e2e8] font-bold">{profile.weight} Kg/m</p>
            </div>
            <div className="bg-[#191c20] p-4 border border-[#323539]/20 rounded">
              <p className="text-[#5c6166] text-[10px] uppercase font-bold mb-1">Dimensiones</p>
              <p className="text-[#e1e2e8] font-bold">{profile.technicalDetails?.dimensions || 'Consultar'}</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-[#a0d87a]" />
              Aplicaciones Técnicas
            </h4>
            <ul className="space-y-3">
              {(profile.technicalDetails?.applications || ['Uso general en sistemas de carpintería tradicional.']).map((app, i) => (
                <li key={i} className="text-[#94979e] text-xs flex items-start gap-3">
                  <span className="text-[#a0d87a] mt-0.5">•</span>
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

const ProfileTable: React.FC<ProfileTableProps> = ({ systemName, profiles }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const INITIAL_COUNT = 10;
  
  const displayedProfiles = isExpanded ? profiles : profiles.slice(0, INITIAL_COUNT);
  const hasMore = profiles.length > INITIAL_COUNT;

  return (
    <div className="relative">
      <ProfileDetailDrawer profile={selectedProfile} onClose={() => setSelectedProfile(null)} />
      
      <div className="w-full bg-[#111417] border border-[#323539]/30 shadow-2xl overflow-hidden mt-16">
        <div className="bg-[#191c20] px-8 py-6 border-b border-[#323539]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-tight">Índice de Perfiles</h3>
            <p className="font-label text-[#a0d87a] text-[10px] uppercase tracking-widest mt-1">
              {systemName} — {profiles.length} perfiles
            </p>
          </div>
          <div className="flex items-center gap-4 text-[#94979e] text-[10px] uppercase tracking-widest bg-black/20 px-4 py-2 rounded-full">
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a0d87a]"></span> T.xP.: Tiras por Paquete
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a0d87a]"></span> Largo: 6150mm
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/20 text-[#a0d87a] text-[11px] uppercase tracking-widest font-bold">
                <th className="px-8 py-4 border-b border-[#323539]/20">Código</th>
                <th className="px-6 py-4 border-b border-[#323539]/20">Peso</th>
                <th className="px-6 py-4 border-b border-[#323539]/20">T.xP.</th>
                <th className="px-6 py-4 border-b border-[#323539]/20">Descripción</th>
                <th className="px-6 py-4 border-b border-[#323539]/20 text-center">Forma</th>
                <th className="px-6 py-4 border-b border-[#323539]/20 text-center">Ficha</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm">
              {displayedProfiles.map((profile, index) => (
                <tr key={profile.code + index} className="group hover:bg-[#a0d87a]/5 transition-colors border-b border-[#323539]/10 last:border-0">
                  <td className="px-8 py-5 font-bold text-[#e1e2e8] group-hover:text-[#a0d87a] transition-colors">{profile.code}</td>
                  <td className="px-6 py-5 text-[#94979e]">{profile.weight}</td>
                  <td className="px-6 py-5 text-[#94979e]">
                    <span className="bg-[#191c20] px-2 py-1 rounded text-[10px] border border-[#323539]/30">{profile.txp}</span>
                  </td>
                  <td className="px-6 py-5 text-[#e1e2e8] font-medium leading-snug max-w-xs">{profile.description}</td>
                  <td className="px-6 py-5 text-center">
                    <div className="bg-black/40 p-1 inline-block border border-[#323539]/30 group-hover:border-[#a0d87a]/30 transition-colors">
                      <ShapeIcon shape={profile.shape} />
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button 
                      onClick={() => setSelectedProfile(profile)}
                      className="bg-[#191c20] p-2 text-[#a0d87a] border border-[#323539]/30 hover:bg-[#a0d87a] hover:text-[#0b0e12] transition-all rounded"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {hasMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-6 bg-[#191c20] hover:bg-[#a0d87a] text-[#a0d87a] hover:text-[#0b0e12] font-bold uppercase text-[10px] tracking-[0.2em] transition-all flex items-center justify-center gap-2"
          >
            {isExpanded ? <><ChevronUp className="w-4 h-4" /> Mostrar Menos</> : <><ChevronDown className="w-4 h-4" /> Ver Catálogo Completo</>}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileTable;

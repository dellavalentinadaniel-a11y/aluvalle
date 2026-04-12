import React from 'react';

interface Profile {
  code: string;
  weight: string;
  txp: string;
  description: string;
  page: string;
  shape?: string;
}

interface ProfileTableProps {
  systemName: string;
  profiles: Profile[];
}

const ShapeIcon: React.FC<{ shape?: string }> = ({ shape }) => {
  const getPath = () => {
    switch (shape) {
      case 'marco':
        return "M 10,10 L 90,10 L 90,90 L 75,90 L 75,25 L 10,25 Z";
      case 'hoja':
        return "M 20,10 L 80,10 L 80,30 L 60,30 L 60,70 L 80,70 L 80,90 L 20,90 Z";
      case 'zocalo':
        return "M 10,30 L 90,30 L 90,70 L 10,70 Z M 20,40 L 80,40 L 80,60 L 20,60 Z";
      case 'contravidrio':
        return "M 30,30 L 70,30 L 70,70 L 60,70 L 60,40 L 30,40 Z";
      case 'parante':
        return "M 30,10 L 70,10 L 70,90 L 30,90 Z M 40,20 L 60,20 L 60,80 L 40,80 Z";
      case 'travesaño':
        return "M 10,35 L 90,35 L 90,65 L 10,65 Z M 15,40 L 85,40 L 85,60 L 15,60 Z";
      case 'acople':
        return "M 10,45 L 30,45 L 30,10 L 70,10 L 70,45 L 90,45 L 90,55 L 70,55 L 70,90 L 30,90 L 30,55 L 10,55 Z";
      case 'contramarco':
        return "M 10,80 C 10,20 90,20 90,80 L 80,80 C 80,30 20,30 20,80 Z";
      case 'premarco':
        return "M 10,10 L 90,10 L 90,30 L 25,30 L 25,90 L 10,90 Z";
      case 'bisagra':
        return "M 40,10 L 60,10 L 60,40 L 90,40 L 90,60 L 60,60 L 60,90 L 40,90 L 40,60 L 10,60 L 10,40 L 40,40 Z";
      case 'tubo':
        return "M 10,10 L 90,10 L 90,90 L 10,90 Z M 20,20 L 80,20 L 80,80 L 20,80 Z";
      case 'guia':
        return "M 10,20 L 30,20 L 30,80 L 70,80 L 70,20 L 90,20 L 90,90 L 10,90 Z";
      case 'mosquitero':
        return "M 20,20 L 80,20 L 80,80 L 20,80 Z M 30,30 L 70,30 L 70,70 L 30,70 Z";
      case 'accesorio':
        return "M 40,40 L 60,40 L 60,60 L 40,60 Z";
      case 'botaagua':
        return "M 10,80 L 90,80 L 70,20 L 50,20 L 10,80 Z";
      case 'umbral':
        return "M 10,90 L 90,90 L 90,70 L 70,70 L 70,80 L 30,80 L 30,70 L 10,70 Z";
      case 'goteron':
        return "M 20,20 L 20,80 L 80,80 L 50,20 Z";
      case 'varilla':
        return "M 10,45 L 90,45 L 90,55 L 10,55 Z";
      default:
        return "M 20,20 L 80,20 L 80,80 L 20,80 Z";
    }
  };

  return (
    <svg viewBox="0 0 100 100" className="w-10 h-10 fill-none stroke-[#a0d87a] stroke-[2] opacity-80 group-hover:opacity-100 transition-all">
      <path d={getPath()} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const ProfileTable: React.FC<ProfileTableProps> = ({ systemName, profiles }) => {
  return (
    <div className="w-full bg-[#111417] border border-[#323539]/30 shadow-2xl overflow-hidden mt-16">
      <div className="bg-[#191c20] px-8 py-6 border-b border-[#323539]/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-tight">Índice de Perfiles</h3>
          <p className="font-label text-[#a0d87a] text-[10px] uppercase tracking-widest mt-1">{systemName}</p>
        </div>
        <div className="flex items-center gap-4 text-[#94979e] text-[10px] uppercase tracking-widest bg-black/20 px-4 py-2 rounded-full">
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a0d87a]"></span>
                T.xP.: Tiras por Paquete
            </span>
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a0d87a]"></span>
                Largo: 6150mm
            </span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black/20 text-[#a0d87a] text-[11px] uppercase tracking-widest font-bold">
              <th className="px-8 py-4 border-b border-[#323539]/20">Código</th>
              <th className="px-6 py-4 border-b border-[#323539]/20">Peso (Kg/m)</th>
              <th className="px-6 py-4 border-b border-[#323539]/20">T. x P.</th>
              <th className="px-6 py-4 border-b border-[#323539]/20">Descripción</th>
              <th className="px-6 py-4 border-b border-[#323539]/20">Forma</th>
              <th className="px-8 py-4 border-b border-[#323539]/20 text-right">Pág.</th>
            </tr>
          </thead>
          <tbody className="font-body text-sm">
            {profiles.map((profile, index) => (
              <tr 
                key={profile.code + index} 
                className="group hover:bg-[#a0d87a]/5 transition-colors border-b border-[#323539]/10 last:border-0"
              >
                <td className="px-8 py-5 font-bold text-[#e1e2e8] group-hover:text-[#a0d87a] transition-colors">
                  {profile.code}
                </td>
                <td className="px-6 py-5 text-[#94979e]">
                  {profile.weight}
                </td>
                <td className="px-6 py-5 text-[#94979e]">
                   <span className="bg-[#191c20] px-3 py-1 rounded text-[10px] border border-[#323539]/30">
                     {profile.txp}
                   </span>
                </td>
                <td className="px-6 py-5 text-[#e1e2e8] font-medium leading-snug max-w-md">
                  {profile.description}
                </td>
                <td className="px-6 py-5">
                   <div className="bg-black/40 p-1 inline-block border border-[#323539]/30 group-hover:border-[#a0d87a]/30 transition-colors">
                     <ShapeIcon shape={profile.shape} />
                   </div>
                </td>
                <td className="px-8 py-5 text-[#94979e] text-right font-bold group-hover:text-white">
                  {profile.page}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-8 bg-black/10 border-t border-[#323539]/20">
        <p className="text-[10px] text-[#5c6166] uppercase tracking-[0.1em] font-medium">
          Tolerancia en Peso +/- 10% | Tolerancia largo +10 mm -0 mm | Referencia (a): Largo de la barra 6150 milímetros
        </p>
      </div>
    </div>
  );
};

export default ProfileTable;

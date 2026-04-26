import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, Filter, ArrowUpDown } from 'lucide-react';
import type { Profile } from '../data/profiles';

interface ProfileTableProps {
  profiles: Profile[];
  title?: string;
}

export default function ProfileTable({ profiles, title = 'Catálogo de Perfiles' }: ProfileTableProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const categories = ['Todas', ...Array.from(new Set(profiles.map(p => p.category)))];

  const filteredAndSortedProfiles = [...profiles]
    .filter(p => selectedCategory === 'Todas' || p.category === selectedCategory)
    .filter(p => p.description.toLowerCase().includes(searchQuery.toLowerCase()) || p.code.includes(searchQuery))
    .sort((a, b) => {
      if (sortOrder === 'default') return 0;
      const weightA = parseFloat(a.weight.replace(',', '.'));
      const weightB = parseFloat(b.weight.replace(',', '.'));
      return sortOrder === 'asc' ? weightA - weightB : weightB - weightA;
    });

  return (
    <div className="w-full">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-alu-dark mb-6">{title}</h3>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar perfil..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white border border-gray-200 text-alu-dark text-sm rounded-xl focus:ring-alu-green focus:border-alu-green block w-full pl-10 p-2.5 outline-none shadow-sm"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Filter size={18} className="text-alu-gray hidden sm:block" />
              <select
                title="Filtrar por categoría"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-gray-200 text-alu-dark text-sm rounded-xl focus:ring-alu-green focus:border-alu-green block w-full p-2.5 outline-none shadow-sm"
              >
                {categories.map(c => <option key={c} value={c}>{c === 'Todas' ? 'Todas las categorías' : c}</option>)}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <ArrowUpDown size={18} className="text-alu-gray hidden sm:block" />
            <select
              title="Ordenar por peso"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-white border border-gray-200 text-alu-dark text-sm rounded-xl focus:ring-alu-green focus:border-alu-green block w-full p-2.5 outline-none shadow-sm"
            >
              <option value="default">Orden por defecto</option>
              <option value="asc">Peso: Menor a Mayor</option>
              <option value="desc">Peso: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-alu-dark text-white">
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Código</th>
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Descripción</th>
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Peso (kg/m)</th>
              <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-right">Categoría</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <AnimatePresence mode="popLayout">
              {filteredAndSortedProfiles.map((profile) => (
                <motion.tr
                  key={profile.code}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setExpandedCode(expandedCode === profile.code ? null : profile.code)}
                >
                  <td className="px-8 py-4 font-mono font-bold text-alu-green">{profile.code}</td>
                  <td className="px-8 py-4 text-alu-dark font-medium">{profile.description}</td>
                  <td className="px-8 py-4 text-alu-gray">{profile.weight}</td>
                  <td className="px-8 py-4 text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-alu-gray">
                      {profile.category}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {filteredAndSortedProfiles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron perfiles coincidentes.</p>
        </div>
      )}
    </div>
  );
}

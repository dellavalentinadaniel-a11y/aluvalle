import React from 'react';

export interface Profile {
  code: string;
  weight: string;
  txp?: string;
  description: string;
  page?: string;
  shape?: 'marco' | 'hoja' | 'zocalo' | 'contravidrio' | 'parante' | 'travesaño' | 'acople' | 'contramarco' | 'premarco' | 'bisagra' | 'tubo' | 'guia' | 'mosquitero' | 'accesorio' | 'botaagua' | 'umbral' | 'goteron' | 'varilla' | 'omega' | 'inversor';
  technicalDetails?: {
    dimensions: string;
    applications: string[];
    sketch: React.ReactNode;
  };
}

export const traditionalProfiles: Profile[] = [
  { 
    code: "5", 
    weight: "0,81", 
    txp: "4", 
    description: "Zócalo Alto para Puerta Corrediza", 
    page: "6, 7, 9, 16", 
    shape: 'zocalo',
    technicalDetails: {
      dimensions: "75.2mm x 19mm",
      applications: [
        "Base inferior para hojas de Puerta Corrediza Línea Liviana y 900.",
        "Compatible con Opción de Armado Mix A, B y C.",
        "Utilizado en encuentros de Postigón y Puerta de Rebatir de 24.5 mm."
      ],
      sketch: (
        <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="10" y="10" width="80" height="20" rx="1" />
          <path d="M 30,10 L 30,30 M 70,10 L 70,30 M 10,20 L 90,20" opacity="0.3" strokeDasharray="2 2" />
          <path d="M 25,10 L 25,30 M 75,10 L 75,30" />
        </svg>
      )
    }
  },
  { 
    code: "7", 
    weight: "0,36", 
    txp: "12", 
    description: "Encuentro Central para Ventana y Puerta Corrediza de 4 Hojas", 
    page: "10", 
    shape: 'parante',
    technicalDetails: {
      dimensions: "31mm x 20mm",
      applications: [
        "Perfil de cierre central para tipologías de 4 hojas corredizas.",
        "Asegura la estanqueidad en el cruce central mediante felpas coextruídas.",
        "Compatible con Marcos 101, 901, 917 y 921."
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 30,10 L 70,10 L 70,25 L 55,25 L 55,35 L 70,35 L 70,50 L 30,50 L 30,35 L 45,35 L 45,25 L 30,25 Z" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
        </svg>
      )
    }
  },
  { 
    code: "11", 
    weight: "0,38", 
    txp: "8", 
    description: "Marco para Ventana Corrediza", 
    page: "10", 
    shape: 'marco',
    technicalDetails: {
      dimensions: "45.5mm x 29.5mm",
      applications: [
        "Marco perimetral básico para ventanas corredizas de pequeña escala.",
        "Utilizado como guía superior en sistemas combinados.",
        "Aloja el perfil 120 (Guía de Cortina) mediante acople mecánico."
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 20,15 L 80,15 L 80,45 L 70,45 L 70,25 L 30,25 L 30,45 L 20,45 Z" />
          <rect x="45" y="15" width="10" height="5" />
        </svg>
      )
    }
  },
  { 
    code: "13", 
    weight: "0,64", 
    txp: "6", 
    description: "Umbral para Ventana y Puerta Corrediza Línea Liviana", 
    page: "6", 
    shape: 'umbral',
    technicalDetails: {
      dimensions: "80.4mm x 16.9mm",
      applications: [
        "Perfil inferior (piso) con pistas de rodamiento integradas.",
        "Diseñado para descarga de agua frontal.",
        "Superficie transitable de baja altura para evitar tropiezos."
      ],
      sketch: (
        <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 10,30 L 90,30 L 90,25 L 75,25 L 75,15 L 65,15 L 65,25 L 35,25 L 35,15 L 25,15 L 25,25 L 10,25 Z" />
          <path d="M 30,25 L 30,15 M 70,25 L 70,15" strokeWidth="1" />
        </svg>
      )
    }
  },
  { 
    code: "16 (a)", 
    weight: "0,31", 
    txp: "8", 
    description: "Batiente para Puerta de Rebatir", 
    page: "11, 12", 
    shape: 'hoja',
    technicalDetails: {
      dimensions: "46.2mm x 33mm",
      applications: [
        "Perfil de contacto lateral para hojas de rebatir.",
        "Aloja el burlete de contacto para cierre hermético.",
        "Compatible con Puerta Tradicional y Puerta con Bisagra de Encolizar."
      ],
      sketch: (
        <svg viewBox="0 0 100 80" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 20,10 L 60,10 C 75,10 75,40 60,40 L 20,40 L 20,70 L 35,70 L 35,40" />
          <path d="M 20,10 L 20,40" strokeWidth="3" opacity="0.5" />
        </svg>
      )
    }
  },
  { code: "22", weight: "0,23", txp: "16", description: "Porta Felpa Zócalo", page: "14", shape: 'accesorio' },
  { code: "23", weight: "0,50", txp: "8", description: "Zócalo para Ventana Corrediza - Línea Combinada", page: "9", shape: 'zocalo' },
  { code: "26", weight: "0,27", txp: "10", description: "Encuentro Central para Ventana y Puerta Corrediza - Línea Combinada", page: "9", shape: 'parante' },
  { code: "27", weight: "0,18", txp: "20", description: "Encuentro Central para 4 Hojas con Perfil 481 de Parante Lateral", page: "9", shape: 'parante' },
  { code: "34", weight: "0,14", txp: "20", description: "Contravidrio", page: "11, 12", shape: 'contravidrio' },
  { code: "43", weight: "1,17", txp: "2", description: "Columna a 45º", page: "25", shape: 'parante' },
  { code: "60", weight: "0,25", txp: "12", description: "Mosquitero para Ventana y Corrediza Línea Liviana", page: "21", shape: 'mosquitero' },
  { code: "61", weight: "0,17", txp: "20", description: "Mosquitero Fijo", page: "21", shape: 'mosquitero' },
  { code: "66", weight: "0,15", txp: "20", description: "Tapacanto para Puerta de Rebatir", page: "11", shape: 'accesorio' },
  { code: "93", weight: "0,28", txp: "12", description: "Batiente para Puerta de Rebatir", page: "16", shape: 'hoja' },
  { code: "101", weight: "0,66", txp: "6", description: "Marco para Ventana y Puerta Corrediza - Línea Liviana", page: "6", shape: 'marco' },
  { code: "103", weight: "0,46", txp: "8", description: "Parante Lateral para Ventana y Puerta Corrediza - Línea Liviana y Línea 900", page: "6, 7", shape: 'parante' },
  { code: "104", weight: "0,42", txp: "8", description: "Parante Central para Ventana y Puerta Corrediza - Línea Liviana y Línea 900", page: "6, 7", shape: 'parante' },
  { code: "105", weight: "0,32", txp: "10", description: "Mosquitero para Ventana y Puerta Corrediza", page: "21", shape: 'mosquitero' },
  { code: "108", weight: "0,47", txp: "6", description: "Mosquitero para Ventana y Puerta Corrediza, y Puerta Mosquitero", page: "21", shape: 'mosquitero' },
  { code: "120 (a)", weight: "0,37", txp: "12", description: "Guía para Cortina Común", page: "10", shape: 'guia' },
  { code: "122", weight: "0,29", txp: "8", description: "Tapacinta Móvil", page: "22", shape: 'accesorio' },
  { code: "190", weight: "0,45", txp: "8", description: "Travesaño de Mosquitero", page: "21", shape: 'travesaño' },
  { code: "271 (a)", weight: "0,54", txp: "4", description: "Marco para Puerta de Rebatir - Línea Recta, sin Contravidrio", page: "13", shape: 'marco' },
  { code: "272", weight: "1,05", txp: "3", description: "Travesaño para Puerta de Rebatir - Línea Recta, sin Contravidrio", page: "13", shape: 'travesaño' },
  { code: "273 (a)", weight: "0,96", txp: "3", description: "Parante para Puerta de Rebatir - Línea Recta, sin Contravidrio", page: "13", shape: 'parante' },
  { code: "275 (a)", weight: "0,29", txp: "8", description: "Batiente para Puerta de Rebatir - Línea Recta, sin Contravidrio", page: "13", shape: 'hoja' },
  { code: "289 (a)", weight: "0,59", txp: "4", description: "Marco Postigón", page: "15", shape: 'marco' },
  { code: "290", weight: "0,44", txp: "8", description: "Hoja de Raja", page: "15", shape: 'hoja' },
  { code: "291", weight: "0,35", txp: "12", description: "Marco Postigón", page: "15", shape: 'marco' },
  { code: "427 (a)", weight: "0,58", txp: "6", description: "Marco para Puerta de Rebatir - Línea Tradicional", page: "11", shape: 'marco' },
  { code: "428 (a)", weight: "0,98", txp: "3", description: "Parante para Puerta de Rebatir - Línea Tradicional", page: "11", shape: 'parante' },
  { code: "429", weight: "1,01", txp: "3", description: "Travesaño para Puerta de Rebatir - Línea Tradicional", page: "11, 12", shape: 'travesaño' },
  { code: "432 (a)", weight: "0,79", txp: "6", description: "Marco para Puerta de Rebatir - Línea con Bisagra de Encolizar", page: "12", shape: 'marco' },
  { code: "433 (a)", weight: "1,13", txp: "3", description: "Parante para Puerta de Rebatir - Línea con Bisagra de Encolizar", page: "12", shape: 'parante' },
  { code: "448", weight: "0,30", txp: "10", description: "Tablilla de Postigón", page: "16", shape: 'tubo' },
  { code: "449", weight: "0,26", txp: "10", description: "Tablilla de Postigón Recta", page: "16", shape: 'tubo' },
  { code: "453", weight: "0,45", txp: "8", description: "Acople", page: "25", shape: 'acople' },
  { code: "455", weight: "1,18", txp: "2", description: "Columna a 90º / 180º", page: "25", shape: 'parante' },
  { code: "462", weight: "0,45", txp: "8", description: "Parante de Postigón", page: "16", shape: 'parante' },
  { code: "463 (a)", weight: "0,56", txp: "4", description: "Parante de Postigón y Puerta de Rebatir de 24,5 mm.", page: "16", shape: 'parante' },
  { code: "470", weight: "0,27", txp: "8", description: "Perimetral de Vidrio Repartido", page: "22", shape: 'tubo' },
  { code: "471", weight: "0,32", txp: "8", description: "Central de Vidrio Repartido", page: "22", shape: 'tubo' },
  { code: "480", weight: "0,58", txp: "6", description: "Parante Central para Ventana y Puerta Corrediza - Línea Combinada", page: "9", shape: 'parante' },
  { code: "481", weight: "0,68", txp: "4", description: "Hoja para Ventana y Puerta Corrediza - Línea Combinada", page: "9", shape: 'hoja' },
  { code: "514 (a)", weight: "0,91", txp: "3", description: "Hoja para Puerta de Rebatir", page: "14", shape: 'hoja' },
  { code: "516 (a)", weight: "0,76", txp: "2", description: "Marco para Ventana Banderola, Ventana y Puerta de Rebatir y Oscilo-Batiente", page: "14", shape: 'marco' },
  { code: "518", weight: "1,00", txp: "4", description: "Refuerzo de Parante", page: "8", shape: 'parante' },
  { code: "552", weight: "0,86", txp: "3", description: "Travesaño de Hoja s/contravidrio", page: "14", shape: 'travesaño' },
  { code: "553", weight: "0,21", txp: "16", description: "Adaptador para D.V.H.", page: "25", shape: 'acople' },
  { code: "648 (a)", weight: "0,50", txp: "5", description: "Premarco de 55 mm", page: "23", shape: 'premarco' },
  { code: "673", weight: "0,39", txp: "6", description: "Marco para Paño Fijo de 31,5 mm.", page: "20", shape: 'marco' },
  { code: "702", weight: "0,81", txp: "4", description: "Inversor de Hoja.", page: "14", shape: 'inversor' },
  { code: "709 (a)", weight: "0,19", txp: "12", description: "Contramarco Curvo de 30 mm.", page: "24", shape: 'contramarco' },
  { code: "715 (a)", weight: "0,70", txp: "4", description: "Premarco de 77 mm", page: "23", shape: 'premarco' },
  { code: "723 (a)", weight: "0,26", txp: "8", description: "Contramarco Curvo de 45 mm.", page: "24", shape: 'contramarco' },
  { code: "746 (a)", weight: "0,18", txp: "12", description: "Contramarco Curvo de 33 mm.", page: "24", shape: 'contramarco' },
  { code: "901", weight: "0,75", txp: "6", description: "Marco para Ventana y Puerta Corrediza - Línea 900", page: "7, 8", shape: 'marco' },
  { code: "902", weight: "0,40", txp: "8", description: "Zócalo para Ventana Corrediza", page: "6, 7, 16", shape: 'zocalo' },
  { code: "907", weight: "0,59", txp: "6", description: "Marco para Paño Fijo", page: "19", shape: 'marco' },
  { code: "908", weight: "0,16", txp: "20", description: "Contravidrio", page: "18, 19, 20", shape: 'contravidrio' },
  { code: "909", weight: "0,16", txp: "20", description: "Contravidrio", page: "18, 19, 20", shape: 'contravidrio' },
  { code: "915", weight: "0,33", txp: "10", description: "Bisagra para Ventana Ventiluz y Banderola", page: "17, 18", shape: 'bisagra' },
  { code: "916", weight: "0,74", txp: "4", description: "Marco para Ventana Ventiluz y Banderola", page: "17, 18", shape: 'marco' },
  { code: "917", weight: "1,03", txp: "4", description: "Marco para Ventana y Puerta Corrediza - Línea 900 y Línea Tradicional", page: "7, 8", shape: 'marco' },
  { code: "918", weight: "0,51", txp: "8", description: "Hoja para Ventana Ventiluz", page: "17", shape: 'hoja' },
  { code: "919", weight: "0,53", txp: "8", description: "Hoja para Ventana Banderola", page: "18", shape: 'hoja' },
  { code: "921", weight: "1,00", txp: "4", description: "Marco Reforzado para Ventana y Puerta Corrediza - Línea Tradicional", page: "8", shape: 'marco' },
  { code: "952", weight: "0,28", txp: "8", description: "Porta - Contravidrio", page: "20", shape: 'contravidrio' },
  { code: "961", weight: "1,16", txp: "2", description: "Marco de 3 Guía para Ventana Corrediza", page: "10", shape: 'marco' },
  { code: "986", weight: "1,06", txp: "2", description: "Columna Curva a 90º", page: "25", shape: 'parante' },
  { code: "993", weight: "0,67", txp: "8", description: "Travesaño Angosto para Paño Fijo", page: "20", shape: 'travesaño' },
  { code: "994", weight: "0,96", txp: "3", description: "Travesaño Ancho para Paño Fijo", page: "19", shape: 'travesaño' }
];

export const mediterraneaProfiles: Profile[] = [
  { code: "108", weight: "0,47", txp: "6", description: "Mosquitero para Ventana y Puerta Corrediza", page: "3, 30", shape: 'mosquitero' },
  { code: "153 (a)", weight: "0,70", txp: "4", description: "Guía de Cortina Común", page: "3, 29", shape: 'guia' },
  { code: "154 (a)", weight: "1,02", txp: "4", description: "Guía de Cortina Regulable (Barrio)", page: "3, 29", shape: 'guia' },
  { code: "190", weight: "0,45", txp: "8", description: "Travesaño de Mosquitero", page: "3, 30", shape: 'travesaño' },
  { code: "200", weight: "0,15", txp: "20", description: "Bota Agua", page: "3, 9", shape: 'botaagua' },
  { code: "310 (a)", weight: "0,07", txp: "20", description: "Tapa Terminación Coplanar Marco", page: "3, 34", shape: 'accesorio' },
  { code: "380", weight: "0,22", txp: "20", description: "Contravidrio", page: "3, 26", shape: 'contravidrio' },
  { code: "405", weight: "0,72", txp: "4", description: "Hoja Perimetral para Vidrio Simple Ventana y Puerta Corrediza recta 61 mm", page: "3, 17", shape: 'hoja' },
  { code: "406", weight: "0,68", txp: "4", description: "Hoja Perimetral para D.V.H. Ventana y Puerta Corrediza recta 61 mm", page: "3, 17", shape: 'hoja' },
  { code: "500 (a)", weight: "2,17", txp: "2", description: "Cabezal y Parante Grande para Puerta de Rebatir M-Cinco", page: "3, 16", shape: 'parante' },
  { code: "518", weight: "1,00", txp: "4", description: "Refuerzo de Parante Corrediza para M-Uno, M-Tres y M-Cinco", page: "3, 23", shape: 'parante' },
  { code: "523", weight: "0,17", txp: "20", description: "Contravidrio de 16 mm", page: "3, 26", shape: 'contravidrio' },
  { code: "525", weight: "0,19", txp: "20", description: "Contravidrio", page: "3, 26", shape: 'contravidrio' },
  { code: "526", weight: "0,15", txp: "20", description: "Contravidrio", page: "3, 26", shape: 'contravidrio' },
  { code: "540", weight: "0,15", txp: "20", description: "Tapa Soporte para Paño Fijo M-Cinco", page: "3, 13", shape: 'accesorio' },
  { code: "541 (a)", weight: "1,57", txp: "2", description: "Marco para Puerta de Rebatir M-Cinco", page: "3, 15", shape: 'marco' },
  { code: "542", weight: "2,55", txp: "2", description: "Zócalo Grande para Puerta de Rebatir M-Cinco", page: "3, 16", shape: 'zocalo' },
  { code: "543", weight: "0,13", txp: "20", description: "Guía Inferior para Ventana y Puerta Corredizas radio 3 mm", page: "3, 18", shape: 'guia' },
  { code: "544", weight: "1,71", txp: "3", description: "Travesaño para Puerta M-Cinco", page: "3, 15", shape: 'travesaño' },
  { code: "545", weight: "0,35", txp: "20", description: "Contravidrio Interno de 26 mm M-Cinco", page: "3, 15", shape: 'contravidrio' },
  { code: "546", weight: "0,35", txp: "20", description: "Contravidrio Interno de 13 mm M-Cinco", page: "3, 16", shape: 'contravidrio' },
  { code: "547 (a)", weight: "1,66", txp: "2", description: "Hoja Angosta de Puerta Rebatir M-Cinco", page: "3, 15", shape: 'hoja' },
  { code: "554 (a)", weight: "1,48", txp: "2", description: "Marco para Ventana y Puerta Corrediza M-Cinco", page: "3, 22", shape: 'marco' },
  { code: "555 (a)", weight: "1,43", txp: "3", description: "Hoja de Ventana y Puerta Corrediza M-Cinco", page: "4, 23", shape: 'hoja' },
  { code: "556 (a)", weight: "0,46", txp: "8", description: "Encuentro de Hoja para Perfil 555 Ventana y Puerta Corrediza M - Cinco", page: "4, 23", shape: 'parante' },
  { code: "558", weight: "0,49", txp: "8", description: "Guía de Mosquitero para Ventana y Puerta Corrediza M-Cinco", page: "4, 22", shape: 'guia' },
  { code: "559", weight: "0,24", txp: "20", description: "Contravidrio Interno de 16 mm para Ventana y Puerta Corrediza M-Cinco", page: "4, 23", shape: 'contravidrio' },
  { code: "561", weight: "0,09", txp: "20", description: "Guía Inferior para Ventana y Puerta Corredizas M-Tres y M-Cinco", page: "4, 18", shape: 'guia' },
  { code: "562", weight: "0,19", txp: "20", description: "Perfil de Fijación Inferior Marco-Premarco", page: "4, 28", shape: 'accesorio' },
  { code: "563", weight: "0,85", txp: "2", description: "Columna Curva de Acople 135º", page: "4, 31", shape: 'acople' },
  { code: "564", weight: "1,07", txp: "2", description: "Columna curva de acople a 90º", page: "4, 31", shape: 'acople' },
  { code: "565", weight: "0,13", txp: "10", description: "Tapa para Puerta Vaivén M-Cinco", page: "4, 14", shape: 'accesorio' },
  { code: "566", weight: "0,21", txp: "10", description: "Guía de Cierre para Puerta Vaivén M-Cinco", page: "4, 14", shape: 'guia' },
  { code: "567 (a)", weight: "1,77", txp: "2", description: "Hoja para Puerta Vaivén M-Cinco", page: "4, 14", shape: 'hoja' },
  { code: "568", weight: "0,56", txp: "6", description: "Acople Recto", page: "4, 31", shape: 'acople' },
  { code: "569", weight: "0,33", txp: "10", description: "Encuentro de 4 Hojas para Ventana y Puerta Corrediza M-Tres y M-Cinco", page: "4, 21", shape: 'parante' },
  { code: "572 (a)", weight: "1,83", txp: "2", description: "Marco para Ventana y Puerta Corrediza M-Cinco con guía de mosquitero", page: "4, 22", shape: 'marco' },
  { code: "574", weight: "0,38", txp: "10", description: "Guía de Mosquitero para Ventana y Puerta Corrediza M-Siete", page: "4, 25", shape: 'guia' },
  { code: "577 (a)", weight: "0,49", txp: "8", description: "Guía Postiza de Cortina (Común y Barrio)", page: "4, 29", shape: 'guia' },
  { code: "580 (a)", weight: "1,54", txp: "3", description: "Hoja con Contravidrio de Ventana y Puerta Corrediza M-Cinco", page: "4, 23", shape: 'hoja' },
  { code: "589 (a)", weight: "1,43", txp: "3", description: "Hoja recta DVH de Ventana y Puerta Corrediza M-Cinco", page: "4, 23", shape: 'hoja' },
  { code: "590", weight: "0,20", txp: "10", description: "Encuentro 4 Hojas para Ventana y Puerta Corrediza M-Uno", page: "4, 21", shape: 'parante' },
  { code: "595", weight: "0,58", txp: "4", description: "Rotula Interior", page: "4, 31", shape: 'acople' },
  { code: "596", weight: "0,50", txp: "4", description: "Rotula Exterior", page: "4, 31", shape: 'acople' },
  { code: "597 (a)", weight: "0,89", txp: "4", description: "Marco VaiVen", page: "4, 14", shape: 'marco' },
  { code: "599", weight: "1,15", txp: "4", description: "Tapa Inercial para Corrediza-Elevable M-Siete", page: "4, 25", shape: 'accesorio' },
  { code: "600", weight: "0,80", txp: "8", description: "Base Inercial para Corrediza-Elevable M-Siete", page: "5, 25", shape: 'accesorio' },
  { code: "601 (a)", weight: "2,35", txp: "2", description: "Marco para Corrediza-Elevable M-Siete", page: "5, 24", shape: 'marco' },
  { code: "602 (a)", weight: "2,33", txp: "2", description: "Hoja para Corrediza-Elevable M-Siete", page: "5, 24", shape: 'hoja' },
  { code: "603 (a)", weight: "0,13", txp: "3", description: "Marco postizo para Corrediza-Elevable M-Siete", page: "5, 25", shape: 'marco' },
  { code: "607", weight: "0,62", txp: "20", description: "Encuentro de 4 Hojas para Corrediza-Elevable M-Siete", page: "5, 25", shape: 'parante' },
  { code: "608", weight: "0,26", txp: "8", description: "Guía Inferior para Corrediza-Elevable M-Siete", page: "5, 24", shape: 'guia' },
  { code: "609 (a)", weight: "0,66", txp: "4", description: "Encuentro de Hoja para Perfil 602 Corrediza-Elevable M-Siete", page: "5, 24", shape: 'parante' },
  { code: "611", weight: "0,30", txp: "20", description: "Contravidrio Interno 7.2mm M-Cinco", page: "5, 16", shape: 'contravidrio' },
  { code: "612", weight: "0,31", txp: "20", description: "Contravidrio Interno 21.2mm M-Cinco", page: "5, 16", shape: 'contravidrio' },
  { code: "638", weight: "0,70", txp: "5", description: "Travesaño para Hoja 405 Ventana y Puerta Corrediza", page: "5, 17", shape: 'travesaño' },
  { code: "647 (a)", weight: "0,46", txp: "6", description: "Premarco de 48 mm", page: "5, 28", shape: 'premarco' },
  { code: "648 (a)", weight: "0,50", txp: "5", description: "Premarco de 55 mm", page: "5, 28", shape: 'premarco' },
  { code: "681", weight: "0,70", txp: "5", description: "Travesaño D.V.H. para Ventana y Puerta Corrediza M-Uno", page: "5, 17", shape: 'travesaño' },
  { code: "683 (a)", weight: "0,60", txp: "6", description: "Tapacinta", page: "5, 30", shape: 'accesorio' },
  { code: "693 (a)", weight: "0,20", txp: "12", description: "Contramarco recto de 30 mm", page: "5, 27", shape: 'contramarco' },
  { code: "697 (a)", weight: "1,20", txp: "2", description: "Marco Perimetral para Ventana y Puerta Corrediza M-Tres", page: "5, 21", shape: 'marco' },
  { code: "698", weight: "0,20", txp: "20", description: "Contravidrio de 23,5mm", page: "5, 26", shape: 'contravidrio' },
  { code: "699", weight: "0,13", txp: "20", description: "Contravidrio de 3 mm", page: "5, 26", shape: 'contravidrio' },
  { code: "705", weight: "0,16", txp: "20", description: "Contravidrio de 11 mm", page: "5, 26", shape: 'contravidrio' },
  { code: "713", weight: "0,41", txp: "8", description: "Encuentro Hoja para Ventana y Puerta Corrediza - M-Tres", page: "5, 21", shape: 'parante' },
  { code: "725", weight: "0,26", txp: "10", description: "Tope Inferior Umbral Transitable para Puerta de Rebatir", page: "5, 32", shape: 'accesorio' },
  { code: "726", weight: "0,39", txp: "10", description: "Umbral Transitable para Puerta de Rebatir", page: "5, 32", shape: 'umbral' },
  { code: "727", weight: "0,26", txp: "10", description: "Embellecedor de Marco", page: "5, 34", shape: 'accesorio' },
  { code: "730", weight: "0,80", txp: "4", description: "Travesaño para Hoja 741 Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'travesaño' },
  { code: "738", weight: "0,80", txp: "4", description: "Hoja Mosquitero Reforzado.", page: "6, 23", shape: 'mosquitero' },
  { code: "739", weight: "0,13", txp: "20", description: "Tapa Mosquitero Reforzado.", page: "6, 23", shape: 'accesorio' },
  { code: "741", weight: "0,76", txp: "4", description: "Hoja Perimetral para Vidrio Simple Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'hoja' },
  { code: "742", weight: "0,76", txp: "4", description: "Hoja Perimetral D.V.H. para Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'hoja' },
  { code: "743", weight: "0,30", txp: "8", description: "Encuentro Central para Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'parante' },
  { code: "785", weight: "0,82", txp: "4", description: "Marco para Ventana Desplazable M-Tres", page: "6, 14", shape: 'marco' },
  { code: "786", weight: "1,18", txp: "4", description: "Hoja para Ventana Desplazable M-Tres", page: "6, 14", shape: 'hoja' },
  { code: "787", weight: "0,76", txp: "4", description: "Hoja Perimetral para Vidrio Laminado Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'hoja' },
  { code: "802", weight: "1,09", txp: "2", description: "Marco Perimetral para Ventana y Puerta Corrediza M-Uno", page: "6, 18", shape: 'marco' },
  { code: "815", weight: "0,59", txp: "5", description: "Cabezal - Zocalo para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'zocalo' },
  { code: "816 (a)", weight: "0,57", txp: "8", description: "Parante Central para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'parante' },
  { code: "817 (a)", weight: "0,85", txp: "4", description: "Parante Central con Refuerzo para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'parante' },
  { code: "818", weight: "1,08", txp: "4", description: "Zocalo Alto para Vidrio D.V.H Puerta Corrediza", page: "6, 19", shape: 'zocalo' },
  { code: "819 (a)", weight: "0,61", txp: "5", description: "Parante Lateral para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'parante' },
  { code: "820", weight: "0,62", txp: "5", description: "Cabezal - Zocalo para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 18", shape: 'zocalo' },
  { code: "822 (a)", weight: "0,60", txp: "8", description: "Parante Central para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 18", shape: 'parante' },
  { code: "823 (a)", weight: "0,64", txp: "5", description: "Parante Lateral para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 18", shape: 'parante' },
  { code: "824", weight: "1,11", txp: "4", description: "Zocalo Alto para Vidrio Simple Puerta Corrediza", page: "6, 18", shape: 'zocalo' },
  { code: "825 (a)", weight: "0,84", txp: "4", description: "Inversor de Hoja para Ventana y Puerta de Rebatir M-Tres", page: "6, 11", shape: 'inversor' },
  { code: "826 (a)", weight: "1,05", txp: "2", description: "Hoja Perimetral para Vidrio DVH S/CV", page: "6, 10", shape: 'hoja' },
  { code: "827 (a)", weight: "1,09", txp: "2", description: "Hoja Perimetral para Vidrio Simple S/CV", page: "6, 10", shape: 'hoja' },
  { code: "834 (a)", weight: "0,88", txp: "4", description: "Parante Central con Refuerzo para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 19", shape: 'parante' },
  { code: "835", weight: "0,94", txp: "4", description: "Travesaño para Paño Fijo M-Tres", page: "7, 11", shape: 'travesaño' },
  { code: "843 (a)", weight: "0,34", txp: "10", description: "Bisagra Tapacintas", page: "7, 30", shape: 'bisagra' },
  { code: "849", weight: "1,54", txp: "2", description: "Zócalo de Hoja para Puerta de Rebatir M-Tres", page: "7, 11", shape: 'zocalo' },
  { code: "850", weight: "1,55", txp: "2", description: "Acople Recto Reforzado", page: "7, 33", shape: 'acople' },
  { code: "852 (a)", weight: "1,21", txp: "3", description: "Hoja Perimetral Recta para Vidrio Simple Ventana y Puerta Corrediza M-Tres", page: "7, 20", shape: 'hoja' },
  { code: "853 (a)", weight: "1,13", txp: "3", description: "Hoja Perimetral Recta para Vidrio DVH Ventana y Puerta Corrediza M-Tres", page: "7, 20", shape: 'hoja' },
  { code: "854", weight: "1,60", txp: "2", description: "Acople Recto Reforzado", page: "7, 33", shape: 'acople' },
  { code: "855", weight: "1,59", txp: "2", description: "Acople Recto Reforzado", page: "7, 33", shape: 'acople' },
  { code: "857 (a)", weight: "0,27", txp: "12", description: "Contramarco de 65 mm", page: "7, 27", shape: 'contramarco' },
  { code: "859", weight: "0,57", txp: "6", description: "Soporte Exterior de Vidrio para Paño Fijo M-Cinco", page: "7, 13", shape: 'accesorio' },
  { code: "860", weight: "1,19", txp: "4", description: "Marco para Paño Fijo M-Cinco", page: "7, 13", shape: 'marco' },
  { code: "861 (a)", weight: "1,10", txp: "2", description: "Cabezal y Parante de Hoja para Puerta M-Tres", page: "7, 11", shape: 'parante' },
  { code: "862 (a)", weight: "0,21", txp: "12", description: "Contramarco de 45 mm", page: "7, 27", shape: 'contramarco' },
  { code: "870", weight: "0,23", txp: "20", description: "Contravidrio de 30,5 mm", page: "7, 26", shape: 'contravidrio' },
  { code: "873 (a)", weight: "2,10", txp: "2", description: "Marco Perimetral de 3 Pistas para Ventana y Puerta Corrediza M-Tres", page: "7, 21", shape: 'marco' },
  { code: "874 (a)", weight: "2,30", txp: "2", description: "Marco Perimetral de 3 Pistas para Ventana y Puerta Corrediza M-Cinco", page: "7, 22", shape: 'marco' },
  { code: "875 (a)", weight: "0,88", txp: "4", description: "Premarco de 95 mm", page: "7, 28", shape: 'premarco' },
  { code: "876", weight: "0,33", txp: "10", description: "Contravidrio Recto de 29 mm", page: "7, 26", shape: 'contravidrio' },
  { code: "877", weight: "0,30", txp: "20", description: "Contravidrio Recto de 22 mm", page: "7, 26", shape: 'contravidrio' },
  { code: "878", weight: "0,25", txp: "20", description: "Contravidrio Recto de 15,2 mm", page: "7, 26", shape: 'contravidrio' },
  { code: "880", weight: "0,32", txp: "20", description: "Contravidrio Recto de 25 mm", page: "7, 26", shape: 'contravidrio' },
  { code: "881 (a)", weight: "1,19", txp: "3", description: "Hoja Perimetral para Vidrio Simple Ventana y Puerta Corrediza M-Tres", page: "7, 20", shape: 'hoja' },
  { code: "882 (a)", weight: "1,16", txp: "3", description: "Hoja Perimetral para Vidrio DVH Ventana y Puerta Corrediza M-Tres", page: "7, 20", shape: 'hoja' },
  { code: "883 (a)", weight: "0,90", txp: "4", description: "Hoja para Ventana de Rebatir, Banderola y Oscilo-Batiente M-Tres", page: "8, 10", shape: 'hoja' },
  { code: "884 (a)", weight: "0,20", txp: "12", description: "Contramarco de 30 mm", page: "8, 27", shape: 'contramarco' },
  { code: "885", weight: "0,20", txp: "20", description: "Contravidrio Recto de 9 mm", page: "8, 26", shape: 'contravidrio' },
  { code: "886 (a)", weight: "1,18", txp: "3", description: "Hoja Perimetral para Ventana y Puerta Corrediza - M-Tres", page: "8, 20", shape: 'hoja' },
  { code: "887", weight: "0,19", txp: "20", description: "Contravidrio Recto de 6 mm", page: "8, 26", shape: 'contravidrio' },
  { code: "888", weight: "1,21", txp: "4", description: "Travesaño Ancho", page: "8, 9", shape: 'travesaño' },
  { code: "889 (a)", weight: "1,30", txp: "2", description: "Hoja M-Arq. C-16", page: "8, 13", shape: 'hoja' },
  { code: "890 (a)", weight: "1,12", txp: "4", description: "Marco M-Arq. C-16", page: "8, 12", shape: 'marco' },
  { code: "891 (a)", weight: "1,08", txp: "4", description: "Hoja M-Arq. C-16", page: "8, 12", shape: 'hoja' },
  { code: "892 (a)", weight: "0,82", txp: "4", description: "Inversor de Hoja M-Arq. C-16", page: "8, 13", shape: 'inversor' },
  { code: "893 (a)", weight: "1,08", txp: "4", description: "Marco M-Tres", page: "8, 12", shape: 'marco' },
  { code: "894 (a)", weight: "1,02", txp: "4", description: "Marco M-Tres Coplanar", page: "8, 12", shape: 'marco' },
  { code: "9469", weight: "0,07", txp: "-", description: "Varilla Parte Omega de Poliamida", page: "8, 29", shape: 'varilla' }
];

export const mediterraneaRPTProfiles: Profile[] = [
  { code: '145(a)', weight: '0.17', shape: 'contramarco', description: 'Contramarco RPT Chico', page: '8' },
  { code: '146(a)', weight: '0.19', shape: 'contramarco', description: 'Contramarco RPT Grande', page: '8' },
  { code: '270', weight: '0.31', shape: 'acople', description: 'Suplemento Cerradero Jamba RPT', page: '12' },
  { code: '278', weight: '0.53', shape: 'umbral', description: 'Sobre Guía Umbral ST-MF RPT', page: '15' },
  { code: '281', weight: '0.35', shape: 'parante', description: 'Encuentro Central ST-MF RPT', page: '15' },
  { code: '285', weight: '0.26', shape: 'acople', description: 'Tapa Vertical Lado Móvil ST-MF RPT', page: '16' },
  { code: '286', weight: '0.37', shape: 'acople', description: 'Tapa Horizontal Lado Móvil ST-MF RPT', page: '16' },
  { code: '310(a)', weight: '0.49', shape: 'acople', description: 'Tapa Terminación Exterior Marco RPT', page: '18' },
  { code: '342', weight: '0.29', shape: 'parante', description: 'Encuentro Central M-Tres RPT', page: '11' },
  { code: '347', weight: '0.22', shape: 'parante', description: 'Encuentro Central M-Uno RPT', page: '11' },
  { code: '519', weight: '0.11', shape: 'acople', description: 'Adaptador Porta-Burlete RPT', page: '20' },
  { code: '6350', weight: '1.25', shape: 'marco', description: 'Marco Perimetral RPT', page: '5' },
  { code: '6351', weight: '1.45', shape: 'hoja', description: 'Hoja Perimetral RPT', page: '6' },
  { code: '6355', weight: '1.10', shape: 'inversor', description: 'Inversor de Hoja RPT', page: '7' },
  { code: '6360', weight: '1.30', shape: 'travesaño', description: 'Travesaño RPT', page: '10' }
];

export const monacoRPTProfiles: Profile[] = [
  { code: '2001', weight: '1.15', shape: 'marco', description: 'Marco Monaco RPT', page: '5' },
  { code: '2002', weight: '1.35', shape: 'hoja', description: 'Hoja Monaco RPT', page: '6' },
  { code: '2003', weight: '1.05', shape: 'inversor', description: 'Inversor Monaco RPT', page: '7' },
  { code: '2021', weight: '1.45', shape: 'marco', description: 'Marco Corrediza Monaco RPT', page: '8' },
  { code: '2022', weight: '1.25', shape: 'hoja', description: 'Hoja Corrediza Monaco RPT', page: '9' },
  { code: '2100', weight: '0.08', shape: 'varilla', description: 'Varilla Poliamida Standard RPT', page: '10' },
  { code: '2201', weight: '1.55', shape: 'marco', description: 'Marco con Contramarco RPT', page: '12' },
  { code: '2301', weight: '1.10', shape: 'travesaño', description: 'Travesaño Monaco RPT', page: '4' }
];

export const lamaParasolProfiles: Profile[] = [
  { code: '79', weight: '0,85', txp: '6', description: 'Parasol Liviano 140 mm', page: '27' },
  { code: '80', weight: '1,22', txp: '2', description: 'Parasol Tubular 140 mm', page: '27' },
  { code: '630', weight: '0,65', txp: '6', description: 'Base Clip 630 p/Parasol', page: '13' },
  { code: '631', weight: '0,28', txp: '6', description: 'Clip para Tubos 25 mm', page: '13' },
];

export const frameJuntaCerradaProfiles: Profile[] = [
  { code: '97', weight: '0,64', txp: '5', description: 'Revestimiento Doble Faz', page: '26' },
  { code: '98', weight: '1,25', txp: '3', description: 'Revestimiento Acanalado', page: '26' },
  { code: '456', weight: '0,43', txp: '8', description: 'U de 15 x 40 x 1,75 mm', page: '26' },
  { code: '466', weight: '0,17', txp: '16', description: 'U de 11,1 x 22 mm e:1,2', page: '26' },
  { code: '469', weight: '0,18', txp: '12', description: 'U de 15 x 18 mm e:1,4', page: '26' },
  { code: '650', weight: '0,25', txp: '16', description: 'U de 15 x 25 mm', page: '26' },
];

export const gammaProfiles: Profile[] = [
  { code: 'G-10', weight: '0.85', shape: 'marco', description: 'Marco Perimetral Gamma', page: '1' },
  { code: 'G-20', weight: '0.95', shape: 'hoja', description: 'Hoja Corrediza Gamma', page: '2' }
];

export const deltaProfiles: Profile[] = [
  { code: 'D-10', weight: '0.90', shape: 'marco', description: 'Marco Delta', page: '1' },
  { code: 'D-20', weight: '1.05', shape: 'hoja', description: 'Hoja Delta', page: '2' }
];

export const monacoProfiles: Profile[] = [
  { code: 'M-10', weight: '1.00', shape: 'marco', description: 'Marco Mónaco', page: '1' },
  { code: 'M-20', weight: '1.20', shape: 'hoja', description: 'Hoja Mónaco', page: '2' }
];

export const atlanticaProfiles: Profile[] = [
  { code: 'A-10', weight: '1.10', shape: 'marco', description: 'Marco Atlántica', page: '1' },
  { code: 'A-20', weight: '1.30', shape: 'hoja', description: 'Hoja Atlántica', page: '2' }
];

export const nizaProfiles: Profile[] = [
  { code: 'N-10', weight: '0.80', shape: 'marco', description: 'Marco Niza', page: '1' },
  { code: 'N-20', weight: '0.90', shape: 'hoja', description: 'Hoja Niza', page: '2' }
];

export const monacoTopProfiles: Profile[] = [
  { code: 'M-501', weight: '1.25', shape: 'marco', description: 'Marco Reforzado Monaco Top' },
  { code: 'M-502', weight: '1.45', shape: 'hoja', description: 'Hoja Reforzada Monaco Top' }
];

export const frenteIntegralProfiles: Profile[] = [
  { code: 'FI-101', weight: '2.10', shape: 'parante', description: 'Columna de Frente Integral' },
  { code: 'FI-102', weight: '1.85', shape: 'travesaño', description: 'Travesaño de Frente Integral' }
];

export const frenteVidriadoProfiles: Profile[] = [
  { code: 'FV-201', weight: '1.95', shape: 'parante', description: 'Columna de Frente Vidriado' },
  { code: 'FV-202', weight: '1.70', shape: 'travesaño', description: 'Travesaño de Frente Vidriado' }
];

export const barandasProfiles: Profile[] = [
  { code: 'B-101', weight: '0.95', shape: 'parante', description: 'Pasamano de Baranda' },
  { code: 'B-102', weight: '0.85', shape: 'parante', description: 'Columna de Baranda' }
];

export const mamparasProfiles: Profile[] = [
  { code: 'MA-01', weight: '0.75', shape: 'marco', description: 'Marco de Mampara' },
  { code: 'MA-02', weight: '0.65', shape: 'hoja', description: 'Hoja de Mampara' }
];

export const placardProfiles: Profile[] = [
  { code: 'P-301', weight: '0.80', shape: 'guia', description: 'Guía de Placard' },
  { code: 'P-302', weight: '0.90', shape: 'hoja', description: 'Hoja de Placard' }
];

export const cortinasProfiles: Profile[] = [
  { code: 'C-401', weight: '0.25', shape: 'tubo', description: 'Tablilla de Cortina' },
  { code: 'C-402', weight: '0.35', shape: 'guia', description: 'Guía de Cortina' }
];

export const complementariosProfiles: Profile[] = [
  { code: 'CP-01', weight: '0.45', shape: 'tubo', description: 'Tubo Estándar' },
  { code: 'CP-02', weight: '0.55', shape: 'varilla', description: 'Ángulo Estándar' }
];
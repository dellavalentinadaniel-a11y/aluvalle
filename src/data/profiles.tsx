import React from 'react';

export interface Profile {
  code: string;
  weight: string;
  txp?: string;
  description: string;
  page?: string;
  shape?: 'marco' | 'hoja' | 'zocalo' | 'contravidrio' | 'parante' | 'travesaño' | 'acople' | 'contramarco' | 'premarco' | 'bisagra' | 'tubo' | 'guia' | 'mosquitero' | 'accesorio' | 'botaagua' | 'umbral' | 'goteron' | 'varilla' | 'omega' | 'inversor' | 'traslapo' | 'junta' | 'complemento' | 'encuentro-4-hojas';
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
    shape: 'encuentro-4-hojas',
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
  { code: "26", weight: "0,27", txp: "10", description: "Encuentro Central para Ventana y Puerta Corrediza - Línea Combinada", page: "9", shape: 'encuentro-4-hojas' },
  { code: "27", weight: "0,18", txp: "20", description: "Encuentro Central para 4 Hojas con Perfil 481 de Parante Lateral", page: "9", shape: 'encuentro-4-hojas' },
  { code: "34", weight: "0,14", txp: "20", description: "Contravidrio", page: "11, 12", shape: 'contravidrio' },
  { code: "43", weight: "1,17", txp: "2", description: "Columna a 45º", page: "25", shape: 'encuentro-4-hojas' },
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
  { code: "273 (a)", weight: "0,96", txp: "3", description: "Parante para Puerta de Rebatir - Línea Recta, sin Contravidrio", page: "13", shape: 'encuentro-4-hojas' },
  { code: "275 (a)", weight: "0,29", txp: "8", description: "Batiente para Puerta de Rebatir - Línea Recta, sin Contravidrio", page: "13", shape: 'hoja' },
  { code: "289 (a)", weight: "0,59", txp: "4", description: "Marco Postigón", page: "15", shape: 'marco' },
  { code: "290", weight: "0,44", txp: "8", description: "Hoja de Raja", page: "15", shape: 'hoja' },
  { code: "291", weight: "0,35", txp: "12", description: "Marco Postigón", page: "15", shape: 'marco' },
  { code: "427 (a)", weight: "0,58", txp: "6", description: "Marco para Puerta de Rebatir - Línea Tradicional", page: "11", shape: 'marco' },
  { code: "428 (a)", weight: "0,98", txp: "3", description: "Parante para Puerta de Rebatir - Línea Tradicional", page: "11", shape: 'encuentro-4-hojas' },
  { code: "429", weight: "1,01", txp: "3", description: "Travesaño para Puerta de Rebatir - Línea Tradicional", page: "11, 12", shape: 'travesaño' },
  { code: "432 (a)", weight: "0,79", txp: "6", description: "Marco para Puerta de Rebatir - Línea con Bisagra de Encolizar", page: "12", shape: 'marco' },
  { code: "433 (a)", weight: "1,13", txp: "3", description: "Parante para Puerta de Rebatir - Línea con Bisagra de Encolizar", page: "12", shape: 'encuentro-4-hojas' },
  { code: "448", weight: "0,30", txp: "10", description: "Tablilla de Postigón", page: "16", shape: 'tubo' },
  { code: "449", weight: "0,26", txp: "10", description: "Tablilla de Postigón Recta", page: "16", shape: 'tubo' },
  { code: "453", weight: "0,45", txp: "8", description: "Acople", page: "25", shape: 'acople' },
  { code: "455", weight: "1,18", txp: "2", description: "Columna a 90º / 180º", page: "25", shape: 'encuentro-4-hojas' },
  { code: "462", weight: "0,45", txp: "8", description: "Parante de Postigón", page: "16", shape: 'encuentro-4-hojas' },
  { code: "463 (a)", weight: "0,56", txp: "4", description: "Parante de Postigón y Puerta de Rebatir de 24,5 mm.", page: "16", shape: 'encuentro-4-hojas' },
  { code: "470", weight: "0,27", txp: "8", description: "Perimetral de Vidrio Repartido", page: "22", shape: 'tubo' },
  { code: "471", weight: "0,32", txp: "8", description: "Central de Vidrio Repartido", page: "22", shape: 'tubo' },
  { code: "480", weight: "0,58", txp: "6", description: "Parante Central para Ventana y Puerta Corrediza - Línea Combinada", page: "9", shape: 'encuentro-4-hojas' },
  { code: "481", weight: "0,68", txp: "4", description: "Hoja para Ventana y Puerta Corrediza - Línea Combinada", page: "9", shape: 'hoja' },
  { code: "514 (a)", weight: "0,91", txp: "3", description: "Hoja para Puerta de Rebatir", page: "14", shape: 'hoja' },
  { code: "516 (a)", weight: "0,76", txp: "2", description: "Marco para Ventana Banderola, Ventana y Puerta de Rebatir y Oscilo-Batiente", page: "14", shape: 'marco' },
  { code: "518", weight: "1,00", txp: "4", description: "Refuerzo de Parante", page: "8", shape: 'encuentro-4-hojas' },
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
  { code: "986", weight: "1,06", txp: "2", description: "Columna Curva a 90º", page: "25", shape: 'encuentro-4-hojas' },
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
  { code: "500 (a)", weight: "2,17", txp: "2", description: "Cabezal y Parante Grande para Puerta de Rebatir M-Cinco", page: "3, 16", shape: 'encuentro-4-hojas' },
  { code: "518", weight: "1,00", txp: "4", description: "Refuerzo de Parante Corrediza para M-Uno, M-Tres y M-Cinco", page: "3, 23", shape: 'encuentro-4-hojas' },
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
  { code: "556 (a)", weight: "0,46", txp: "8", description: "Encuentro de Hoja para Perfil 555 Ventana y Puerta Corrediza M - Cinco", page: "4, 23", shape: 'encuentro-4-hojas' },
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
  { code: "569", weight: "0,33", txp: "10", description: "Encuentro de 4 Hojas para Ventana y Puerta Corrediza M-Tres y M-Cinco", page: "4, 21", shape: 'encuentro-4-hojas' },
  { code: "572 (a)", weight: "1,83", txp: "2", description: "Marco para Ventana y Puerta Corrediza M-Cinco con guía de mosquitero", page: "4, 22", shape: 'marco' },
  { code: "574", weight: "0,38", txp: "10", description: "Guía de Mosquitero para Ventana y Puerta Corrediza M-Siete", page: "4, 25", shape: 'guia' },
  { code: "577 (a)", weight: "0,49", txp: "8", description: "Guía Postiza de Cortina (Común y Barrio)", page: "4, 29", shape: 'guia' },
  { code: "580 (a)", weight: "1,54", txp: "3", description: "Hoja con Contravidrio de Ventana y Puerta Corrediza M-Cinco", page: "4, 23", shape: 'hoja' },
  { code: "589 (a)", weight: "1,43", txp: "3", description: "Hoja recta DVH de Ventana y Puerta Corrediza M-Cinco", page: "4, 23", shape: 'hoja' },
  { code: "590", weight: "0,20", txp: "10", description: "Encuentro 4 Hojas para Ventana y Puerta Corrediza M-Uno", page: "4, 21", shape: 'encuentro-4-hojas' },
  { code: "595", weight: "0,58", txp: "4", description: "Rotula Interior", page: "4, 31", shape: 'acople' },
  { code: "596", weight: "0,50", txp: "4", description: "Rotula Exterior", page: "4, 31", shape: 'acople' },
  { code: "597 (a)", weight: "0,89", txp: "4", description: "Marco VaiVen", page: "4, 14", shape: 'marco' },
  { code: "599", weight: "1,15", txp: "4", description: "Tapa Inercial para Corrediza-Elevable M-Siete", page: "4, 25", shape: 'accesorio' },
  { code: "600", weight: "0,80", txp: "8", description: "Base Inercial para Corrediza-Elevable M-Siete", page: "5, 25", shape: 'accesorio' },
  { code: "601 (a)", weight: "2,35", txp: "2", description: "Marco para Corrediza-Elevable M-Siete", page: "5, 24", shape: 'marco' },
  { code: "602 (a)", weight: "2,33", txp: "2", description: "Hoja para Corrediza-Elevable M-Siete", page: "5, 24", shape: 'hoja' },
  { code: "603 (a)", weight: "0,13", txp: "3", description: "Marco postizo para Corrediza-Elevable M-Siete", page: "5, 25", shape: 'marco' },
  { code: "607", weight: "0,62", txp: "20", description: "Encuentro de 4 Hojas para Corrediza-Elevable M-Siete", page: "5, 25", shape: 'encuentro-4-hojas' },
  { code: "608", weight: "0,26", txp: "8", description: "Guía Inferior para Corrediza-Elevable M-Siete", page: "5, 24", shape: 'guia' },
  { code: "609 (a)", weight: "0,66", txp: "4", description: "Encuentro de Hoja para Perfil 602 Corrediza-Elevable M-Siete", page: "5, 24", shape: 'encuentro-4-hojas' },
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
  { code: "713", weight: "0,41", txp: "8", description: "Encuentro Hoja para Ventana y Puerta Corrediza - M-Tres", page: "5, 21", shape: 'encuentro-4-hojas' },
  { code: "725", weight: "0,26", txp: "10", description: "Tope Inferior Umbral Transitable para Puerta de Rebatir", page: "5, 32", shape: 'accesorio' },
  { code: "726", weight: "0,39", txp: "10", description: "Umbral Transitable para Puerta de Rebatir", page: "5, 32", shape: 'umbral' },
  { code: "727", weight: "0,26", txp: "10", description: "Embellecedor de Marco", page: "5, 34", shape: 'accesorio' },
  { code: "730", weight: "0,80", txp: "4", description: "Travesaño para Hoja 741 Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'travesaño' },
  { code: "738", weight: "0,80", txp: "4", description: "Hoja Mosquitero Reforzado.", page: "6, 23", shape: 'mosquitero' },
  { code: "739", weight: "0,13", txp: "20", description: "Tapa Mosquitero Reforzado.", page: "6, 23", shape: 'accesorio' },
  { code: "741", weight: "0,76", txp: "4", description: "Hoja Perimetral para Vidrio Simple Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'hoja' },
  { code: "742", weight: "0,76", txp: "4", description: "Hoja Perimetral D.V.H. para Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'hoja' },
  { code: "743", weight: "0,30", txp: "8", description: "Encuentro Central para Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'encuentro-4-hojas' },
  { code: "785", weight: "0,82", txp: "4", description: "Marco para Ventana Desplazable M-Tres", page: "6, 14", shape: 'marco' },
  { code: "786", weight: "1,18", txp: "4", description: "Hoja para Ventana Desplazable M-Tres", page: "6, 14", shape: 'hoja' },
  { code: "787", weight: "0,76", txp: "4", description: "Hoja Perimetral para Vidrio Laminado Ventana y Puerta Corrediza M-Uno", page: "6, 17", shape: 'hoja' },
  { code: "802", weight: "1,09", txp: "2", description: "Marco Perimetral para Ventana y Puerta Corrediza M-Uno", page: "6, 18", shape: 'marco' },
  { code: "815", weight: "0,59", txp: "5", description: "Cabezal - Zocalo para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'zocalo' },
  { code: "816 (a)", weight: "0,57", txp: "8", description: "Parante Central para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'encuentro-4-hojas' },
  { code: "817 (a)", weight: "0,85", txp: "4", description: "Parante Central con Refuerzo para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'encuentro-4-hojas' },
  { code: "818", weight: "1,08", txp: "4", description: "Zocalo Alto para Vidrio D.V.H Puerta Corrediza", page: "6, 19", shape: 'zocalo' },
  { code: "819 (a)", weight: "0,61", txp: "5", description: "Parante Lateral para Vidrio D.V.H Ventana y Puerta Corrediza", page: "6, 19", shape: 'encuentro-4-hojas' },
  { code: "820", weight: "0,62", txp: "5", description: "Cabezal - Zocalo para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 18", shape: 'zocalo' },
  { code: "822 (a)", weight: "0,60", txp: "8", description: "Parante Central para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 18", shape: 'encuentro-4-hojas' },
  { code: "823 (a)", weight: "0,64", txp: "5", description: "Parante Lateral para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 18", shape: 'encuentro-4-hojas' },
  { code: "824", weight: "1,11", txp: "4", description: "Zocalo Alto para Vidrio Simple Puerta Corrediza", page: "6, 18", shape: 'zocalo' },
  { code: "825 (a)", weight: "0,84", txp: "4", description: "Inversor de Hoja para Ventana y Puerta de Rebatir M-Tres", page: "6, 11", shape: 'inversor' },
  { code: "826 (a)", weight: "1,05", txp: "2", description: "Hoja Perimetral para Vidrio DVH S/CV", page: "6, 10", shape: 'hoja' },
  { code: "827 (a)", weight: "1,09", txp: "2", description: "Hoja Perimetral para Vidrio Simple S/CV", page: "6, 10", shape: 'hoja' },
  { code: "834 (a)", weight: "0,88", txp: "4", description: "Parante Central con Refuerzo para Vidrio Simple Ventana y Puerta Corrediza", page: "6, 19", shape: 'encuentro-4-hojas' },
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
  { code: "861 (a)", weight: "1,10", txp: "2", description: "Cabezal y Parante de Hoja para Puerta M-Tres", page: "7, 11", shape: 'encuentro-4-hojas' },
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
  { code: '281', weight: '0.35', shape: 'encuentro-4-hojas', description: 'Encuentro Central ST-MF RPT', page: '15' },
  { code: '285', weight: '0.26', shape: 'acople', description: 'Tapa Vertical Lado Móvil ST-MF RPT', page: '16' },
  { code: '286', weight: '0.37', shape: 'acople', description: 'Tapa Horizontal Lado Móvil ST-MF RPT', page: '16' },
  { code: '310(a)', weight: '0.49', shape: 'acople', description: 'Tapa Terminación Exterior Marco RPT', page: '18' },
  { code: '342', weight: '0.29', shape: 'encuentro-4-hojas', description: 'Encuentro Central M-Tres RPT', page: '11' },
  { code: '347', weight: '0.22', shape: 'encuentro-4-hojas', description: 'Encuentro Central M-Uno RPT', page: '11' },
  { code: '519', weight: '0.11', shape: 'acople', description: 'Adaptador Porta-Burlete RPT', page: '20' },
  { code: '6350', weight: '1.25', shape: 'marco', description: 'Marco Perimetral RPT', page: '5' },
  { code: '6351', weight: '1.45', shape: 'hoja', description: 'Hoja Perimetral RPT', page: '6' },
  { code: '6355', weight: '1.10', shape: 'inversor', description: 'Inversor de Hoja RPT', page: '7' },
  { code: '6360', weight: '1.30', shape: 'travesaño', description: 'Travesaño RPT', page: '10' }
];

export const monacoRPTProfiles: Profile[] = [
  { code: '2001', weight: '1.15', shape: 'marco', description: 'Marco Monaco RPT', page: '5' },
  { code: "2002", weight: "1,35", shape: 'hoja', description: "Hoja Monaco RPT", page: "6" },
  { code: "2003", weight: "1,05", shape: 'inversor', description: "Inversor Monaco RPT", page: "7" },
  { code: "2021", weight: "1,45", shape: 'marco', description: "Marco Corrediza Monaco RPT", page: "8" },
  { code: "2022", weight: "1,25", shape: 'hoja', description: "Hoja Corrediza Monaco RPT", page: "9" },
  { code: "2100", weight: "0,08", shape: 'varilla', description: "Varilla Poliamida Standard RPT", page: "10" },
  { code: "2201", weight: "1,55", shape: 'marco', description: "Marco con Contramarco RPT", page: "12" },
  { code: '2301', weight: '1,10', shape: 'travesaño', description: 'Travesaño Monaco RPT', page: '4' }
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
  { 
    code: 'G-10', weight: '0,85', txp: '4', shape: 'marco', description: 'Marco Perimetral Corrediza 2 Guías', page: '4',
    technicalDetails: {
      dimensions: '62mm x 32mm',
      applications: [
        'Marco base para ventana corrediza Gamma de 2 hojas.',
        'Compatible con vidrio simple de 4mm y DVH de hasta 24mm.',
        'Incluye canal para felpa de polipropileno 7x6mm.'
      ],
      sketch: (
        <svg viewBox="0 0 100 50" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="5" y="5" width="90" height="40" rx="1" />
          <path d="M 5,25 L 95,25" opacity="0.3" strokeDasharray="2 2" />
          <path d="M 35,5 L 35,45 M 65,5 L 65,45" />
        </svg>
      )
    }
  },
  { 
    code: 'G-11', weight: '1,25', txp: '3', shape: 'marco', description: 'Marco Perimetral Corrediza 3 Guías', page: '5',
    technicalDetails: {
      dimensions: '93mm x 32mm',
      applications: [
        'Marco para ventana corrediza de 3 hojas o con mosquitero integrado.',
        'Tres pistas de deslizamiento con guías de aluminio interior.',
        'Permite composiciones con paño fijo central.'
      ],
      sketch: (
        <svg viewBox="0 0 100 50" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="5" y="5" width="90" height="40" rx="1" />
          <path d="M 28,5 L 28,45 M 50,5 L 50,45 M 72,5 L 72,45" />
        </svg>
      )
    }
  },
  { 
    code: 'G-20', weight: '0,95', txp: '4', shape: 'hoja', description: 'Hoja Corrediza Gamma — Corte a 45°', page: '6',
    technicalDetails: {
      dimensions: '46mm x 34mm',
      applications: [
        'Hoja móvil para ventana corrediza liviana.',
        'Armado con corte a 45° en todos los encuentros.',
        'Soporte para vidrio simple 4mm y DVH 20mm con suplemento.'
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="10" y="5" width="80" height="50" rx="1" />
          <rect x="20" y="12" width="60" height="36" rx="0.5" opacity="0.4" />
        </svg>
      )
    }
  },
  { 
    code: 'G-21', weight: '1,15', txp: '3', shape: 'hoja', description: 'Hoja Reforzada para DVH Gamma', page: '7',
    technicalDetails: {
      dimensions: '46mm x 42mm',
      applications: [
        'Hoja de mayor sección para alojar DVH de 24mm.',
        'Ideal para puertas balcón corredizas de hasta 2000mm de alto.'
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="10" y="5" width="80" height="50" rx="1" />
          <rect x="18" y="10" width="64" height="40" rx="0.5" opacity="0.4" />
          <rect x="22" y="14" width="56" height="32" rx="0.5" opacity="0.2" />
        </svg>
      )
    }
  },
  { 
    code: 'G-30', weight: '0,75', txp: '6', shape: 'traslapo', description: 'Traslapo Central de Encuentro', page: '8',
    technicalDetails: {
      dimensions: '22mm x 40mm',
      applications: [
        'Perfil de encuentro entre dos hojas corredizas.',
        'Incorpora alojamiento para felpa doble de hermeticidad.'
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 30,5 L 30,55 L 45,55 L 45,30 L 55,30 L 55,55 L 70,55 L 70,5" />
        </svg>
      )
    }
  },
  { 
    code: 'G-35', weight: '0,65', txp: '6', shape: 'inversor', description: 'Inversor / Cierre Lateral de Hojas', page: '9',
    technicalDetails: {
      dimensions: '18mm x 36mm',
      applications: [
        'Perfil de cierre en los laterales de las hojas corredizas.',
        'Compatible con burletes de EPDM para sellado hermético.'
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 25,10 L 40,10 L 40,25 L 60,25 L 60,10 L 75,10 L 75,50 L 60,50 L 60,35 L 40,35 L 40,50 L 25,50 Z" />
        </svg>
      )
    }
  },
  { 
    code: 'G-40', weight: '0,88', txp: '4', shape: 'zocalo', description: 'Zócalo / Cabezal Perimetral', page: '10',
    technicalDetails: {
      dimensions: '62mm x 15mm',
      applications: [
        'Cierre superior e inferior del marco perimetral.',
        'Incluye canal de desagüe para evacuación de agua de condensación.'
      ],
      sketch: (
        <svg viewBox="0 0 100 30" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="5" y="5" width="90" height="20" rx="1" />
          <path d="M 5,15 L 95,15" opacity="0.3" strokeDasharray="2 2" />
        </svg>
      )
    }
  },
  { 
    code: 'G-50', weight: '0,45', txp: '8', shape: 'junta', description: 'Junta de Encuentro Marco-Pared', page: '11',
    technicalDetails: {
      dimensions: '30mm x 12mm',
      applications: [
        'Perfil de terminación entre el marco y la mampostería.',
        'Permite un acabado limpio con sellado de silicona perimetral.'
      ],
      sketch: (
        <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 20,5 L 20,35 L 50,35 L 50,15 L 80,15 L 80,5" />
        </svg>
      )
    }
  },
  { 
    code: 'G-60', weight: '0,70', txp: '4', shape: 'mosquitero', description: 'Marco Mosquitero Gamma', page: '12',
    technicalDetails: {
      dimensions: '25mm x 18mm',
      applications: [
        'Marco perimetral para tela mosquitera deslizable.',
        'Se aloja en la tercera guía del marco G-11.'
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="15" y="10" width="70" height="40" rx="1" />
          <rect x="20" y="15" width="60" height="30" rx="0.5" opacity="0.3" strokeDasharray="3 3" />
        </svg>
      )
    }
  },
  { 
    code: 'G-61', weight: '0,55', txp: '6', shape: 'hoja', description: 'Hoja Mosquitero Corrediza', page: '13',
    technicalDetails: {
      dimensions: '22mm x 14mm',
      applications: [
        'Hoja liviana para mosquitero de la serie Gamma.',
        'Compatible con tela de fibra de vidrio estándar.'
      ],
      sketch: (
        <svg viewBox="0 0 100 50" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="15" y="10" width="70" height="30" rx="1" />
          <rect x="20" y="14" width="60" height="22" rx="0.5" opacity="0.2" strokeDasharray="2 2" />
        </svg>
      )
    }
  },
  { 
    code: 'G-70', weight: '0,35', txp: '8', shape: 'complemento', description: 'Adaptador para Vidrio Simple 4mm', page: '14',
    technicalDetails: {
      dimensions: '15mm x 8mm',
      applications: [
        'Suplemento para adaptar la cámara de acristalamiento a vidrio simple de 4mm.',
        'Se inserta por presión en la canal de la hoja.'
      ],
      sketch: (
        <svg viewBox="0 0 100 30" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 20,5 L 80,5 L 80,25 L 60,25 L 60,12 L 40,12 L 40,25 L 20,25 Z" />
        </svg>
      )
    }
  },
  {
    code: 'G-71', weight: '0,25', txp: '10', shape: 'contravidrio', description: 'Contravidrio / Junquillo Gamma', page: '15',
    technicalDetails: {
      dimensions: '12mm x 10mm',
      applications: [
        'Retención del vidrio dentro de la cámara de acristalamiento.',
        'Se inserta por clip a presión sin necesidad de tornillos.'
      ],
      sketch: (
        <svg viewBox="0 0 100 30" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 30,5 L 70,5 L 70,15 L 60,15 L 60,25 L 40,25 L 40,15 L 30,15 Z" />
        </svg>
      )
    }
  },
  {
    code: 'G-72', weight: '0,32', txp: '8', shape: 'junta', description: 'Felpa de Hermeticidad Gamma', page: '16',
    technicalDetails: {
      dimensions: '7mm x 6mm',
      applications: [
        'Burlete de polipropileno para sellado perimetral.',
        'Compatible con todos los perfiles marco y hoja de la serie.',
        'Proporciona hermeticidad al aire e impermeabilidad básica.'
      ],
      sketch: (
        <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <rect x="15" y="5" width="70" height="30" rx="2" />
          <path d="M 30,15 L 70,15" opacity="0.4" strokeDasharray="2 2" />
          <path d="M 30,25 L 70,25" opacity="0.4" strokeDasharray="2 2" />
        </svg>
      )
    }
  },
  {
    code: 'G-80', weight: '0,18', txp: '10', shape: 'accesorio', description: 'Tapa Plástica de Cierre Lateral', page: '17',
    technicalDetails: {
      dimensions: '18mm x 15mm',
      applications: [
        'Cubierta estética para las tornillerías de cierre lateral.',
        'Material plástico ABS color anodizado.',
        'Inserción simple sin necesidad de herramientas.'
      ],
      sketch: (
        <svg viewBox="0 0 100 60" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <path d="M 30,10 L 70,10 L 75,30 L 70,50 L 30,50 L 25,30 Z" />
          <circle cx="50" cy="30" r="6" opacity="0.3" />
        </svg>
      )
    }
  },
  {
    code: 'G-81', weight: '0,40', txp: '6', shape: 'accesorio', description: 'Manija de Accionamiento Gamma', page: '18',
    technicalDetails: {
      dimensions: '180mm x 25mm',
      applications: [
        'Manija ergonómica para abrir y cerrar las hojas corredizas.',
        'Material aluminio anodizado plateado.',
        'Instalación rápida con tornillos de fijación M5.'
      ],
      sketch: (
        <svg viewBox="0 0 100 50" className="w-full h-full fill-none stroke-current stroke-[1.5]">
          <ellipse cx="50" cy="25" rx="40" ry="12" />
          <circle cx="30" cy="25" r="3" fill="currentColor" />
          <circle cx="70" cy="25" r="3" fill="currentColor" />
        </svg>
      )
    }
  }
];

export const deltaProfiles: Profile[] = [
  { code: '601', weight: '0,75', txp: '3', shape: 'marco', description: 'Marco de Ventana de Abrir', page: '5' },
  { code: '603', weight: '0,58', txp: '4', shape: 'marco', description: 'Marco de Postigo Delta', page: '31' },
  { code: '604', weight: '0,44', txp: '8', shape: 'hoja', description: 'Hoja de Postigo Delta', page: '31' },
  { code: '605', weight: '0,31', txp: '10', shape: 'tubo', description: 'Tablilla de Postigo Delta', page: '32' },
  { code: '612', weight: '0,76', txp: '2', shape: 'inversor', description: 'Inversor para Banderola Delta', page: '15' },
  { code: '615', weight: '1,09', txp: '3', shape: 'hoja', description: 'Travesaño de Puerta (sin contravidrio exterior)', page: '11' },
  { code: '616', weight: '1,29', txp: '3', shape: 'hoja', description: 'Zócalo de Puerta (sin contravidrio exterior)', page: '12' },
  { code: '631', weight: '0,86', txp: '3', shape: 'hoja', description: 'Hoja Ventana de Abrir Delta', page: '6' },
  { code: '632', weight: '0,32', txp: '3', shape: 'contramarco', description: 'Contravidrio Recto 36 mm', page: '17' },
  { code: '633', weight: '0,28', txp: '10', shape: 'contravidrio', description: 'Contravidrio Recto 24 mm', page: '17' },
  { code: '634', weight: '1,28', txp: '3', shape: 'acople', description: 'Acople Columna Reforzado', page: '23' },
  { code: '635', weight: '0,92', txp: '3', shape: 'hoja', description: 'Hoja Ventana de Abrir Recta', page: '6' },
  { code: '637', weight: '0,94', txp: '4', shape: 'travesaño', description: 'Travesaño de Hoja Delta', page: '14' },
  { code: '638', weight: '0,70', txp: '5', shape: 'travesaño', description: 'Travesaño de Marco Delta', page: '14' },
  { code: '639', weight: '0,99', txp: '3', shape: 'hoja', description: 'Hoja Ventana Corrediza Delta', page: '27' },
  { code: '640', weight: '1,00', txp: '3', shape: 'hoja', description: 'Hoja Ventana Corrediza Delta 2', page: '27' },
  { code: '642', weight: '0,29', txp: '3', shape: 'acople', description: 'Encuentro de 4 hojas (Corrediza)', page: '24' },
  { code: '643', weight: '1,10', txp: '3', shape: 'marco', description: 'Marco para Ventana Guillotina', page: '16' },
  { code: '645', weight: '0,85', txp: '4', shape: 'hoja', description: 'Hoja de Ventana Guillotina Delta', page: '16' },
  { code: '648', weight: '0,50', txp: '5', shape: 'premarco', description: 'Premarco de 55 mm Delta', page: '33' },
  { code: '649', weight: '0,19', txp: '3', shape: 'contramarco', description: 'Contramarco Recto Delta', page: '21' },
  { code: '653', weight: '0,64', txp: '3', shape: 'hoja', description: 'Parante Central (Ventana Corrediza)', page: '14' },
  { code: '654', weight: '0,58', txp: '3', shape: 'hoja', description: 'Parante Central Reforzado (Ventana Corrediza)', page: '15' },
  { code: '655', weight: '1,48', txp: '2', shape: 'marco', description: 'Marco para Ventana y Puerta Corrediza M-Cinco', page: '22' },
  { code: '656', weight: '0,71', txp: '3', shape: 'marco', description: 'Marco Paño Fijo Curvo', page: '13' },
  { code: '657', weight: '1,43', txp: '3', shape: 'hoja', description: 'Hoja de Ventana y Puerta Corrediza M-Cinco', page: '23' },
  { code: '658', weight: '0,46', txp: '8', shape: 'encuentro-4-hojas', description: 'Encuentro de Hoja Delta', page: '23' },
  { code: '668', weight: '0,66', txp: '3', shape: 'marco', description: 'Marco de Puerta de Rebatir', page: '7' },
  { code: '669', weight: '1,65', txp: '3', shape: 'hoja', description: 'Zócalo de Puerta', page: '9' },
  { code: '670', weight: '1,05', txp: '3', shape: 'hoja', description: 'Travesaño de Puerta', page: '10' },
  { code: '671', weight: '1,00', txp: '3', shape: 'hoja', description: 'Parante de Puerta', page: '8' },
  { code: '672', weight: '0,18', txp: '3', shape: 'contramarco', description: 'Contravidrio Curvo Exterior Puerta', page: '19' },
  { code: '673', weight: '0,39', txp: '6', shape: 'marco', description: 'Marco para Paño Fijo de 31,5 mm Delta', page: '20' },
  { code: '675', weight: '1,25', txp: '2', shape: 'hoja', description: 'Hoja de Puerta Balcón Delta', page: '10' },
  { code: '691', weight: '0,53', txp: '8', shape: 'hoja', description: 'Hoja para Ventana Banderola Delta', page: '18' },
  { code: '692', weight: '0,51', txp: '8', shape: 'hoja', description: 'Hoja para Ventana Ventiluz Delta', page: '17' },
  { code: '694', weight: '0,80', txp: '3', shape: 'hoja', description: 'Perfil Inversor Delta', page: '28' },
  { code: '695', weight: '0,86', txp: '3', shape: 'hoja', description: 'Hoja Ventana Oscilo-Batiente', page: '26' },
  { code: '696', weight: '0,90', txp: '3', shape: 'hoja', description: 'Hoja Ventana Oscilo-Batiente 2', page: '27' },
  { code: '720', weight: '0,26', txp: '3', shape: 'acople', description: 'Perfil de Acople Delta', page: '22' },
  { code: '129', weight: '0,12', txp: '3', shape: 'acople', description: 'Tapa para doble compensador guillotina', page: '25' },
  { code: '571', weight: '0,21', txp: '3', shape: 'contramarco', description: 'Contravidrio Recto 36 mm (Liviano)', page: '18' },
  { code: '644', weight: '0,18', txp: '3', shape: 'contramarco', description: 'Contravidrio Recto Exterior Puerta', page: '20' },
  { code: '9469', weight: '0,16', txp: '3', shape: 'acople', description: 'Varilla de Empuje', page: '29' },
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
  { code: 'FI-101', weight: '2.10', shape: 'encuentro-4-hojas', description: 'Columna de Frente Integral' },
  { code: 'FI-102', weight: '1.85', shape: 'travesaño', description: 'Travesaño de Frente Integral' }
];

export const frenteVidriadoProfiles: Profile[] = [
  { code: 'FV-201', weight: '1.95', shape: 'encuentro-4-hojas', description: 'Columna de Frente Vidriado' },
  { code: 'FV-202', weight: '1.70', shape: 'travesaño', description: 'Travesaño de Frente Vidriado' }
];

export const barandasProfiles: Profile[] = [
  { code: 'B-101', weight: '0.95', shape: 'encuentro-4-hojas', description: 'Pasamano de Baranda' },
  { code: 'B-102', weight: '0.85', shape: 'encuentro-4-hojas', description: 'Columna de Baranda' }
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

export const allProfiles: Profile[] = [
  ...traditionalProfiles,
  ...mediterraneaProfiles,
  ...mediterraneaRPTProfiles,
  ...monacoRPTProfiles,
  ...lamaParasolProfiles,
  ...frameJuntaCerradaProfiles,
  ...gammaProfiles,
  ...deltaProfiles,
  ...monacoProfiles,
  ...atlanticaProfiles,
  ...nizaProfiles,
  ...monacoTopProfiles,
  ...frenteIntegralProfiles,
  ...frenteVidriadoProfiles,
  ...barandasProfiles,
  ...mamparasProfiles,
  ...placardProfiles,
  ...cortinasProfiles,
  ...complementariosProfiles
];

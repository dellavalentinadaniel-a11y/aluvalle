import { ShoppingCart } from 'lucide-react';

export interface AffiliateProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  buyLink: string;
}

export const technicalTools: AffiliateProduct[] = [
  {
    id: "HRUH1T-L3VM",
    title: "Sierra Ingletadora Shimura Sh-s8 1250w",
    description: "Corte de precisión para perfiles de aluminio.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/1nx9LXh"
  },
  {
    id: "HRUH1T-8M9D",
    title: "Herramienta Universal Para Carpintería De 70 Grados Con Medi",
    description: "Medición y escuadra precisa para taller.",
    imageUrl: "/gallery/tools/medicion.png",
    buyLink: "https://meli.la/1qSiM7L"
  },
  {
    id: "HRUH1T-2X3H",
    title: "Amoladora Angular 115mm 820w Black Decker G720n",
    description: "Para cortes rápidos y desbaste.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/1WgdZuM"
  },
  {
    id: "HRUH1T-UF98",
    title: "Sierra Ingletadora 1600 W 216 Mm Einhell Tc-ms 2112",
    description: "Alta potencia para cortes limpios.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/2q9xoEf"
  },
  {
    id: "HRUH1T-ND5R",
    title: "Sierra Ingletadora De Banco Lusqtoff 1250w + Disco 210mm",
    description: "Mesa combinada para cortes versátiles.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/2dyB8Jh"
  },
  {
    id: "HRUH1T-TEST",
    title: "Sierra Ingletadora Total 1400 Watts Disco 210mm",
    description: "Excelente relación calidad-precio.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/2TtYsYm"
  }
];

export const consumables: AffiliateProduct[] = [
  {
    id: "HRUH1T-V1CK",
    title: "Soporte Perfil Aluminio Angular X 4 Esquina",
    description: "Para unión y refuerzo de perfiles.",
    imageUrl: "/gallery/tools/consumibles.png",
    buyLink: "https://meli.la/2G2TLNE"
  },
  {
    id: "HRUH1T-F0TU",
    title: "Tornillos Autoperforantes 8x3/4 Cabeza Tanque X 100",
    description: "Fijación segura para aberturas.",
    imageUrl: "/gallery/tools/consumibles.png",
    buyLink: "https://meli.la/28L5ufx"
  },
  {
    id: "HRUH1T-YWVL",
    title: "Bisagra Metal Para Perfil 4040 Impresora 3d Accesorios",
    description: "Bisagras robustas de aplicación múltiple.",
    imageUrl: "/gallery/tools/consumibles.png",
    buyLink: "https://meli.la/2zvEU4C"
  },
  {
    id: "HRUH1T-Y0JT",
    title: "Kit Frente Placard Corredizo Aluminio 1,5mts D52 Ropero",
    description: "Sistema completo para frentes de placard.",
    imageUrl: "/gallery/tools/consumibles.png",
    buyLink: "https://meli.la/1hoJ6ZH"
  },
  {
    id: "HRUH1T-UNNZ",
    title: "Kit Herrajes Placard 2 Ptas | Ducasse D-7/d-14 Simple 1,50mt",
    description: "Sistema de rodamientos de alta calidad.",
    imageUrl: "/gallery/tools/consumibles.png",
    buyLink: "https://meli.la/254gp4v"
  }
];

export const advertisingProducts: AffiliateProduct[] = [
  {
    id: "HRUH1T-2X3H",
    title: "Amoladora Angular 115mm 820w Black Decker",
    description: "Cortes y desbastes precisos.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/1WgdZuM"
  },
  {
    id: "HRUH1T-FTMW",
    title: "Taladro Atornillador Inalámbrico Branx",
    description: "Herramienta a batería de 18v.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/2m9gsyJ"
  },
  {
    id: "HRUH1T-6WGK",
    title: "Sierra De Banco Logus Lsm-2000 5000rpm",
    description: "Cortes potentes y precisos.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/12Cz3PF"
  },
  {
    id: "HRUH1T-FU76",
    title: "Nivel Laser 3burbujas Cinta Métrica",
    description: "Alineación profesional de aberturas.",
    imageUrl: "/gallery/tools/medicion.png",
    buyLink: "https://meli.la/1KbfVN4"
  },
  {
    id: "HRUH1T-U06T",
    title: "Soplador Pistola Mini Jet Inalámbrico",
    description: "Limpieza profunda en taller.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/1sdYTR9"
  },
  {
    id: "HRUH1T-JJZ6",
    title: "Rotomartillo Taladro Percutor 850w Sds Plus",
    description: "Perforaciones en mampostería.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/2RakcAs"
  },
  {
    id: "HRUH1T-1RFD",
    title: "Calibre Digital 0-150mm Fibra De Carbono",
    description: "Medición exacta en milímetros.",
    imageUrl: "/gallery/tools/medicion.png",
    buyLink: "https://meli.la/2WD4vnM"
  },
  {
    id: "HRUH1T-BDG1",
    title: "Sierra Caladora Profesional",
    description: "Cortes curvos y rectos.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/2YHAfsV"
  },
  {
    id: "HRUH1T-WZJS",
    title: "Máquina Pistola Para Pintar Omaha 450w",
    description: "Acabados y pintura industrial.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/1QFXq7H"
  },
  {
    id: "HRUH1T-RLRH",
    title: "Medidor De Distancia Láser Gadnic 40 Metros",
    description: "Relevamiento de vanos con láser.",
    imageUrl: "/gallery/tools/medicion.png",
    buyLink: "https://meli.la/1nYtQVK"
  },
  {
    id: "HRUH1T-4VEZ",
    title: "Martillo Demoledor Total 20 Joules Hexagonal",
    description: "Trabajos pesados en obra.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/2GimNwV"
  },
  {
    id: "HRUH1T-YVQB",
    title: "Termómetro Infrarrojo Digital Brinna",
    description: "Medición de temperatura superficial.",
    imageUrl: "/gallery/tools/medicion.png",
    buyLink: "https://meli.la/1wTMaTi"
  },
  {
    id: "HRUH1T-J1E7",
    title: "Kit Multímetro Digital Pinza Amperométrica",
    description: "Verificación de circuitos eléctricos.",
    imageUrl: "/gallery/tools/medicion.png",
    buyLink: "https://meli.la/2rtrjMC"
  },
  {
    id: "HRUH1T-UGSV",
    title: "Lijadora Eléctrica Orbital Bron By Gadnic",
    description: "Acabados lisos y precisos.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/1h7HexC"
  },
  {
    id: "HRUH1T-Q7NS",
    title: "Válvula De Control Con Caudalímetro Gadnic",
    description: "Reguladora para Atal y Argón.",
    imageUrl: "/gallery/tools/consumibles.png",
    buyLink: "https://meli.la/1eNTRZC"
  },
  {
    id: "HRUH1T-BSNP",
    title: "Termofusora 1500w",
    description: "Herramienta de termofusión profesional.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/1zm96tk"
  },
  {
    id: "HRUH1T-L17D",
    title: "Estación De Soldadura Aire Caliente Yihua",
    description: "Digital 700w con accesorios.",
    imageUrl: "/gallery/tools/electrica.png",
    buyLink: "https://meli.la/2vYs2j2"
  },
  {
    id: "HRUH1T-NMNP",
    title: "Sierra Circular Bosch Gks 150 1500w",
    description: "Corte profesional de maderas y aluminio.",
    imageUrl: "/gallery/tools/corte.png",
    buyLink: "https://meli.la/276e3kk"
  }
];

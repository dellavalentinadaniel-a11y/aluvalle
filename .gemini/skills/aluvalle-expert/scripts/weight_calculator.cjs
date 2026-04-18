/**
 * Calculadora de Peso de Perfiles de Aluminio
 * Fórmula: Área (mm²) * Largo (m) * 0.0027 (Densidad Al)
 */
function calculateWeight(areaMm2, lengthM) {
  const density = 0.0027; // kg/(mm²*m)
  return (areaMm2 * lengthM * density).toFixed(3);
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Uso: node weight_calculator.cjs [área_mm2] [largo_metros]");
  process.exit(1);
}

const area = parseFloat(args[0]);
const length = parseFloat(args[1]);
console.log(`Peso estimado: ${calculateWeight(area, length)} kg`);

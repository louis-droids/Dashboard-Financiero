function calcularResultado(
    ventas: number,
    costos: number,
    gastos: number
): number {
    const utilidad = ventas - costos - gastos;
    return utilidad;
    
};

function calcularMargen(
    ventas: number,
    utilidad: number
): number {
    const margen = utilidad/ventas * 100;
    return margen
};

const resultado = calcularResultado(1000000, 650000, 200000);
const margen = calcularMargen(1000000, resultado);

console.log("Utilidad:", resultado);
console.log("Margen:", `${margen}%`);
const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error("Error: Debes proporcionar exactamente dos números.");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
    console.error("Error: Ambos argumentos deben ser números.");
    process.exit(1);
}

// Operaciones
const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;

let division = "Error: División por cero no permitida";

if (num2 !== 0) {
    division = num1 / num2;
}

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);

const fs = require('fs');

fs.readFile('./src/utils/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error al leer el archivo input.txt:", err);
        return;
    }

    const upperCaseData = data.toUpperCase();

    fs.writeFile('./src/utils/output.txt', upperCaseData, (err) => {
        if (err) {
            console.error("Error al escribir el archivo output.txt:", err);
            return;
        }
        console.log("El archivo output.txt ha sido creado con éxito.");
    });
});

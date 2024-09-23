const fs = require('fs');

fs.promises.readFile("./src/utils/input.txt")
.then((data) => {
    console.log(`Resultado: ${data}`);
})
.catch((error) => {
    console.log("Error al leer el archivo.");
});
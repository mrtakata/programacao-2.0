const fs = require('fs');

const nossoCodigo = "Mayu que pediu";
if (!fs.existsSync("./pasta")) {
    fs.mkdirSync("./pasta");
}
fs.writeFileSync("./pasta/arquivoTeste", nossoCodigo);

fs.appendFileSync("./arquivoTeste", " yay");

let input = fs.readFileSync("./arquivoTeste", "utf8");

console.log(input);
console.log(input);
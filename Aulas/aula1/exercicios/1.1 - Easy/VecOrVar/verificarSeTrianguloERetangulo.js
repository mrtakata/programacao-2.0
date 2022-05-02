// Exercicio C - verificar se triangulo [e retangulo
// Primeira versao
var ladosDoTriangulo = [];
var i;

for (i = 0; i < 3; i++){
    ladosDoTriangulo[i] = prompt("Escreva o lado do triangulo");
}

if (ladosDoTriangulo[0] * ladosDoTriangulo[0] === ladosDoTriangulo[1] * ladosDoTriangulo[1] + ladosDoTriangulo[2] * ladosDoTriangulo[2]) {
    console.log("O triangulo [e Retangulo");
} else {
    console.log("O triangulo nao [e Retangulo");
}


// Segunda versao
var hipotenusa;
var cateto = [];
var i;
hipotenusa = prompt("Escreva o tamanho da hipotenusa");

for (i = 0; i < 2; i++){
    cateto[i] = prompt("Escreva o tamanho do cateto " + i);
}
if (hipotenusa * hipotenusa === cateto[0] * cateto[0] + cateto[1] * cateto[1]) {
    console.log("O triangulo [e Retangulo");
} else {
    console.log("O triangulo nao [e Retangulo");
}

// encontre o maior valor entre um conjunto de numeros inteiros
var numeros = [1, 2, 5, 3];
var maior = numeros[0];
var i;

for(i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i];
    }
}

console.log('maior =', maior);
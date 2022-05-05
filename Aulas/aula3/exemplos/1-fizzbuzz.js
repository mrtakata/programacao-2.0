/* Dado um número, eu quero que a função retorne como resposta
   "fizz", se o número for dividido por 3,
   "buzz", se o número for dividido por 5,
   "fizzbuzz", se o número for dividido por 3 e 5
   "meh", caso contrário

    Exs: 
        3 "fizz"
        10 "buzz"
        30 "fizzbuzz"
        4 "meh"
*/

function fizzbuzz(numero){
    var resultado = numero % 15 == 0;
    if (numero % 15 == 0){
        console.log(numero, "fizzbuzz");
    }
    else if(numero % 3 == 0){
        console.log(numero, "fizz");
    }
    else if(numero % 5 == 0){
        console.log(numero, "buzz");
    }
    else{
        console.log(numero, "meh");
    }
}


/* Dado um vetor de numeros, para cada numero, 
   printar as condicoes do fizzbuzz */

function fizzbuzzBoladao(vetorDeNumeros){
    for(let i = 0; i < vetorDeNumeros.length; i++){
        fizzbuzz(vetorDeNumeros[i]);
    }
}

var array = [1,2,3,4,5,6,7,8,9,10,15, 30];
fizzbuzzBoladao(array);
/* 
    Dada uma frase, retorne quantas vezes
    uma determinada palavra aconteceu na frase 
    Ex: "oi tudo bem meu bem", "bem" - 2
        "obrigado amigo você é um amigo", "um" - 1
*/

function contadorDePalavras(frase, palavra){
    var vetorDePalavras = frase.split(' '); 
    var contador = 0;
    
    for(let i = 0; i < vetorDePalavras.length; i++){
        if( vetorDePalavras[i] == palavra){
            contador = contador + 1;
        }
    }
    return contador;
}

var frase = "tchê tchererê tchê tchê tchererê tchê tchê tchererê tchê tchê tchereretchê";
resultado = contadorDePalavras(frase, "tchê"); // 7
console.log(resultado);
resultado = contadorDePalavras(frase, "tchereretchê"); // 1
console.log(resultado);
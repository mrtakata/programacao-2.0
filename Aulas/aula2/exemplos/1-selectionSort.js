var vetor = [2, 3, 4, 5, 8];
console.log('Vetor inicial: ', vetor);
var i;
var j;
var indexDoMinimo;
var minimo;

for(i=0; i < vetor.length - 1; i++){
    minimo = vetor[i];
    indexDoMinimo = i;
    // vou olhar pro resto do vetor e encontrar o menor valor
    for(j= i + 1; j < vetor.length; j++){
        if(vetor[j] < minimo ){
            minimo = vetor[j];
            indexDoMinimo = j;
        }
    }
    // se o valor minimo for diferente do elemento atual,
    if(i != indexDoMinimo){
        // troco o valor do elemento da posicao i 
        // com o valor do elemento na posicao do menor valor
        vetor[indexDoMinimo] = vetor[i];
        vetor[i] = minimo;
    }
}
console.log('Vetor inicial: ', vetor);
// execução
// vetor = [2, 3, 4, 5, 8];
// i=0, j=1, indexDoMinimo=, minimo=, vetor[i]=, vetor[j]=
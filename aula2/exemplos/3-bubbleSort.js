// bubblesort para ordenar de maneira crescente
function bubbleSort(vetor){
    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < vetor.length - 1; j++){
            if(vetor[j] > vetor[j+1]){
                vetor = swap(vetor, j, j+1);
            }
        }
    }
    return vetor;
}

// troca a posicao de dois elementos de um vetor
function swap(vetor, indice1, indice2){
    let aux = vetor[indice2];
    vetor[indice2] = vetor[indice1];
    vetor[indice1] = aux;
    return vetor;
}

var vetor = [-2, 45, 0, 11, -9];
vetor = bubbleSort(vetor);
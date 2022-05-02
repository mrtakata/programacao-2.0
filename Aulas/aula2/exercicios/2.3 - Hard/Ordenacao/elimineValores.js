// Voce ama matematica, e esta jogando um jogo matematico muito divertido! Dado um vetor de numeros inteiros,
// voce pode fazer uma jogada: Pegue dois numeros do vetor, se a diferenca deles for 1, entao voce pode eliminar
// um deles.
//
// Exemplo:
// vetorExemplo = [3, 7, 2, 5]
// vetorExemplo[0] - vetorExemplo[2] = 1, entao posso eliminar um deles (por exemplo, eliminar o 2)
// Entao, vetorExemplo se torna:
// vetorExemplo === [3, 7, 5]
//
// O objetivo do jogo eh eliminar todos os numeros do vetor ate sobrar so um elemento no vetor.
// Exemplo:
// O vetor [3, 7, 2, 5] NAO consegue ser eliminado ate sobrar um elemento so
// O vetor [3, 3, 2, 5] NAO consegue ser eliminado ate sobrar um elemento so
//
// O vetor [6, 4, 5, 8, 7] consegue ser eliminado ate sobrar um elemento so
// O vetor [5, 5, 5, 5, 6] consegue ser eliminado ate sobrar um elemento so
//
// Dado um vetor "vetorDeEntrada", imprima "Sim" se for possivel eliminar todos menos um elemento, senao imprima "Nao"

const vetorDeEntrada = [4, 2, 3, 6, 6, 7, 8, 1, 2, 2, 3, 7, 8, 3, 6, 7, 9, 8, 3, 2, 5, 6, 5, 7]
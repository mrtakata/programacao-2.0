// Voce quer contar quantos ciclos invertidos um vetor "vetorDeEntrada" tem.
// Um ciclo invertido funciona da seguinte forma:
// Para dado elemento "elementoAtual" do vetorDeEntrada, o seu proximo elemento "proximoElemento" do ciclo eh o
// elemento cujo valor eh igual ao indice do "elementoAtual"
// Exemplo:
// vetorDeEntrada = [2, 0, 1]
// Tabela de relacionamento entre elementos
// ||----------------|-----------------||
// ||  elementoAtual | proximoElemento ||
// ||----------------|-----------------||
// || indice |valor  | indice | valor  ||
// ||----------------|-----------------||
// ||   0    |   2   |    1   |    0   ||
// ||   1    |   0   |    2   |    1   ||
// ||   2    |   1   |    0   |    2   ||
// ||----------------|-----------------||
// Ciclo (indices): 0 -> 1 -> 2 -> 0
//
// Imprima quantos ciclos o vetorDeEntrada tem
//
// Exemplo:
// vetorDeEntrada = [2, 0, 1, 3, 5, 4]
// Resposta: 3
// Explicacao: temos os ciclos:
// 0 -> 1 -> 2 -> 0
// 3 -> 3
// 4 -> 5 -> 4

const vetorDeEntrada = [1, 0, 5, 3, 2, 7, 6, 4];

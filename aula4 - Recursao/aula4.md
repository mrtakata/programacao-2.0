## Funcao Recursiva
Funcao Recursiva eh definido como uma funcao que define seu valor em termos da mesma funcao para outra entrada. De uma forma simplificada, ela eh uma funcao que faz uma chamada pra ela mesma.

Exemplo:

```js
// function nomeDaFuncao(estado)
function contador(quantidadeRestante) {
    // Caso Base
    if (quantidadeRestante <= 0) {
        return 0;
    }
    // return transicao
    return contador(quantidadeRestante - 1) + 1;
}
```
Como voces podem ver na funcao acima, uma funcao recursiva contem tres componentes principais: estado, caso base e transicao.

- O estado eh definido pelos argumentos da funcao, e o valor da funcao (valor de retorno) deve ser sempre o mesmo para o mesmo estado.
- O caso base eh definido como os valores de retorno que nao dependem da chamada recursiva (i.e. a chamada da funcao recursiva dentro dela mesma). O caso base eh essencial para que a funcao nao fique em loop infinito, entao ela deve ser bem definida para que a funcao recursiva sempre caia nela em algum momento.
- A transicao eh definida como a parte do algoritmo que vai definir como a chamada recursiva deve ser feita. A chamada recursiva nao pode ter o mesmo estado que o estado atual (AFAIK), portanto a transicao deve ser bem definida para que a call stack nao tenha dois estados iguais, criando um loop infinito

Call stack se define como a pilha da chamada de funcoes (nao necessariamente recursiva). Cada chamada de funcao cria uma instancia nova da funcao e esta instancia sera inserida no topo da pilha, e a funcao sendo executada sempre sera a do topo tambem, i.e. as funcoes sao chamadas e imediatamente executadas. Quando a funcao termina de executar, esta eh removida da pilha e a proxima funcao na pilha continua sendo executada A PARTIR DE ONDE PAROU.

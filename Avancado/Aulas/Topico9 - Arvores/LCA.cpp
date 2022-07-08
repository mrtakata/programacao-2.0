DFS(atual, paiDoAtual, altura atual) {
	pai[atual] = paiDoAtual;
	DFS(vizinho, atual, altura atual + 1);
}
DFS(raiz, raiz);

preprocessa() {
    for (int j = 1; j < logn; j++){
        for (int i = 0; i < n; i++) {
            paiAtual = ancestrais[i][j];
            ancestrais[i][j + 1] = ancestrais[paiAtual][j];
        }
    }
}
LCA(a, b) {
    // iguala alturas
    // busca binaria
    // soma 1 no resultado da busca binaria e retorna
}
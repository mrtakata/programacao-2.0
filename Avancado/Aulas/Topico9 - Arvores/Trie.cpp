insert
    indicar no inicial (root);
    pra cada letra da palavra
        se letra ja foi inserida
            vai pro vizinho que eh ligada pela aresta da letra atual
        senao
            cria um no de indice ultimoNoinserido + 1
            adiciona a aresta na tabela do no atual ao no criado
            vai pro vizinho que foi criado
    indicar que a palavra terminou

find
    indicar no inicial (root);
    pra cada letra da palavra
        se a letra nao foi inserida
            retorna false
        vai pro vizinho que eh ligada pela aresta da letra atual
    se a palavra termina no no atual
        retorna true
    retorna false

#define N 112345
#define root 0
int trie[N][26];
int ultimoNoinserido = 0;
int convert(char c) {
    return c - 'a';
}

// also
void insert(string s) {
    int noAtual = root;
    for (int i = 0; i < s.size(); i++) {
        if (exist(trie[noAtual][convert(s[i])])) {
            noAtual = trie[noAtual][convert(s[i])];
            continue;
        }
                                   //  DESTINATARIO
        trie[noAtual][convert(s[i])] = ultimoNoinserido + 1;
        ultimoNoinserido++;
        noAtual = ultimoNoinserido;
    }
    trie[noAtual][convert('z') + 1]++;
}
bool find(string s) {
    int noAtual = root;
    for (int i = 0; i < s.size(); i++) {
        if (!exist(trie[noAtual][convert(s[i])])) {
            return false;
        }
        noAtual = trie[noAtual][convert(s[i])];
    }
    if (trie[noAtual][convert('z') + 1] > 0) {
        return true;
    }
    return false;
}

trie[noatual][0] = 1

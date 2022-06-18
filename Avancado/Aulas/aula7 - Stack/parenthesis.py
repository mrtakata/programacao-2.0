def solveParenthesisProblem(parenthesisString):
    stack = []

    # Passa da esquerda pra direita pra cada caracter
    # Se for um parenteses de abertura, coloca na pilha
    # Senao, pop se tiver algo na pilha, se nao tiver retorna false
    for parenthesis in parenthesisString:
        if (parenthesis == "("):
            stack.push("(")
        else:
            if (len(stack)):
                stack.pop()
            else:
                return False
    
    # Se ainda tem elemento na pilha, ainda tem parenteses abertos que nao fecharam
    if (len(stack)):
        return False
    return True

solveParenthesisProblem(input())
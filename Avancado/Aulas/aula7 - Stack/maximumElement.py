#!/bin/python3

import math
import os
import random
import re
import sys

stackSize = 0
st = [0] * 100000

def stackPush(val):
    global stackSize
    st[stackSize] = val
    stackSize += 1

def stackPop():
    global stackSize
    stackSize -= 1

def stackTop():
    global stackSize
    return st[stackSize - 1]

#
# Complete the 'getMax' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts STRING_ARRAY operations as parameter.
#
def getMax(operations):
    # Write your code here
    ret = []
    for i in range(len(operations)):
        currentOperation = operations[i].split(" ")
        if (currentOperation[0] == '1'):
            stackPush(max(int(currentOperation[1]), stackTop()))
        if (currentOperation[0] == '2'):
            stackPop()
        if (currentOperation[0] == '3'):
            ret.append(stackTop())
    return ret
            
            

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    ops = []

    for _ in range(n):
        ops_item = input()
        ops.append(ops_item)

    res = getMax(ops)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')

    fptr.close()

#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'twoStacks' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER maxSum
#  2. INTEGER_ARRAY a
#  3. INTEGER_ARRAY b
#

def twoStacks(maxSum, a, b):
    a = a[::-1]
    b = b[::-1]
    # Write your code here
    currentSum = 0
    auxStack = []
    ans = 0
    maxAns = 0
    while (len(a) and currentSum + a[-1]<= maxSum):
        auxStack.append(a[-1])
        currentSum += a[-1]
        a.pop()
        ans += 1
        maxAns = max(maxAns, ans)
    while (1):
        while (len(b) and currentSum + b[-1] <= maxSum):
            currentSum += b[-1]
            b.pop()
            ans += 1
            maxAns = max(maxAns, ans)
        if (len(auxStack) == 0):
            break
        currentSum -= auxStack[-1]
        auxStack.pop()
        ans -= 1 
        maxAns = max(maxAns, ans)
    return maxAns

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    g = int(input().strip())

    for g_itr in range(g):
        first_multiple_input = input().rstrip().split()

        n = int(first_multiple_input[0])

        m = int(first_multiple_input[1])

        maxSum = int(first_multiple_input[2])

        a = list(map(int, input().rstrip().split()))

        b = list(map(int, input().rstrip().split()))

        result = twoStacks(maxSum, a, b)

        fptr.write(str(result) + '\n')

    fptr.close()

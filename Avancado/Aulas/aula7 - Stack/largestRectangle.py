#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'largestRectangle' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts INTEGER_ARRAY h as parameter.
#

def largestRectangle(h):
    # Write your code here
    stack = []
    maxLeft = []
    ans = 0
    for i in range(len(h)):
        while (len(stack) != 0 and stack[-1][1] >= h[i]):
            ans = max(ans, stack[-1][1] * (i - maxLeft[stack[-1][0]]))
            stack.pop()
        if (len(stack) != 0):
            maxLeft.append(stack[-1][0] + 1)
        else:
            maxLeft.append(0)
        stack.append((i, h[i]))
    
    while (len(stack) != 0):
        ans = max(ans, stack[-1][1] * (len(h) - maxLeft[stack[-1][0]]))
        stack.pop()
    return ans

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    h = list(map(int, input().rstrip().split()))

    result = largestRectangle(h)

    fptr.write(str(result) + '\n')

    fptr.close()

let queue: number[] = [];
let frontIndex = 0;
let endIndex = 0;
let maxSize = 100000;

function front(): number {
    return queue[frontIndex]
}

function pop() {
    frontIndex = (frontIndex + 1) % maxSize;
}

function push(val: number) {
    queue[endIndex] = val;
    endIndex = (endIndex + 1) % maxSize;
}


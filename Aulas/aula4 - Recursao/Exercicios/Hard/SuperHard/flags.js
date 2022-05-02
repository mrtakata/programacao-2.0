// Passe o problema no site https://acm.timus.ru/problem.aspx?space=1&num=1225
// Precisa criar conta. Eh chato mas faz se der hehe
const f = [];
f.push(2); // f[0] = 2;
f.push(2); // f[1] = 2;
f.push(2); // f[2] = 2;
console.log(fibo(45));
function fibo(count) {
    if (!!f[count]) return f[count];
    return f[count] = fibo(count - 1) + fibo(count - 2);
}

// f[count] - any
// !f[count] - boolean
// !!f[count] - boolean
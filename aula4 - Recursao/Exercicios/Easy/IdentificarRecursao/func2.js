
function f2(arg) {
    if (arg < 0) return 1;
    return f2(arg - 1) - f2(arg - 2) + f2(arg - 3);
}
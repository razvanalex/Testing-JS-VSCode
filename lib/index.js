"use strict"

function add(a, b) {
    if (a == 0)
        return b;
    else if (b == 0)
        return a;
    return a + b;
}

export {
    add
}

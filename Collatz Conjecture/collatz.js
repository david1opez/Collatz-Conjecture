function collatz(n) {
    var arr = [];

    arr.push(n);

    while(n != 1) {
        if(n%2 == 0) {
            n = n/2
            arr.push(n);
        }
        else {
            n = 3*n + 1
            arr.push(n);
        }
    }

    arr.push(0);
    return arr;
}

function lenght(arr) {
    var a = [];
    for(i = 0; i < arr.length; i++) {
        a.push(i)
    }
    return a
}
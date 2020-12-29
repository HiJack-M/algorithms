const fibonacci = (n) => {
    if (n == 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const main = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
}

main(8);

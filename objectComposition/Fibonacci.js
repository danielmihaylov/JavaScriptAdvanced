function solve(number) {
    let fib = (function sol() {
        let f1 = 0;
        let f2 = 1;

        return function fib() {
            let f3 = f1 + f2;
            [f1, f2] = [f2, f3];
            return f1;
        }
    })();
    let fibNums = [];
    for(let i =0; i < number; i++){
        fibNums.push(fib());
    }

    return fibNums;
}







function algorithm(a,b) {
    let result = [];
    let divider = Math.min(a,b);
    for(let i = 1;i <= divider;i++){
        if(a % i ==0 && b % i ==0){
            result.push(i);
        }
    }
    let max = Number.MIN_VALUE;
    for(let num of result){
        if(num > max){
            max = num;
        }
    }

    return max;
}


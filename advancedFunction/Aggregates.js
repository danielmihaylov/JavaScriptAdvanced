function aggregate(arr) {
    function reduce(arr,func) {
        let result = arr[0];
        for (let nextElement of arr.slice(1)){
            result = func(result, nextElement);
            return result;
        }
    }

    console.log("Sum = " + reduce(arr,(a,b)=> Number(a) + Number(b)));
    console.log("Min = " + reduce(arr,(a,b)=> Math.min(a,b)));
    console.log("Max = " + reduce(arr,(a,b)=> Math.max(a,b)));
    console.log("Produce = " + reduce(arr,(a,b)=> Number(a) * Number(b)));
    console.log("Join = " + reduce(arr,(a,b)=> '' + a + b));
}



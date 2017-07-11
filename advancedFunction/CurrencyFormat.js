function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(formatter) {
    return function (value) {
        return formatter(',','$',true, value);
    }
}

let dollars = getDollarFormatter(formatCurrency);
console.log(dollars(5345));

// console.log(formatCurrency(',', '$', true, 3));
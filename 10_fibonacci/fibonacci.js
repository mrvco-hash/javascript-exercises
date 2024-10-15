const fibonacci = function(number) {
    const fibonacciList = [0, 1];
    if (typeof number == "string") {
        number = Number(number)
    }
    if (number < 0) {
        return "OOPS";
    } else {
        for (let i = 0; i < number; i++) {
            let fibonacciListFirst = fibonacciList[fibonacciList.length - 1];
            let fibonacciListSecond = fibonacciList[fibonacciList.length - 2];
            fibonacciList.push(fibonacciListFirst + fibonacciListSecond);
        }
        return fibonacciList[fibonacciList.length - 2];
    }
};

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 > num2) {
        let num3 = 0;
        num3 = num2;
        num2 = num1;
        num1 = num3;
    }
    if (num1 < 0 || num2 < 0 || num1 % 1 !== 0 || num1 % 1 !== 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"
    }
    while (num1 <= num2) {
        sum += num1
        num1++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

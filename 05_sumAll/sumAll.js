const sumAll = function(num1, num2) {
    let total = 0;
    let compteur = 0;

    if ((Number.isInteger(num1)) && Number (Number.isInteger(num2))) {
        if ((num1 < 0) || (num2 < 0)) {
            return "ERROR";
        } else {
            if (num1 < num2) {
                while (num1 <= num2) {
                    total += num1
            
                    num1++
                    compteur++
                }
            } else if (num1 > num2) {
                while (num2 <= num1) {
                    total += num2
            
                    num2++
                    compteur++
                }
            }
            return total
        }
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;

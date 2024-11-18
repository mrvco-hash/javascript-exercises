const repeatString = function(str, num) {
    let output = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            output += str;
        }    
    } else {
        return "ERROR"
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

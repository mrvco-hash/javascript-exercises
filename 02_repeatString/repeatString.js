const repeatString = function(str, num) {
    output = '';
    i = 0;
    if (num < 0) {
        output = 'ERROR'
    } else {
        while (i < num) {
            output += str;
            ++i
        }
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

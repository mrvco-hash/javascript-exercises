const reverseString = function(str) {
    strList = str.split("");
    strList = strList.reverse();
    strList = strList.join("");

    return strList;
};

// Do not edit below this line
module.exports = reverseString;

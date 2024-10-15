const palindromes = function (string) {
    const letters = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q",
    "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const stringList = string.split("");
    let finalString = "";
    for (let i = 0; i < stringList.length; i++) {
        let letterToTest = stringList[i];
        for (let x = 0; x < letters.length; x++) {
            if ((letterToTest == letters[x]) || (letterToTest == letters[x].toUpperCase())) {
                finalString += letterToTest;
            }
        }
    }

    const reverseString = finalString.split("").reverse().join("").toLowerCase();
    if (finalString.toLowerCase() === reverseString) {    
        return true;
    } else if (finalString !== reverseString){
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
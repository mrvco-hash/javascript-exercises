const getTheTitles = function(array) {
    const booksTitles = [];
    for (let i = 0; i < array.length; i++) {
        aBook = array[i];
        booksTitles.push(aBook.title);
    }
    return booksTitles;
};

// Do not edit below this line
module.exports = getTheTitles;

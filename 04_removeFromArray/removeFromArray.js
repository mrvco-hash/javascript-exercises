const removeFromArray = function(liste, ...delListe) {
    return liste.filter(elem => !delListe.includes(elem))
};

// Do not edit below this line
module.exports = removeFromArray;

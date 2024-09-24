const removeFromArray = function(liste, ...delListe) {
    for (let num of delListe) {
        for (i = 0; i < liste.length; i++) {
            while (liste[i] === num) {
                liste.splice(liste.indexOf(liste[i]), 1);
            }
        }
    }
    return liste;
};

// Do not edit below this line
module.exports = removeFromArray;

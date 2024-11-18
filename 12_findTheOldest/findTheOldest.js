const findTheOldest = function(ListOfPersons) {
    for (let i = 0; i < ListOfPersons; i++) {
        person = ListOfPersons[i]

        if (name in person) { let personName = name;
            console.log("Person name :" + personName);
            console.log("Name in the table :" + name)
         }
        if (yearOfBirth in person) { let personBirth = yearOfBirth 
            console.log("Person birth :" + personBirth)
            console.log("Year of birth in the table :" + yearOfBirth)
        }
        if (yearOfDeath in person) { 
            let personDeath = yearOfDeath
            console.log("Person death :" + personDeath)
            console.log("Year of death in the table :" + yearOfDeath)
        } else {
            let actualDate = new Date();
            let personDeath = actualDate.getFullYear();
            console.log("Person death :" + personDeath)
            console.log("Year of death in the table if person as no date of death :" + yearOfDeath)
        }
    }
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;

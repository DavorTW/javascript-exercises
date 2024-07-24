const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    const oldest = people.sort((a,b)=>{
        if (a.yearOfDeath === undefined ) {
            const currentGuy = currentYear - a.yearOfBirth;
            const nextGuy = b.yearOfDeath - b.yearOfBirth;
            return currentGuy > nextGuy ? -1 : 1;
        }
        if (b.yearOfDeath === undefined ) {
            const currentGuy = a.yearOfDeath - a.yearOfBirth;
            const nextGuy = currentYear - b.yearOfBirth;
            return currentGuy > nextGuy ? -1 : 1;
        }
        const currentGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return currentGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];
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

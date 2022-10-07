const findTheOldest = function(object) {
    let oldest = {
        name: "none",
        age: 0,
    };
    let ages = [];
    for (i = 0; i < object.length; i++) {
        if (object[i].yearOfDeath == undefined) {
            ages[i] = {name: (object[i].name), age: ((2022) - (object[i].yearOfBirth))};
        } else {
            ages[i] = {name: (object[i].name), age: ((object[i].yearOfDeath) - (object[i].yearOfBirth))};
        }
    }
    for (i = 0; i < ages.length; i++) {
        if (oldest.name == "none") {
            oldest.name = ages[i].name;
            oldest.age = ages[i].age;
        } else if (oldest.age < ages[i].age) {
            oldest.name = ages[i].name;
            oldest.age = ages[i].age;
        } else {
            continue;
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

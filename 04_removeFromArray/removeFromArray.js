const removeFromArray = function(array, ...args) {
    const filteredArray = [];
    array.forEach( (element) => {
        if (!args.includes(element)) {
            filteredArray.push(element);
        }
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(integer1 = 0, integer2 = 0) {
    let sum = 0;
    let temp = null;
    if (integer1 > integer2) {
        temp = integer1;
        integer1 = integer2;
        integer2 = temp;
    }
    if (integer1 < 0 || integer2 < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(integer1) || !Number.isInteger(integer2)) {
        return "ERROR";
    }
    while (integer1 <= integer2) {
        sum = sum + integer1;
        integer1++
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

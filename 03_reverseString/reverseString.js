const reverseString = function(string) {
    //we need to convert the string to an array so we can manipulate it
    const stringArray = string.split("");
    let reversedArray = [];

    //we need to calculate the last index manually because js doesnt
    // have a [-1] functionality
    for(let i = stringArray.length - 1; i >= 0; i--){
        reversedArray.push(stringArray[i]);
    }
    //we use join with empty quotes to concatenate each element
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

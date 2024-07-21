const palindromes = function (str) {
    str = str.toLowerCase();
    let strArr = [...str];
   
    let onlyLetters = strArr.filter(item =>{
        return /[a-z0-9]/.test(item);
    });
    
    let reversedArray = [];
    for (let i = onlyLetters.length - 1; i >= 0; i--) {
        reversedArray.push(onlyLetters[i])
    }
    
    if (onlyLetters.length !== reversedArray.length) {
        return false;
    }else{
        for(let i = 0; i < onlyLetters.length; i++){
            if (onlyLetters[i] !== reversedArray[i]) {
                return false;
            }
        }
        return true;
    }

};

// Do not edit below this line
module.exports = palindromes;

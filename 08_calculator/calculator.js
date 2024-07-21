const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  // let sum = 0;
	// for(let i=0; i<arr.length; i++){
  //   sum += arr[i];
  // }
  // return sum;

  let result = arr.reduce((total,currentItem) =>{
    return total += currentItem
  }, 0);
  return result;
};

const multiply = function(arr) {
  let result = arr.reduce((total, currentItem)=>{
    return total * currentItem;
  },1);
  return result;
};

const power = function(num1, num2) {
	let power = 1;
  if (num2 === 0) {
    return 1;
  }else if (num2 === 1) {
    return num1;
  }else{
    for(let i = 0; i<num2; i++){
      power = power * num1;
    }
    return power;
  }
  
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

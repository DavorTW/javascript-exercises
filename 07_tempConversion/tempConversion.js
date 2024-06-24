const convertToCelsius = function(fahrenheit) {
  let conversion = (fahrenheit - 32) * 5/9;
  conversion = conversion.toFixed(1);
  return +conversion;
};

const convertToFahrenheit = function(celsius) {
  let conversion = (celsius * 9/5 + 32);
  conversion = conversion.toFixed(1);
  return +conversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

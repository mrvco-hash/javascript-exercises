const convertToCelsius = function(temp) {
  let tempConvertie = (temp - 32) * (5/9);
  let tempConvertieArrondie = parseFloat(tempConvertie.toFixed(1))
  if (tempConvertieArrondie === 0.0) {
    tempConvertieArrondie = 0
  }
  return tempConvertieArrondie;
};

const convertToFahrenheit = function(temp) {
  let tempConvertie = (temp * (9/5)) + 32
  let tempConvertieArrondie = parseFloat(tempConvertie.toFixed(1))
  return tempConvertieArrondie;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

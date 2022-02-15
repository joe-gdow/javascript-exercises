const ftoc = function(temp) {
  let converted = ((temp - 32) * 5) / 9
  let decimal = Math.round(converted * 10) / 10
  return decimal
};

const ctof = function(temp) {
  let converted = ((temp * 9) / 5) + 32
  let decimal = Math.round(converted * 10) / 10
  return decimal
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

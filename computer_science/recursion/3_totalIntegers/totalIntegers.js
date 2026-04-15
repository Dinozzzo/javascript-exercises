const totalIntegers = function (data) {
  let count = 0;
  for (let key in data) {
    const value = data[key];
    if (Number.isInteger(value)) {
      count++;
    } else if (Array.isArray(value)) {
      count += totalIntegers(value);
    } else if (typeof value === "object" && value !== null) {
      count += totalIntegers(value);
    }
  }
  return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;

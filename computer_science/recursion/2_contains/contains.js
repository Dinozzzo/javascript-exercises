const contains = function (obj, value) {
  for (let key in obj) {
    const current = obj[key];
    if (current === value) {
      return true;
    }

    if (typeof current === "object" && current !== null) {
      if (contains(current, value)) {
        return true;
      }
    }
  }
  return false;
};

console.log(contains({ foo: { bar: "bar" } }, "bar"));

  
// Do not edit below this line
module.exports = contains;

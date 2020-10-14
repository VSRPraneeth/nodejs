var sum = (arr) => {
  var reducer = (prevValue, currentValue) => prevValue + currentValue;
  return arr.reduce(reducer);
};

var PI = 3.14;

class SomeMathObject {
  constructor() {
    console.log("Object Created");
  }
}

// can export multiple values this way

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject = SomeMathObject;

// The other way is
// Shorthand Syntax for { sum: sum, PI: PI, SomeMathObject: SomeMathObject }
module.exports = { sum, PI, SomeMathObject };

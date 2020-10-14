const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("sum", (num1, num2) => {
  console.log(num1 + num2);
});

// eventEmitter.emit("sum", 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let praneeth = new Person("Praneeth");
praneeth.on("name", () => {
  console.log(`My name is ${praneeth.name}`);
});
praneeth.emit("name");

let christina = new Person("Christina");
christina.on("name", () => {
  console.log(`My name is ${christina.name}`);
});
christina.emit("name");

// module.exports = { eventEmitter };

function sayHi() {
  console.log("Hi!!");
}

sayHi();

var sayBye = () => {
  console.log("Bye!!");
};

sayBye();

var sayNothing = () => {
  console.log("Nothing!!");
};

function callFunction(fun) {
  fun();
}

callFunction(sayNothing);

//Here we will write codes//

function sayHello() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
    // use let only when we need to reasign the variable
  }
  let x = 1;
  x = 10;
  console.log(x);
}
sayHello();

//OBJECTS//
const person = {
  name: "karthik",
  //this is method//
  walk: function () {
    return "20";
  },
  // from es6 we can use like this
  talk() {},
};
person.name = "john";
console.log(person.name);

//THIS KEYWORD//
const human = {
  name: "karthik",
  draw() {
    console.log(this);
  },
};
human.draw();

//ARROW FUNTIONS//
//normal function
const number = function (number) {
  return number * number;
};
console.log(number(10));
//arrow function
const randomNumber = (n) => n * n;
console.log(randomNumber(2));

//Array.map//
const colors = ["red", "yellow", "blue", "pink"];

const items = colors.map((value) => {
  return `<li>${value}</li>`;
});

console.log(items);

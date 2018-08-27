//ES6 Syntanxes

//Spread Operator
let arr1 = [2,3,4,5];

let arr3 = [7,8,9];

let arr2 = [1,...arr1,6,...arr3];
console.log(arr2);

function collect(...a) {
  console.log(a);
}
console.log("hello", 1, 2, 3);
//Array Destructuring
let arr = [1,2,3,4,5,6];
let [one, two] = arr;
console.log(one, two);
//Object Destructuring
let a = {name:"Golu", level: "bakchod"};
let name = "Hello";
({name} = a);
console.log(name);

//Arrow Functions
//using maps
let values = [20,30,40];
let doubled = values.map((n) => n*2);
console.log(doubled);
//using filter
let points = [3,4,5,6,12,15,17,29,21,2];
var highScores = points.filter((n) => n>=15);
console.log(highScores);

//Modules
import {fellowship} from './fellowship';
console.log(fellowship);
import { add, multiply } from './math';
console.log(add(5,10));
console.log(multiply(5,10));

//Classes
import Animal from './animal';
var king = new Animal("Mufasa", 4.5);
console.log(king);
king.hello();
class Lion extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color;
  }
  hello() {
    console.log(`Hi, I am ${this.name} from sub class.`);
  }
}
var son = new Lion("Simba", 2, "yellow");
console.log(son);
son.hello();

//static methods in Classes
class Calculator {
  static multiply(a, b) {
    return a * b;
  }
  static add(a, b) {
    return a + b;
  }
}
let a1 = Calculator.multiply(5, 7);
let b1 = Calculator.add(5, 7);
console.log(a1, b1);

//Prototypes
function Wizard(name, age) {
  this.name = name;
  this.age = age;

  this.greet = () => `I am ${this.name}`;
}
Wizard.prototype.petName;
Wizard.prototype.info = function() {
  console.log("using Wizard's prototype");
}
let harry = new Wizard("Harry", 25);
console.log(harry.greet());
console.log(harry);
console.log(harry.info());

//Data Structure
//Set
let a2 = new Set();
a2.add(1);
a2.add(12);
a2.add(13);
a2.add(100);
a2.add(32);
console.log(a2);
console.log(a2.size);
let a3 = [23,12,34,54,76,87,8];
a2 = new Set(a3);
console.log(a2);
console.log(a2.size);
for(let element of a2.values()) {
  console.log(element);
}
//Map
let a4 = new Map();
let key_1 = "string key";
let key_2 = { a:1 };
let key_3 = function() {};

a4.set(key_1,'return value for a string key');
a4.set(key_2,'return value for an object key');
a4.set(key_3,'return value for a function key');
console.log(a4);

let numArr = [[1,'one'],[2,'Two'],[3,'Three']];
let numMap = new Map(numArr);
console.log(numMap);
for(let [key,value] of numMap.entries()) {
  console.log(`${key} points to ${value}`);
}

let string = "asljddclsadgcaisuyscvjanbjahdsbljahdsbjhjbds";
let letters =  new Map();
for(let i = 0; i< string.length;i++) {
  let letter = string[i];
  if(!letters.has(letter)) {
    letters.set(letter, 1);
  }else {
    letters.set(letter,letters.get(letter) + 1);
  }
}
console.log(letters);

//Closures
let product = (x) => {
  const multiply = (y) => {
    return x * y;
  }
  return multiply;
}

let multiply5 = product(5);
console.log(multiply5(3));
// we are returning closure from product Function

const budget = () => {
  let balance = 0;
  let changeBalance = (val) =>  balance +=val;

  const deposit20 = () => changeBalance(20);
  const withdraw20 = () => changeBalance(-20);
  const check = () => balance;

  return {
    deposit20,
    withdraw20,
    check
  }
}

let wallet = budget();
wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
wallet.deposit20();
console.log(wallet.check());

//Generators

// function* letterMaker() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }
// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

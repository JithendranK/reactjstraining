/** let func = (arg1, arg2, ..., argN) => expression
 * let func = function(arg1, arg2, ..., argN) {
  return expression;
};
 * 
 * */


let sum = (a, b) => a + b;
console.log("Sum :", sum(1,2));
let sayHi = () => console.log("Hello!");
sayHi();

let age = 18;

let welcome = (age < 18) ?
  () => console.log('Hello') :
  () => console.log("Greetings!");

welcome();

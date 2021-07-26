/**
 * Variable hoisting allows the use of a variable in a JavaScript program, 
 * even before it is declared. Such variables will be initialized to undefined by default. 
 * JavaScript runtime will scan for variable declarations and put them to the top of the function or script. 
 * Variables declared with var keyword get hoisted to the top * 
 **/

console.log(company);
var company = "Testing Hoisting"; // declare and initialized here
   console.log(company);

   var balance = 5000
   console.log(typeof balance)
   var balance = {message:"hello"}
   console.log(typeof balance)

   //hoisted to top ; var i = undefined
   for (var i = 1;i <= 5;i++){
      console.log(i);
   }
   console.log("after the loop i value is "+i);
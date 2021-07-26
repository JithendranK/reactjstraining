/**
 * Functions that are not bound to an identifier (function name) are called as anonymous functions. 
 * These functions are dynamically declared at runtime. Anonymous functions can accept inputs and return outputs, 
 * just as standard functions do. An anonymous function is usually not accessible after its initial creation.
*/

var f = function(){ return "hello"} 
console.log(f()) 

var func = function(x,y){ return x*y }; 

function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
product()

function factorial(num) { 
    if(num <= 0) { 
       return 1; 
    } else { 
       return (num * factorial(num-1)  ) 
    } 
 } 
 console.log(factorial(6)) 



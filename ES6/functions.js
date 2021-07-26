//define a  function 
function test() { 
  console.log("function called") 
} 
//call the function 
test()

function function_name() { 
  //statements 
  return value; 
}

function retStr() { 
  return "hello world!!!" 
}  
var val = retStr() 
console.log(val) 

// parameterized functions
function add( n1,n2) { 
  var sum = n1 + n2 
  console.log("The sum of the values entered "+sum) 
} 
add(12,13) 

// default functions

function add(a, b = 1) { 
  return a+b; 
} 
console.log(add(4))


//Rest parameters
function fun1(...params) { 
  console.log(params.length); 
}  
fun1();  
fun1(5); 
fun1(5, 6, 7); 
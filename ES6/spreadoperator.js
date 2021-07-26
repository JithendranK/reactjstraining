//copy array using spread operator
let source_arr = [10,20,30]
let dest_arr = [...source_arr]
console.log(dest_arr)
 
//concatenate two arrays
let arr1 = [10,20,30]
let arr2 =[40,50,60]
let arr3 = [...arr1,...arr2]
console.log(arr3)

//copy object
let student1 ={firstName:'Jim',company:'Company1'}
let student2 ={...student1}
console.log(student2)
//concatenate objects
let student3 = {lastName:'Pricket'}
let student4 = {...student1,...student3}
console.log(student4)
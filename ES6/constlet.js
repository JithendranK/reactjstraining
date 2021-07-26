function f() {
    var x = 1
    let y = 2
    const z = 3
    {
      var x = 100
      let y = 200
      const z = 300
      console.log('x in block scope is', x)
      console.log('y in block scope is', y)
      console.log('z in block scope is', z)
    }
    console.log('x outside of block scope is', x)
    console.log('y outside of block scope is', y)
    console.log('z outside of block scope is', z)
  }
  
  f()
//   const DEPT_NOS = [10,20,30,50]
//    DEPT_NOS.push(40)
//    console.log('dept numbers is ',DEPT_NOS)

//    const EMP_IDS = [1001,1002,1003]
//    console.log('employee ids',EMP_IDS)
//    //re assigning variable employee ids
//    EMP_IDS = [2001,2002,2003]
//    console.log('employee ids after changing',EMP_IDS)

   let balance = 5000 // number type
   console.log(typeof balance)
   let balance = {message:"hello"} // changing number to object type
   console.log(typeof balance)
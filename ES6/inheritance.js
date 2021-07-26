
class Shape { 
   constructor(a) { 
       console.log(this);
      this.Area = a
      this.Area2 = a;
   } 

   disp()
   {
    console.log(this);
    console.log("Area of the circle:  "+this.Area);
   }
   disp2()
   {
       console.log(this);
       console.log('inside dis2');
   }
} 
class Circle extends Shape { 
} 
let obj = new Circle(556);;
console.log(this);
obj.disp(); 
obj.disp2();


class PrinterClass { 
    doPrint() {
       console.log("doPrint() from Parent called…") 
    } 
 }  
 class StringPrinter extends PrinterClass { 
    doPrint() { 
       super.doPrint() 
       console.log("doPrint() is printing a string…") 
    } 
 } 
 var obj2 = new StringPrinter() 
 obj2.doPrint()


